# Component Production Acceptance Queue v0.2

状态：当前有效 / Foundation 已接受 / Q1–Q4 已实施 / 本轮审计范围 33 项

更新时间：2026-09-19

## 0. 这份清单解决什么问题

这不是一次性全站重写计划，而是当前生产站点的完整组件地图。它把“需要进入第三阶段验收或可能修改的对象”全部列出，并区分：

- 必须进入当前主链路验收；
- 已经实现并有用户反馈，只需要回归，不自动重开；
- 旧路由、未来功能或内容不足，暂不进入当前阶段。

这里的“需要修改”表示可能需要根据真实内容和页面组合调整，不代表每个条目都必然要改代码。

本轮审计范围统计：

- P0 主链路：19 项；
- 共享交互与基础对象：6 项；
- 纳入本轮的 P1：8 项（P1-01 至 P1-07、P1-09）；
- 合计：33 项；
- 排除：`ProjectCard.astro`、`StatGrid.astro`、旧版 `WorkCard.astro`、旧版 `SectionIntro.astro`，共 4 项。

## 1. 当前执行方式

用户不需要阅读源码，也不需要在每一轮修改前审批技术实现。默认流程是：

1. Agent 内部审计 Astro 结构、真实内容、CSS、数据、脚本和受影响页面；
2. Agent 依据 Foundation 与 Component Contract 直接实现，没有重大设计取舍时不暂停；
3. 用户在本地查看结果，只反馈视觉感受、内容事实和明显行为问题；
4. 只有以下情况才向用户提问：设计选择会改变结果、内容事实不确定、已锁定规则互相冲突，或修改共享结构会产生不可逆范围扩张；
5. Agent 修复、构建并回写状态。

提问的对象是视觉结果或内容判断，不是代码审查。

## 2. 当前主链路：必须逐项验收

主链路范围：

Home / Working Archive → Archive 列表 → 一个真实 Archive Detail

