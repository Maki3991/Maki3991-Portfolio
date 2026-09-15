const directions = {
  1: {
    name: "IDENTITY INDEX",
    label: "身份先被看见，内容再展开",
    thesis: "保留个人身份的第一眼记忆，同时让下面的内容可以像档案一样持续增长。",
    documentTitle: "01 Identity Index / Maki Portfolio",
  },
  2: {
    name: "WORKING ARCHIVE",
    label: "一个会持续长大的工作档案",
    thesis: "把 Cold Index 的工作索引放在首位：身份被事实托住，新增内容只需要继续追加条目。",
    documentTitle: "02 Working Archive / Maki Portfolio",
  },
  3: {
    name: "EVIDENCE JOURNAL",
    label: "从一件作品进入整个工作方法",
    thesis: "让作品、数据和复盘笔记成为入口；首页不是展示完结，而是打开一条可以继续写下去的证据链。",
    documentTitle: "03 Evidence Journal / Maki Portfolio",
  },
};

const params = new URLSearchParams(window.location.search);
const selected = Math.min(3, Math.max(1, Number(params.get("d")) || 1));
const current = directions[selected];

document.body.dataset.direction = String(selected);
document.title = current.documentTitle;

document.querySelectorAll("[data-direction-code]").forEach((node) => {
  node.textContent = String(selected).padStart(2, "0");
});

document.querySelectorAll("[data-direction-name]").forEach((node) => {
  node.textContent = current.name;
});

const thesis = document.querySelector("[data-direction-thesis]");
if (thesis) thesis.textContent = current.thesis;

document.querySelectorAll("[data-switcher]").forEach((link) => {
  link.toggleAttribute("aria-current", Number(link.dataset.switcher) === selected);
});

document.querySelectorAll(".feature-panel").forEach((panel) => {
  panel.hidden = !panel.classList.contains(`feature-panel--${selected}`);
});

const menu = document.querySelector(".mobile-menu");
if (menu) {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.removeAttribute("open"));
  });
}
