# Component Audit Batch 01 v0.2

更新时间：2026-09-17

状态：已完成第 1–4 步 / 等待 Maki 完成第 5 步判断

## 这份文档解决什么问题

本文件把以下 5 个组件的组件级审计合并在一起：

1. Header / Navigation；
2. Archive Page Shell / Section Rhythm；
3. A-01 Archive 项目列表行；
4. A-07 Archive 列表行 Hover / Active；
5. A-03 Archive 状态标签。

Header 已完成第 1–4 步，本文件补录它的第 5 步问题。其余 4 个组件均已执行到第 5 步前。

本批次没有修改生产代码。用户确认后，仍然按照“一次只实现一个组件、一次验收一个组件”的方式推进。

## 审计边界与证据

- 当前生产页面：`/archive/`；
- 当前真实数据：`src/site-content/archive/*.md` 中的 4 条档案；
- 运行视口：桌面 `1440 × 1000`、移动 `390 × 844`；
- 运行结果：Archive 页面控制台 0 Errors、0 Warnings；移动端 `scrollWidth = 390`，没有横向溢出；
- Lab 证据：Component Contract 中对应的 Lab 锚点和本地实验代码；
- 外部参考网站与这些 Lab 方案的逐项来源没有在当前 Contract 中建立一一映射，因此本文件不把未核验的外部网站细节写成事实。

本轮截图证据：

- [Archive Shell 桌面端](../../../output/playwright/archive-shell-desktop.png)
- [Archive 移动端](../../../output/playwright/archive-mobile-audit.png)
- [Archive 列表行 Hover](../../../output/playwright/archive-row-hover-desktop.png)
- [Header Home Hover](../../../output/playwright/header-home-hover.png)
- [Header 移动菜单](../../../output/playwright/header-mobile-open.png)

---

## 1. Header / Navigation

### 1.1 第 1 步：当前实现扫描

主要文件：

- [`src/components/SiteHeader.astro`](../../../src/components/SiteHeader.astro)
- [`src/layouts/BaseLayout.astro`](../../../src/layouts/BaseLayout.astro)
- [`src/styles/global.css`](../../../src/styles/global.css)
- [`src/styles/home.css`](../../../src/styles/home.css)
- [`src/styles/archive.css`](../../../src/styles/archive.css)
- [`src/site-content/settings/nav-items.json`](../../../src/site-content/settings/nav-items.json)

当前事实：

- Header 通过 `BaseLayout` 出现在 Home、Archive、About、Contact 等页面；
- 当前主导航是 `Home / Archive / About / Contact`；
- Home 使用冷灰背景、等宽文字、扁平链接和蓝色下划线；
- Archive 只覆盖了 Header 背景，仍继承全局的圆角胶囊式导航；
- Home 移动端有 `MENU` 折叠菜单，其他页面移动端直接显示导航；
- 当前 4 个已有路由的 active 文字状态正确；
- 当前没有 `aria-current="page"`；
- Home 移动菜单能展开和关闭，但没有 Escape、点击外部和窗口尺寸变化后的关闭处理。

### 1.2 第 2 步：设计库规则

- `S-01`：A — Editorial Rail；保留清晰路径、Wordmark 和文字导航；
- `S-03`：A — Editorial Rail；当前页面使用克制的底线或索引状态，Focus 不能只依赖颜色；
- `S-04`：B — Quiet Grid；移动菜单容易发现、容易关闭，不做复杂全屏叙事；
- 亮色优先；不使用玻璃拟态、渐变和复杂导航转场。

### 1.3 第 3 步：已选样例与硬性入口