| 顺序 | 组件 / 设计维度 | 责任 | 主要页面 | 代码入口 | 当前状态 |
|---:|---|---|---|---|---|
| 01 | Page Shell / Section Rhythm | 页面最大宽度、水平轨道、Header 偏移、section 间距、区块分界、Footer 轨道 | 全部页面 | src/layouts/BaseLayout.astro；src/styles/global.css；src/styles/display-title.css；各页面样式 | 已验收（2026-09-19）；desktop gutter 已接入 32px，mobile gutter 保持 16px；[审计记录](./component-audit-batch-06-v0.1.md) |
| 02 | Header / Desktop Navigation | Wordmark、桌面导航、当前页、hover、focus、跨页面一致性 | 全部页面 | src/components/SiteHeader.astro；src/styles/header.css；src/styles/home.css；src/styles/archive.css | 已验收（2026-09-19）；active、hover、focus 和跨页状态通过；[审计记录](./component-audit-batch-07-v0.1.md) |
| 03 | Mobile Navigation | MENU 开关、展开层、关闭、Escape、点击外部、响应式断点 | 全部页面，移动端 | src/components/SiteHeader.astro；header.css；home.css | 已验收（2026-09-19）；交互、当前态、响应式恢复和 44px 触控尺寸通过；[审计记录](./component-audit-batch-08-v0.1.md) |
| 04 | Display Title / Page Hero | 页面标题比例、顶部留白、路径信息、标题与正文关系 | Home、Archive、Now、About、Contact | src/styles/display-title.css；global.css；各页面样式 | 已验收（2026-09-19）；96/64px 顶部节奏、标题排印、移动折叠和五页无溢出通过；[审计记录](./component-audit-batch-09-v0.1.md) |
| 05 | Home Hero / Identity | 身份、定位、介绍、主要行动、头像与当前状态并置 | Home | src/pages/index.astro；src/styles/home.css | 已验收（2026-09-19）；真实头像、双栏 / 单列、两个主要入口和无溢出通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 06 | Live Index | 当前状态的五行索引、字段对齐、长内容换行 | Home | src/components/LiveIndex.astro；src/data/home.ts；home.css | 已验收（2026-09-19）；5 个真实字段、移动换行和无溢出通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 07 | Current Workbench | 当前正在做什么的开放列表、编号、类型、原因、状态 | Home | src/components/WorkbenchList.astro；src/data/home.ts；home.css | 已验收（2026-09-19）；2 条真实记录、桌面网格、移动单列和无溢出通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 08 | Selected Work | 代表项目的反色 raised surface、真实 Archive 数据、角色和入口 | Home | src/pages/index.astro；src/styles/home.css；src/data/archive.ts | 已验收（2026-09-19）；Maki English 真实数据、入口、14px 圆角和 shadow-soft 通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 09 | Home Contact | 首页联系入口、微信/邮箱卡片、链接层级和收束关系 | Home | src/pages/index.astro；src/styles/home.css | 已验收（2026-09-19）；微信 / mailto 真实入口、卡片和移动单列通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 10 | Shared Footer / Page Ending | Footer 内容、上下间距、页面结尾密度、跨页面一致性 | 全部页面 | src/components/SiteFooter.astro；src/styles/global.css；home.css；archive.css | 已验收（2026-09-19）；6 个主页面轨道、间距和移动单列通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 11 | Archive Page Shell / Hero | Archive 页面背景、Hero 双栏、索引数据、列表前的节奏 | Archive | src/pages/archive.astro；src/styles/archive.css；archive-implementation.css | 已验收（2026-09-19）；Hero、3 项索引、移动顶部线和无溢出通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 12 | Archive List / Archive Row | 项目编号、类型、标题、摘要、状态、日期、详情入口 | Archive | src/components/ArchiveRow.astro；src/styles/archive.css；archive-implementation.css | 已验收（2026-09-19）；4 条真实记录、长标题、详情入口和移动单列通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 13 | Archive Row Interaction | row hover、active、focus、状态底线、无布局跳动 | Archive | ArchiveRow.astro；archive-implementation.css | 已验收（2026-09-19）；hover 颜色、Focus、状态底线和布局稳定通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 14 | Archive Footnote / Next | Archive → Now 的下一步入口、页面末尾间距和线条关系 | Archive | src/pages/archive.astro；src/styles/archive.css | 已验收（2026-09-19）；NEXT 入口、末尾间距和无额外横线决定通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| 15 | Archive Detail Shell / BackLink | 详情页容器、返回 Archive、详情页顶部节奏 | Archive Detail | src/pages/archive/[slug].astro；src/styles/archive-detail.css | 已验收（2026-09-19）；四条真实详情的桌面/移动壳和顶部返回通过；[审计记录](./component-audit-batch-11-v0.1.md) |
| 16 | Archive Detail Header / Meta | 标题、类型、摘要、时间、角色、公开范围等事实字段 | Archive Detail | archive/[slug].astro；archive-detail.css | 已验收（2026-09-19）；四条真实记录 Meta 与匿名公开状态通过；[审计记录](./component-audit-batch-11-v0.1.md) |
| 17 | Archive Detail Body / Aside | 我的贡献、结果、公开边界、正文与侧栏关系 | Archive Detail | archive/[slug].astro；archive-detail.css | 已验收（2026-09-19）；四条真实记录内容和移动单列关系通过；[审计记录](./component-audit-batch-11-v0.1.md) |
| 18 | Evidence Block | 公开证据标题、证据类型、链接、空证据状态和图片/文档入口 | Archive Detail | archive/[slug].astro；archive-detail.css；src/data/archive.ts | 已验收（2026-09-19）；公开过滤、匿名过滤和空证据状态通过；[审计记录](./component-audit-batch-11-v0.1.md) |
| 19 | Detail End Navigation | 详情页返回入口和后续扩展位置 | Archive Detail | archive/[slug].astro；archive-detail.css | 已验收（2026-09-19）；顶部与底部返回入口均通过；[审计记录](./component-audit-batch-11-v0.1.md) |

## 3. 当前主链路的共享交互与基础对象

这些对象可能跨多个组件出现，需要作为独立验收维度记录，但不应被拆成全站同时重写：

