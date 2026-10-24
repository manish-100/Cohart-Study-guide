import fs from "fs";
import path from "path";
import type { ContentFile, Section, Episode, ContentTree } from "./types";

function naturalSort(a: string, b: string): number {
  const re = /(\d+)|(\D+)/g;
  const aParts = a.match(re) ?? [];
  const bParts = b.match(re) ?? [];
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const ap = aParts[i] ?? "";
    const bp = bParts[i] ?? "";
    const an = Number(ap);
    const bn = Number(bp);
    if (!isNaN(an) && !isNaN(bn)) {
      if (an !== bn) return an - bn;
    } else {
      const cmp = ap.localeCompare(bp);
      if (cmp !== 0) return cmp;
    }
  }
  return 0;
}

function getContentRoot(): string {
  const inProject = path.join(process.cwd(), "content");
  if (fs.existsSync(inProject)) return inProject;

  const parentDir = path.join(process.cwd(), "..");
  const hasEpisodes = fs.readdirSync(parentDir).some((d) => d.startsWith("Episode-"));
  if (hasEpisodes) return parentDir;

  return inProject;
}

function parseTitle(fileName: string): string {
  if (fileName === "README.md") return "Overview";
  const base = fileName.replace(/\.md$/, "");
  if (base.match(/^\d+\.\d+-Interview-Questions$/)) return "Interview Questions";
  if (base.match(/^\d+\.\d+-Quick-Revision$/)) return "Quick Revision";
  if (base.match(/^\d+\.\d+-Exercise-Questions$/)) return "Exercise Questions";
  const match = base.match(/^(\d+\.\d+(?:\.[a-z])?)-(.+)$/);
  if (match) {
    const [, num, rest] = match;
    return `${num} — ${rest.replace(/-/g, " ")}`;
  }
  return base.replace(/-/g, " ");
}

function parseEpisodeTitle(dirName: string): string {
  const match = dirName.match(/^Episode-(\d+)-(.+)$/);
  if (match) {
    const [, num, rest] = match;
    return `Episode ${num} — ${rest.replace(/-/g, " ")}`;
  }
  return dirName.replace(/-/g, " ");
}

function parseSectionTitle(dirName: string): string {
  const match = dirName.match(/^(\d+\.\d+)-(.+)$/);
  if (match) {
    const [, num, rest] = match;
    return `${num} — ${rest.replace(/-/g, " ")}`;
  }
  return dirName.replace(/-/g, " ");
}

function getSortKey(fileName: string): string {
  if (fileName === "README.md") return "000";
  if (fileName.includes("Interview-Questions")) return "zzz-1";
  if (fileName.includes("Quick-Revision")) return "zzz-2";
  if (fileName.includes("Exercise-Questions")) return "zzz-3";
  return fileName;
}

function buildSlug(episodeDir: string, sectionDir: string, fileName: string): string {
  if (fileName === "README.md") {
    return sectionDir ? `${episodeDir}--${sectionDir}` : episodeDir;
  }
  const base = fileName.replace(/\.md$/, "");
  return sectionDir ? `${episodeDir}--${sectionDir}--${base}` : `${episodeDir}--${base}`;
}

export function getContentTree(): ContentTree {
  const ROOT_DIR = getContentRoot();
  const tree: ContentTree = { episodes: [] };

  if (!fs.existsSync(ROOT_DIR)) return tree;

  const rootEntries = fs.readdirSync(ROOT_DIR, { withFileTypes: true });
  const episodeDirs = rootEntries
    .filter((e) => e.isDirectory() && e.name.startsWith("Episode-"))
    .sort((a, b) => naturalSort(a.name, b.name));

  for (const epDir of episodeDirs) {
    const epPath = path.join(ROOT_DIR, epDir.name);
    const episode: Episode = {
      slug: epDir.name,
      title: parseEpisodeTitle(epDir.name),
      dirName: epDir.name,
      sections: [],
      readme: null,
    };

    const epEntries = fs.readdirSync(epPath, { withFileTypes: true });
    const epReadme = epEntries.find((e) => e.isFile() && e.name === "README.md");
    if (epReadme) {
      episode.readme = {
        slug: buildSlug(epDir.name, "", "README.md"),
        title: episode.title,
        fileName: "README.md",
        filePath: path.join(epPath, "README.md"),
        sectionSlug: "",
        episodeSlug: epDir.name,
        sortKey: "000",
        isReadme: true,
        isSpecial: false,
      };
    }

    const sectionDirs = epEntries
      .filter((e) => e.isDirectory() && !e.name.startsWith("."))
      .sort((a, b) => {
        const aIsAdditional = a.name.toLowerCase().includes("additional");
        const bIsAdditional = b.name.toLowerCase().includes("additional");
        if (aIsAdditional && !bIsAdditional) return 1;
        if (!aIsAdditional && bIsAdditional) return -1;
        return naturalSort(a.name, b.name);
      });

    for (const secDir of sectionDirs) {
      const secPath = path.join(epPath, secDir.name);
      const section: Section = {
        slug: secDir.name,
        title: parseSectionTitle(secDir.name),
        dirName: secDir.name,
        files: [],
        readme: null,
        isAdditional: secDir.name.toLowerCase().includes("additional"),
      };

      const files = fs
        .readdirSync(secPath, { withFileTypes: true })
        .filter((f) => f.isFile() && f.name.endsWith(".md"));

      for (const file of files) {
        const contentFile: ContentFile = {
          slug: buildSlug(epDir.name, secDir.name, file.name),
          title: parseTitle(file.name),
          fileName: file.name,
          filePath: path.join(secPath, file.name),
          sectionSlug: secDir.name,
          episodeSlug: epDir.name,
          sortKey: getSortKey(file.name),
          isReadme: file.name === "README.md",
          isSpecial:
            file.name.includes("Interview-Questions") ||
            file.name.includes("Quick-Revision") ||
            file.name.includes("Exercise-Questions"),
        };

        if (file.name === "README.md") section.readme = contentFile;
        section.files.push(contentFile);
      }

      section.files.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
      episode.sections.push(section);
    }

    tree.episodes.push(episode);
  }

  return tree;
}

function getAllFiles(tree: ContentTree): ContentFile[] {
  const files: ContentFile[] = [];
  for (const ep of tree.episodes) {
    if (ep.readme) files.push(ep.readme);
    for (const sec of ep.sections) {
      for (const f of sec.files) files.push(f);
    }
  }
  return files;
}

export function getFileContent(slug: string): string | null {
  const tree = getContentTree();
  const file = getAllFiles(tree).find((f) => f.slug === slug);
  if (!file) return null;
  try {
    return fs.readFileSync(file.filePath, "utf-8");
  } catch {
    return null;
  }
}

export function getFirstSlug(): string {
  const tree = getContentTree();
  if (tree.episodes.length > 0 && tree.episodes[0].readme) {
    return tree.episodes[0].readme.slug;
  }
  const all = getAllFiles(tree);
  return all.length > 0 ? all[0].slug : "index";
}

export function getAllSlugs(): string[] {
  return getAllFiles(getContentTree()).map((f) => f.slug);
}
