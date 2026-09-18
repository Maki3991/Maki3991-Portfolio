# Component Production Acceptance Queue v0.2

状态：当前有效 / Foundation 已接受 / 组件级生产验收清单

更新时间：2026-09-18

## 0. 这份清单解决什么问题

这不是一次性全站重写计划，而是当前生产站点的完整组件地图。它把“需要进入第三阶段验收或可能修改的对象”全部列出，并区分：

- 必须进入当前主链路验收；
- 已经实现并有用户反馈，只需要回归，不自动重开；
- 旧路由、未来功能或内容不足，暂不进入当前阶段。

这里的“需要修改”表示可能需要根据真实内容和页面组合调整，不代表每个条目都必然要改代码。

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
| 01 | Page Shell / Section Rhythm | 页面最大宽度、水平轨道、Header 偏移、section 间距、区块分界、Footer 轨道 | 全部页面 | src/layouts/BaseLayout.astro；src/styles/global.css；src/styles/display-title.css；各页面样式 | 待审计；当前第一项 |
| 02 | Header / Desktop Navigation | Wordmark、桌面导航、当前页、hover、focus、跨页面一致性 | 全部页面 | src/components/SiteHeader.astro；src/styles/header.css；src/styles/home.css；src/styles/archive.css | 已局部修复；待跨页回归 |
| 03 | Mobile Navigation | MENU 开关、展开层、关闭、Escape、点击外部、响应式断点 | 全部页面，移动端 | src/components/SiteHeader.astro；header.css；home.css | 待主链路回归 |
| 04 | Display Title / Page Hero | 页面标题比例、顶部留白、路径信息、标题与正文关系 | Home、Archive、Now、About、Contact | src/styles/display-title.css；global.css；各页面样式 | 待统一回归 |
| 05 | Home Hero / Identity | 身份、定位、介绍、主要行动、头像与当前状态并置 | Home | src/pages/index.astro；src/styles/home.css | 已实现；本阶段只回归 |
| 06 | Live Index | 当前状态的五行索引、字段对齐、长内容换行 | Home | src/components/LiveIndex.astro；src/data/home.ts；home.css | 已实现；本阶段只回归 |
| 07 | Current Workbench | 当前正在做什么的开放列表、编号、类型、原因、状态 | Home | src/components/WorkbenchList.astro；src/data/home.ts；home.css | 已实现；本阶段只回归 |
| 08 | Selected Work | 代表项目的反色 raised surface、真实 Archive 数据、角色和入口 | Home | src/pages/index.astro；src/styles/home.css；src/data/archive.ts | 已实现；本阶段只回归 |
| 09 | Home Contact | 首页联系入口、微信/邮箱卡片、链接层级和收束关系 | Home | src/pages/index.astro；src/styles/home.css | 已实现；本阶段只回归 |
| 10 | Shared Footer / Page Ending | Footer 内容、上下间距、页面结尾密度、跨页面一致性 | 全部页面 | src/components/SiteFooter.astro；src/styles/global.css；home.css；archive.css | 已实现；需跨页回归 |
| 11 | Archive Page Shell / Hero | Archive 页面背景、Hero 双栏、索引数据、列表前的节奏 | Archive | src/pages/archive.astro；src/styles/archive.css；archive-implementation.css | 已实现；需 Foundation 回归 |
| 12 | Archive List / Archive Row | 项目编号、类型、标题、摘要、状态、日期、详情入口 | Archive | src/components/ArchiveRow.astro；src/styles/archive.css；archive-implementation.css | 已实现；需真实内容回归 |
| 13 | Archive Row Interaction | row hover、active、focus、状态底线、无布局跳动 | Archive | ArchiveRow.astro；archive-implementation.css | 已实现；需行为回归 |
| 14 | Archive Footnote / Next | Archive → Now 的下一步入口、页面末尾间距和线条关系 | Archive | src/pages/archive.astro；src/styles/archive.css | 已实现；需回归 |
| 15 | Archive Detail Shell / BackLink | 详情页容器、返回 Archive、详情页顶部节奏 | Archive Detail | src/pages/archive/[slug].astro；src/styles/archive-detail.css | 已实现；需回归 |
| 16 | Archive Detail Header / Meta | 标题、类型、摘要、时间、角色、公开范围等事实字段 | Archive Detail | archive/[slug].astro；archive-detail.css | 已实现；需真实内容回归 |
| 17 | Archive Detail Body / Aside | 我的贡献、结果、公开边界、正文与侧栏关系 | Archive Detail | archive/[slug].astro；archive-detail.css | 已实现；需组合回归 |
| 18 | Evidence Block | 公开证据标题、证据类型、链接、空证据状态和图片/文档入口 | Archive Detail | archive/[slug].astro；archive-detail.css；src/data/archive.ts | 已实现；需状态回归 |
| 19 | Detail End Navigation | 详情页返回入口和后续扩展位置 | Archive Detail | archive/[slug].astro；archive-detail.css | 已实现；需回归 |

