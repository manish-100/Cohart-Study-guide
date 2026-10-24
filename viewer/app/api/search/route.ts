import { NextRequest, NextResponse } from "next/server";
import { getContentTree, getFileContent } from "@/lib/content";

interface SearchResult {
  slug: string;
  title: string;
  section: string;
  matches: { text: string; offset: number }[];
}

interface IndexEntry { slug: string; title: string; section: string; plainText: string }

let cachedIndex: IndexEntry[] | null = null;

function buildIndex() {
  if (cachedIndex) return cachedIndex;
  const tree = getContentTree();
  const index: IndexEntry[] = [];

  for (const ep of tree.episodes) {
    if (ep.readme) {
      const content = getFileContent(ep.readme.slug);
      if (content) {
        index.push({
          slug: ep.readme.slug,
          title: ep.readme.title,
          section: ep.title,
          plainText: content.replace(/[#*`\[\]()>|\-_~]/g, " ").replace(/\s+/g, " ").toLowerCase(),
        });
      }
    }
    for (const sec of ep.sections) {
      for (const file of sec.files) {
        const content = getFileContent(file.slug);
        if (content) {
          index.push({
            slug: file.slug,
            title: file.title,
            section: `${ep.title} / ${sec.title}`,
            plainText: content.replace(/[#*`\[\]()>|\-_~]/g, " ").replace(/\s+/g, " ").toLowerCase(),
          });
        }
      }
    }
  }

  cachedIndex = index;
  return index;
}

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim().toLowerCase();
  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }

  const index = buildIndex();
  const results: SearchResult[] = [];

  for (const entry of index) {
    const matches: { text: string; offset: number }[] = [];
    let pos = 0;
    while (pos < entry.plainText.length && matches.length < 3) {
      const idx = entry.plainText.indexOf(q, pos);
      if (idx === -1) break;
      const start = Math.max(0, idx - 40);
      const end = Math.min(entry.plainText.length, idx + q.length + 40);
      matches.push({
        text: (start > 0 ? "..." : "") + entry.plainText.slice(start, end).trim() + (end < entry.plainText.length ? "..." : ""),
        offset: idx,
      });
      pos = idx + q.length;
    }
    if (matches.length > 0) {
      results.push({ slug: entry.slug, title: entry.title, section: entry.section, matches });
    }
    if (results.length >= 10) break;
  }

  return NextResponse.json(results);
}
