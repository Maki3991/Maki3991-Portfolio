async page => {
  await page.setViewportSize({ width: 390, height: 844 });

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
      path: "cross-page-regression-v0.1/" + item.key + "-mobile.png",
      fullPage: true,
    });

    const data = await page.evaluate(() => {
      const root = document.documentElement;
      const body = document.body;
      const main = document.querySelector("main");
      const text = body.innerText;

      return {
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.trim() ?? null,
        sections: document.querySelectorAll("main section").length,
        linkCount: document.querySelectorAll("a").length,
        navVisible: getComputedStyle(document.querySelector(".nav")).display !== "none",
        hasHeader: Boolean(document.querySelector(".site-header")),
        hasFooter: Boolean(document.querySelector(".site-footer")),
        background: getComputedStyle(body).backgroundColor,
        mainHeight: main ? Math.round(main.getBoundingClientRect().height) : null,
        scrollHeight: root.scrollHeight,
        viewportWidth: innerWidth,
        overflowX: Math.max(root.scrollWidth, body.scrollWidth) - innerWidth,
        markers: {
          hasPlaceholder: /占位|正在整理|逐步补充|尚未|待公开|暂无|placeholder/i.test(text),
          hasEmptyEvidence: /公开证据正在整理/.test(text),
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