## 3. 当前主链路的共享交互与基础对象

这些对象可能跨多个组件出现，需要作为独立验收维度记录，但不应被拆成全站同时重写：

| 组件 | 责任 | 代码入口 | 当前状态 |
|---|---|---|---|
| Button | primary、ghost、尺寸、焦点、触摸目标 | src/styles/global.css；Home 使用位置 | 已实现；只回归 |
| Text Link / External Link | 文本链接、出口箭头、底线和 hover/focus | global.css；archive-implementation.css；secondary-pages.css | 已实现；只回归 |
| Focus / Keyboard | 2px outline、4px offset、键盘路径、Escape | global.css；header.css；页面样式；SiteHeader.astro | 待跨页回归 |
| Reduced Motion | 动效 token 和 prefers-reduced-motion 行为 | foundation-tokens.css；global.css | 待行为回归 |
| Responsive / Overflow | 桌面、约 390 × 844、长标题、中英文混排、无横向溢出 | 各页面样式与媒体查询 | 待逐页回归 |
| Empty / Pending / Missing Evidence | 缺图片、缺证据、占位链接和空列表时的诚实状态 | global.css；contact.astro；archive/[slug].astro；works.astro | 部分实现；待状态回归 |

## 4. 当前代码存在但不属于主链路的页面组件

这些页面已经有生产代码，但不应在当前主链路验收中顺手重做。需要单独进入 P1 阶段，或等路由决策后再处理。

| 顺序 | 组件 / 页面 | 责任 | 代码入口 | 当前状态 |
|---:|---|---|---|---|
| P1-01 | Now Page | 当前阶段、简短说明、回到 Home | src/pages/now.astro；src/styles/now.css | 暂缓；内容仍在整理 |
| P1-02 | About Page | 个人背景、长期兴趣、工作方式的开放列表 | src/pages/about.astro；src/styles/secondary-pages.css | 暂缓；Site Map 允许先作为 Home 区块 |
| P1-03 | Contact Page Shell | 独立联系页的标题、二维码区、联系方式列表 | src/pages/contact.astro；src/styles/secondary-pages.css | 暂缓；第一版以共享入口为主 |
| P1-04 | QR Preview / Dialog | 二维码缩略图、放大、关闭、键盘和焦点回收 | contact.astro；global.css；contact page script | 暂缓；已有实现，待独立交互验收 |
| P1-05 | Projects Page | 旧项目详情列表、职责/结果/反思字段 | src/pages/projects.astro；global.css | 暂缓；等待是否并入 Archive 的路由决定 |
| P1-06 | Works Page Shell | 作品分类、展开/收起、空状态和 Proof 区块 | src/pages/works.astro；global.css | 暂缓；不进入当前主链路 |
| P1-07 | Category Toggle | details/summary、分类计数、展开状态和键盘行为 | works.astro；global.css | 暂缓；随 Works 页面处理 |
| P1-08 | Work Card / Metrics | 作品标题、平台、日期、指标和反思 | src/components/WorkCard.astro；global.css | 暂缓；真实作品规模不足 |
| P1-09 | Proof Card | 证明图片、标题、说明和缺失图片状态 | works.astro；global.css | 暂缓；随 Works 页面处理 |
| P1-10 | SectionIntro | 旧 Works 页面区块导语 | src/components/SectionIntro.astro；global.css | 暂缓；当前主链路未使用 |

## 5. 代码中存在但当前未接入主页面的旧组件

这些对象列入资产清单，防止 Agent 误以为它们必须立即重写；在没有页面路由和真实内容需求前不修改：

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

1. Page Shell / Section Rhythm；
2. Header / Desktop Navigation + Mobile Navigation；
3. Display Title / Page Hero；
4. Home 与 Archive 主链路的跨页回归；
5. Archive Detail 的真实内容与状态回归；
6. Shared Footer、Focus、Responsive 和 reduced-motion 联调；
7. 主链路通过后，才进入 P1 页面。

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
