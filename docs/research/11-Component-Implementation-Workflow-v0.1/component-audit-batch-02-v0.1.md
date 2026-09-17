# Component Audit Batch 02 v0.1

- 日期：2026-09-17
- 状态：本轮已收束；Shell 全屏方案已回退，Hero 沿用现有实现，Live Index 与 Current Workbench 已完成验收
- 本轮范围：Home Page Shell / Section Rhythm、Home Hero、Live Index、Current Workbench
- 第 6 步：已执行（Live Index、Current Workbench）；Shell 回退，Hero 无需新增代码

## 先说明：Lab 不是空的

Lab 的 index.html 是页面外壳，组件选项由同目录的 lab.js 在浏览器中动态生成，样式由 remaining.css 或对应的 Lab CSS 提供。当前 Lab 代码可以被审计和引用。

你截图中的页面是目录索引，不是组件页面：地址停在 output/component-lab-remaining-v0.1/，因此浏览器列出了 index.html、lab.js 和 remaining.css。通过本地静态服务器打开下面的完整地址即可：

http://127.0.0.1:4173/output/component-lab-remaining-v0.1/index.html

不要直接双击文件用 file:// 打开。Lab 使用 ES module，浏览器可能阻止本地模块加载。完整地址打开后，lab.js 会把 39 个组件、每个组件 5 个变体渲染到 lab-sections 中。

## 本轮的工作边界

这是一份组件审计与实现记录。本轮已根据第 5 步决定执行 Live Index 与 Current Workbench 的小批次实现。

本轮已经完成：

1. 扫描当前 Home 的 Astro、组件、样式和真实内容来源；
2. 重新对照 Design Baseline v0.2 与 Component Contract v0.1；
3. 对照已选 Lab 变体、Lab 代码和对应设计维度；
4. 定位将来修改时的具体文件和 CSS 选择器。

本轮没有做：

- 没有修改 Shell 的全屏布局方案（该方案已回退）；
- 没有把 Lab CSS 复制进生产代码；
- 没有重新审计已经完成的 Header / Navigation；
- 没有开始第 6 步实现；
- 没有把“看起来可能更好”直接当成已确认的设计决定。

第 5 步的选择已经记录在本文件末尾；本轮实现结果由队列状态和验收截图承接。下一轮请读取 Batch 03。

## 设计与代码依据

### 设计文件

- [Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)
- [Component Contract v0.1](../08-Component-Contract-v0.1/component-contract-v0.1.md)
- [Site Map v0.1](../06-Site-Architecture-v0.1/site-map-v0.1.md)
- [Component Lab Decisions v0.1](../07-Component-Lab-v0.1/component-lab-decisions-v0.1.md)
- [21 个高影响组件选择](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-21x5.md)
- [39 个其余组件选择](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-39x5.md)

### 本轮扫描的生产代码

- [Home 页面](../../../src/pages/index.astro)
- [LiveIndex 组件](../../../src/components/LiveIndex.astro)
- [WorkbenchList 组件](../../../src/components/WorkbenchList.astro)
- [BaseLayout](../../../src/layouts/BaseLayout.astro)
- [Home 样式](../../../src/styles/home.css)
- [全局样式](../../../src/styles/global.css)
- [Home 数据类型与读取](../../../src/data/home.ts)
- [Live Index 内容](../../../src/site-content/settings/home-live-index.json)
- [Current Workbench 内容](../../../src/site-content/settings/home-workbench.json)
- [Profile 内容](../../../src/site-content/settings/profile.json)
- [Home 代表项目配置](../../../src/site-content/settings/home-selection.json)

### 本轮共同结论

当前 Home 已经有一个清楚的四段结构：

1. Home Hero：Maki / 羽轩、定位句、简介、两个行动按钮、头像与 Live Index；
2. Current Workbench：当前公开的注意力和正在推进的项目/学习；
3. Selected Work：一件代表性工作；
4. Contact：继续交流的入口。

当前 Home 的视觉源存在两层：

- global.css 仍然加载旧的暖色全局 token 与通用组件规则；
- home.css 通过 body:has(.home-page) 和 Home 专属选择器覆盖成冷灰蓝、深墨色、蓝色强调的 Working Archive 方向。

