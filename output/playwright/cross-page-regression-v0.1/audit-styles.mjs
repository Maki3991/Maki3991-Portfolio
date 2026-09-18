async page => {
  const base = "http://127.0.0.1:4322";
  const routes = [
    "/",
    "/archive/",
    "/archive/maki-english/",
    "/archive/lpt-delivery/",
    "/archive/ai-product-content-internship/",
    "/archive/adventurex-readage/",
    "/now/",
    "/about/",
    "/contact/",
  ];
  const results = [];

  for (const route of routes) {
    await page.goto(base + route, { waitUntil: "networkidle" });
    const data = await page.evaluate(() => {
      const get = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return null;
        const style = getComputedStyle(element);
        return {
          color: style.color,
          backgroundColor: style.backgroundColor,
          borderBottomColor: style.borderBottomColor,
          fontFamily: style.fontFamily,
        };
      };
      const rootStyle = getComputedStyle(document.documentElement);
      const bodyStyle = getComputedStyle(document.body);
      const visibleColors = new Set();
      for (const element of document.querySelectorAll("main *")) {
        const rect = element.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          const style = getComputedStyle(element);
          visibleColors.add(style.color);
          visibleColors.add(style.backgroundColor);
          visibleColors.add(style.borderTopColor);
          visibleColors.add(style.borderBottomColor);
        }
      }
      return {
        body: { color: bodyStyle.color, backgroundColor: bodyStyle.backgroundColor },
        rootBackground: rootStyle.backgroundColor,
        header: get(".site-header"),
        footer: get(".site-footer"),
        h1: get("main h1"),
        h2: get("main h2"),
        eyebrow: get(".eyebrow"),
        qrLabel: get(".qr-placeholder span"),
        visibleColors: Array.from(visibleColors).filter(Boolean).sort(),
      };
    });
    results.push({ route, ...data });
  }

  return results;
}
