const directions = {
  1: {
    title: "01 — Editorial Rail",
    thesis: "冷静的编辑型个人档案：大标题、清晰内容轨道、细线和蓝色局部强调。",
    references: "Swyx / SDBurt / Rome",
  },
  2: {
    title: "02 — Quiet Index",
    thesis: "几乎没有装饰面的开放索引：留白、细边界和连续内容流承担主要识别度。",
    references: "Maggie Appleton / Specia1ne / Andrew Aarestad",
  },
  3: {
    title: "03 — Night Signal",
    thesis: "深色的状态面板：用冷色光点、证据数字和边界强调正在推进的事情。",
    references: "Ronald Lopez / SDBurt / Jakub Jakubik",
  },
  4: {
    title: "04 — Open Catalogue",
    thesis: "文字优先的开放目录：编号、横线和大段排印让内容像一份持续更新的档案。",
    references: "JVT Hire / Swyx / Rome",
  },
  5: {
    title: "05 — Media Window",
    thesis: "以一块真实作品图像作为入口的媒体窗口：表现力更强，但内容仍保持普通页面结构。",
    references: "Jakub Jakubik / Ozan / Ronald Lopez",
  },
};

const query = new URLSearchParams(window.location.search);
const requested = Number(query.get("d") || 1);
const direction = directions[requested] || directions[1];
const directionNumber = directions[requested] ? requested : 1;

document.body.className = "direction-" + directionNumber;
document.title = direction.title + " · Maki Home / Hero Lab";

const name = document.querySelector("#direction-name");
if (name) name.textContent = direction.title;

document.querySelectorAll("[data-direction]").forEach((link) => {
  const isCurrent = Number(link.dataset.direction) === directionNumber;
  if (isCurrent) link.setAttribute("aria-current", "page");
  else link.removeAttribute("aria-current");
});

const note = document.querySelector(".lab-direction");
if (note) {
  note.title = direction.thesis + " 参考：" + direction.references;
}
