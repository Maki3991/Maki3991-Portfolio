# Cross-page Regression Audit v0.1

## 状态

**A 方案已确认；本轮实现与回归检查完成，待 Maki 进行最终视觉接受。**

- 日期：2026-09-18
- 范围：当前生产主链路的 Home、Archive、Archive Detail、Now、About、Contact
- 本轮：已实现确认的跨页面规范，并完成浏览器回归；未扩充内容范围
- 证据：源码扫描、桌面端浏览器运行、390×844 移动端运行、交互检查、`npm run build`
- 截图与脚本：[`output/playwright/cross-page-regression-v0.1/`](../../../output/playwright/cross-page-regression-v0.1/)

## 实施记录

- R-01：当前主链路统一使用 B 方案语义 token；Footer、body 继承色和 Contact 二维码标签不再使用旧暖色残留。
- R-02：About / Contact 的页面标题和内容标题统一为无衬线字体。
- R-03：About / Contact 改为开放的 Working Archive 页面壳层；Now 保持最小内容，只统一共享 token 和 Footer。
- R-04：未完成 Evidence、Now 整理中等真实状态保留，不伪造内容。
- 生产代码没有迁移旧的 `/projects/`、`/works/` 路由。
- 修复了 Contact 移动端链接二维码按钮造成的 20px 横向溢出。

## 1. 这轮审计要回答什么

这不是重新设计单个组件，而是检查已完成的组件放到真实页面和不同页面之间以后，是否仍然成立：

1. Home 各区块组合后是否仍然有清楚的层级、节奏和分界；
2. Archive 列表与详情页的层级、密度和跳转是否连贯；
3. Header、Footer、按钮、链接、标签等重复组件是否出现样式漂移；
4. 页面是否在桌面端和移动端都能使用；
5. 旧版样式、旧色值或旧字体是否混入当前 Working Archive 视觉系统；
6. 页面中的“待整理”内容是否仍然被诚实地表达，而不是伪装成已完成。

## 2. 当前页面链路

| 路由               | 页面职责                                                          | 当前状态                                 |
| ------------------ | ----------------------------------------------------------------- | ---------------------------------------- |
| `/`                | Home：身份、Live Index、Current Workbench、Selected Work、Contact | 可运行；四个主要区块均存在               |
| `/archive/`        | Archive 总览与记录入口                                            | 可运行；四条 Archive 记录可进入详情      |
| `/archive/[slug]/` | 单条记录的背景、贡献、结果、Evidence 和返回导航                   | 可运行；不同记录的内容长度按真实资料变化 |
| `/now/`            | 当前公开注意力与工作方向                                          | 可运行；目前仍是有意保留的最小页面       |
| `/about/`          | 个人背景和工作方式                                                | 可运行；仍保留一部分旧的通用页面壳层     |
| `/contact/`        | 联系方式与二维码                                                  | 可运行；二维码弹窗可用                   |

旧的 `/projects/`、`/works/` 不属于当前导航主链路，本轮不作为新版页面验收对象。

## 3. 已通过的检查

### 3.1 页面和构建

- 当前主链路页面均返回 HTTP 200。
- `npm run build` 成功，Astro 完成 11 个页面构建。
- `astro check` 没有 error 或 warning；只有 `output/design-direction-lab/lab.js` 中已有的 2 个 deprecated hint。
- 当前主链路的页面背景都使用 B 方案的淡蓝背景：`rgb(247, 249, 251)`。

### 3.2 响应式和边界

- 桌面端 1440×900：所有主链路页面 `overflowX = 0`。
- 移动端 390×844：所有主链路页面 `overflowX = 0`。
- 没有发现页面内容横向溢出或被固定宽度截断的问题。
- 移动端导航默认收起，打开后可以展开；点击导航链接后会关闭。

### 3.3 导航和交互

