async page => {
  const base = "http://127.0.0.1:4322";
  const checks = {};

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/", { waitUntil: "networkidle" });

  const nav = page.locator("#site-nav");
  const toggle = page.locator(".nav-toggle");
  checks.mobileNavBefore = await nav.getAttribute("data-open");
  await toggle.click();
  checks.mobileNavAfterOpen = await nav.getAttribute("data-open");
  checks.mobileNavExpandedAfterOpen = await toggle.getAttribute("aria-expanded");
  const navLinks = nav.locator("a");
  await navLinks.first().click();
  checks.mobileNavAfterLink = await nav.getAttribute("data-open");

  await page.goto(base + "/contact/", { waitUntil: "networkidle" });
  const qrTrigger = page.locator(".qr-zoom-trigger").first();
  checks.qrTriggerCount = await page.locator(".qr-zoom-trigger").count();
  if (checks.qrTriggerCount > 0) {
    await qrTrigger.click();
    checks.qrDialogOpen = await page.locator(".qr-dialog").evaluate((element) => element.open);
    checks.qrDialogImageSource = await page.locator(".qr-dialog img").getAttribute("src");
    await page.locator(".qr-dialog-close").click();
    checks.qrDialogClosed = !(await page.locator(".qr-dialog").evaluate((element) => element.open));
  }

  await page.setViewportSize({ width: 1440, height: 900 });
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
  checks.activeNavigation = [];
  checks.routeStatuses = [];

  for (const route of routes) {
    const response = await page.goto(base + route, { waitUntil: "networkidle" });
    checks.routeStatuses.push({ route, status: response?.status() ?? null });
    checks.activeNavigation.push({
      route,
      activeCount: await page.locator(".site-header .nav a.active").count(),
      activeLabels: await page.locator(".site-header .nav a.active").allTextContents(),
    });
  }

  await page.goto(base + "/archive/", { waitUntil: "networkidle" });
  checks.archiveDetailLinks = await page.locator(".archive-row-title a").evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")),
  );
  checks.archiveNextHref = await page.locator(".archive-footnote-link").getAttribute("href");

  await page.goto(base + "/archive/maki-english/", { waitUntil: "networkidle" });
  checks.detailBackHref = await page.locator(".archive-detail-back").getAttribute("href");
  checks.detailEndBackHref = await page.locator(".archive-detail-end-link").getAttribute("href");

  return checks;
}