- [S-01-A](../../../output/component-lab-v0.2/index.html#S-01-A)：品牌、路径和导航沿一条编辑轨道组织；
- [S-03-A](../../../output/component-lab-remaining-v0.1/index.html#S-03-A)：当前状态用底线/索引明确标记；
- [S-04-B](../../../output/component-lab-v0.2/index.html#S-04-B)：移动菜单保持安静、直接、可回退。

Lab 只作为结构、状态和视觉规则参考，不直接复制 Lab CSS。

### 1.4 第 4 步：具体修改位置

- `SiteHeader.astro`：导航语义、active 标记、菜单交互；
- `global.css`：共享 Header 基础样式；
- `home.css`：收缩 Home 专属覆盖，避免与共享 Header 重复；
- `archive.css`：移除与共享 Header 冲突的旧样式；
- `nav-items.json`：只有主导航内容确认改变时才修改；
- 不修改 Home 内容区、Footer、暗色模式和 Archive Detail。

### 1.5 第 5 步：需要 Maki 判断

#### H1. 移动端菜单是否全站统一？

- A：所有页面统一使用 `MENU` 折叠菜单。
#### H2. 桌面端 Header 是否全站统一为当前 Home 的 Working Archive 风格？

- A：所有页面统一使用冷灰背景、等宽文字导航、扁平链接和蓝色当前页下划线。**推荐**。

#### H3. 当前主导航是否继续保持四项？

- B：现在加入 `Now`，但仅仅只是一个标签，点击后可以跳转到404

#### H4. 当前页状态采用哪种视觉强度？

- A：保留蓝色下划线，补充 `aria-current="page"` 和清晰 Focus。**推荐**。

#### H5. 移动菜单采用哪些关闭方式？

- A：按钮、Escape、点击外部和窗口尺寸变化后都能关闭。**推荐**。

---

## 2. Archive Page Shell / Section Rhythm

本组件把 F-06、F-07、F-08、F-09 作为一个页面结构切片审计，因为容器、网格、间距和分隔线组合后才会产生页面节奏。

### 2.1 第 1 步：当前实现扫描

主要文件：

- [`src/pages/archive.astro`](../../../src/pages/archive.astro)
- [`src/styles/archive.css`](../../../src/styles/archive.css)
- [`src/styles/global.css`](../../../src/styles/global.css)
- [`src/data/archive.ts`](../../../src/data/archive.ts)

当前结构：

```text
archive-page
├── archive-hero
│   ├── archive-hero-copy
│   └── archive-index：ITEMS / PUBLIC / ANONYMIZED
├── archive-section
│   ├── 01 / INDEX
│   ├── Selected records
│   └── archive-list
└── archive-footnote：NEXT
```

当前事实：

- 桌面端使用约 1120px 最大内容宽度；
- Hero 是左侧标题/说明、右侧统计索引的双栏；
- 列表区使用细线和开放列表，不是卡片墙；
- 移动端切换为单栏，统计索引由左边界线改为顶部线；
- 当前移动端页面高度约 2456px，Hero 约 504px；
- 390px 视口没有横向溢出；
- 当前页面明确写出“详情页、作品证据和后续筛选会在内容稳定后接入”；
- `NEXT` 目前只是说明性文字，不是可点击的下一步入口。

### 2.2 第 2 步：设计库规则

- `F-06-E`：开放留白和统一最大宽度，不为每个区块重新发明容器；
- `F-07-B`：稳定网格承载 Archive 列表，移动端自然收为单栏；
- `F-08-B`：间距偏宽、稳定、可追加；
- `F-09-E`：用少量细线建立关系，避免卡片墙；
- Archive 应该先服务长期追加内容，而不是为了少量条目制造复杂筛选控制台。

### 2.3 第 3 步：已选样例与硬性入口

- [F-06-E](../../../output/component-lab-v0.2/index.html#F-06-E)：尽量去掉多余容器，让文字和线条自然占据页面；
- [F-07-B](../../../output/component-lab-v0.2/index.html#F-07-B)：稳定栏位，移动端转单栏；
- [F-08-B](../../../output/component-lab-remaining-v0.1/index.html#F-08-B)：宽松间距，给新增内容留出呼吸空间；
- [F-09-E](../../../output/component-lab-v0.2/index.html#F-09-E)：线条从内容中自然长出，不额外制造容器。

### 2.4 第 4 步：具体修改位置

- `archive.astro`：Hero、统计索引、列表区标题、`NEXT` 区块的结构；
- `archive.css`：`.archive-page`、`.archive-hero`、`.archive-section`、`.archive-list`、`.archive-footnote` 和移动端媒体查询；
- `global.css`：共享 `main` 容器和全站基础间距，只在确认确有冲突时修改；
- 不在本组件中修改 `.archive-row` 的内部字段和 Hover 状态，那些属于 A-01/A-07；
- 不在本组件中实现筛选逻辑或详情路由。

### 2.5 第 5 步：需要 Maki 判断

#### S1. Archive 首屏留白和 Hero 高度如何处理？

- A：保留当前较宽的 Hero 和留白，让 Archive 像长期档案入口。**推荐**。

#### S2. `ITEMS / PUBLIC / ANONYMIZED` 统计索引是否保留？

- A：保留，作为档案范围和公开边界的快速说明。**推荐**。

#### S3. 第一版是否加入筛选/分组入口？

- A：暂不加入，等条目数量真正增长后再做。**推荐**，符合 `A-09` 的 P1 提案。

#### S4. `NEXT` 说明区块如何处理？

- A：保留为诚实的更新路线说明，暂时不做按钮。**推荐**。

---

## 3. A-01 Archive 项目列表行

### 3.1 第 1 步：当前实现扫描

主要文件：

- [`src/components/ArchiveRow.astro`](../../../src/components/ArchiveRow.astro)
- [`src/pages/archive.astro`](../../../src/pages/archive.astro)
- [`src/styles/archive.css`](../../../src/styles/archive.css)
- [`src/data/archive.ts`](../../../src/data/archive.ts)
- [`src/site-content/archive/`](../../../src/site-content/archive/)

当前结构：

```text
article.archive-row
├── archive-row-number
├── archive-row-main
│   ├── type / period / status
│   ├── title
│   └── summary
└── archive-row-aside
    ├── role
    ├── visibility
    └── outcome
```

当前事实：

- 当前有 4 条真实档案；
- 桌面端为 `52px + 主内容 + 右侧事实栏` 三栏；
- 移动端为编号栏加主内容，右侧事实栏转到下方；
- 每行都有编号、类型、时间、状态、标题、摘要、角色、公开范围和结果；
- 每行目前是 `<article>`，内部没有 `<a>` 或 `<button>`；
- 页面运行结果中 `linksInRows = 0`，点击列表行没有详情跳转；
- 这与 Contract 中“每行有入口”以及 Site Map 中的 `/archive/[slug]` 仍未接通。

### 3.2 第 2 步：设计库规则

- `A-01-E`：项目、作品、Note 等内容共享可追加的开放列表行；每行有标题、摘要、状态、日期和入口；
- `A-06-E`：编号承担 Archive 阅读路径和内容索引，不作为 KPI 装饰；
- `F-07-B`：桌面稳定网格，移动端自然收缩；
- 不把每一条记录做成独立卡片。

### 3.3 第 3 步：已选样例与硬性入口

- [A-01-E](../../../output/component-lab-v0.2/index.html#A-01-E)：线条和留白组织长期追加的列表结构；
- [A-06-E](../../../output/component-lab-v0.2/index.html#A-06-E)：编号是阅读索引，不制造装饰性数据感；
- 相关状态样例另由本批第 5 个组件 A-03 处理；
- 原始 Lab 代码只作为样例，不直接复制到 `src/`。

### 3.4 第 4 步：具体修改位置

- `ArchiveRow.astro`：标题/入口结构、字段顺序、语义标签；
- `archive.css`：`.archive-row`、`.archive-row-main`、`.archive-row-aside` 及移动端布局；
- `archive.astro`：条目映射和列表容器，不改变 Shell 的 Hero；
- `archive.ts`：只在需要新增排序或入口字段时调整类型；
- `src/site-content/archive/*.md`：只在确认内容字段和链接边界后补数据；
- 详情页路由目前不存在，不能在本轮凭空假设最终详情页面结构。

### 3.5 第 5 步：需要 Maki 判断

#### A1. 列表行的详情入口采用什么形式？

- A：标题旁或行末提供明确的文字/箭头链接，保持整行不是隐形按钮。**推荐**。

#### A2. 列表行默认显示多少事实？

- B：列表只保留类型、日期、状态、标题和摘要，角色/结果进入详情页。

> 待测试：如果B效果不好，恢复 “A：保留当前字段：类型、日期、状态、标题、摘要、角色、公开范围、结果”

#### A3. 条目排序采用什么规则？

- A：继续使用内容文件中的手动 `order`，形成编辑式档案路径。**推荐**。

#### A4. 公开范围是否在列表中直接展示？

- B：列表隐藏公开范围，只在详情页说明。

---

## 4. A-07 Archive 列表行 Hover / Active

### 4.1 第 1 步：当前实现扫描

当前唯一的列表行交互规则是：

```css
.archive-row:hover {
  background: rgba(255, 255, 255, 0.32);
}
```

运行证据：

- 桌面 Hover 后背景变为 `rgba(255, 255, 255, 0.32)`；
- 没有 transform、阴影或布局变化；
- 当前行没有 `cursor: pointer`；
- 因为行内没有链接或按钮，所以没有 Focus、Active 或键盘进入状态；
- 移动端没有真正的 Hover 状态可依赖。

### 4.2 第 2 步：设计库规则

- `A-07-E`：Hover、Active 和 Focus 只提供轻量反馈，不改变布局，也不能依赖 Hover 才能发现内容；
- `F-10-B`：动效低幅度、短时、只服务于状态反馈；
- 所有可进入内容必须在没有 Hover 的情况下也能被发现。

### 4.3 第 3 步：已选样例与硬性入口

- [A-07-E](../../../output/component-lab-v0.2/index.html#A-07-E)：Hover 只改变线和文字颜色，内容保持稳定；
- 参考代码入口是 `src/styles/archive.css` 当前 `.archive-row:hover`，但现有规则只是暂时的实现证据，不代表最终状态已验收。

### 4.4 第 4 步：具体修改位置

- `ArchiveRow.astro`：详情链接的可聚焦元素；
- `archive.css`：`:hover`、`:focus-visible`、`:active` 和可能的 `[aria-current]` 状态；
- 不新增 JavaScript；
- 不通过 Hover 才显示摘要、结果或入口。

### 4.5 第 5 步：需要 Maki 判断

#### V1. 桌面端 Hover 采用哪种反馈？

- A：只改变文字/细线颜色，保持内容和布局稳定。**推荐**。

#### V2. 列表行 Focus / Active 是否与 Hover 使用同一套视觉？

- A：Focus 使用清晰外轮廓，Hover/Active 使用轻微颜色或细线变化。**推荐**。

#### V3. 移动端是否增加 Press 反馈或短过渡？

- A：只保留浏览器/链接默认按压反馈，不额外增加动效。**推荐**。

---

## 5. A-03 Archive 状态标签

### 5.1 第 1 步：当前实现扫描

主要位置：

- `ArchiveRow.astro` 中的 `statusLabels`；
- `.archive-row-meta` 中的第三个 `<span>`；
- `src/data/archive.ts` 中的 `ArchiveStatus` 类型；
- `src/site-content/archive/*.md` 中的 `status` 字段。

当前事实：

- 数据模型已经支持 `active / completed / archived / paused / draft`；
- 当前 4 条真实条目全部是 `archived`；
- 状态现在只是普通文本，没有独立 class、背景、边框或 `data-status`；
- 当前状态颜色是普通 muted 文本 `rgb(93, 106, 123)`；
- 因为目前所有条目状态相同，页面还没有验证“进行中”和“已归档”同时出现时是否容易扫描。

### 5.2 第 2 步：设计库规则

- `A-03-E`：状态词简短、低干扰、可核验；不能靠标签堆制造信息量；
- `F-05-B`：等宽字体可用于日期、状态、编号和路径，但不能让整页变成控制台；
- 状态表达事实，不应该变成装饰徽章或虚假进度指标。

### 5.3 第 3 步：已选样例与硬性入口

- [A-03-E](../../../output/component-lab-v0.2/index.html#A-03-E)：状态只保留必要文字和一条线，不增加额外装饰；
- 当前生产实现比 Lab 选择更弱：有状态文字，但还没有用稳定的语义选择器表达它。

### 5.4 第 4 步：具体修改位置

- `ArchiveRow.astro`：为状态输出稳定的 class 或 `data-status`，继续使用真实 `status` 字段；
- `archive.css`：定义状态文字、细线和必要的 active/archived 差异；
- `archive.ts`：只在新增状态语义或校验时修改类型；
- 真实 Markdown 内容：只有状态事实改变时才修改，不为了视觉测试伪造数据。

### 5.5 第 5 步：需要 Maki 判断

#### T1. 状态标签采用哪种视觉形式？

- A：保留简短文字，以文字和细线表达状态，不做胶囊或填充徽章。**推荐**。

#### T2. 是否让 `active` 比其他状态更醒目？

- A：所有状态同层级，只通过文字区分。**推荐**。

#### T3. 状态是否在每条列表行中都显示？

- A：每条都显示，保持长期档案的可扫描性。**推荐**。

---

## 6. 确认后的实施顺序

1. 先实现 Header / Navigation；
2. 再实现 Archive Page Shell / Section Rhythm；
3. 再实现 A-01 列表行及详情入口；
4. 再实现 A-07 Hover / Active / Focus；
5. 最后实现 A-03 状态标签；
6. 每个组件分别运行构建、桌面截图、`390 × 844` 移动截图、控制台、无溢出和键盘验收。

## 7. 相关依据

- [组件级实施工作流](./README.md)
- [Component Contract v0.1](../08-Component-Contract-v0.1/component-contract-v0.1.md)
- [Working Archive Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)
- [Site Map v0.1](../06-Site-Architecture-v0.1/site-map-v0.1.md)
- [上一版批次记录](./component-audit-batch-01-v0.1.md)
