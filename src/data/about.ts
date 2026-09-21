import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import { readMarkdownCollection } from "@/data/content";

type AboutEntry = {
  id: string;
  order?: number;
};

const markdownProcessor = await createMarkdownProcessor();
const rawEntries = readMarkdownCollection<AboutEntry>("about");

const renderedEntries = await Promise.all(
  rawEntries.map(async (entry) => {
    const rendered = await markdownProcessor.render(entry.body);

    return {
      ...entry,
      html: rendered.code,
    };
  }),
);

export const aboutEntry = renderedEntries[0] ?? null;
