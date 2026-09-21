async page => {
  const result = {};
  const themeButton = page.locator(".js-theme-toggle");
  await themeButton.click();
  result.theme = await page.locator("html").getAttribute("data-theme");

  const search = page.locator("#lab-search");
  await search.fill("X-10");
  result.searchVisible = await page.locator(".component-section:not(.is-hidden)").count();
  result.searchVariants = await page.locator(".component-section:not(.is-hidden) .variant-card").count();

  await search.fill("");
  await page.locator(".filter-button[data-filter=\"future\"]").click();
  result.futureVisible = await page.locator(".component-section:not(.is-hidden)").count();
  await page.locator(".filter-button[data-filter=\"all\"]").click();

  const selectable = page.locator("[data-action=\"select\"]").first();
  await selectable.click();
  result.selectedAfterClick = await selectable.evaluate(node => node.classList.contains("is-selected"));

  const copy = page.locator(".js-copy-section").first();
  await copy.click();
  result.copyText = await copy.textContent();
  return result;
}
