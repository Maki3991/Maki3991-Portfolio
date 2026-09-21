# 参考网站深度拆解与 Design Baseline v0.1

## 0. 这份文档解决什么问题

这不是“我喜欢哪些网站”的再次罗列，而是把已筛选的 10 个网站拆成可以指导重建的证据：

- 它们如何承载多年新增的项目、文章、经历和状态；
- 页面骨架、内容单元、导航和交互是怎样协作的；
- 哪些动效真的帮助理解，哪些只是展示效果；
- Maki 之后新增一个栏目时，是否只需新增内容，而不必重新设计整套 UI。

本阶段只做研究和基线，不修改 Astro 网站源码，也不把任何一个参考网站整站照搬。

## 1. 范围、时间和证据规则

- 调研时间：2026-09-14（中国标准时间）。
- 对象：docs/web-list.md 中去重后的 10 个独立网站。
- 检查方式：Playwright 浏览器会话；桌面视口、约 390×844 的移动视口；先读取页面结构，再操作关键站内控件并保存截图。
- 检查范围：主页、至少一个索引页或详情页、菜单/筛选/主题/目录/展开/复制等有代表性的内部交互、移动布局、首次 Tab 焦点。
- 未打开范围：外部社交平台、外链项目、邮件客户端、第三方视频/播客页面；避免把外部站点行为混入本次站内设计判断。
- 这是一次时间点观察。页面会更新；报告中的远程链接用于复核，截图和快照是本次观察的本地证据。

证据标签：

- [U] 用户观察或用户偏好：来自 Maki 的筛选反馈，不等同于页面事实。
- [F] 页面事实：本次实际打开、读取或操作后观察到的界面、路线、数量、控件或响应。
- [A] 来源自述：参考网站自己对经历、流程、结果、技术栈或能力的文字说明。
- [I] 本项目推断：基于一个或多个 [F]/[A] 得出的对 Maki 的设计建议。
- [?] 未核验：本次没有足够证据，不能下结论。

## 2. 原分享者如何防止 AI 偷懒

原稿中最关键的不是“让 AI 仔细一点”，而是把“仔细”改成了可验收的工作协议。原稿明确要求：页面里所有可点的按钮都要点；每次点出新页面都截图；截图之后再逐张分析和沉淀；最后把十几个网站打包汇总，说明共同体现了什么风格。相关原稿见 [上半场逐字稿](../01-直播工作流/scripts/2026.6.21%20一次带案例的%20AI%20心法分享…（上）.md) 和 [工作流摘要](../个人网站重建_AI工作流直播摘要.md)。

本次把它落实成五道闸门：

1. 覆盖闸门：先列出网站、主页、深层路线、关键控件、移动端、键盘和动效测试栏位；没有栏位就不能声称“分析过”。
2. 行动闸门：逐个操作有意义的内部控件。每个动作记录动作前后的 URL、页面结构、状态或新内容；外链只记录，不跳出范围。
3. 证据闸门：关键状态至少保存一张截图；页面结构用快照保存；“看起来有动效”不能只写形容词，必须标明是截图观察、DOM 变化还是尚未核验。
4. 汇总闸门：每个网站都要回答“内容怎么增长、页面怎么组织、交互解决什么问题、移动端如何退化、哪些未知”；完成 10 个后才提炼共性。
5. 人工验收闸门：AI 只能提出基线，不能替 Maki 最终选择。下一步先由 Maki 接受、修改或否决基线，再进入 3–5 个方向的小型视觉实验。

因此，本报告没有把“截图很多”当成完成条件；每条规则都尽量回指一个具体页面、路线或交互证据。未能覆盖的部分集中列在第 8 节。

## 3. 十个网站的完成矩阵

符号说明：✓ 已完成；△ 有证据但范围受限；? 未核验。