- 每个主链路路由均只有一个正确的当前导航项：Home、Archive、Now、About、Contact。
- Archive 总览的四条记录都能进入对应详情页。
- Archive 总览的 `NEXT → NOW` 链接指向 `/now/`。
- 详情页的顶部返回和底部返回都指向 `/archive/`。
- Contact 页面二维码弹窗可以打开，图片来源为 `/assets/contact/wechat.jpg`，也可以关闭。
- Home 本轮浏览和交互过程中没有观察到运行时 error 或 warning。

### 3.4 页面组合本身

- Home 区块顺序与当前约定一致：Hero → Current Workbench → Selected Work → Contact/Footer。
- Home 每个主要区块都有边界线，区块顺序清晰。
- Archive 总览和详情页之间的层级关系成立：列表负责选择，详情负责展开记录。
- 详情页均包含返回 Archive 的出口，没有发现孤立页面。
- 当前各页面的真实内容长度不同，因此详情页高度不同是内容差异，不应直接当成布局 bug。

## 4. 发现的问题

以下问题分为“明确的实现漂移”和“需要你决定的产品/内容问题”。本轮先不直接改，避免把跨页面选择一次性混在一起。

### R-01：B 方案色彩没有完全贯穿当前主链路（已处理）

**证据：**

- `src/styles/global.css` 仍保留旧版 `--bg`、`--surface`、`--text`、`--muted`、`--line`、`--warm` 等 token。
- Archive Detail 页面继承到旧的 body/footer 文本色 `#1f2523`，虽然主要标题和页面背景已经是 B 方案。
- Now、About、Contact 的 Footer 仍然使用深色旧值，而 Home、Archive Footer 使用 B 方案的 muted 色。
- Contact 的二维码占位标识仍计算为旧的暖橙色 `#b76f3b`。

**影响：**

页面单独看大多能用，但从 Home → Archive → Detail → Contact 连续浏览时，Footer、继承文本和二维码标识会出现不必要的色彩漂移。这与已经确定的“排除暖橙/暖黄/暖绿、使用 B 方案”不一致。

**建议：**统一当前主链路的语义 token；保留旧路由是否迁移，另行决定。

### R-02：About / Contact 的标题字体仍然是衬线体（已处理）

**证据：**

- Home、Archive、Archive Detail、Now 的主要标题计算为 Inter sans-serif。
- About、Contact 的通用 `.page-hero h1` 和相关标题仍计算为 `Noto Serif SC / Songti SC / SimSun / Georgia / serif`。
- 当前 Design Baseline 已规定默认使用无衬线体，并明确排除“暖色衬线模板感”。

**影响：**从 Archive 或 Home 进入 About、Contact 时，页面身份会突然从 Working Archive 的无衬线系统切换成旧页面的衬线标题。

**建议：**在当前主链路中统一为 B 方案的无衬线标题；不需要把所有页面改成同一个版式，但字体语义应保持一致。

### R-03：About / Contact / Now 仍有旧版页面壳层的痕迹（本轮已处理）

**证据：**

- 这些页面仍大量依赖 `global.css` 的通用 `.page-hero`、通用卡片和旧 Footer 规则。
- Home、Archive、详情页已经使用较明确的 Working Archive 结构，而 About / Contact 仍更接近早期通用页面模板。
- Now 是有意保留的最小页面，目前不应因为“内容少”而强行塞入额外区块。

**影响：**页面都能运行，但跨页面的“同一个长期个人档案站”感受还没有完全统一。

**这不是本轮必须立刻修的单一 CSS bug。**它涉及页面壳层、内容密度和页面定位，应该单独作为一个小批次处理。

### R-04：内容就绪状态还没有完全统一（保持开放）

当前页面有几种真实但不同的内容状态：

- Archive 总览说明公开证据和后续筛选会逐步补充；
- `ai-product-content-internship` 的 Evidence 当前只有“公开证据正在整理”；
- `lpt-delivery` 的 Evidence 仍标记为 pending；
- `adventurex-readage` 仍标记为 public-pending-copy；
- `maki-english` 的历史播放量口径仍有未统一说明；
- Now 明确是“页面正在整理”。