| 组件 | 责任 | 代码入口 | 当前状态 |
|---|---|---|---|
| Button | primary、ghost、尺寸、焦点、触摸目标 | src/styles/global.css；Home 使用位置 | P0 回归通过（2026-09-19）；主入口实际触控高度约 48px，MENU 为 44px；[审计记录](./component-audit-batch-12-v0.1.md) |
| Text Link / External Link | 文本链接、出口箭头、底线和 hover/focus | global.css；archive-implementation.css；secondary-pages.css | P0 回归通过（2026-09-19）；Archive 行链接、NEXT、Home mailto 和 Focus 通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| Focus / Keyboard | 2px outline、4px offset、键盘路径、Escape | global.css；header.css；页面样式；SiteHeader.astro | Gate passed（2026-09-19）；全局链接 / 按钮、导航、Archive 行和菜单路径通过；[审计记录](./component-audit-batch-12-v0.1.md) |
| Reduced Motion | 动效 token 和 prefers-reduced-motion 行为 | foundation-tokens.css；global.css | Gate passed（2026-09-19）；reduce 下 scroll-behavior 为 auto；[审计记录](./component-audit-batch-12-v0.1.md) |
| Responsive / Overflow | 桌面、约 390 × 844、长标题、中英文混排、无横向溢出 | 各页面样式与媒体查询 | P0 Gate passed（2026-09-19）；Home、Archive、Archive Detail 桌面 / 移动无溢出；[审计记录](./component-audit-batch-12-v0.1.md) |
| Empty / Pending / Missing Evidence | 缺图片、缺证据、占位链接和空列表时的诚实状态 | global.css；contact.astro；archive/[slug].astro；works.astro | P0 Archive Detail 状态已通过；P1 Contact / Works 状态仍按各自队列处理 |

## 4. 当前代码存在但不属于主链路的页面组件

这些页面已经有生产代码，但不应在当前主链路验收中顺手重做。需要单独进入 P1 阶段，或等路由决策后再处理。

| 顺序 | 组件 / 页面 | 责任 | 代码入口 | 当前状态 |
|---:|---|---|---|---|
| P1-01 | Now Page | 当前阶段、简短说明、回到 Home | src/pages/now.astro；src/styles/now.css | 已完成首次 UI 实现；Now 标题保持 1120px 主轨道，文章正文正在试用 980px 可读轨道；等待本地视觉验收 |
| P1-02 | About Page | 个人背景、长期兴趣、工作方式的开放列表 | src/pages/about.astro；src/styles/secondary-pages.css | 已完成代码审计；Q2/Q3 共享规则已同步，P1 视觉验收暂缓 |
| P1-03 | Contact Page Shell | 独立联系页的标题、二维码区、联系方式列表 | src/pages/contact.astro；src/styles/secondary-pages.css | 已完成代码审计；Q2/Q3 共享规则已同步，P1 视觉验收暂缓 |
| P1-04 | QR Preview / Dialog | 二维码缩略图、放大、关闭、键盘和焦点回收 | contact.astro；global.css；contact page script | 已完成代码审计；打开/关闭/Escape/焦点回收已通过，视觉验收暂缓 |
| P1-05 | Projects Page | 旧项目详情列表、职责/结果/反思字段 | src/pages/projects.astro；global.css | 已完成代码审计；P1 暂缓，等待是否并入 Archive 的路由决定 |
| P1-06 | Works Page Shell | 作品分类、展开/收起、空状态和 Proof 区块 | src/pages/works.astro；global.css | 已完成代码审计；P1 暂缓，不进入当前主链路 |
| P1-07 | Category Toggle | details/summary、分类计数、展开状态和键盘行为 | works.astro；global.css | 已完成代码审计；P1 暂缓，随 Works 页面处理 |
| P1-08 | Work Card / Metrics | 作品标题、平台、日期、指标和反思 | src/components/WorkCard.astro；global.css | 本轮排除；旧版 WorkCard 不计入 33 项，随 Works 路由决定 |
| P1-09 | Proof Card | 证明图片、标题、说明和缺失图片状态 | works.astro；global.css | 已完成代码审计；P1 暂缓，随 Works 页面处理 |
| P1-10 | SectionIntro | 旧 Works 页面区块导语 | src/components/SectionIntro.astro；global.css | 本轮排除；旧版 SectionIntro 不计入 33 项，随 Works 路由决定 |

## 5. 代码中存在但当前未接入主页面的旧组件

这些对象列入资产清单，防止 Agent 误以为它们必须立即重写；在没有页面路由和真实内容需求前不修改。它们均不计入本轮 33 项审计范围：

| 组件 | 当前情况 | 处理决定 |
|---|---|---|
| ProjectCard.astro | 当前 Projects 页面使用直接 markup，未作为主链路共享组件 | 暂不改；等 Projects / Archive 合并决定 |
| StatGrid.astro | 当前核心页面没有接入 | 暂不改；不为了展示组件而增加 Dashboard 感 |
| WorkCard.astro | 只服务 Works 旧页面 | 暂不改；随 Works 页面处理 |
| SectionIntro.astro | 只服务 Works 旧页面 | 暂不改；随 Works 页面处理 |

## 6. 不进入当前组件修改队列的未来对象

