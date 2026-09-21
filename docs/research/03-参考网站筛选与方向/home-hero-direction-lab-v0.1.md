# Home / Hero 视觉方向实验室 v0.1

## 1. 实验状态

- 状态：待 Maki 选择或融合
- 日期：2026-09-14
- 输入：[Site Map v0.1](./site-map-v0.1.md) 与 [Design Baseline v0.1](./design-baseline-v0.1-reference-audit.md)
- 实验入口：[Home / Hero Lab](../../../output/design-direction-lab/index.html)
- 隔离目录：[output/design-direction-lab](../../../output/design-direction-lab/)
- 生产源码：未修改

本轮不是最终网站，也不是完整重构。目标是用同一批真实内容制作 5 个明显不同的 Home / Hero 视觉假设，让 Maki 判断哪种表达值得继续打磨。

## 2. 固定测试内容

所有方向使用同一批内容，不通过更换文案来制造差异。

| 内容 | 使用内容 | 真源 |
|---|---|---|
| 身份 | Maki 羽轩；英语内容创作者 / 内容运营实践者 / 国际政治本科生 | [profile.json](../../../src/site-content/settings/profile.json) |
| 介绍 | 关注英语学习、内容表达、自媒体运营、教育产品和 AI 辅助创作；整理内容、项目和学习系统 | [profile.json](../../../src/site-content/settings/profile.json) |
| 项目 | Maki 羽轩英语自媒体；负责选题、脚本、拍摄、剪辑、发布、复盘和私信沟通 | [01-english-media.md](../../../src/site-content/projects/01-english-media.md) |
| 项目证据 | 累计播放 / 观看 829 万+、累计互动 53 万+、单条最高播放 491 万+ | [01-english-media.md](../../../src/site-content/projects/01-english-media.md) |
| 作品复盘 | 四级六级听力吐槽与学习路径内容；2025-07-28；抖音 | [01-v028.md](../../../src/site-content/works/01-v028.md) |
| 作品数据 | 播放 491.2 万、点赞 22.4 万、评论 1.1 万、收藏 1.8 万、分享 4.4 万 | [01-v028.md](../../../src/site-content/works/01-v028.md) |
| 联系 | 现有邮箱和 GitHub 链接 | [links.json](../../../src/site-content/settings/links.json) |

Writing 区块暂时使用已有作品复盘作为真实内容样本，没有虚构一篇尚不存在的文章。

## 3. 五个方向总览

| 编号 | 方向 | 核心假设 | 适合继续验证的重点 | 主要风险 |
|---|---|---|---|---|
| 01 | Editorial Rail | 冷静的编辑型档案，用大标题、内容轨道和蓝色强调建立秩序 | 首页信息层级、项目证据、长期写作 | 可能比较接近常规个人作品集 |
| 02 | Quiet Index | 尽量减少装饰面，让留白、细边界和连续内容流承担识别度 | 多年追加文章/笔记时的耐用性 | 首屏冲击力和个人辨识度可能不够 |
| 03 | Night Signal | 用深色、冷色光点、状态和证据数字表现“正在推进” | Now、数据证据、项目进度 | 可能过度靠近技术展示或暗色 Dashboard |
| 04 | Open Catalogue | 用编号、横线和文字优先的目录感承载持续更新的档案 | 文章、项目列表、经历和长期内容 | 视觉表现力较克制，可能显得不够有记忆点 |
| 05 | Media Window | 以真实作品图像作为入口，提高作品展示的表现力 | 作品封面、项目入口、个人识别度 | 对图片素材维护依赖更高，可能压过文字和过程 |

## 4. 逐方向说明与预览

### 01 — Editorial Rail

视觉假设：浅色冷灰背景、深蓝文字、蓝色局部强调、清晰的内容轨道和轻量卡片。身份信息占据首屏主位，右侧用头像和边线形成稳定的编辑栏；项目区域用封面、摘要和数据证据组合。

可继续验证：

- Home 是否能同时服务个人身份和面试/合作场景；
- 项目数字是否作为证据，而不是装饰；
- 未来 Article detail 是否能沿用同一条阅读轨道。

