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
    ...(parseFrontmatter(match[1]) as T),
    body: match[2].trim(),
  };
}

function parseFrontmatter(source: string): Record<string, unknown> {
  const value = source.trim();

  try {
    return JSON.parse(value) as Record<string, unknown>;
  } catch {
    const lines = value
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'));

    return Object.fromEntries(
      lines.map((line) => {
        const separator = line.indexOf(':');

        if (separator <= 0) {
          throw new Error('Invalid frontmatter line in Markdown content file');
        }

        const key = line.slice(0, separator).trim();
        const rawValue = line.slice(separator + 1).trim();

        return [key, parseFrontmatterValue(rawValue)];
      }),
    );
  }
}

function parseFrontmatterValue(value: string): unknown {
  const firstCode = value.charCodeAt(0);
  const lastCode = value.charCodeAt(value.length - 1);

  if (
    (firstCode === 34 && lastCode === 34) ||
    (firstCode === 39 && lastCode === 39)
  ) {
    return value.slice(1, -1);
  }

  if (/^-?\d+(?:\.\d+)?$/.test(value)) {
    return Number(value);
  }

  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null') return null;

  return value;
}