- 暗色主题及 Theme Toggle；
- Archive 筛选、分组、排序、紧凑/展开模式；
- Archive 更新历史、相关项目和复杂前后导航；
- Currently Reading、How I Work、Timeline 独立模块；
- Notes、Reading、Resume、Uses、Lab、Search、RSS；
- 实时状态、健身或生活数据 Dashboard；
- 复杂全屏动效、滚动劫持、Canvas/WebGL；
- Projects / Works 的最终路由合并。

## 7. 当前执行顺序

Page Shell / Section Rhythm、Header / Desktop Navigation、Mobile Navigation、Display Title / Page Hero、Home / Archive 主链路、Archive Detail 真实内容与状态回归，以及 Shared Footer、Focus、Responsive 和 reduced-motion 联调均已通过；P0 主链路完成，下一步进入 P1。

1. 进入 P1-01 Now Page，先审计真实内容、标题轨道、返回入口和移动响应式；
2. 再按 P1 队列逐项处理 About、Contact、QR Preview、Projects、Works 和 Proof，不提前处理已排除的旧组件。

每一轮只修改一个表格条目及明确依赖。没有重大设计取舍时，Agent 审计后直接修改；用户只需查看本地结果并反馈。

## 8. 完成标准

一个组件只有同时满足以下条件，才从“待验收”变为“已验收”：

- 真实内容成立；
- 桌面和约 390 × 844 移动视口可读；
- 没有横向溢出；
- 键盘 Focus、Hover、Click、展开/关闭行为（若适用）成立；
- 长标题、中英文混排、缺少图片/证据的状态成立；
- npm.cmd run build 通过；
- 视觉反馈已回写本队列和 Component Contract v0.2。

## 9. 本轮代码审计结果（2026-09-18）

### 审计范围

- 已检查 BaseLayout、SiteHeader、SiteFooter、Home、Archive、Archive Detail、Now、About、Contact、Projects、Works 及其共享样式、数据和脚本入口。
- 已完成主链路 P0 组件与共享基础对象的代码审计；P1 页面已完成代码清点和运行时检查，但视觉契约仍暂缓。
- 当前按本队列执行的审计范围为 33 项；4 个旧组件已明确排除，不再作为本轮验收单元。
- 初始审计阶段没有在未确认的跨页取舍上直接改生产代码；收到 Q1–Q4 A 选择后，已按决策实施对应 CSS，并完成构建与浏览器回归。

### 已验证证据

- `npm.cmd run build` 通过：11 个静态页面生成，Astro 检查 0 errors、0 warnings、2 个与 Lab 示例脚本有关的 hints。
- 全部 11 条路由在桌面视口和约 390px 移动视口均无横向溢出，且每页有一个 `main` 和一个 `h1`。
- 全部 11 条路由浏览器控制台均为 0 errors、0 warnings。
- 移动导航的打开、`Escape` 关闭和焦点回收已验证；Contact 二维码弹窗的打开、`Escape` 关闭和焦点回收已验证。

### 本轮决策与实施结果

1. Q1 A：主页面轨道 1120px、可读内容 980px，Archive Detail 去除 1240px 特例；
2. Q2 A：Display Title 桌面 96px、移动端 64px，减少页面级顶部规则叠加；
3. Q3 A：只保留有明确语义的列表/section/收束横线，移除次级页面悬空 Hero 底线；
4. Q4 A：全站当前导航统一为透明直角加底部 inset 当前线，移除 Archive 独立当前底色。

具体选择记录见 [Component Audit Decision Board v0.2](./component-audit-decision-board-v0.2.md)。生产代码已按选择实施，本轮本地视觉验收通过，下一步是 P0 组件 Gate。

### 实施后的验证

- `npm.cmd run build` 重新通过：11 个静态页面生成，0 errors、0 warnings、2 个 Lab 示例脚本 hints。
- Home、Archive 移动端实际计算为 390px 文档宽度、64px 标题顶部间距；桌面 Archive 当前导航为透明背景和底部 inset 当前线。
- Archive Detail desktop 实际计算最大宽度为 1120px；Meta 上边框为 none，字段竖线宽度为 1px。
- About Hero 底部边框实际计算为 none，desktop 标题顶部间距为 96px；Home 与 Contact 浏览器控制台回归均为 0 errors、0 warnings。
- Maki 本地部署浏览反馈：当前跨页规则无问题；记录为本轮跨页视觉验收通过，不替代后续组件状态/组合 Gate。

## 10. Page Shell / Section Rhythm Gate（2026-09-19）