参考来源：[swyx.io](https://swyx.io/)、[SDBurt](https://sdburt.com/)、[Rome](https://romemichal.pl/)。

预览：[方向 01](../../../output/design-direction-lab/direction.html?d=1#top) · [桌面截图](../../../output/design-direction-lab/.playwright-cli/direction-01-desktop.png) · [移动截图](../../../output/design-direction-lab/.playwright-cli/direction-01-mobile.png)

### 02 — Quiet Index

视觉假设：浅色近中性背景、无明显卡片阴影、内容由细边界和留白连续展开。头像缩小为一个安静的身份标记，项目和文章更多采用开放列表而不是卡片。

可继续验证：

- 长期增加文章、笔记和项目时是否仍然轻；
- 页面是否足够有个人性，而不是变成普通文档索引；
- 细边界和留白在移动端是否仍能维持层级。

参考来源：[Maggie Appleton](https://maggieappleton.com/)、[Specia1ne](https://specia1ne.com/)、[Andrew Aarestad Design Process](https://www.andrewaarestad.com/design-process)。

预览：[方向 02](../../../output/design-direction-lab/direction.html?d=2#top) · [桌面截图](../../../output/design-direction-lab/.playwright-cli/direction-02-desktop.png) · [移动截图](../../../output/design-direction-lab/.playwright-cli/direction-02-mobile.png)

### 03 — Night Signal

视觉假设：深色底、冷色高亮、细边框和大号轮廓文字，把项目结果和“正在做什么”放在视觉中心。它保留普通列表和详情逻辑，不使用 Canvas 或滚动劫持。

可继续验证：

- 深色是否更接近 Maki 想要的个人气质；
- 冷色强调是否能表达状态而不变成科技 Dashboard；
- 真实数据在深色背景上是否仍然易读。

参考来源：[Ronald Lopez](https://www.ronglopez.com/)、[SDBurt](https://sdburt.com/)、[Jakub Jakubik](https://jakubjakubik.com/)。

预览：[方向 03](../../../output/design-direction-lab/direction.html?d=3#top) · [桌面截图](../../../output/design-direction-lab/.playwright-cli/direction-03-desktop.png) · [移动截图](../../../output/design-direction-lab/.playwright-cli/direction-03-mobile.png)

### 04 — Open Catalogue

视觉假设：文字优先、编号优先、横线优先。首页像一份正在更新的目录，不靠大面积背景、渐变或卡片堆叠表达个性。项目和文章更容易扩展成长期档案。

可继续验证：

- 不靠复杂视觉时，真实经历和内容是否足够支撑识别度；
- 文章/笔记数量增加后，目录感是否仍然清楚；
- 这种方向是否比当前版本更少 AI 模板感。

参考来源：[JVT Hire](https://hire.jvt.me/)、[swyx.io](https://swyx.io/)、[Rome](https://romemichal.pl/)。

预览：[方向 04](../../../output/design-direction-lab/direction.html?d=4#top) · [桌面截图](../../../output/design-direction-lab/.playwright-cli/direction-04-desktop.png) · [移动截图](../../../output/design-direction-lab/.playwright-cli/direction-04-mobile.png)

### 05 — Media Window

视觉假设：深色背景与一块较大的真实作品图像组成首屏入口，文字和项目证据仍使用普通 HTML 结构。视觉表现力比前四个方向更强，但不依赖视频、Canvas 或复杂转场。

可继续验证：

- 真实作品图像是否能成为 Maki 的稳定识别元素；
- 图片和文字之间谁是主角；
- 未来项目封面不足时，页面是否仍然成立。

参考来源：[Jakub Jakubik](https://jakubjakubik.com/)、[Ozan / mar](https://ozan.at/mar)、[Ronald Lopez](https://www.ronglopez.com/)。

预览：[方向 05](../../../output/design-direction-lab/direction.html?d=5#top) · [桌面截图](../../../output/design-direction-lab/.playwright-cli/direction-05-desktop.png) · [移动截图](../../../output/design-direction-lab/.playwright-cli/direction-05-mobile.png)

## 5. 浏览器验收证据

本轮使用本机静态服务器和 Playwright：

- 桌面截图：1440×1000 视口，5 个方向各 1 张长截图；
- 移动截图：390×844 视口，5 个方向各 1 张长截图；
- 真实图片：头像和 V028 封面均成功加载，naturalWidth 分别为 3120 和 1920；
- 导航：5 个方向的 Projects 链接均为 #projects，点击后 hash 正确变化；
- 移动布局：5 个方向的 document scrollWidth 均为 390，没有横向溢出；
- 关键内容：5 个方向均有 Maki 羽轩标题、17 个可访问链接和同一批项目/作品内容；
- reduced-motion：5 个方向均能在 prefers-reduced-motion: reduce 下加载，CSS 会压缩转场；
- 初始实验入口额外出现过一次 favicon.ico 404；方向页面本身没有发现阻塞性资源加载错误。这个 404 不影响页面内容，后续若要把 lab 单独打包再补 favicon。

## 6. 当前没有做的事情

- 没有把任何方向写入 src/；
- 没有修改现有 Home、Projects、Works、About 或 Contact；
- 没有决定最终方向；
- 没有为 5 个方向分别制作完整 Project detail 或 Article detail；
- 没有制作复杂动效；
- 没有把方向名称当成最终产品命名。

## 7. Maki 的验收方式

请不要先评价“哪个方向最专业”，而是分别回答：

1. 哪一个方向最像你愿意长期维护的个人空间？
2. 哪一个方向最能让别人理解你做过什么？
3. 哪一个方向最不容易产生你讨厌的 AI 模板感？
4. 哪一个方向的项目、文章和未来新栏目最容易继续增加？
5. 哪些方向之间有值得融合的局部：例如方向 04 的目录结构 + 方向 01 的项目证据，或方向 05 的图像入口 + 方向 02 的文章列表。

本轮的下一道 Gate 是 Maki 选择一个方向，或给出融合指令。收到选择之前，不继续制作全站页面，也不开始大规模重构。
