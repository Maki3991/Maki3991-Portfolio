async page => {
  await page.setViewportSize({ width: 1440, height: 900 });

  const base = "http://127.0.0.1:4322";
  const routes = [
    { route: "/", key: "home" },
    { route: "/archive/", key: "archive" },
    { route: "/archive/maki-english/", key: "archive-maki-english" },
    { route: "/archive/lpt-delivery/", key: "archive-lpt-delivery" },
    {
      route: "/archive/ai-product-content-internship/",
      key: "archive-ai-product-content-internship",
    },
    { route: "/archive/adventurex-readage/", key: "archive-adventurex-readage" },
    { route: "/now/", key: "now" },
    { route: "/about/", key: "about" },
    { route: "/contact/", key: "contact" },
  ];

  const results = [];

  for (const item of routes) {
    const response = await page.goto(base + item.route, { waitUntil: "networkidle" });
    await page.screenshot({
      path: "cross-page-regression-v0.1/" + item.key + "-desktop.png",
      fullPage: true,
    });

    const data = await page.evaluate(() => {
      const root = document.documentElement;
      const body = document.body;
      const all = Array.from(document.querySelectorAll("*"));
      const maxRight = all.reduce(
        (max, element) => Math.max(max, element.getBoundingClientRect().right),
        0,
      );
      const main = document.querySelector("main");
      const text = body.innerText;

      return {
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.trim() ?? null,
        headings: Array.from(document.querySelectorAll("main h2, main h3"))
          .map((element) => element.textContent?.trim())
          .filter(Boolean),
        sections: Array.from(document.querySelectorAll("main section")).map((element) => ({
          className: element.className,
          top: Math.round(element.getBoundingClientRect().top + scrollY),
          height: Math.round(element.getBoundingClientRect().height),
        })),
        linkCount: document.querySelectorAll("a").length,
        internalLinks: Array.from(document.links)
          .map((link) => link.getAttribute("href"))
          .filter((href) => href?.startsWith("/")),
        hasHeader: Boolean(document.querySelector(".site-header")),
        hasFooter: Boolean(document.querySelector(".site-footer")),
        background: getComputedStyle(body).backgroundColor,
        mainHeight: main ? Math.round(main.getBoundingClientRect().height) : null,
        scrollHeight: root.scrollHeight,
        viewportWidth: innerWidth,
        overflowX: Math.max(root.scrollWidth, body.scrollWidth) - innerWidth,
        maxRightOverflow: Math.max(0, Math.round(maxRight - innerWidth)),
        markers: {
          hasPlaceholder: /占位|正在整理|逐步补充|尚未|待公开|暂无|placeholder/i.test(text),
          hasEmptyEvidence: /公开证据正在整理/.test(text),
          hasPendingLink: /待公开/.test(text),
        },
      };
    });

    results.push({
      ...item,
      status: response?.status() ?? null,
      ...data,
    });
  }

  return results;
}