- 已修正 `main`、Footer 和 Header 在中间 desktop 视口错误使用 16px gutter 的问题；1160px 视口现使用 32px desktop gutter。
- 390×844 移动视口继续使用 16px gutter；Home、Archive、Archive Detail、About、Contact、Now、Projects、Works 均无横向溢出。
- `npm.cmd run build` 通过，浏览器控制台 0 errors、0 warnings。
- 详细记录见 [Component Audit Batch 06](./component-audit-batch-06-v0.1.md)。

## 11. Header / Desktop Navigation Gate（2026-09-19）

- Home、Archive、Archive Detail、Now、About、Contact 的 `aria-current` 均唯一且正确；详情页正确继承 Archive 当前态。
- active 实际为透明背景、直角和底部 inset 当前线；hover 不引起布局跳动；Focus 为 2px outline / 4px offset。
- 1440px 和 1160px 桌面视口导航均保持单行，无横向溢出；Quiet Blur 计算值符合 Contract。
- 详细记录见 [Component Audit Batch 07](./component-audit-batch-07-v0.1.md)。

## 12. Mobile Navigation Gate（2026-09-19）

- Home 与 Archive 的 390 × 844 移动视口均通过菜单初始态、打开态和当前页状态检查；
- MENU、Escape、点击 Header 外部和窗口切回桌面均能正确关闭或恢复；
- MENU 入口修正为 `var(--size-target-min)`，实际高度 44px；菜单链接实际高度约 44.33px；
- Home 与 Archive 均保持 `clientWidth = scrollWidth`，无横向溢出；
- 浏览器控制台 0 errors、0 warnings，`npm.cmd run build` 通过；
- 详细记录见 [Component Audit Batch 08](./component-audit-batch-08-v0.1.md)。

## 13. Display Title / Page Hero Gate（2026-09-19）

- Home、Archive、Now、About、Contact 的真实标题轨道均使用统一的 display 排印 token；
- 桌面标题顶部节奏统一从 96px token 开始，移动端统一从 64px token 开始；
- 390px 移动视口实际字号为 52px，Home 双行标题和 Archive 索引栏均自然折叠；
- 五个主页面桌面与移动视口均无横向溢出，标题没有裁切或异常断行；
- 浏览器控制台 0 errors、0 warnings，`npm.cmd run build` 通过；
- 详细记录见 [Component Audit Batch 09](./component-audit-batch-09-v0.1.md)。

## 14. Home / Archive 主链路跨页回归（2026-09-19）

- Home 的代表项目入口和 Header 的 Archive 入口均能进入同一真实 `Maki English` 详情页；
- Archive 4 条真实记录、详情标题、时间/角色/公开范围、贡献/结果/公开边界和公开证据入口均存在；
- 详情页始终保持 Archive 当前态，详情返回入口能恢复 Archive 列表、下一步 `/now/` 入口和当前导航；
- 桌面 1440px 与移动 390px 链路均无横向溢出；
- 浏览器控制台 0 errors、0 warnings；本轮未修改生产代码；
- 详细记录见 [Component Audit Batch 10](./component-audit-batch-10-v0.1.md)。

## 15. Archive Detail 真实内容与状态回归（2026-09-19）

- 4 条真实详情记录全部可访问，字段与 `src/site-content/archive/` 一致；
- 公开、匿名公开、待公开和私有证据过滤符合公开边界；
- AI 实习条目在无可公开证据时显示明确空状态；
- 桌面 1120px 主轨道、移动单列 Meta、顶部返回和底部返回均通过；
- 4 条记录桌面与移动视口均无横向溢出；
- 浏览器控制台 0 errors、0 warnings；
- 详细记录见 [Component Audit Batch 11](./component-audit-batch-11-v0.1.md)。

## 16. Home / Archive 剩余组件与共享联调 Gate（2026-09-19）

- Home Hero、Live Index、Current Workbench、Selected Work、Home Contact 均以真实内容完成桌面 1440px 与移动 390px 回归；
- Home 头像加载成功，Live Index 五行、Workbench 两条、Selected Work 的 `Maki English` 入口和 Home Contact 的微信 / mailto 入口均成立；
- Archive Hero、4 条真实 ArchiveRow、状态底线、标题 / 侧栏入口、移动长标题换行和 `NEXT / 当前阶段` 均通过；
- Archive Row hover 不改变布局，链接 hover 改为可见 accent 色，真实 Tab Focus 为 2px / 4px；
- Footer、Focus、Reduced Motion 和 P0 Responsive / Overflow 联调通过；
- 详细记录见 [Component Audit Batch 12](./component-audit-batch-12-v0.1.md)。
