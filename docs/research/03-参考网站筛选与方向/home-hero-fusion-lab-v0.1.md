# Home / Hero 融合方向小型实验 v0.1

状态：待 Maki 浏览和选择。此文件记录三个可运行的静态原型，不是最终视觉规范，也没有开始重构 Astro 生产站点。

## 1. 这轮实验要回答什么

上一轮的 10 个方向里，比较接近 Maki 口味的只有两个母方向：

1. **Editorial Rail**：大号姓名、个人照片、清楚的首屏身份表达。
2. **Cold Index**：冷色中性底、细线、编号、状态和可持续追加的内容档案。

这轮不再继续扩大参考网站数量，而是固定同一组真实内容，测试两种母方向怎样组合成长期网站的 Home / Hero 骨架。三个方向的差别是信息优先级，不是换一套颜色或虚构一套内容。

## 2. 已固定的基线

- 目标：长期存在、持续更新，能够同时服务于个人身份、面试官、合作伙伴和普通访客。
- 首版核心关系：Home → Projects / Works → Project detail → Writing / Notes → About / Now → Contact。
- 视觉边界：浅色优先、偏冷或中性背景、一个受控强调色、无衬线字体、细线/编号/列表优先。
- 排除项：暖色衬线体、橙/绿/淡黄的常见组合、没有内容支撑的 Dashboard、复杂动效作为核心导航、大面积渐变和玻璃拟态。
- 内容边界：使用现有真实 profile、英语自媒体项目、四级六级听力作品和真实数据；没有补造评价、客户或指标。
- 扩展原则：将来新增栏目时，优先新增一条内容记录和对应的 index/detail 入口，不重新发明一套 UI。

依据：

- [Site Map v0.1](./site-map-v0.1.md)
- [Design Baseline v0.1](../04-Design-Baseline-v0.1/design-baseline-v0.1-reference-audit.md)
- [上一轮 Home / Hero 方向实验](./home-hero-direction-lab-v0.1.md)
- [Cold Index 原型与说明](../../../output/design-direction-lab-independent/direction-01-cold-index/index.html) · [notes.md](../../../output/design-direction-lab-independent/direction-01-cold-index/notes.md)

## 3. 三个融合方向

### 01 — Identity Index

**一句话：身份先被看见，内容再展开。**

- 首屏保留 Editorial Rail 的大号 `Maki / 羽轩`、个人照片、简介、两个主要行动入口。
- 首屏下方立刻接 Cold Index 的编号列表、项目结果和作品证据。
- 项目、作品、笔记、About / Now 都使用同一套 `label → title → summary → evidence / next` 节奏。
- 最适合：希望第一次访问的人先记住“你是谁”，同时又不想把网站做成一次性的个人海报。
- 优点：个人辨识度最强；面试官或合作伙伴能先建立人物印象，再快速看到真实结果。
- 风险：首屏较大，内容密度低于 02；如果未来只增加很多条目，必须保持首屏身份区的克制。

### 02 — Working Archive

**一句话：先让访客看见你正在做什么。**

- 首屏左侧保留姓名和定位，但右侧不放照片，改成 Role、Study、Location、Seeking、Now 的工作索引。
- 项目和作品列表成为首页视觉重心；数据只作为项目语义的一部分，不单独做成指标面板。
- 新项目、文章、实验或生活记录都可以继续作为编号条目加入；About / Now 负责解释当前状态。
- 最适合：希望网站很多年以后仍然像一个不断增长的工作档案，而不是一次总结页。
- 优点：长期扩展性最强；访客能最快判断你在做什么、做过什么、下一步在哪里继续看。
- 风险：个人照片和情绪记忆被压低，第一眼可能更像一个研究/工作索引，需要靠真实内容和文字语气建立个人感。

### 03 — Evidence Journal

**一句话：从一件作品进入整个工作方法。**

- 首屏右侧用真实作品封面、平台、日期和播放数据建立入口，再把项目复盘作为下方的证据链。
- 项目详情预览突出 Context、Role、Results、Method、Next；Writing / Notes 与作品互相链接。
- 未来可以沿用“作品 → 复盘 → 方法 → 下一件作品”的结构添加内容，不要求每一篇都成为长文章。
- 最适合：希望让面试官或合作伙伴直接看到“我如何做事”，而不只看到身份和结果数字。
- 优点：叙事和证据连接得最好；很适合内容运营、教育产品和 AI 辅助创作这种需要解释过程的经历。
- 风险：首页需要一件足够完整的代表作品才能成立；如果后续作品类型很多，可能需要更明确的 Projects / Works 分类。

## 4. 可运行预览

- [融合实验总览](../../../output/design-direction-fusion-lab/index.html)
- [01 — Identity Index](../../../output/design-direction-fusion-lab/direction.html?d=1#top)
- [02 — Working Archive](../../../output/design-direction-fusion-lab/direction.html?d=2#top)
- [03 — Evidence Journal](../../../output/design-direction-fusion-lab/direction.html?d=3#top)

页面通过本地静态服务器预览，三页使用同一个 `direction.html`，用 URL 的 `?d=1/2/3` 切换结构方向；这只是实验室实现方式，不代表最终路由必须如此。

## 5. 截图证据

每个方向都保存了完整桌面页和完整移动页截图。移动验收视口为 `390 × 844`，桌面验收视口为 `1440 × 1000`。

| 方向 | 桌面 | 移动 |
|---|---|---|
| 01 Identity Index | [desktop](../../../output/playwright/fusion-direction-audit/.playwright-cli/fusion-01-desktop.png) | [mobile](../../../output/playwright/fusion-direction-audit/.playwright-cli/fusion-01-mobile.png) |
| 02 Working Archive | [desktop](../../../output/playwright/fusion-direction-audit/.playwright-cli/fusion-02-desktop.png) | [mobile](../../../output/playwright/fusion-direction-audit/.playwright-cli/fusion-02-mobile.png) |
| 03 Evidence Journal | [desktop](../../../output/playwright/fusion-direction-audit/.playwright-cli/fusion-03-desktop.png) | [mobile](../../../output/playwright/fusion-direction-audit/.playwright-cli/fusion-03-mobile.png) |

## 6. 浏览器验收记录

- 三个 URL 都能加载，页面标题分别为 `01 Identity Index / Maki Portfolio`、`02 Working Archive / Maki Portfolio`、`03 Evidence Journal / Maki Portfolio`。
- 三个方向共用真实头像和作品封面，浏览器中图片均成功加载。
- 桌面端显示对应的三种首屏侧栏：01 照片、02 工作索引、03 代表作品证据；未选中的侧栏不会显示。
- 移动端收起桌面导航，`MENU` 可以展开 Projects、Writing、About、Contact；链接可以继续进入页面锚点。
- 页面包含 `prefers-reduced-motion: reduce` 的静态降级规则；这轮没有为动效做复杂实验，因为动效不是本轮的决策重点。
- 本轮没有修改 `src/`，没有替换生产页面，也没有运行 `npm run build`；这是隔离的视觉/结构原型验收。

## 7. 这轮的决策闸门

现在只需要回答三件事：

1. 三个方向中，哪个最像你愿意长期维护的网站骨架？
2. 你希望首屏更接近“看到我”（01）、“看到我在做什么”（02），还是“看到我怎么做事”（03）？
3. 是否需要把一个方向的首屏和另一个方向的项目/文章列表继续做第二轮融合？

不需要现在决定所有页面、所有栏目和最终颜色。下一步应在选定骨架后，补齐一份最小真实内容清单，再决定哪些页面先做成独立路由。
