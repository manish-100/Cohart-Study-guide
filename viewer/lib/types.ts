export interface ContentFile {
  slug: string;
  title: string;
  fileName: string;
  filePath: string;
  sectionSlug: string;
  episodeSlug: string;
  sortKey: string;
  isReadme: boolean;
  isSpecial: boolean;
}

export interface Section {
  slug: string;
  title: string;
  dirName: string;
  files: ContentFile[];
  readme: ContentFile | null;
  isAdditional: boolean;
}

export interface Episode {
  slug: string;
  title: string;
  dirName: string;
  sections: Section[];
  readme: ContentFile | null;
}

export interface ContentTree {
  episodes: Episode[];
}
