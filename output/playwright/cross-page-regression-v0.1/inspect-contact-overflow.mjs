async page => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:4322/contact/", { waitUntil: "networkidle" });
  return await page.evaluate(() => {
    const offenders = Array.from(document.querySelectorAll("*"))
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName,
          className: typeof element.className === "string" ? element.className : "",
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          scrollWidth: element.scrollWidth,
        };
      })
      .filter((item) => item.right > innerWidth || item.left < 0)
      .sort((a, b) => b.right - a.right);
    return {
      viewport: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      offenders: offenders.slice(0, 20),
    };
  });
}
