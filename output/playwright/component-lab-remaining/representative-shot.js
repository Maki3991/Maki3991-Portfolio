async page => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator("#D-05").scrollIntoViewIfNeeded();
  return await page.evaluate(() => ({
    top: Math.round(document.querySelector("#D-05").getBoundingClientRect().top),
    scrollWidth: document.body.scrollWidth,
    viewport: innerWidth
  }));
}
