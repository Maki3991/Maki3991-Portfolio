# Component Audit Batch 03 v0.1

- 日期：2026-09-17
- 状态：第 6 步进行中；Selected Work、Contact CTA 与 Archive Detail Header 已验收；Archive 的 NEXT → NOW 已实现，等待 Maki 视觉验收
- 本轮范围：Home Selected Work、Home Contact CTA、Footer / 页面结尾、Archive Detail Item Header + BackLink
- 执行原则：先批量审计，再统一收集决策；收到你的选择后，进入第 6 步，仍然按“改一个、看一个、反馈一个”实现和验收

> 这四项是当前队列中紧接着 Live Index 与 Current Workbench 之后的待审计组件。Live Index、Current Workbench 已视为本轮之前完成并验收，不在本报告重新决策。

## 先看结论

目前生产代码已经有可工作的四个实现，但它们还没有完全形成一条稳定的“精选入口 → 联系 → 页面收束 → 详情页返回”的链路：

1. Home 的 Selected Work 已经有蓝色反色精选块，但仍读取旧的 `projects` 数据，主链接仍是旧版 `/projects/#english-media`；
2. Home 的 Contact CTA 已经是两个真实入口，但它与完整 `/contact/` 页的职责边界还没有正式定下来；
3. SiteFooter 仍是全站共享的两行极简 Footer，Home 和 Archive 还各自有不同的页面结尾表达；
4. Archive 详情页已经能打开，但详情头部当前是开放式结构，而已选的 D-01 B 是 Quiet Grid；此外，详情页当前存在 BaseLayout 的 `<main>` 内再嵌套 `<main>` 的语义结构问题。

因此，本轮不是“把四个东西全部重写”，而是请你先决定：

- Home 精选要保持一件代表性工作，还是准备容纳多项；
- Contact 是继续保持两个安静入口，还是扩大为更多社交/合作入口；
- Footer / 页面结尾只做收束，还是增加一个明确的下一步链接；
- 详情页头部是否按已选的 Quiet Grid 方向实现，以及返回入口是否继续保持简单。

## 本轮可复核证据

- [首页当前渲染截图](../../../output/playwright/component-audit-batch-03-home.png)
- [Archive 详情页当前渲染截图](../../../output/playwright/component-audit-batch-03-archive-detail.png)
- 浏览器快照核验：Home 中可见 Selected Work、Contact 两个真实入口和共享 Footer；详情页中可见 `← 返回 Archive`、标题、摘要、Period / Role / Visibility；本轮详情页控制台无错误、无警告。
- 当前队列：[component-audit-queue-v0.1.md](component-audit-queue-v0.1.md)

## 第 6 步记录：Home Selected Work

已按 SW-01 / SW-02 / SW-03 执行：

- Home 精选从旧的 `projects` 数据源切换为 Archive 数据源；
- `home-selection.json` 现在只保存 `archiveId: "maki-english"`；
- Home Hero 的“查看代表项目”和 Selected Work 的显式链接都进入 `/archive/maki-english/`；
- 保留当前已验收的蓝色反色精选表面，没有顺手重做 CSS；
- 修复范围只涉及 `src/data/home.ts`、`src/pages/index.astro` 和 `home-selection.json`。

验证结果：`npm.cmd run build` 通过（0 errors；2 个既有 Lab hint），浏览器点击精选入口后实际到达 Archive 详情页。验收截图：[component-implementation-selected-work-v0.1.png](../../../output/playwright/component-implementation-selected-work-v0.1.png)。

当前状态：Selected Work 已通过 Maki 视觉验收；Contact CTA 已实现，等待 Maki 视觉验收。Footer 的 FOOT-03 仍需先澄清 Next 的意义。

## 第 6 步记录：Home Contact CTA

已按 CTA-01 / CTA-02 / CTA-03 / CTA-04 执行：

- 首页继续只展示微信和邮箱，不把 GitHub、社交账号和音乐入口搬到 Home；
- 首页微信卡片移除二维码图片，改为显示 `微信号 · Maki3991`；
- 微信卡片仍然进入 `/contact/`，完整 Contact 页继续承担二维码和其它联系入口；
- 邮箱入口和“如果你想继续聊”说明保持不变；
- 由于移除了图片，为微信卡片增加单列样式，避免遗留空白图片栏。

验证结果：`npm.cmd run build` 通过（0 errors；2 个既有 Lab hint）；浏览器快照确认首页不再出现微信二维码，微信卡片仍可点击进入 `/contact/`；控制台无错误、无警告。验收截图：[component-implementation-contact-cta-focus-v0.1.png](../../../output/playwright/component-implementation-contact-cta-focus-v0.1.png)。

