import { Suspense } from "react";
import ContentArea from "@/components/ContentArea";
import SearchBar from "@/components/SearchBar";
import Logo from "@/components/Logo";
import { getContentTree, getFileContent, getFirstSlug } from "@/lib/content";

export const dynamic = "force-dynamic";

export default function Home() {
  const tree = getContentTree();
  const firstSlug = getFirstSlug();
  const content = getFileContent(firstSlug);

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
          {content ? (
            <ContentArea content={content} pageSlug={firstSlug} />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              <p>Select a topic from the sidebar to begin.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