这不等于现在必须重写全局样式，但它是本轮 Shell 审计中需要留意的级联边界：将来改 Home 时不能无意中把旧的暖色衬线风格带回来。

# 1. Home Page Shell / Section Rhythm

## 1.1 第 1 步：当前实现扫描

### 当前结构

Home 页面在 src/pages/index.astro 中由 home-page 包裹，主要区块按文档顺序排列：

- home-hero
- home-section：Current Workbench
- home-section：Selected Work
- home-contact

BaseLayout 继续提供共享 SiteHeader、main 和 SiteFooter。Header 已经完成过审计，本轮只把它当作固定依赖，不重新决定 Header 的样式。

### 当前布局行为

- home-hero 使用双栏 Grid：左侧身份内容，右侧头像与 Live Index；
- home-hero 使用 calc(100svh - header offset) 的最小高度，意图让首屏成为完整的开场；
- 后续 home-section 和 home-contact 主要依靠内容高度、padding 和底部边线形成段落；
- home-section-heading 目前是竖向结构：编号 kicker 在上，标题和说明在下；
- Workbench、Selected Work、Contact 各自有不同的内容密度和表面处理；
- 目前没有 CSS scroll-snap，也没有把每一个后续区块强制设为一屏高度；
- 因此滚动到 Current Workbench 或 Selected Work 时，邻近区块仍可能出现在视口边缘。

### 当前主要风险

1. Hero 有明确的首屏边界，但后续区块的“一个区块一个焦点”还没有同等强度；
2. 如果只继续增加 padding，可能得到很长的页面，却不一定得到清楚的章节节奏；
3. 如果直接加入 scroll-snap，可能违背 Baseline 对 scroll hijacking 的排除；
4. global.css 和 home.css 同时存在，未来改动必须保持 Home 的冷色、无衬线、细线系统；
5. Shell 的任务是控制区块关系，不应顺便重写 Workbench、Selected Work 或 Contact 的内部内容。

## 1.2 第 2 步：设计库约束

本组件需要遵守：

- Working Archive 是长期可更新的个人档案，不是一次性营销 Landing Page；
- 页面应该有清楚的编辑式索引感、稳定的内容轨道和足够留白；
- 信息优先级是当前状态 → 项目/作品 → 证据与方法 → 将来内容 → About / Now / Contact；
- 使用统一 max-width 和稳定 Grid；移动端退为单列；
- 用少量细线和空白分段，不做卡片墙；
- 不使用复杂滚动接管、无意义的满屏动效或为了“高级感”制造的装饰；
- Home 可以有开场 Hero，但不能让整个网站变成只展示一次的 Hero 页面。

## 1.3 第 3 步：已选 Lab / 参考代码

Shell 的已选组合不是一个单独的 CSS 样式，而是以下几项共同构成：

- C01 PageShell / ContentRail：A，记录在 Component Lab Decisions v0.1；
- F-06：E — Open Field；
- F-07：B — Quiet Grid；
- F-08：B — Quiet Grid；
- F-09：E — Open Field。

可直接回 Lab 核对：