这些不属于代码故障，反而是目前较诚实的状态表达。但如果网站要公开给面试官或合作方，应该明确哪些页面可以在内容未完全补齐时上线。

### R-05：部分低优先级规则存在差异

- Archive Header 的半透明背景计算为约 `.86`，其他页面约 `.94`；目前没有造成使用问题。
- 详情页长度因内容不同而不同，不建议为了“整齐”强行统一高度。
- Home 的区块高度和留白较多，但区块边界清楚；这更接近视觉偏好问题，不是本轮发现的响应式故障。

## 5. 需要 Maki 确认的决策

### 决策 1：是否把 B 方案完全贯穿当前主链路？

- [x] **A（建议）**：统一 Home、Archive、所有详情页、Now、About、Contact 的 body、Footer、二维码标识和共享文本为 B 方案语义 token；旧 `/projects/`、`/works/` 暂不迁移。
- [ ] **B**：保留当前页面之间的旧色值差异。

### 决策 2：About / Contact 是否统一为无衬线标题？

- [x] **A（建议）**：统一为当前 Working Archive 的无衬线标题；保留各页面自身的内容结构。
- [ ] **B**：保留 About / Contact 的衬线标题，把它当作有意的页面差异。

### 决策 3：是否单独安排一次“次要页面壳层统一”？

- [x] **A（建议）**：下一轮只处理 About、Contact、Now 的页面壳层与共享 Footer，使其与当前 Working Archive 语言一致；不趁机扩充 Now 内容。
- [ ] **B**：暂时接受这三个页面的轻量旧壳层，先继续补充 Archive 内容。

### 决策 4：首版公开时如何处理未完成内容？

- [x] **A（建议）**：保留真实的 pending / 整理中标记，允许页面先上线；后续按资料准备度逐步补 Evidence 和复制文案。
- [ ] **B**：在 Evidence 或文案未齐之前，不把对应记录作为首批公开内容。

## 6. 推荐的下一步顺序
## 5.1 最终回归证据

- 桌面端 1440×900：9 条主链路均返回 200，横向溢出均为 0。
- 移动端 390×844：9 条主链路均返回 200，横向溢出均为 0；Contact 的初始 20px 溢出已修复。
- 计算样式：当前主链路 body 均为 B 文字/背景，Footer 均为 B muted；About / Contact 标题为无衬线；Contact 二维码标签不再使用暖橙色。
- 交互：移动菜单展开/关闭、二维码弹窗、当前导航、Archive 详情入口、NEXT → NOW、详情返回均通过。
- 浏览器控制台：最终检查 0 errors、0 warnings。
- `npm.cmd run build`：11 个页面构建成功，0 errors、0 warnings、2 个已有 Lab hint。

如果你选择 1A、2A、3A，建议顺序是：

1. 先统一当前主链路的 B 方案共享 token、Footer 和 Contact 旧暖色残留；
2. 再统一 About / Contact 标题字体；
3. 再做 About / Contact / Now 页面壳层的小批次调整；
4. 最后根据决策 4 检查 Archive 内容的公开状态；
5. 修改后重新跑桌面端、移动端、交互和 `npm run build`，形成最终的跨页面验收记录。

如果你选择保留旧壳层，则只需要先处理你明确不想要的色彩漂移和字体漂移，其他内容可以暂缓。

## 7. 给下一个 Agent 的最小上下文

下一个 Agent 在继续前应读取：

1. 本文件；
2. `docs/research/05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md`；
3. `docs/research/08-Component-Contract-v0.1/component-contract-v0.1.md`；
4. `docs/research/11-Page-Implementation-Workflow-v0.1/README.md`；
5. 用户填写并确认后的本文件第 5 节。

用户已经确认 A 方案；后续 Agent 不要重新合并或扩大 R-01、R-02、R-03 的范围，也不要因为 Now 内容较少而自行增加页面内容。
