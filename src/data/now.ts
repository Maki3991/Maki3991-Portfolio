import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import { readMarkdownCollection } from "@/data/content";

type NowEntry = {
  date: string;
  order?: number;
};

const markdownProcessor = await createMarkdownProcessor();
const rawEntries = readMarkdownCollection<NowEntry>("now");

const sortedEntries = (
  await Promise.all(
    rawEntries.map(async (entry) => {
      const rendered = await markdownProcessor.render(entry.body, {
        frontmatter: { date: entry.date },
      });

      return {
        ...entry,
        html: rendered.code,
      };
    }),
  )
).sort((a, b) => b.date.localeCompare(a.date));

export const nowEntries = sortedEntries.slice(0, 1);