当前状态：Contact CTA 已通过 Maki 视觉验收。Archive Detail Header 已实现，等待 Maki 视觉验收；Footer 的 FOOT-03 仍不提前实现。

## 第 6 步记录：Archive Detail Header + BackLink

已按 DETAIL-01 / DETAIL-02 / DETAIL-03 / DETAIL-04 执行：

- 保留详情页当前开放背景和底部细线，不增加圆角 Quiet Grid 表面；
- 保留“编号 / 类型 / 状态”与“Period / Role / Visibility”两层信息；
- 保留顶部单一的 `← 返回 Archive`；
- 保持当前标题、摘要和事实密度；
- 修复 BaseLayout 提供的 `<main>` 与详情页内部 `<main>` 嵌套的问题，改为单一主内容区域；
- 未修改详情正文、Outcomes、Public Boundary 或 Evidence。

验证结果：`npm.cmd run build` 通过（0 errors；2 个既有 Lab hint）；浏览器快照确认详情页只保留一个主内容区域，返回入口和详情头部内容正常；控制台无错误、无警告。验收截图：[component-implementation-archive-detail-header-v0.1.png](../../../output/playwright/component-implementation-archive-detail-header-v0.1.png)。

当前状态：待 Maki 进行视觉验收。确认后，Batch 03 只剩 Footer / 页面结尾的 FOOT-03 需要解释和决定。

## 第 6 步记录：Footer / 页面结尾

已按 FOOT-01 / FOOT-02 / FOOT-03 / FOOT-04 执行：

- 共享 Footer 保持当前两行极简结构；
- Home 继续以 Contact 结束，不追加重复的下一步导航；
- Archive 页保留 `NEXT` 标签，但唯一入口改为 `NOW / 当前阶段 →`，链接到 `/now/`；
- 删除原先没有行动入口的“下一阶段”说明文字，避免把维护计划误当成访客导航；
- 移动端继续使用自然纵向排列，不增加固定 Footer 或工具栏。

这里的规则是：`Now` 是稳定的页面目的地，`Next` 是当前页面给出的行动提示。此次只在 Archive 中使用 `Next → Now`；不会在 Now 页面继续指向 Now，也不会把所有页面的 Next 都强行指向 Now。

验证结果：`npm.cmd run build` 通过（0 errors；2 个既有 Lab hint）；浏览器快照确认 Archive 页面结尾只有一个 `NOW / 当前阶段` 链接，点击后实际到达 `/now/`；控制台无错误、无警告。验收截图：[component-implementation-archive-next-now-v0.1.png](../../../output/playwright/component-implementation-archive-next-now-v0.1.png)。

当前状态：待 Maki 进行视觉验收。确认后，Batch 03 的四个组件全部收束。

## 共同设计依据

- [Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)
- [Component Contract v0.1](../08-Component-Contract-v0.1/component-contract-v0.1.md)
- [Site Architecture / Site Map v0.1](../06-Site-Architecture-v0.1/site-map-v0.1.md)
- [Component Lab Decisions v0.1](../07-Component-Lab-v0.1/component-lab-decisions-v0.1.md)
- [21 个高影响组件选择](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-21x5.md)
- [39 个其余组件选择](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-39x5.md)

本轮共同遵守：

- Working Archive 是长期可更新的个人档案，不是一次性营销 Landing Page；
- 内容真实和可持续更新优先于视觉装饰；
- 使用冷灰蓝背景、深墨色文字、蓝色强调、无衬线标题、等宽索引词和细线；
- 用留白、对齐和边线建立层次，不堆叠卡片、渐变、阴影、复杂动效或 Dashboard 控件；
- Lab 只作为已选视觉假设和代码样例，不把未选 CSS 复制到生产代码。

---

# 1. Home Selected Work

对应选择：`P-03 Selected Work 区块` + `A-02 首页精选项目`

## 1.1 第 1 步：当前实现扫描

### 页面结构与真实内容

