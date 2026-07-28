const contentRoot = "../site-content/";
const jsonFiles = import.meta.glob("../site-content/settings/*.json", {
  eager: true,
  import: "default",
}) as Record<string, unknown>;
const markdownFiles = import.meta.glob("../site-content/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

type OrderedEntry = {
  order?: number;
};

type MarkdownEntry<T> = T & {
  body: string;
};

export function readJson<T>(relativePath: string): T {
  const filePath = `${contentRoot}${relativePath}`;
  const data = jsonFiles[filePath];

  if (!data) {
    throw new Error(`Missing JSON content file: ${filePath}`);
  }

  return data as T;
}

export function readMarkdownCollection<T extends OrderedEntry>(
  folder: string,
): MarkdownEntry<T>[] {
  const folderPath = `${contentRoot}${folder}/`;

  return Object.entries(markdownFiles)
    .filter(([filePath]: [string, string]) => filePath.startsWith(folderPath))
    .map(([, source]: [string, string]) => readMarkdownFile<T>(source))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

function readMarkdownFile<T>(source: string): MarkdownEntry<T> {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Missing JSON frontmatter in Markdown content file");
  }

  return {
    ...(JSON.parse(match[1]) as T),
    body: match[2].trim(),
  };
}
