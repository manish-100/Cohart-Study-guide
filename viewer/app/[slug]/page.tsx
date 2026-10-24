import { Suspense } from "react";
import { notFound } from "next/navigation";
import ContentArea from "@/components/ContentArea";
import SearchBar from "@/components/SearchBar";
import Logo from "@/components/Logo";
import { getContentTree, getFileContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tree = getContentTree();
  const content = getFileContent(slug);

  if (!content) {
    notFound();
  }

  let breadcrumb = "";
  for (const ep of tree.episodes) {
    if (ep.readme?.slug === slug) {
      breadcrumb = ep.title;
      break;
    }
    for (const sec of ep.sections) {
      const found = sec.files.find((f) => f.slug === slug);
      if (found) {
        breadcrumb = `${ep.title}  /  ${sec.title}`;
        break;
      }
    }
    if (breadcrumb) break;
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="flex items-center gap-4 border-b border-gray-200 bg-white px-6 py-3">
        <div className="hidden items-center gap-2 lg:flex">
          <Logo size={20} />
          <h2 className="text-sm font-bold text-gray-800">Cohart</h2>
        </div>
        <Suspense><SearchBar /></Suspense>
      </header>
      <main className="flex-1 overflow-y-auto px-6 py-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {breadcrumb && (
            <div className="mb-8 border-b border-gray-200 pb-4">
              <p className="text-xs uppercase tracking-widest text-blue-600/70">
                {breadcrumb}
              </p>
            </div>
          )}
          <ContentArea content={content} pageSlug={slug} />
        </div>
      </main>
    </div>
  );
}