Home 入口位于 [src/pages/index.astro](../../../src/pages/index.astro#L60)：

- 如果 `selectedProject` 存在，就渲染一个 `home-section`；
- 区块标题为 `03 / SELECTED WORK`、`一件代表性工作`；
- 当前正文说明为“先从一段真实的内容实践开始。”；
- 内容主体是一个 `home-selected` article；
- 当前结构分为三列：编号 `01`、主内容、右侧 `ROLE` 信息；
- 主内容包含类型、标题、摘要和一个“查看代表项目 ↗”链接；
- 现在实际显示的是 `Maki 羽轩英语自媒体`，角色为“负责选题、脚本、拍摄、剪辑、发布、复盘和私信沟通”。

当前 Home 不是从新的 Archive 集合读取这个条目，而是：

- [src/data/home.ts](../../../src/data/home.ts) 读取 `home-selection.json`；
- [src/pages/index.astro](../../../src/pages/index.astro#L9) 通过 `projects.find()` 从旧的 `projects` 集合取出 `english-media`；
- [home-selection.json](../../../src/site-content/settings/home-selection.json) 当前把链接写成 `/projects/#english-media`；
- 新的 Archive 中对应条目是 `maki-english`，位于 [src/site-content/archive/01-maki-english.md](../../../src/site-content/archive/01-maki-english.md)。

这意味着当前“精选卡片”和“Archive 详情”存在两个内容源和两个标题体系。它目前可以运行，但未来迁移到 Archive Detail 时需要明确数据真源。

### 当前视觉与交互

相关 CSS 在 [src/styles/home.css](../../../src/styles/home.css#L347)：

- 第一项使用 `var(--home-accent)` 蓝色反色表面；
- 主标题、摘要和角色文字使用白色或浅色；
- 右侧 Role 使用半透明左边线与左内距；
- 只有“查看代表项目 ↗”是显式链接，整个 article 目前不可点击；
- 桌面端是 `48px + 主内容 + 右侧信息` 三列；
- 860px 以下改为单列，Role 区域改为顶部边线；
- 640px 以下隐藏编号，卡片内距缩小为 24px；
- 没有复杂 hover 动效，只加强链接底边线。

### 当前风险

1. 当前只支持一个精选项目；如果未来追加多个项目，页面结构和数据读取需要从单对象扩展为数组；
2. Home 精选使用旧 Projects 数据，而 Archive 使用新的 Archive 数据，容易出现标题、摘要、角色或时间不一致；
3. 当前已确认“Archive Detail 完成后再替换旧链接”，但切换时应同时处理数据真源，而不只是改一条 href；
4. 蓝色反色卡片如果以后每一项都复制，会变成卡片墙，违背已选的“第一项突出、其他项保持轻”的融合规则。

## 1.2 第 2 步：设计库约束

根据 Baseline 和 Contract：

- Home 精选的任务是给访客一个真实的继续入口，不是把完整 Archive 复制到首页；
- 精选数量应该少，且要能随着真实内容增长；
- 第一项可以作为高对比 selected signal；其他项如果加入，应保持白色或淡主题色；
- 内容要保留编号、标题、摘要和必要的角色/状态事实；
- 不使用虚假指标、夸张结果、项目墙或复杂筛选；
- Home 精选和 Archive 必须是同一条内容链路的入口，不应长期维护两套互相漂移的事实。

## 1.3 第 3 步：已选 Lab / 参考代码

这是一个明确的融合选择，不是单独选择一个变体：

- `A-02`：融合 `D + B`
  - 第一项采用 D 的反色效果；
  - 其他项目保持白色或淡主题色；
  - 其他项目采用 B 的安静排版；
- `P-03`：沿用 `A-02` 的融合规则。

可直接查看：

- [A-02-D Split Signal](../../../output/component-lab-remaining-v0.1/index.html#A-02-D)
- [A-02-B Quiet Grid](../../../output/component-lab-remaining-v0.1/index.html#A-02-B)
- [P-03-D Split Signal](../../../output/component-lab-remaining-v0.1/index.html#P-03-D)
- [P-03-B Quiet Grid](../../../output/component-lab-remaining-v0.1/index.html#P-03-B)
- [Component Contract 中的 A-02 / P-03 记录](../08-Component-Contract-v0.1/component-contract-v0.1.md#4-archive-列表模式)
- [用户的 A-02 / P-03 融合选择](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-39x5.md#11-a-02-首页精选项目)

这里的“参考代码”只能帮助之后的 agent 理解反色面、开放排版和信息层级；不能把 Lab 的完整 CSS 原样搬进 `home.css`。

## 1.4 第 4 步：将来需要修改的具体位置

### 视觉与结构

- [src/pages/index.astro](../../../src/pages/index.astro#L60)：精选区块的条目结构、数量、字段和链接；
- [src/styles/home.css](../../../src/styles/home.css#L347)：`.home-selected`、`.home-selected-main`、`.home-selected-aside`、`.home-selected-link`；
- [src/styles/home.css](../../../src/styles/home.css#L517)：860px / 640px 响应式布局；
- [src/site-content/settings/home-selection.json](../../../src/site-content/settings/home-selection.json)：精选条目配置和旧链接；
- [src/data/home.ts](../../../src/data/home.ts)：如果将单个精选对象改为多个条目或改为读取 Archive，需要在这里调整类型和读取逻辑。

### 明确不在本组件内修改

- Current Workbench；
- Live Index；
- Archive 列表行的整体样式；
- Archive 详情页正文、Evidence 区块；
- 全站 Footer 和完整 Contact 页面。

## 1.5 第 5 步：请 Maki 判断

以下问题只问“尚未锁定”的部分。反色第一项、其他项保持轻量这一原则已经由 A-02 / P-03 融合选择确定，不需要重新投票。

### SW-01：首版首页展示几项精选工作？

- [x] A（建议）：先保留一项真实精选，等有第二项真正值得公开的记录后再增加；
- [ ] B：首版展示两到三项，允许部分条目先使用较短内容；
- [ ] C：把当前所有公开 Archive 条目都同步到 Home；
- [ ] D：我的自定义意见：________。

	### SW-02：精选卡片的可点击范围

- [x] A（建议）：只保留显式“查看代表项目”链接，整块不做隐式点击；
- [ ] B：整块 article 都可点击，内部不再单独保留重复链接；
- [ ] C：主标题和显式链接都可点击；
- [ ] D：我的自定义意见：________。

### SW-03：Home 精选与 Archive 的数据关系

- [x] A（建议）：Archive 作为完整事实真源，Home 只保存“是否精选 / 排序”等轻量配置；
- [ ] B：Home 继续独立维护精选标题、摘要和角色；
- [ ] C：Home 只保留入口，所有标题和事实都从 Archive 读取；
- [ ] D：我的自定义意见：________。

### 已锁定的路由前提

你之前已经确认：Archive Detail 完成后，再把 Home 精选链接从旧的 `/projects/#english-media` 换成新的 Archive Detail 路由。本轮详情页已经存在，但仍需经过本轮详情头部的视觉确认；因此第 6 步实施时默认按这个条件迁移，不把它误当成新的审美问题。

---

# 2. Home Contact / Collaboration CTA

对应选择：`P-09 Contact / Collaboration CTA`

## 2.1 第 1 步：当前实现扫描

### Home 当前结构

Home 联系区块位于 [src/pages/index.astro](../../../src/pages/index.astro#L86)：

- 区块编号为 `04 / CONTACT`；
- 标题为“如果你想继续聊”；
- 说明为“项目合作、求职或普通交流，可以先通过微信联系。”；
- 右侧目前有两个真实入口：
  1. 微信缩略图卡片，点击进入 `/contact/`；
  2. 邮箱卡片，点击 `mailto:maki1344933709@gmail.com`；
- 微信和邮箱都来自 [src/data/site.ts](../../../src/data/site.ts) 读取的 [links.json](../../../src/site-content/settings/links.json)。

Home 的 Contact CTA 与完整 Contact 页不是同一个组件：

- [src/pages/contact.astro](../../../src/pages/contact.astro) 会展示完整 links 数组；
- 完整 Contact 页包含头像、微信二维码、社交/作品入口和二维码放大 dialog；
- Home 只摘出微信和邮箱，承担“给访客一个直接继续联系的入口”。

### 当前视觉与响应式

相关 CSS 在 [src/styles/home.css](../../../src/styles/home.css#L419)：

- 桌面端是左侧说明、右侧联系卡片的两栏；
- 卡片使用细边线、白色/透明背景和真实缩略图；
- hover / focus 只改变边线颜色；
- 860px 以下改为单列；
- 640px 以下缩小上下间距；
- 没有夸张 CTA、弹窗或复杂动效。

### 当前风险

1. “通过微信联系”是主文案，但邮箱也是同级真实入口，主次关系还可以更清楚；
2. Home 微信卡片点击进入 Contact 页，而不是直接打开二维码；这是一个明确的路径选择，不应由 agent 自行改变；
3. `links.json` 中还有 GitHub、自媒体主页、音乐等入口，如果全部搬到 Home，可能让首页尾部变成社交链接墙；
4. 完整 Contact 页仍沿用旧的通用页面样式；本轮只审计 Home CTA，不顺手重做完整 Contact 页。

## 2.2 第 2 步：设计库约束

- Contact 是真实联系入口，不是销售落地页；
- 只展示真实可用的联系方式和清楚的合作方向；
- 不写“欢迎探索无限可能”等泛化口号；
- 首页只需要给出一个或少量可靠入口，更多资料可留在完整 Contact 页；
- 保持 Open Field：内容直接、安静、可理解，不使用高对比销售按钮。

## 2.3 第 3 步：已选 Lab / 参考代码

- `P-09`：`E — Open Field`
- 选项含义：只给真实可用的联系方式和一句合作说明，不写营销口号。

可直接查看：

- [P-09-E Open Field](../../../output/component-lab-remaining-v0.1/index.html#P-09-E)
- [Component Contract 中的 P-09 记录](../08-Component-Contract-v0.1/component-contract-v0.1.md#5-home-now-页面模块)
- [用户的 P-09 选择](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-39x5.md#28-p-09-contact-collaboration-cta)

## 2.4 第 4 步：将来需要修改的具体位置

- [src/pages/index.astro](../../../src/pages/index.astro#L86)：Home CTA 的文案、入口数量和链接层级；
- [src/styles/home.css](../../../src/styles/home.css#L419)：`.home-contact`、`.home-contact-card`、`.home-contact-card.email` 及响应式规则；
- [src/site-content/settings/links.json](../../../src/site-content/settings/links.json)：真实联系方式和链接来源；
- [src/pages/contact.astro](../../../src/pages/contact.astro)：只有当 Home 与完整 Contact 的共享数据/交互边界需要调整时才修改；
- [src/styles/global.css](../../../src/styles/global.css#L600)：如果 QR dialog 的共享样式影响 Contact 页面，才触及这里。

### 明确不在本组件内修改

- Home Hero 的两个按钮；
- SiteHeader / 主导航；
- 完整 Contact 页的信息架构；
- 不新增未经 Maki 确认的社交账号或合作承诺。

## 2.5 第 5 步：请 Maki 判断

### CTA-01：首页显示哪些联系入口？

- [x] A（建议）：继续只显示微信和邮箱；其他社交/作品链接留在完整 Contact 页；
- [ ] B：把 GitHub 也加入 Home；
- [ ] C：把所有已准备好的社交/作品入口都放进 Home；
- [ ] D：我的自定义意见：________。

### CTA-02：微信卡片点击后的路径

- [ ] A（建议）：继续进入 `/contact/`，在完整联系页查看二维码和其他入口；
- [ ] B：Home 直接打开二维码 dialog；
- [ ] C：Home 卡片直接链接二维码图片；
- [x] D：我的自定义意见：home 页把二维码撤掉，把“主要联系入口 · 查看二维码”直接改为我的微信号”Maki3991“

### CTA-03：Home 联系区块的主次关系

- [x] A（建议）：保持微信为主要说明入口，邮箱作为同级但更轻的备用入口；
- [ ] B：改为邮箱作为第一联系入口，微信作为补充；
- [ ] C：不区分主次，两个入口使用完全相同的视觉权重；
- [ ] D：我的自定义意见：________。

### CTA-04：联系区块文案

- [x] A（建议）：保留当前“如果你想继续聊”和合作/求职/交流说明；
- [ ] B：标题改为更直接的“联系我”，减少口语感；
- [ ] C：只保留联系方式，移除说明文字；
- [ ] D：我的自定义意见：________。

---

# 3. Footer / 页面结尾与跨组件响应式

对应选择：`S-07 Footer` + `P-10 页面结尾与下一步入口`

## 3.1 第 1 步：当前实现扫描

### 共享 Footer

[BaseLayout](../../../src/layouts/BaseLayout.astro#L20) 在所有页面统一渲染 [SiteFooter](../../../src/components/SiteFooter.astro#L5)：

- Footer 当前只有两段文字：
  - `Maki 羽轩 · 长期工作档案`
  - `内容会随着真实工作持续更新。`
- [src/styles/global.css](../../../src/styles/global.css#L670) 给它设置顶部细线、左右分布和上下内距；
- `main` 和 `.site-footer` 共用 `min(1120px, calc(100% - 32px))` 内容宽度；
- 640px 以下 Footer 改为纵向排列；
- Home、Archive 会分别覆盖 Footer 的边线/文字颜色，以适配冷灰蓝 Working Archive 背景。

### 页面结尾

目前不同页面的“结束”方式不一致：

- Home：最后是 Contact 区块，然后紧接共享 Footer；没有单独的“下一步”入口；
- Archive：列表之后有 `NEXT` 文字说明，但 [src/pages/archive.astro](../../../src/pages/archive.astro#L60) 中它目前只是 `<p>`，不是链接；
- 详情页：Evidence 后直接结束，随后进入共享 Footer；
- 因此 `P-10` 当前只有部分实现，尚未形成可继续浏览的明确路径。

### 当前主要风险

1. Footer 仍是全站共享的最小结构，但全局样式和 Home/Archive 的冷色覆盖分散在多个 CSS 文件中；
2. 如果直接往 Footer 塞入很多链接，它会变成第二个主导航或社交链接墙；
3. Archive 的 `NEXT` 目前没有行动入口，文案说“内容稳定后再考虑筛选”，但访客无法从这里继续；
4. 若把每个页面都强行加“下一步”，可能破坏详情页的阅读收束；
5. 移动端需要确保 Footer、Contact 卡片和 Archive footnote 的文本不产生横向溢出；目前 CSS 已有单列规则，但尚未作为这一批组件统一验收。

## 3.2 第 2 步：设计库约束

- Footer 是档案的最后一条边界，不承担全部导航；
- 只保留真实联系、必要外部入口、更新时间或一个自然的下一步；
- P-10 的“下一步”应帮助访客继续浏览，但不能变成 CTA 墙；
- 优先使用一条清楚的链接和少量事实，不使用高对比销售式结尾；
- 同一 Footer 结构可以共享，颜色应服从各页面的 Working Archive token；
- 移动端采用自然纵向流，不启用滚动接管或复杂固定定位。

## 3.3 第 3 步：已选 Lab / 参考代码

- `S-07`：`E — Open Field`
  - Footer 极简，只保留姓名、更新日期和一个下一步；
- `P-10`：`E — Open Field`
  - 页面结尾只保留一个最合理的下一步，不变成导航墙。

可直接查看：

- [S-07-E Open Field](../../../output/component-lab-remaining-v0.1/index.html#S-07-E)
- [P-10-E Open Field](../../../output/component-lab-remaining-v0.1/index.html#P-10-E)
- [Component Contract 中的 S-07 / P-10 记录](../08-Component-Contract-v0.1/component-contract-v0.1.md#6-共享-shell-与页面模块)
- [用户的 S-07 / P-10 选择](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-39x5.md#7-s-07-footer)

## 3.4 第 4 步：将来需要修改的具体位置

- [src/components/SiteFooter.astro](../../../src/components/SiteFooter.astro#L5)：Footer 字段、链接和更新时间；
- [src/styles/global.css](../../../src/styles/global.css#L670)：共享 Footer 布局和移动端规则；
- [src/styles/home.css](../../../src/styles/home.css#L496)：Home 对 Footer 的颜色覆盖；
- [src/styles/archive.css](../../../src/styles/archive.css#L17)：Archive 对 Footer 的颜色覆盖；
- [src/pages/index.astro](../../../src/pages/index.astro#L86)：Home 的最后一个 Contact 区块；
- [src/pages/archive.astro](../../../src/pages/archive.astro#L60)：Archive 的 `NEXT` 页面结尾；
- 如果详情页也增加下一步入口，再触及 [src/pages/archive/[slug].astro](../../../src/pages/archive/[slug].astro#L100) 和对应 `archive-detail.css`。

### 明确不在本组件内修改

- 主导航的栏目数量和顺序；
- Home Hero / Live Index / Workbench；
- Archive 列表和详情正文；
- 不自动添加回到顶部按钮、社交链接或更新时间，除非第 5 步确认。

## 3.5 第 5 步：请 Maki 判断

### FOOT-01：共享 Footer 的内容

- [x] A（建议）：保持当前两行极简 Footer；
- [ ] B：加入一个 Contact 链接和一个 Archive 链接，但不放全部社交账号；
- [ ] C：加入 Contact、Archive、GitHub、更新时间等多个辅助入口；
- [ ] D：我的自定义意见：________。

### FOOT-02：Home 是否增加显式“下一步”入口？

- [x] A（建议）：Home 以 Contact 结束，不再追加链接，避免尾部重复导航；
- [ ] B：在 Contact 下方增加一条轻量的“查看完整 Archive →”；
- [ ] C：增加“Archive + About + Contact”多个下一步入口；
- [ ] D：我的自定义意见：________。

### FOOT-03：Archive 的 `NEXT` 是否变成真实链接？

- [ ] A：保留当前说明文字，不增加链接；
- [ ] B（建议）：把它改成一条轻量的“继续查看 Archive / 相关记录”入口；
- [ ] C：改为链接到 Contact 或 About；
- [x] D：我的自定义意见：我不太清楚next的意义是什么？和now有什么区别和联系？

### FOOT-04：Footer / 页面结尾在移动端的处理

- [x] A（建议）：保持自然纵向排列，允许文本换行，不加固定 Footer；
- [ ] B：移动端也保持横向排列；
- [ ] C：使用固定底部工具栏；
- [ ] D：我的自定义意见：________。

---

# 4. Archive Detail Item Header + BackLink

对应选择：`C-08 ItemHeader + BackLink`、`D-01 详情页 Hero`、`D-02 项目事实与元数据`、`S-08 面包屑与返回入口`

## 4.1 第 1 步：当前实现扫描

### 当前详情页结构

详情页位于 [src/pages/archive/[slug].astro](../../../src/pages/archive/[slug].astro#L66)：

- 顶部是一个简单的 `← 返回 Archive` 链接，目标为 `/archive/`；
- `archive-detail-header` 内依次放置：
  1. 编号、类型、状态 kicker；
  2. 项目标题 h1；
  3. 项目摘要；
  4. Period、Role、Visibility 三列元数据；
- 之后才进入 `HOW I CONTRIBUTED`、Outcomes、Public Boundary 和 Evidence；
- 静态路径只为 `public` 或 `public-anonymized` 条目生成，当前可公开的四个 Archive 条目都可以进入详情。

当前 [maki-english 详情页](../../../src/pages/archive/maki-english/) 的浏览器快照已经确认：

- 返回入口可见且链接到 `/archive/`；
- 标题、摘要、Period、Role、Visibility 均可见；
- 详情正文和 Evidence 继续沿用开放列表结构；
- 控制台无错误、无警告。

### 当前样式

相关样式在 [src/styles/archive-detail.css](../../../src/styles/archive-detail.css#L19)：

- 返回入口是小号 IBM Plex Mono、低对比文字；
- Header 使用底部细线和较大的上方留白；
- 标题使用很大的无衬线字体和紧字距；
- 元数据是桌面三列，列间有细竖线；
- 760px 以下 Header 和元数据自然退为单列；
- 当前 Header 本身没有圆角 Quiet Grid 表面，是开放背景上的标题区域。

### 当前结构问题

[BaseLayout](../../../src/layouts/BaseLayout.astro#L20) 已经提供了一个 `<main>`，而 [详情页](../../../src/pages/archive/[slug].astro#L62) 内部又渲染了一个 `<main class="archive-detail-page">`。浏览器快照显示为嵌套 `main`。

这是语义结构问题，不是审美选择。第 6 步实现时应把它修成单一主内容区域，同时保持现有视觉结果；不应为了视觉实验保留嵌套 `main`。

## 4.2 第 2 步：设计库约束

- 详情页首屏要快速建立“这是一条被打开的档案记录”的上下文；
- 标题、摘要和事实应优先，不能用宣传语或空白装饰占满首屏；
- D-01 已选 B — Quiet Grid：首屏使用圆角和安静表面；
- D-02 已选 E — Open Field：事实以开放行/字段排列，不堆成 Dashboard；
- S-08 已选 E — Open Field：只保留自然、可读的返回路径；
- 返回入口必须让用户知道如何回到 Archive，不需要同时堆叠复杂面包屑、返回按钮和多个导航。

## 4.3 第 3 步：已选 Lab / 参考代码

### 已有明确选项

- `D-01`：`B — Quiet Grid`
  - 参考含义：标题落在柔和表面中，适合长时间阅读和细节展开；
- `D-02`：`E — Open Field`
  - 参考含义：事实变成开放的行列表，不制造额外卡片边界；
- `S-08`：`E — Open Field`
  - 参考含义：只保留一个自然的返回链接，不增加多余导航层；
- `C-08`：`A`，记录在 [component-lab-decisions-v0.1.md](../07-Component-Lab-v0.1/component-lab-decisions-v0.1.md#L22)。这个旧的分组选择记录没有保留一个当前可直接打开的 C-08 Lab 锚点，因此本报告不凭空补写 C-08 A 的视觉细节；返回行为以更具体的 S-08 E 合同为准。

可直接查看：

- [D-01-B Quiet Grid](../../../output/component-lab-v0.2/index.html#D-01-B)
- [D-02-E Open Field](../../../output/component-lab-v0.2/index.html#D-02-E)
- [S-08-E Open Field](../../../output/component-lab-remaining-v0.1/index.html#S-08-E)
- [D-01 / D-02 的用户选择记录](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-21x5.md#16-d-01-详情页-hero)
- [S-08 的用户选择记录](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-39x5.md#8-s-08-面包屑与返回入口)

### 实现边界

D-01 B 的“圆角安静表面”只作用于详情页首屏 Header；D-02 E 的开放字段不意味着把所有信息挤成密集表格。元数据仍应保留阅读呼吸，返回链接仍应保持轻量。

## 4.4 第 4 步：将来需要修改的具体位置

- [src/pages/archive/[slug].astro](../../../src/pages/archive/[slug].astro#L62)：移除嵌套 `main`，保留单一详情页容器；
- [src/pages/archive/[slug].astro](../../../src/pages/archive/[slug].astro#L66)：返回链接的文字、位置和层级；
- [src/pages/archive/[slug].astro](../../../src/pages/archive/[slug].astro#L68)：Header kicker、标题、摘要和元数据字段；
- [src/styles/archive-detail.css](../../../src/styles/archive-detail.css#L19)：返回入口状态；
- [src/styles/archive-detail.css](../../../src/styles/archive-detail.css#L41)：Header 的表面、圆角、边线、内距和首屏节奏；
- [src/styles/archive-detail.css](../../../src/styles/archive-detail.css#L63)：标题字级、换行和最大宽度；
- [src/styles/archive-detail.css](../../../src/styles/archive-detail.css#L79)：Period / Role / Visibility 元数据布局；
- [src/styles/archive-detail.css](../../../src/styles/archive-detail.css#L198)：移动端单列和边线规则；
- [src/data/archive.ts](../../../src/data/archive.ts)：只有在确认增加新的事实字段时才修改类型；
- [src/site-content/archive/*.md](../../../src/site-content/archive/)：只在确认内容字段需要补充时修改，不把视觉决定写进内容文件。

### 明确不在本组件内修改

- 详情页正文的贡献列表；
- Outcomes、Public Boundary、Evidence 的视觉设计；
- Archive 列表的 `Selected records` 区块；
- Home 的精选卡片，除了之后按已锁定前提切换到新详情路由；
- Dark Mode。

## 4.5 第 5 步：请 Maki 判断

### DETAIL-01：详情页首屏是否执行已选的 Quiet Grid？

- [ ] A（建议，符合 D-01 B）：把标题、摘要和元数据放进一个克制的圆角安静表面；
- [x] B：保留当前开放背景和底部细线，不增加圆角表面；
- [ ] C：只给标题加表面，摘要和元数据仍留在外部；
- [ ] D：我的自定义意见：________。

### DETAIL-02：元数据保留哪些层级？

当前 kicker 已有“编号 / 类型 / 状态”，下方又有“Period / Role / Visibility”。

- [x] A（建议）：保留当前两层；kicker 负责索引上下文，三列负责可扫描事实；
- [ ] B：把类型、状态也移入下方事实区，kicker 只保留编号；
- [ ] C：下方增加技术、结果等字段，让首屏更丰富；
- [ ] D：我的自定义意见：________。

### DETAIL-03：返回入口的表达

- [x] A（建议，符合 S-08 E）：保留顶部单一的 `← 返回 Archive`；
- [ ] B：改为 `Archive / Maki English` 面包屑；
- [ ] C：同时保留返回链接和面包屑；
- [ ] D：我的自定义意见：________。

### DETAIL-04：详情页标题与摘要的密度

- [x] A（建议）：保持当前标题、摘要和事实结构，让正文尽快开始；
- [ ] B：增加一句“为什么这个项目值得看”的引导语；
- [ ] C：首屏只保留标题和摘要，把元数据下移；
- [ ] D：我的自定义意见：________。

### 非视觉修复

- [x] 修复详情页嵌套 `<main>` 的语义结构；保持视觉不变。

---

# 5. 请按这个格式回复

可以只回复字母；如果有自定义意见，直接写在对应项目后面。

## Home Selected Work

- SW-01：A
- SW-02：A
- SW-03：A

## Home Contact CTA

- CTA-01：A
- CTA-02：D
- CTA-03：A
- CTA-04：A

## Footer / Page Ending

- FOOT-01：A
- FOOT-02：A
- FOOT-03：D
- FOOT-04：A

## Archive Detail Header + BackLink

- DETAIL-01：B
- DETAIL-02：A
- DETAIL-03：A
- DETAIL-04：A

收到后进入第 6 步。第 6 步会先处理你选定的一个组件，修改后给你看本地页面，再决定是否继续下一个。