- [F-06-E Open Field](../../../output/component-lab-v0.2/index.html#F-06-E)
- [F-07-B Quiet Grid](../../../output/component-lab-v0.2/index.html#F-07-B)
- [F-08-B Quiet Grid](../../../output/component-lab-remaining-v0.1/index.html#F-08-B)
- [F-09-E Open Field](../../../output/component-lab-v0.2/index.html#F-09-E)

这些选择共同表达的是：统一内容轨道、安静的 Grid、大留白、少量细线和较少容器，而不是把每段内容做成独立卡片。

## 1.4 第 4 步：将来需要修改的具体位置

### 首要位置

- src/pages/index.astro：四个 Home 区块的包裹关系、区块顺序和 section class；
- src/styles/home.css：home-page、home-hero、home-section、home-section-heading、home-contact 以及各断点规则；
- src/styles/home.css：Home 专属 max-width、padding、border、min-height 和相邻区块节奏；
- src/styles/global.css：只在确认存在级联冲突时处理旧的全局 token 或通用规则。

### 明确不在本组件内修改

- SiteHeader 与 SiteFooter 的已确认结构；
- LiveIndex、WorkbenchList 的内部排版；
- Selected Work 和 Contact 的具体文案；
- Archive、Now、About 页面；
- Dark Mode。

## 1.5 第 5 步：请 Maki 判断

### Shell-01：区块在视口中的节奏

- [x] A（建议）：Hero 和每个主要区块都拥有接近一屏的阅读节奏，用明确的上下留白和边线分隔，但不启用 scroll-snap；
- [ ] B：严格一屏一个区块，并启用 scroll-snap；
- [ ] C：保持当前自然内容高度，只增加边线和 padding；
- [ ] D：我的自定义意见：________。

### Shell-02：区块标题的结构

- [x] A（建议，当前 Home）：继续使用竖向编号 kicker → 标题 → 说明；
- [ ] B：改成左侧编号、右侧标题的横向结构；
- [ ] C：我的自定义意见：________。

### Shell-03：区块之间的分界

- [x] A（建议）：继续使用同一冷灰背景、少量细线和较大留白分界；
- [ ] B：为每个区块使用不同浅色背景；
- [ ] C：使用卡片、阴影或明显容器分界；
- [ ] D：我的自定义意见：________。

# 2. Home Hero

## 2.1 第 1 步：当前实现扫描

Home Hero 在 src/pages/index.astro 中直接写出内容，目前包含：

- 左侧 kicker：PERSONAL WORK ARCHIVE / BEIJING；
- h1：Maki / 羽轩；
- tagline：In it for the long haul.；
- 一段中文身份说明；
- “查看代表项目”和“联系我”两个按钮；
- 右侧头像、PHOTO / MAKI、短说明；
- 右侧 Live Index。

当前 Hero 的代码与内容有一个值得记录的特征：Hero 文案主要直接写在 index.astro 中，头像来自 public/assets/profile/maki-avatar.jpg，部分共享个人资料则来自 profile.json。将来如果希望低成本更新内容，可能需要把 Hero 文案也纳入内容文件，但这不应在没有确认前顺手改动。

当前 Hero 样式：

- 左右双栏、左重右轻；
- 大号无衬线身份标题；
- 冷灰蓝背景、深墨色文字、蓝色强调；
- 头像是带细边界的方形照片；
- Hero 有首屏最小高度，但右侧内容高度由自身决定。

当前首个行动按钮仍然使用 home-selection.json 中的旧链接 /projects/#english-media。这个链接先保留，等 Archive Detail 完成后再替换为新版详情链接；本报告不重新打开这个已经确认的决定。

## 2.2 第 2 步：设计库约束

- Hero 的任务是迅速回答“我是谁、现在在做什么、可以从哪里继续看”，不是写一段万能个人品牌宣言；
- 名字和真实定位优先于装饰；
- 使用无衬线标题、稳定的中英文混排和克制的蓝色强调；
- 头像可以作为真实证据和个人识别，不需要复杂图片动效；
- 文字应具体、可核验，避免“热爱创造价值”“连接人与可能性”等泛化 AI 句式；
- Hero 必须为后续 Current Workbench 和 Archive 留出自然入口。

## 2.3 第 3 步：已选 Lab / 参考代码

- P-01：B — Quiet Grid；
- S-02：E — Open Field；
- F-03：E — Open Field；
- F-04：E — Open Field。

可直接回 Lab 核对：

- [P-01-B Quiet Grid](../../../output/component-lab-v0.2/index.html#P-01-B)
- [S-02-E Open Field](../../../output/component-lab-remaining-v0.1/index.html#S-02-E)
- [F-03-E Open Field](../../../output/component-lab-v0.2/index.html#F-03-E)
- [F-04-E Open Field](../../../output/component-lab-v0.2/index.html#F-04-E)

融合结果应当是“左侧身份与定位、右侧真实照片和 Live Index”，不是把 Lab 中的单个卡片原样拼成 Hero。

## 2.4 第 4 步：将来需要修改的具体位置

- src/pages/index.astro：home-hero-copy、home-hero-side 的内容结构和按钮；
- src/styles/home.css：home-hero、home-hero-copy、home-kicker、home-hero h1、home-tagline、home-hero-intro、home-actions；
- src/styles/home.css：home-hero-side、home-portrait-block、home-portrait、home-portrait-note；
- public/assets/profile/maki-avatar.jpg：头像资源，如果确认更换；
- src/site-content/settings/profile.json：如果决定让 Hero 的身份资料与共享 Profile 统一；
- src/site-content/settings/home-selection.json：仅在 Archive Detail 路由完成后替换旧链接。

## 2.5 第 5 步：请 Maki 判断

### Hero-01：头像与右侧个人识别

- [x] A（建议）：保留当前真实头像和右侧短说明；
- [ ] B：保留右侧位置，但更换成新的真实照片或其他个人视觉材料；
- [ ] C：移除头像，只保留文字与 Live Index；
- [ ] D：我的自定义意见：________。

### Hero-02：首屏文字密度

- [x] A（建议）：保留当前 h1、tagline、约两行身份说明和两个按钮；
- [ ] B：保留 tagline，但把身份说明压缩成一句更短、更具体的话；
- [ ] C：移除身份说明，只留下名字、tagline 和行动按钮；
- [ ] D：我的自定义意见：________。

### Hero-03：Hero 的视觉重心

- [x] A（建议，当前方向）：名字是最大视觉锚点，tagline 作为第二层强调；
- [ ] B：缩小名字，把更多视觉权重给 tagline 和身份说明；
- [ ] C：我的自定义意见：________。

# 3. Live Index

## 3.1 第 1 步：当前实现扫描

Live Index 由 src/components/LiveIndex.astro 渲染为 dl：

- 每条记录是一个 live-index-row；
- label 输出为 dt；
- value 输出为 dd；
- 当前由 homeLiveIndex 数据驱动；
- 真实内容来自 src/site-content/settings/home-live-index.json；
- 当前有 CURRENTLY、FOCUS、BASED、OPEN TO、UPDATED 五行；
- 它位于 Hero 右侧，与头像块共同组成 Hero 的右侧信息列。

当前 CSS 使用固定的 label 列和 value 列，并用顶线、行线和较大的行高表达“索引”而不是“统计仪表盘”。长的中文 value 会自然换行。

## 3.2 第 2 步：设计库约束

- Live Index 只展示当前状态，不承担完整履历；
- 不加入虚构数字、进度条、KPI、图表或 Dashboard 控件；
- 当前状态优先，内容必须能由 Maki 定期更新；
- 标签可以使用英文索引词，但中英文混排要稳定，不能让英文装饰压过中文事实；
- 线条、留白和对齐比额外装饰更重要。

## 3.3 第 3 步：已选 Lab / 参考代码

- C07 LiveIndex：A，记录在 Component Lab Decisions v0.1；
- 与 Home 当前焦点结构相关的 P-02：B — Quiet Grid。

可直接回 Lab 核对：

- [C07 LiveIndex 的选择记录](../07-Component-Lab-v0.1/component-lab-decisions-v0.1.md)
- [P-02-B Quiet Grid](../../../output/component-lab-v0.2/index.html#P-02-B)

这里要区分两个层次：C07 是 Live Index 本身的组件选择；P-02-B 是“当前焦点/Current Focus”这类页面信息块的布局原则。它们不是同一个选择，但在 Home Hero 右侧一起工作。

## 3.4 第 4 步：将来需要修改的具体位置

- src/components/LiveIndex.astro：语义结构和行级标记；
- src/styles/home.css：live-index、live-index-row、dt、dd 及移动端 label/value 比例；
- src/data/home.ts：LiveIndexItem 类型和 JSON 读取；
- src/site-content/settings/home-live-index.json：五个事实字段及更新日期；
- src/pages/index.astro：仅在决定把 Live Index 移出 Hero 右侧时调整外层关系。

## 3.5 第 5 步：请 Maki 判断

### Live-01：Live Index 的位置

- [x] A（建议）：继续放在 Hero 右侧，和头像共同组成首屏的事实列；
- [ ] B：把 Live Index 移到 Hero 下方，作为独立的第一个区块；
- [ ] C：我的自定义意见：________。

### Live-02：字段数量

- [x] A（建议）：保留当前五行，作为稳定的当前状态快照；
- [ ] B：首屏只保留三行，把其他字段移到 Now 或 About；
- [ ] C：增加字段或改成其他结构：________。

### Live-03：长内容的处理

- [x] A（建议）：保留完整事实，允许 value 换行，label 列保持稳定；
- [ ] B：把每个 value 都压缩为很短的标签；
- [ ] C：使用省略、横向滚动或折叠；
- [ ] D：我的自定义意见：________。

# 4. Current Workbench

## 4.1 第 1 步：当前实现扫描

Current Workbench 在 Home 的第二个主要区块中使用 WorkbenchList 组件：

- section kicker：02 / CURRENT WORKBENCH；
- 标题：现在在做什么；
- 说明：这里记录我此刻愿意公开的注意力，不是完整项目清单；
- 当前有两行：个人网站更新迭代、Speedrun ETH；
- 每行包含编号、类型、标题、why 和状态；
- 数据来自 src/site-content/settings/home-workbench.json；
- 当前行没有链接，也没有详情展开；
- 组件输出为 article 列表，status 是一个带边框的 span。

当前桌面布局是四列：编号、标题信息、why、状态。移动端会退化为编号加主要内容，why 和 status 放到第二列。

## 4.2 第 2 步：设计库约束

- Workbench 是“此刻愿意公开的注意力”，不是完整项目数据库；
- 它应该让访客理解你现在正在推进什么，而不是罗列所有经历；
- 用稳定的编号行、细线和文字层级表达长期更新；
- 不做进度条、统计卡、复杂筛选或后台式 Dashboard；
- 如果未来需要更完整的项目证据，应进入 Archive Detail，而不是把 Home Workbench 无限扩展。

## 4.3 第 3 步：已选 Lab / 参考代码

- P-02：B — Quiet Grid；
- Workbench 的状态显示依赖此前选择的 A-03 Status Tag：E — 文字加细线、弱化胶囊感。

可直接回 Lab 核对：

- [P-02-B Quiet Grid](../../../output/component-lab-v0.2/index.html#P-02-B)
- [A-03-E Status Tag](../../../output/component-lab-v0.2/index.html#A-03-E)

Work­bench 应保持“文字列表”的身份。P-02-B 规定的是安静的当前焦点布局；A-03-E 只规定状态标签的表现，不能把整行变成卡片。

## 4.4 第 4 步：将来需要修改的具体位置

- src/components/WorkbenchList.astro：行的语义结构、列内容和是否增加链接；
- src/styles/home.css：workbench-list、workbench-item、workbench-number、workbench-title-block、workbench-item h3、workbench-why、workbench-status；
- src/styles/home.css：桌面四列到移动端两列的断点规则；
- src/site-content/settings/home-workbench.json：条目标题、类型、why、status；
- src/pages/index.astro：只在调整区块标题或外层关系时修改。

## 4.5 第 5 步：请 Maki 判断

### Workbench-01：条目是否可点击

- [x] A（建议）：暂时保持不可点击，把它当作当前注意力快照；
- [ ] B：每一行都可进入 Archive 或详情页；
- [ ] C：只有部分条目可点击，由数据字段决定；
- [ ] D：我的自定义意见：________。

### Workbench-02：状态的表现

- [x] A（建议，已选方向）：采用文字加细线的弱化状态，不使用明显胶囊；
- [ ] B：保留当前矩形描边标签；
- [ ] C：移除状态，只通过文案表达进行中；
- [ ] D：我的自定义意见：________。

### Workbench-03：桌面端信息密度

- [x] A（建议）：保留编号、类型/标题、why、status 四个信息层，继续用宽松横向行；
- [ ] B：减少为标题、why、status 三层；
- [ ] C：增加日期、链接或其他字段：________。

### Workbench-04：未来增长方式

- [x] A（建议）：继续追加少量当前条目；完整项目和证据进入 Archive，不在这里增加筛选器；
- [ ] B：现在就加入分类、筛选或排序；
- [ ] C：我的自定义意见：________。

# 5. 请按这个格式回复

## Home Shell

- Shell-01：A
- Shell-02：A
- Shell-03：A

## Home Hero

- Hero-01：A
- Hero-02：A
- Hero-03：A

## Live Index

- Live-01：A
- Live-02：A
- Live-03：A

## Current Workbench

- Workbench-01：A
- Workbench-02：A
- Workbench-03：A
- Workbench-04：A
