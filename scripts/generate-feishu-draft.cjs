const fs = require("fs");
const path = require("path");

const contentRoot = path.join("src", "site-content");
const outputPath = path.join("docs", "feishu-portfolio-draft.md");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(contentRoot, relativePath), "utf8"));
}

function readMarkdown(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Invalid content file: ${filePath}`);
  }

  return {
    ...JSON.parse(match[1]),
    body: match[2].trim(),
    file: filePath.replace(/\\/g, "/"),
  };
}

function readCollection(folder) {
  return fs
    .readdirSync(path.join(contentRoot, folder))
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readMarkdown(path.join(contentRoot, folder, fileName)))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

function addHeading(lines, level, text) {
  lines.push(`${"#".repeat(level)} ${text}`, "");
}

function addListItem(lines, label, value) {
  if (value) {
    lines.push(`- ${label}：${value}`);
  }
}

function tableValue(value) {
  return String(value || "")
    .replace(/\|/g, "｜")
    .replace(/\r?\n/g, "<br>");
}

const profile = readJson("settings/profile.json");
const stats = readJson("settings/stats.json");
const links = readJson("settings/links.json");
const proofs = readJson("settings/proofs.json");
const works = readCollection("works");
const projects = readCollection("projects");

const videoPlatforms = new Set(["抖音", "小红书", "视频号"]);
const videoWorks = works.filter((work) => videoPlatforms.has(work.platform));
const otherWorks = works.filter((work) => !videoPlatforms.has(work.platform));

const lines = [];

addHeading(lines, 1, `${profile.name}｜个人作品集简洁版`);
lines.push(`> ${profile.headline}`, "");
lines.push(profile.intro, "");

addHeading(lines, 2, "我正在寻找");
lines.push(profile.seeking, "");

addHeading(lines, 2, "核心数据");
stats.forEach((stat) => {
  lines.push(`- **${stat.value} ${stat.label}**：${stat.note}`);
});
lines.push("");

addHeading(lines, 2, "代表视频 / 内容作品");
lines.push("| 作品 | 平台 | 日期 | 数据 | 链接 | 封面文件 |");
lines.push("|---|---|---:|---|---|---|");
videoWorks.forEach((work) => {
  lines.push(
    [
      tableValue(work.title),
      tableValue(work.platform),
      tableValue(work.date),
      tableValue((work.metrics || []).join("；")),
      tableValue(work.url),
      tableValue(work.cover),
    ].join(" | ").replace(/^/, "| ").replace(/$/, " |"),
  );
});
lines.push("");

addHeading(lines, 2, "重点作品复盘");
videoWorks.slice(0, 8).forEach((work) => {
  addHeading(lines, 3, work.title);
  addListItem(lines, "平台", work.platform);
  addListItem(lines, "日期", work.date);
  addListItem(lines, "数据", (work.metrics || []).join("；"));
  addListItem(lines, "链接", work.url);
  addListItem(lines, "封面", work.cover);
  addListItem(lines, "一句话简介", work.summary);
  addListItem(lines, "复盘", work.body);
  lines.push("");
});

addHeading(lines, 2, "项目经历");
projects.forEach((project) => {
  addHeading(lines, 3, project.title);
  addListItem(lines, "定位", project.eyebrow);
  addListItem(lines, "概述", project.summary);
  addListItem(lines, "我的职责", project.role);
  addListItem(lines, "关键成果", (project.results || []).join("；"));
  addListItem(lines, "具体负责", (project.responsibilities || []).join("；"));
  addListItem(lines, "复盘", project.body);
  addListItem(lines, "下一步", project.next);
  lines.push("");
});

if (otherWorks.length > 0) {
  addHeading(lines, 2, "其他作品 / 材料");
  otherWorks.forEach((work) => {
    lines.push(`- **${work.title}**`);
    addListItem(lines, "类型", work.category);
    addListItem(lines, "平台", work.platform);
    addListItem(lines, "数据", (work.metrics || []).join("；"));
    addListItem(lines, "链接/文件", work.url);
    addListItem(lines, "封面", work.cover);
    lines.push("");
  });
}

addHeading(lines, 2, "证明材料");
proofs.forEach((proof) => {
  lines.push(`- **${proof.title}**：${proof.note}`);
  lines.push(`  - 文件：${proof.image}`);
});
lines.push("");

addHeading(lines, 2, "联系方式与主页");
links
  .filter((link) => link.status === "ready")
  .forEach((link) => {
    lines.push(`- **${link.label}**：${link.note || ""}`);
    lines.push(`  - 链接/文件：${link.href}`);
    if (link.image) {
      lines.push(`  - 图片：${link.image}`);
    }
  });
lines.push("");

addHeading(lines, 2, "飞书整理建议");
lines.push("- 正文里保留 5-8 个最能代表能力的作品，其他作品放附录。");
lines.push("- 视频作品建议统一展示：封面图 + 标题 + 数据 + 链接 + 一句话复盘。");
lines.push("- 后台截图、二维码、PDF 简历建议作为图片或附件上传到飞书，不只放本地路径。");
lines.push("- 如果给招聘/合作方看，开头先放“我是谁 + 我能做什么 + 代表数据”。");
lines.push("");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, lines.join("\n"), "utf8");

console.log(outputPath);
