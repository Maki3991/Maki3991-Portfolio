async page => {
  return await page.evaluate(() => {
    const cards = [...document.querySelectorAll(".variant-card")];
    const sections = [...document.querySelectorAll(".component-section")];
    return {
      allCardsFit: cards.every(card => card.scrollWidth <= card.clientWidth),
      minCardHeight: Math.min(...cards.map(card => Math.round(card.getBoundingClientRect().height))),
      maxCardHeight: Math.max(...cards.map(card => Math.round(card.getBoundingClientRect().height))),
      hiddenSections: sections.filter(section => section.classList.contains("is-hidden")).length,
      overflowCards: cards.filter(card => card.scrollWidth > card.clientWidth).length
    };
  });
}