| 网站 | 主页桌面 | 深层页面/内部交互 | 移动 | 首次 Tab | reduced-motion |
|---|---:|---:|---:|---:|---:|
| [swyx.io](https://swyx.io/) | ✓ | ✓ / ideas 筛选、Load more、主题 | ✓ | ✓ | ? |
| [maggieappleton.com](https://maggieappleton.com/) | ✓ | ✓ / Garden 菜单、文章目录 | ✓ | ✓ | ? |
| [romemichal.pl](https://romemichal.pl/) | ✓ | ✓ / 作品详情 | ✓ | ✓ | ? |
| [jakubjakubik.com](https://jakubjakubik.com/) | ✓ | ✓ / Work、Information、hover | ✓ | ✓ | ? |
| [sdburt.com](https://sdburt.com/) | ✓ | ✓ / 主题、项目索引、项目详情 | ✓ | ✓ | ? |
| [specia1ne.com](https://specia1ne.com/) | ✓ | ✓ / 菜单覆盖层、锚点结构 | ✓ | ✓ | ? |
| [ronglopez.com](https://www.ronglopez.com/) | ✓ | ✓ / 主题、案例详情 | ✓ | ✓ | ✓（已模拟） |
| [hire.jvt.me](https://hire.jvt.me/) | ✓ | ✓ / 履历偏好展开 | ✓ | ✓ | ? |
| [andrewaarestad.com/design-process](https://www.andrewaarestad.com/design-process) | △ / 使用相关设计流程页 | ✓ / Mood Board、mobile hero | ✓ | ✓ | ? |
| [ozan.at/mar](https://ozan.at/mar) | ✓ / 根路径重定向至此 | ✓ / 节点详情、关闭、复制、主题 | ✓ | △ / 首次焦点落在节点 section | ? |

## 4. 截图证据索引

路径均相对于本报告所在目录。截图保存于本地，页面快照与同名会话产物位于相邻的 .playwright-cli 目录。

| 网站 | 主页/移动 | 关键状态截图 |
|---|---|---|
| swyx.io | [桌面](../../../output/playwright/reference-audit/swyx/.playwright-cli/page-2026-09-14T05-14-17-190Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-39-47-774Z.png) | [深色模式](../../../output/playwright/reference-audit/swyx/.playwright-cli/page-2026-09-14T05-19-44-831Z.png) · [ideas 筛选后](../../../.playwright-cli/page-2026-09-14T05-21-11-435Z.png) · [Load more 后](../../../.playwright-cli/page-2026-09-14T05-57-30-527Z.png) |
| Maggie Appleton | [桌面](../../../output/playwright/reference-audit/maggie/.playwright-cli/page-2026-09-14T05-14-09-109Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-39-42-886Z.png) | [Garden 菜单](../../../output/playwright/reference-audit/maggie/.playwright-cli/page-2026-09-14T05-22-00-164Z.png) · [文章目录](../../../.playwright-cli/page-2026-09-14T05-23-23-681Z.png) |
| Rome | [桌面](../../../output/playwright/reference-audit/rome/.playwright-cli/page-2026-09-14T05-12-51-944Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-39-38-004Z.png) | [作品详情](../../../output/playwright/reference-audit/rome/.playwright-cli/page-2026-09-14T05-24-26-743Z.png) |
| Jakub Jakubik | [桌面](../../../output/playwright/reference-audit/jakub/.playwright-cli/page-2026-09-14T05-13-27-330Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-39-52-943Z.png) | [Work 索引](../../../.playwright-cli/page-2026-09-14T05-25-52-833Z.png) · [hover 状态](../../../.playwright-cli/page-2026-09-14T05-26-45-088Z.png) · [Information](../../../.playwright-cli/page-2026-09-14T05-27-45-214Z.png) |
| SDBurt | [桌面](../../../output/playwright/reference-audit/sdburt/.playwright-cli/page-2026-09-14T05-13-16-256Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-41-15-420Z.png) | [亮/暗主题状态](../../../output/playwright/reference-audit/sdburt/.playwright-cli/page-2026-09-14T05-28-31-248Z.png) · [项目索引](../../../.playwright-cli/page-2026-09-14T05-29-22-231Z.png) · [项目详情](../../../.playwright-cli/page-2026-09-14T05-29-49-658Z.png) |
| Specia1ne | [桌面](../../../output/playwright/reference-audit/specia1ne/.playwright-cli/page-2026-09-14T05-13-20-213Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-40-54-635Z.png) | [菜单覆盖层](../../../output/playwright/reference-audit/specia1ne/.playwright-cli/page-2026-09-14T05-30-43-068Z.png) |
| Ronald Lopez | [桌面](../../../output/playwright/reference-audit/ronald/.playwright-cli/page-2026-09-14T05-13-24-513Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-41-03-551Z.png) | [主题状态](../../../output/playwright/reference-audit/ronald/.playwright-cli/page-2026-09-14T05-31-47-569Z.png) · [Portfolio Design System 案例](../../../output/playwright/reference-audit/ronald/.playwright-cli/page-2026-09-14T05-32-34-322Z.png) · [reduced-motion 模拟后](../../../.playwright-cli/page-2026-09-14T05-45-02-923Z.png) |
| JVT Hire | [桌面](../../../output/playwright/reference-audit/jvt-hire/.playwright-cli/page-2026-09-14T05-14-17-994Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-41-00-467Z.png) | [What I’m looking for 展开](../../../.playwright-cli/page-2026-09-14T05-46-52-031Z.png) |
| Andrew Aarestad | [Design Process 桌面](../../../output/playwright/reference-audit/andrew/.playwright-cli/page-2026-09-14T05-14-16-821Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-41-05-952Z.png) | [Mood Board](../../../output/playwright/reference-audit/andrew/.playwright-cli/page-2026-09-14T05-33-48-524Z.png) · [移动 Hero 方案](../../../.playwright-cli/page-2026-09-14T05-34-50-805Z.png) |
| Ozan | [画布桌面](../../../output/playwright/reference-audit/ozan/.playwright-cli/page-2026-09-14T05-14-16-283Z.png) · [移动](../../../.playwright-cli/page-2026-09-14T05-41-01-996Z.png) | [项目详情对话框](../../../output/playwright/reference-audit/ozan/.playwright-cli/page-2026-09-14T05-35-35-117Z.png) · [关闭后](../../../output/playwright/reference-audit/ozan/.playwright-cli/page-2026-09-14T05-36-58-568Z.png) · [复制后](../../../output/playwright/reference-audit/ozan/.playwright-cli/page-2026-09-14T05-37-43-556Z.png) · [深色主题](../../../output/playwright/reference-audit/ozan/.playwright-cli/page-2026-09-14T05-38-22-868Z.png) |

## 5. 逐站证据矩阵

### 5.1 swyx.io

来源：[主页](https://swyx.io/) · [Ideas](https://swyx.io/ideas)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 主页同时有精选文章、最新写作/出场、演讲、Newsletter、RSS、Library；Ideas 页显示 630 entries，并按 Essay/Note/Talk/Podcast/Tutorial/Snippet 筛选。点击 Essay 后 URL 变为 ideas?show=Essay；点击 Load more 后计数从 160 变为 240。[I] 这是“持续流入 + 可回看档案”的强参考。 |
| 页面骨架 | [F] 主页是个人定位 → 精选内容 → 当前关注/外部链接 → 最新内容 → 联系/订阅；Ideas 是搜索、格式筛选、精选横向区、按年份归档、增量加载。 |
| 交互 | [F] 深色模式按钮会在 dark/light 之间切换；筛选可改变 URL 和条目计数；Load more 增加档案内容；首次 Tab 落在 Skip to content。 |
| 动效/移动 | [F] 本次保存了桌面与移动截图；横向精选区明确提示继续横向滚动。[?] 未在本次会话模拟 reduced-motion，动效细节不作确认。 |
| 可借鉴结论 | [I] 对 Maki 最有价值的是内容目录和长期归档，不是首页的具体视觉。首页只精选少量入口，长期增长交给索引页。 |

### 5.2 Maggie Appleton

来源：[主页](https://maggieappleton.com/) · [示例文章](https://maggieappleton.com/ai-enlightenment)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 主页有 Essays、Notes、Patterns、Library 等不同内容层；Garden 菜单展开 8 个分类入口；文章带分类、topic tags、时间信息和 “budding” 状态。[I] “花园”比单纯作品集更能容纳持续长出来的内容。 |
| 页面骨架 | [F] 主页是身份/主题 → Garden 说明 → 各内容层精选 → 页脚；文章页是分类/状态/标签/时间 → 标题与正文 → Table of Contents。 |
| 交互 | [F] Garden 菜单由按钮展开分类；文章的 Table of Contents 按钮展开 3 个章节入口；文章中的标签与分类是可继续浏览的关系。 |
| 动效/移动 | [F] 已保存桌面、文章目录和移动截图。[?] 未单独模拟 reduced-motion；不把插画或滚动效果写成 Maki 的必需项。 |
| 可借鉴结论 | [I] 内容类型可以预先统一为内容集合；新增 Notes/Patterns/Experiments 时沿用同一个索引、标签、日期和详情模板。 |

### 5.3 Rome / Michal Rome

来源：[主页](https://romemichal.pl/) · [示例作品](https://romemichal.pl/work/unifying-the-product-ecosystem-for-scale)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 主页有 Selected Works、Coming soon、Experience；作品详情写 Client、Industry、Year、Services，并用问题/系统/结果组织内容。[A] 详情自述 2M+ orders、4.5M+ keys 等结果。[I] 适合长期增加案例，但不适合单独承担文章或生活记录。 |
| 页面骨架 | [F] 主页是强一句话定位 → 年限/地域/角色 → 合作对象 → About → 作品 → Experience；详情是元信息 → 问题 → 构建过程 → 结果。 |
| 交互 | [F] 点击第一项作品进入独立路线 /work/unifying-the-product-ecosystem-for-scale；项目内有连续的 feature stream 和外部页面结构。 |
| 动效/移动 | [F] 已保存主页、详情、移动截图。[?] 未确认转场是否在所有路线和移动端一致，也未模拟 reduced-motion。 |
| 可借鉴结论 | [I] “作品详情不是图片墙，而是判断过程和结果的证据页”值得作为 Maki 的 project detail 模板。 |

### 5.4 Jakub Jakubik

来源：[主页](https://jakubjakubik.com/) · [Work](https://jakubjakubik.com/work/) · [Information](https://jakubjakubik.com/information/)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] Work 是编号从 46 到 01 的视觉索引，项目主要由 Index Media 图片构成，Information 页面另列 Services。[I] 很适合视觉作品的快速浏览，但文字化的多年内容需要另建文章/项目档案。 |
| 页面骨架 | [F] 首页只保留 JJ、Work、Information、邮箱、Instagram 和 Independent Designer and Developer；Information 以 About、Services、Contact 组织。 |
| 交互 | [F] 进入 Work 和 Information 都是独立路线；对 Index Media - 46 做 hover 后可保存截图，但辅助树没有文本或状态变化。[?] hover 的具体视觉差异需要人工直接对比截图。 |
| 动效/移动 | [F] 已保存桌面、Work、hover、Information、移动截图。[?] 未确认 hover 在触摸设备的替代行为，也未模拟 reduced-motion。 |
| 可借鉴结论 | [I] 可借鉴“少量导航 + 强视觉索引”的克制，但不采用其作为 Maki 全站的信息架构。 |

### 5.5 SDBurt / Sean Burt

来源：[主页](https://sdburt.com/) · [Projects](https://sdburt.com/projects)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 主页同时展示 Latest posts、Recent projects、About、联系；Projects 页有 5 个项目；项目详情含日期、阅读时间、标签、Live Site、The Problem、What’s on the Site、Technical Stack。[A] 详情明确描述 slide decks、glossary、quiz、coding humor、responsive/mobile 等功能。 |
| 页面骨架 | [F] 个人介绍 → 最新文章 → 最近项目 → 联系；索引页按项目列表；详情页用问题、页面功能、技术栈讲一个项目。 |
| 交互 | [F] 主题切换可操作；点击项目进入独立详情；页脚有 Back to top 和 Toggle theme。 |
| 动效/移动 | [F] 已保存亮/暗主题、项目索引、项目详情、移动截图。[?] 未模拟 reduced-motion；不把主题切换本身当作首页必需功能。 |
| 可借鉴结论 | [I] 是 Maki “长期更新但保持简单”的平衡参考：内容列表、项目列表、详情模板都能不断追加，页面本身不必不断改版。 |

### 5.6 Specia1ne

来源：[主页](https://specia1ne.com/)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 单页分为 01 Signal、02 Selected Work、03 Practice / System、04 About、05 Contact；Selected Work 有 5 个外部项目链接；Practice / System 把能力拆为 Product logic、Visual direction、Technical execution、Maintainable systems。 |
| 页面骨架 | [F] 一个可快速扫描的单页叙事，编号同时承担导航和阅读顺序；菜单列出各锚点及 Privacy/Terms。 |
| 交互 | [F] Open menu 展开 Site sections 覆盖层；各项指向本页锚点；首次 Tab 先落 Skip to main content。 |
| 动效/移动 | [F] 已保存桌面、菜单、移动截图。[?] 复杂转场/滚动视觉未做逐项测量，reduced-motion 未模拟。 |
| 可借鉴结论 | [I] 借鉴“把能力写成可理解的实践系统”和编号区段；不把它的动态表现当作第一版实现前提。 |

### 5.7 Ronald Lopez

来源：[主页](https://www.ronglopez.com/) · [Portfolio Design System 案例](https://www.ronglopez.com/projects/ronglopez-portfolio)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 主页有 About、Toolbox、4 个项目、Connect；Portfolio Design System 案例有 Page Contents 的 9 个章节。[A] 案例自述 Reference Research → Define Principles → Build System → Implement & Ship；包含 token、组件、页面模式、WCAG、reduced motion、结果和可扩展数量。 |
| 页面骨架 | [F] 主页是定位 → 能力 → 精选项目 → 联系；案例是目录导航 → 背景/策略/基础 → 无障碍/主题/组件 → 页面模式 → 构建 → 结果。 |
| 交互 | [F] 主题切换按钮有 pressed 状态；案例目录可定位章节；详情把“系统规则”作为内容本身。 |
| 动效/移动 | [F] 本次确实用浏览器 emulateMedia 模拟了 prefers-reduced-motion: reduce，并在 reload 后再次保存截图；站点在该状态下仍可读取。 [A] 案例明确写出 reduced motion。移动截图已保存。 |
| 可借鉴结论 | [I] 这是“长期可扩展 UI 系统”的最强参考：先定义语义 token 和组件，再用 page patterns 组合页面；新页面主要是内容与组合变化。 |

### 5.8 JVT Hire / Jamie Tanna

来源：[hire.jvt.me](https://hire.jvt.me/)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 页面是长篇可打印履历：当前定位、README、Now、社交链接、经历、开源维护、其他职位、Accolades、Education、Skills、Interests；What I’m looking for in my next role 可展开为详细偏好。 |
| 页面骨架 | [F] 先回答“我是谁/寻找什么”，再给经历和证据，最后是技能/兴趣；同一页面可以持续更新职位、项目和偏好。 |
| 交互 | [F] 点击 What I’m looking for in my next role 展开 Staff-level、remote、工程效率、hands-on、OSS、public presence、四天工作制等条目；首次 Tab 落在品牌链接。 |
| 动效/移动 | [F] 已保存桌面、展开状态和移动截图。[?] 未模拟 reduced-motion；长页面在移动端的目录/跳转效率仍需 Maki 的实际阅读测试。 |
| 可借鉴结论 | [I] “Hire me”不是一张 PDF，而是一组持续更新的职业证据和边界；可作为 Maki 的 About/Experience 的内容参考，但视觉应保持自己的基线。 |

### 5.9 Andrew Aarestad

来源：[Design Process](https://www.andrewaarestad.com/design-process) · [Mood Board](https://www.andrewaarestad.com/design-preview/v1-initial)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 本次使用 Design Process 作为根路径之外的相关有效页面；页面以 Meta-Project、5-step Design-First Workflow、AI Collaboration、GitHub、Built With 组织。点击 View Mood Board 进入独立预览，展示 palette、typography、buttons、forms、cards、data tables、media 等设计系统单元。 |
| 页面骨架 | [F] 设计流程页是流程解释 → 预览入口 → 技术/协作说明；移动 hero 预览还给出 3 个方向和 mobile-first spacing、typography、voice rules。 |
| 交互 | [F] View Mood Board 和 mobile hero 是内部预览路线；预览页把抽象设计决策变成可看、可比较的具体样例。 |
| 动效/移动 | [F] 已保存桌面、Mood Board、移动流程页和移动 Hero 方案。[?] 根路径与实际项目路径的关系未进一步核验；reduced-motion 未模拟。 |
| 可借鉴结论 | [I] 借鉴“先做可验收的设计基线/样例，再写页面”的工作方法；不是要求 Maki 先做完整设计稿。 |

### 5.10 Ozan

来源：[根路径](https://ozan.at/) · [本次实际路线 /mar](https://ozan.at/mar)

| 维度 | 证据和判断 |
|---|---|
| 内容增长 | [F] 根路径重定向至 /mar；主要内容是 Trigger → Router → 多个 Project 节点（Atmar Horeca、Namedrop、Truvex、SuppliMatch）→ Output contact，节点带 live/ongoing/pre-launch/prototype 状态。 |
| 页面骨架 | [F] 不是传统纵向页面，而是画布/流程图；项目详情打开对话框，包含 B2B e-commerce、VAT、Stripe、admin、Next.js/Supabase 等长篇实现说明。 |
| 交互 | [F] 点击项目 details 打开对话框；Close panel 关闭；关闭后 Copy 可操作，但本次没有看到明确的复制成功文案；主题按钮可切换到 dark。第一次在对话框打开时尝试 Copy 被模态层拦截并超时，之后关闭对话框再操作成功。 |
| 动效/移动 | [F] 已保存桌面、详情、关闭后、复制后、主题和移动截图；首次 Tab 落在 Trigger node 的 section，而不是明显的可操作控件。[?] 画布在移动设备上的可达性、缩放和键盘完整路径需要专门复核；本次有 2 个 console errors。 |
| 可借鉴结论 | [I] 可把“状态节点”和“当前正在做什么”作为未来的实验栏目；第一版不把 Canvas/WebGL 画布作为核心架构，因为它会增加移动、键盘和内容编辑成本。 |

## 6. 跨站归纳：哪些东西真的值得进入 Maki 的基线

### 6.1 内容不是一张首页，而是几种可增长的内容流

| 内容流 | 参考证据 | 对 Maki 的用途 |
|---|---|---|
| 文章/笔记/媒体档案 | swyx、Maggie、SDBurt | 让网站多年后仍有“最近更新”和可回看的 archive；可按类型、主题、年份筛选。 |
| 精选项目与完整案例 | Rome、Ronald、SDBurt | 首页只放少量入口；详情页沉淀问题、判断、过程、结果和链接。 |
| 个人状态/当前方向 | swyx 的 currently、JVT 的 Now/Looking for、Ozan 的 status nodes | 让网站呈现此刻，而不是一次性履历；可先做简单文本区。 |
| 经历与职业证据 | JVT、Rome、主页 About | 给面试官和合作伙伴快速确认角色、能力、合作方式。 |
| 设计/开发过程 | Ronald、Andrew、Specia1ne | 将“怎么做事”本身变成证据，避免只有结果图。 |
| 实验性内容 | Maggie、Ozan | 作为后续可插拔栏目，不进入第一版核心依赖。 |

结论不是把六类全部塞到第一版，而是先采用能容纳它们的内容模型。首页只精选几个入口；新增文章、项目、状态或未来栏目时，新增的是记录和关系，页面模板保持稳定。[I] 这直接回应“以后开新板块不要再次耗时间设计 UI”的要求。:codex-annotation{index="2"}

### 6.2 视觉共性与 Maki 的排除项

[U] Maki 已明确不喜欢当前版本的暖色衬线体、偏橙/绿/淡黄的常见配色，以及“不是……而是……”等明显 AI 句式。:codex-annotation{index="3"}

从参考站点中可提炼的不是一套颜色，而是以下更稳的原则：

- 先保证内容层次和阅读节奏，再加一处识别性视觉；
- 用真实项目、真实判断和具体链接制造个性，不用装饰替代内容；
- 少量规则性细节（编号、状态、细线、列表节奏、标签）比大量卡片和渐变更可持续；
- 视觉可以有性格，但项目详情、文章正文、经历列表必须保持可读和可扫描；
- 亮色/暗色是可选能力，不应成为内容成立的前提；
- 参考站点的颜色、字体、插画和动效只作为候选，不在基线阶段锁死具体数值。

## 7. Design Baseline v0.1

这是下一轮小型视觉实验的约束，不是最终设计稿。

### 7.1 目标排序

1. 体现真实的 Maki 和长期个人身份；
2. 让面试官、合作伙伴快速理解正在做什么、做过什么、如何做事；
3. 让普通访客愿意继续浏览。:codex-annotation{index="1"}

### 7.2 信息架构

建议先建立以下内容集合，而不是把所有内容硬塞进一个 projects 页面：

- projects：项目和作品，支持 status、role、stack、links、featured、year；
- articles/notes：文章、思考、学习记录，支持 type、topics、date、draft/published；
- experience：经历和合作证据，支持 organization、role、period、highlights、links；
- now/status：当前关注和正在进行的事情；
- about/contact：稳定的身份、合作方式和联系方式。

第一版可以只填有真实内容的集合；空集合不必显示。未来新增 experiments、fitness、life log、RSS 等栏目时，再挂到同一套列表/详情/标签原语上，不提前为每种可能都造独立视觉系统。

### 7.3 视觉规则

- 采用“浅色优先、深色可选”的方向，但下一轮实验再决定具体色板。
- 排除当前版本那种暖色衬线体 + 橙/绿/淡黄组合；优先测试中性或偏冷的背景、一个受控强调色、可长时间阅读的无衬线字体。:codex-annotation{index="3"}
- 不把大面积渐变、玻璃模糊、过度圆角、卡片堆叠、无意义的数字指标作为默认组件。
- 保留细线、留白、列表、编号、状态和局部图像等低成本识别元素。
- 文案以第一人称、具体事实和短句为主；删除模板化的“不是 A，而是 B”、空泛价值宣言和未经核验的指标。
- 统一内容轨道和间距节奏；单个页面可以有一个有表现力的重点，不能每个区块都换一种视觉语言。
- 字体具体选择、色值、圆角和阴影数值留到下一轮 3–5 个方向的 lab 中比较，不在本报告假装已经决定。

### 7.4 组件和内容约束

第一版优先固定这些可复用原语：

- Site header / 移动导航；
- Section label / 编号或分类；
- Item row / 项目、文章、经历的列表行；
- Project card / 必要时使用，不强制所有内容卡片化；
- Tag / status / year；
- External link / inline CTA；
- Article meta、TOC、Back to index、Back to top；
- Theme toggle、focus ring、skip link。

每个内容条目由 Markdown frontmatter + 正文驱动。新建一个项目或文章的最小动作应是新增一份内容记录；新增一个未来栏目时，优先新增一个集合和一个已有的 index/detail/list 组合，而不是复制一整页 HTML。只有当新栏目确实需要新交互时，才增加一个隔离的可选组件。

### 7.5 与当前 Astro 项目的衔接

[F] 当前项目已经有 src/site-content 下的 Markdown 内容、JSON frontmatter、src/data/content.ts 的读取逻辑，以及 projects/works 的可复用卡片。当前 projects 主要是单页长列表，works 有分类折叠但没有完整的独立详情路线。[I] 因此长期方向不需要立即换框架；后续可在现有内容读取层上增加 articles/notes/experience 等集合、统一类型和路由模板，再逐步把页面从“手写区块”迁移到“内容驱动页面”。

本阶段不执行这项迁移。下一阶段只做小范围 prototype，确认基线之后再讨论分支、迁移和上线。

## 8. 页面骨架草案

### Home

1. Masthead：姓名/身份、当前关注、主要链接；
2. Selected projects：少量精选项目，指向详情；
3. Latest writing：文章/笔记的最新几条，指向索引；
4. Now / status：当前正在做什么，可随时更新；
5. Contact + footer：合作方式、社交/代码链接、RSS（有真实需求再加）。

### Project index

1. 简短说明；
2. 可选的 status/type 筛选；
3. 所有项目列表，显示年份、角色、状态、技术/主题；
4. 每行或每卡片指向 project detail。

### Project detail

1. 返回 index；
2. 标题、时间、角色、状态、链接；
3. Context / problem；
4. Decisions / process；
5. Shipped / result；
6. 代码、演示、图片或其他证据；
7. Next / related projects。

### Article index

1. 说明这组文章/笔记是什么；
2. type/topic/year 等筛选，第一版可只做一种；
3. Latest list；
4. Archive；
5. RSS 或订阅入口（确定要长期写作后再加）。

### Article detail

1. type、date、read time；
2. 标题和短导语；
3. 长文才显示 TOC；
4. 正文；
5. related content；
6. 返回文章索引。

About/Experience 可以先是 Home 的区段，内容稳定后再拆成独立页面；不要为了“看起来完整”提前制造空页面。

## 9. 动效边界

原则：动效必须回答“由什么触发、帮助用户理解什么、移动端怎么做、关闭后怎样仍然完整”。没有这四项，就不进入核心页面。

| 层级 | 默认策略 | 触发与收益 | 移动端 | reduced-motion / 失败退化 |
|---|---|---|---|---|
| L0 | 默认允许 | hover/focus 的颜色、下划线、透明度、小图标位移；提示可点击、可聚焦或正在切换 | 保留 focus/press 反馈，不依赖 hover | 直接显示最终状态；内容和操作不能依赖动画 |
| L1 | 谨慎采用 | 菜单、TOC、主题切换、路线进入的短淡入/淡出；让状态变化可感知 | 缩短到约 120–220ms，避免全屏遮挡太久 | 直接展开/切换，保留焦点和可关闭路径 |
| L2 | 只有有信息价值才采用 | 章节进入、阅读进度、轻量页面转场；帮助定位内容，不制造等待 | 禁止滚动劫持；可以减弱为静态分段或进度条 | 关闭位移、缩放和连续滚动效果 |
| L3 | 第一版排除 | Canvas/WebGL 画布、复杂时间线、全屏转场、依赖滚动的视觉叙事 | 不作为核心导航和内容入口 | 只能放在独立实验路线，核心内容必须有普通列表/详情替代 |

当前 10 个站点中，Ozan 的画布最接近 L3；Specia1ne/Jakub 的视觉 hover 或复杂表现可以作为局部实验；Ronald 的案例提供了 reduced-motion 的明确参照。第一版采用 L0 为默认、L1 为可选，L2/L3 等 Maki 看到具体 prototype 后再决定。

## 10. 未完成、受限和不能过度解读的证据

- 外部社交、项目、邮件、YouTube/播客链接没有打开；因此不能把外部页面的实际体验写入本次站内结论。
- swyx 的 630 entries 没有逐条打开；本次验证了搜索/格式筛选和一次 Load more（160 → 240），它证明了增长机制，不证明 630 条内容都没有异常。
- Jakub 的 hover 截图已保存，但辅助树没有出现 DOM 文本或状态差异；截图的具体视觉变化需要人工直接复核，不能只凭 DOM 断言。
- Ozan 的首次 Tab 落在 Trigger node 的 section；Copy 操作没有出现可见成功文案；且本次观察到 2 个 console errors。这些是需要单独做可访问性和错误反馈复核的信号，不直接等于“设计失败”。
- swyx、Rome、SDBurt、Andrew、Ozan 等会话出现过 console error；本次没有追查其来源，因为任务是参考设计审计，不是修复对方网站。
- 只有 Ronald 会话真正模拟了 reduced-motion；其他 9 个站点标为未核验。页面上没有看到的动效不能被写成“没有动效”。
- andrewaarestad.com 根路径不是本次最有信息量的入口，因此使用 /design-process 及其内部预览作为相关页面；这个选择属于研究范围说明，不代表根路径结构已完整审计。
- 所有结论都分开标注 [U]/[F]/[A]/[I]/[?]；其中 [A] 的项目数据、结果和能力是网站作者自述，不是本项目独立验证的事实。

## 11. 下一道闸门

请先审阅本报告的 Design Baseline v0.1，重点只做三类反馈：

1. 保留：哪些原则已经符合你想要的感觉；
2. 删除：哪些原则仍然太像常见模板或 AI 设计；
3. 改写：哪些内容集合、页面骨架或动效边界与你未来真实更新方式不符。

基线被接受后，再做 3–5 个小型方向实验：Home、Project detail、Article index 各做同一内容的不同视觉方向，用真实内容验收。实验通过后，才进入隔离分支中的 Astro 重建；在此之前不进行全站重构。

本阶段交付物是研究报告和 Playwright 截图/快照；没有修改 src，也没有运行 npm run build。
