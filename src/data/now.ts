import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import { readMarkdownCollection } from "@/data/content";

type NowEntry = {
  date: string;
  order?: number;
};

type RehypeNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: RehypeNode[];
  value?: string;
};

const enhanceNowLinks = () => (tree: RehypeNode) => {
  const visit = (node: RehypeNode) => {
    if (node.type === "element" && node.tagName === "a") {
      node.properties = {
        ...(node.properties ?? {}),
        target: "_blank",
        rel: "noopener noreferrer",
      };

      const children = node.children ?? [];
      const hasArrow = children.some((child) => {
        const className = child.properties?.className;
        return (
          child.type === "element" &&
          child.tagName === "span" &&
          (className === "now-link-arrow" ||
            (Array.isArray(className) && className.includes("now-link-arrow")))
        );
      });

      if (!hasArrow) {
        node.children = [
          ...children,
          { type: "text", value: " " },
          {
            type: "element",
            tagName: "span",
            properties: { className: ["now-link-arrow"], "aria-hidden": "true" },
            children: [{ type: "text", value: "↗" }],
          },
        ];
      }
    }

    node.children?.forEach(visit);
  };

  visit(tree);
};

const markdownProcessor = await createMarkdownProcessor({
  rehypePlugins: [enhanceNowLinks],
});
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
