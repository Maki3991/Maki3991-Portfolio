# Component Contract v0.1：Working Archive

状态：当前有效 / 选定结果待真实 Astro 链路验证

更新时间：2026-09-15

## 0. 这份文件的目的

这不是风格形容词清单，也不是把 Lab 的 HTML/CSS 直接复制到生产站点。它是给没有当前对话上下文的 Agent 使用的设计执行合同：说明网站为什么这样设计、每个组件选择了什么、可以引用哪些硬性样例、第一版实现到哪里，以及怎样验收。

新 Agent 读取本文件后，应该能够：

- 不重新猜测 Working Archive、亮色优先和反 AI 模板感的总方向；
- 根据 60 个组件的选择结果实现第一条真实链路；
- 找到对应的 Lab 锚点、截图和实验代码；
- 知道哪些规则必须遵守、哪些内容可以调整；
- 在真实内容验证失败时只修改局部组件，而不是推翻全站。

本版本仍是 **v0.1**：选择已经完成，但生产实现尚未通过真实内容、响应式、可访问性和维护性验收。不要把所有 `[PROVISIONAL]` 选择误写成永久不可修改的像素规定。

## 1. 新 Agent 阅读顺序与权威关系

### 先读

1. 本文件：当前设计决策和实现边界；
2. [Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)：整体方向、主题策略和验收边界；
3. [Site Map v0.1](../06-Site-Architecture-v0.1/site-map-v0.1.md)：页面职责和跳转关系；
4. 当前真实内容：`src/site-content/`、`src/data/`、`public/assets/`。

### 需要核验时再读

- [21×5 选择表](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-21x5.md)；
- [39×5 选择表](../07-Component-Lab-v0.1/component-selection-decisions-v0.2-39x5.md)；
- [21×5 Lab](../../../output/component-lab-v0.2/index.html)；
- [39×5 Lab](../../../output/component-lab-remaining-v0.1/index.html)。

### 权威优先级

1. 用户最新明确决定；
2. 本 Contract 中标记为 `[LOCKED]` 的规则；
3. 本 Contract 中的组件选择和融合规则；
4. Design Baseline 与 Site Map；
5. Lab 样例、实验代码和旧版 `src/`。

如果旧版 `src/` 或旧版 Component Map 与本文件冲突，以本文件为设计方向依据；旧代码只能作为迁移审计材料，不能自动继承旧的暖色衬线风格。

## 2. 网站目标与非目标

### [LOCKED] 目标

- 网站是可以长期存在、持续更新的个人工作档案，不是一次性简历页或作品海报；
- 先让访客看见 Maki 当前正在做什么，再理解项目、作品、证据和工作方法；
- 同时服务面试官、潜在合作伙伴、普通访客和未来的自己；
- 新增栏目时优先新增内容记录和既有 index/detail 关系，不重新发明一套 UI；
- 真实事实、真实项目、真实链接和可核验证据优先于装饰。

### [LOCKED] 非目标

- 不把网站做成企业后台、实时数据 Dashboard 或个人操作系统；
- 不用大面积渐变、玻璃拟态、暖色衬线体、模板化 AI 文案或虚假指标制造“高级感”；
- 不为了展示技术而加入滚动劫持、复杂全屏转场、Canvas/WebGL 或高维护成本动效；
- 不在第一轮实现 X 组未来页面和实时数据功能。

## 3. 当前设计状态

| 状态 | 含义 | 当前内容 |
|---|---|---|
| `[LOCKED]` | 后续 Agent 不应自行改方向；如需改变，先报告冲突 | Working Archive、亮色优先、暗色同构、内容优先、真实证据优先、视觉排除项 |
| `[PROVISIONAL]` | 已由 Maki 在 Lab 中选择，但尚未通过真实页面验收 | 本文件第 7 节的 60 个组件决定 |
| `[OPEN]` | 不能擅自锁死 | 最终字体、最终色值、具体圆角/阴影/间距数值、主题切换具体交互、Projects/Works 合并方式、完整未来路由 |
| `[PROPOSED]` | 本 Contract 为了让 Agent 能推进而提出，尚未由 Maki 单独确认 | P0-L / P0-D / P1 的实现优先级，以及首条链路的具体文件迁移边界 |

当前原则：方向和组件选择已经收敛；实现细节仍需要用真实内容验证。新 Agent 可以实现，但不能把 `[OPEN]` 或 `[PROPOSED]` 当成已获用户确认的永久决定。

## 4. 全局视觉合同

### 4.1 整体气质

关键词只能作为起点，必须翻译成可观察规则：冷静、清晰、克制、开放留白、编辑式索引、正在生长的工作档案。页面应当像一个个人工作台和档案，而不是 SaaS 后台。

### 4.2 信息优先级

默认顺序：

1. 当前状态 / 正在做什么；
2. 项目和作品；
3. 证据、方法和关键判断；
4. Notes / Writing / Reading 等可持续内容；
5. About / Now / Contact。

### 4.3 颜色语义

实现必须使用语义 token，不在单个组件中散落硬编码颜色：

| Token | 责任 | Light 起点 | Dark 起点 |
|---|---|---|---|
| `background` | 页面背景 | `#f7f9fb` | `#0b1017` |
| `surface` | 普通区块和索引表面 | `#ffffff` | `#111923` |
| `surface-raised` | 详情、菜单和悬浮表面 | 待验证 | 待验证 |
| `text` | 标题和正文 | `#1d3341` | `#edf3fb` |
| `muted` | 次要说明 | `#68808d` | 待验证 |
| `line` | 细线和边界 | `#d8e2e5` | 待验证 |
| `accent` | 编号、链接和主要行动 | `#217895` | `#7f9dff` |
| `accent-strong` | Hover、Active、Focus | `#1d3341` | 待验证 |
| `focus` | 键盘焦点 | 待验证 | 待验证 |

上表的 Hex 只是原型起点，不是最终值。必须在真实中文、弱文字、细线、按钮、Focus 和图片上复核对比度。

### 4.4 排印

- 正文使用可长时间阅读的无衬线字体和稳定行距；
- 元信息、日期、状态、编号和路径可以使用等宽或窄字体；
- 中文、英文、数字和标点需要统一混排规则；
- 大标题可以有明显比例，但不能依靠暖色衬线体制造风格；
- 不使用全大写长句作为正文；
- 最终字体和中文 fallback 仍为 `[OPEN]`，先用现有可验证字体实现。

### 4.5 空间、边界和图像

- 统一水平内容轨道和最大阅读宽度；
- 细线和留白负责建立秩序；
- 默认使用列表行，不把所有内容卡片化；
- 圆角只用于必要的图片、交互表面或明确容器；
- 阴影不是默认层次手段；
- 图片必须服务于作品或证据，不作为装饰占位；
- 数据必须能解释来源和意义，不制造无来源 KPI。

### 4.6 动效

- L0：颜色、下划线、透明度、轻微图标位移、Focus/Press；
- L1：菜单、主题切换和短淡入淡出，约 120–220ms；
- L2：只有能提供阅读或定位价值的轻量进度/章节反馈；
- L3：第一版排除滚动劫持、复杂全屏转场、Canvas/WebGL 和必须连续滚动才能理解的叙事；
- `prefers-reduced-motion` 下所有内容和操作仍然直接可用。

## 5. 页面范围与第一条链路

### 5.1 目标页面结构

```text
Home / Working Archive
├── Archive / Projects / Works
│   └── Archive Item Detail
├── Now
├── About（可先作为 Home 区块）
└── Contact（首版先作为区块或 Footer）
```

路由名称仍以 Site Map 为准，但 Projects / Works 是否统一为 `/archive` 是 `[OPEN]` 的迁移决策，不能在没有源码审计前擅自全站改路由。

### 5.2 首条真实实现链路

首轮只验证：

```text
共享 Header / 移动导航
→ Home / Working Archive
→ Archive 列表
→ 一个真实 Archive Item Detail
```

亮色先实现。亮色链路通过真实内容验收后，再在同一链路接入暗色；不能等所有页面做完后再整体套暗色。

### 5.3 P0 / P1 优先级提案

选择表中的“第一版处理”尚未逐项由用户勾选，因此下面是为了防止 Agent 扩大范围而提出的默认提案：

- `P0-L`：亮色第一条真实链路必须具备；
- `P0-D`：亮色通过后，在同一链路接入暗色并验收；
- `P1`：第一条链路稳定后再补入首版扩展；
- `FUTURE`：只记录设计方向，不实现页面或功能。

如果 Maki 后续确认不同优先级，以最新确认覆盖本提案；在确认前，Agent 不应实现 P1 和 FUTURE。

## 6. 内容与数据合同

- 任何个人经历、项目结果、评价、指标和链接必须回到 `src/site-content/`、`src/data/`、`public/assets/` 或用户确认；
- 不把 Lab 中的占位文字、示例数据或虚假指标带入生产页面；
- Archive 条目至少支持 `index`、`type/category`、`date/year/status`、`title`、`summary`、`evidence`、`next` 和 `link`；
- 项目详情优先按 `Context → Role → Decisions → Process → Results/Evidence → Reflection → Next` 组织；
- 没有文章时不伪造 Writing；Currently Reading 可以先是 Home/Now 的小模块；
- 新增栏目优先新增内容记录并复用 index/detail/list 关系，不复制整页 HTML。

## 7. 60 个组件的最终选择与实现解释

以下是把 21×5 和 39×5 选择表转成执行规则后的当前版本。所有组件选择默认属于 `[PROVISIONAL]`，除非另有说明。

| ID | 设计维度 | 选择 / 实现规则 | 优先级提案 | Lab 证据 |
|---|---|---|---|---|
| `F-01` | 语义颜色角色 | **B — Quiet Grid**：用柔和表面和语义色建立安静层级；强调色受控使用蓝色；禁止回到暖橙、暖黄、暖绿组合。 | `P0-L` | [B](../../../output/component-lab-v0.2/index.html#F-01-B) |
| `F-02` | 亮色 / 暗色主题映射 | **B — Quiet Grid**：亮暗主题共享同一信息架构和语义角色；暗色不是另一套页面。 | `P0-L / P0-D` | [B](../../../output/component-lab-v0.2/index.html#F-02-B) |
| `F-03` | 字体层级 | **E — Open Field**：正文优先无衬线和可读行距；标题有比例但不靠暖色衬线体制造高级感。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#F-03-E) |
| `F-04` | 中英文混排 | **E — Open Field**：中文、英文、数字、路径和标点保持稳定字面高度与行距；不让英文标签压过正文。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#F-04-E) |
| `F-05` | 等宽字体元数据 | **B — Quiet Grid**：等宽只用于日期、状态、编号、路径和小型数据，不把整页变成技术控制台。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#F-05-B) |
| `F-06` | 内容容器与最大宽度 | **E — Open Field**：用开放留白和统一最大宽度支撑长期阅读；不为每个区块重新发明容器。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#F-06-E) |
| `F-07` | 网格与栏位 | **B — Quiet Grid**：用稳定网格承载 Home 双栏、Archive 列表和详情事实区；移动端自然收为单栏。 | `P0-L` | [B](../../../output/component-lab-v0.2/index.html#F-07-B) |
| `F-08` | 间距节奏 | **B — Quiet Grid**：间距偏宽、稳定、可追加；优先保证内容呼吸和扫描，不用密度制造“专业感”。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#F-08-B) |
| `F-09` | 分隔线与边框 | **E — Open Field**：少量细线建立关系，减少容器和装饰性边框；不能让页面像卡片墙。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#F-09-E) |
| `F-10` | 形状、图像与基础动效 | **B — Quiet Grid**：圆角和图片边界柔和但克制；动效低幅度、短时、服务于状态反馈。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#F-10-B) |
| `S-01` | 桌面端 Header | **A — Editorial Rail**：Header 保留清晰路径、Wordmark 和文字导航；不承载复杂全屏动画。 | `P0-L` | [A](../../../output/component-lab-v0.2/index.html#S-01-A) |
| `S-02` | 品牌 / 姓名区块 | **E — Open Field**：姓名、身份和正在做的事尽快出现，减少 Logo 化包装和厚重容器。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#S-02-E) |
| `S-03` | 导航当前状态 | **A — Editorial Rail**：当前页面用清晰但克制的轨道、底线或索引状态标记；键盘 Focus 不能依赖颜色 alone。 | `P0-L` | [A](../../../output/component-lab-remaining-v0.1/index.html#S-03-A) |
| `S-04` | 移动端导航 | **B — Quiet Grid**：移动端使用容易发现、容易关闭的安静菜单面；不做难以回退的复杂全屏叙事。 | `P0-L` | [B](../../../output/component-lab-v0.2/index.html#S-04-B) |
| `S-05` | 主题切换入口 | **E — Open Field**：主题入口保持辅助层级，不打断阅读；切换不改变路由、内容层级和滚动位置。 | `P0-D` | [E](../../../output/component-lab-remaining-v0.1/index.html#S-05-E) |
| `S-06` | 页面标题与路径信息 | **融合：D + B**：采用 D 的反色强调效果与 B 的圆角、简洁、宽松结构；反色只在有明确状态/入口意义的地方使用，不能随机散落。 | `P0-L` | [D](../../../output/component-lab-v0.2/index.html#S-06-D) + [B](../../../output/component-lab-v0.2/index.html#S-06-B) |
| `S-07` | Footer | **E — Open Field**：Footer 极简收束，保留真实联系、外部链接、更新时间和回到顶部等必要入口。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#S-07-E) |
| `S-08` | 面包屑与返回入口 | **E — Open Field**：只保留自然、可读的返回路径；详情页必须让用户知道如何回到 Archive。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#S-08-E) |
| `S-09` | 外部链接表现 | **E — Open Field**：用文字、出口箭头和必要的类型信息区分外部链接，不把所有链接包装成按钮。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#S-09-E) |
| `S-10` | 页面状态 Shell | **D — Split Signal**：404、空状态和错误状态可以使用主题色高亮提示，并直接给出下一步行动；不使用无意义插画填空。 | `P1` | [D](../../../output/component-lab-remaining-v0.1/index.html#S-10-D) |
| `A-01` | Archive 项目列表行 | **E — Open Field**：项目、作品、Note 等内容共享可追加的开放列表行；每行有标题、摘要、状态、日期和入口。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#A-01-E) |
| `A-02` | 首页精选项目 | **融合：D + B**：第一项可用 D 的反色效果突出；其他项目保持白色或淡主题色，采用 B 的排版，不全部铺底色。 | `P0-L` | [D](../../../output/component-lab-remaining-v0.1/index.html#A-02-D) + [B](../../../output/component-lab-remaining-v0.1/index.html#A-02-B) |
| `A-03` | 状态标签 | **E — Open Field**：状态词保持简短、低干扰、可核验；不能用标签堆制造信息量。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#A-03-E) |
| `A-04` | 内容类型标签 | **E — Open Field**：PROJECT、WORK、NOTE 等类型只承担分类，不和标题争夺视觉焦点。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#A-04-E) |
| `A-05` | 更新时间元数据 | **E — Open Field**：更新时间是长期更新的事实字段，保持轻量、稳定、可扫描。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#A-05-E) |
| `A-06` | 编号与索引轨道 | **E — Open Field**：编号用于建立 Archive 阅读路径和内容索引，不做装饰性 KPI；与开放列表结构共存。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#A-06-E) |
| `A-07` | 列表行 Hover / Active | **E — Open Field**：Hover、Active 和 Focus 只提供轻量反馈，不改变布局或依赖悬停才能发现内容。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#A-07-E) |
| `A-08` | 紧凑 / 展开列表行 | **A — Editorial Rail**：紧凑行保留索引，展开时增加摘要与行动；结构要能在移动端收缩。 | `P1` | [A](../../../output/component-lab-remaining-v0.1/index.html#A-08-A) |
| `A-09` | 筛选、分组与排序 | **A — Editorial Rail**：未来内容增多后再提供明确的索引筛选；第一版不为了少量项目加入复杂控制台。 | `P1` | [A](../../../output/component-lab-remaining-v0.1/index.html#A-09-A) |
| `A-10` | 空状态与加载更多 | **E — Open Field**：空状态写清事实和下一步；加载更多只在真实内容规模需要时实现。 | `P1` | [E](../../../output/component-lab-remaining-v0.1/index.html#A-10-E) |
| `D-01` | 详情页 Hero | **B — Quiet Grid**：首屏使用圆角和安静表面建立上下文；按钮不采用 D 那种完全矩形、过度硬朗的处理。 | `P0-L` | [B](../../../output/component-lab-v0.2/index.html#D-01-B) |
| `D-02` | 项目事实与元数据 | **E — Open Field**：Role、Results、Method、Next 等事实字段开放排列，不堆成企业 Dashboard。 | `P0-L` | [E](../../../output/component-lab-v0.2/index.html#D-02-E) |
| `D-03` | 背景与问题 | **E — Open Field**：先解释项目为什么开始、面对什么问题；用具体背景替代口号。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#D-03-E) |
| `D-04` | 我的职责与贡献 | **B — Quiet Grid**：用清晰、舒适的区块区分个人职责、合作内容和 AI 协助内容。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#D-04-B) |
| `D-05` | 过程与阶段 | **B — Quiet Grid**：过程按研究、设计、实现、验证和迭代组织；阶段信息可读，不做复杂时间线动画。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#D-05-B) |
| `D-06` | 决策与被放弃方案 | **C — Dense Index**：用高密度索引记录关键选择、限制和被放弃方案；内容不足时暂不强行填充。 | `P1` | [C](../../../output/component-lab-remaining-v0.1/index.html#D-06-C) |
| `D-07` | 产物与交付链接 | **B — Quiet Grid**：Demo、代码、文档、版本和下载入口放在易读的安静表面中，外部链接保持可识别。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#D-07-B) |
| `D-08` | Evidence / 验证信息 | **A — Editorial Rail**：Evidence 沿编辑式轨道组织，允许放截图、链接、代码、测试结果和验收记录；不等于单独证据页。 | `P0-L` | [A](../../../output/component-lab-v0.2/index.html#D-08-A) |
| `D-09` | 图片、截图与代码展示 | **B — Quiet Grid**：图片、截图和代码服务于证明过程；默认使用克制的容器，不做装饰照片墙。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#D-09-B) |
| `D-10` | 更新历史与相关项目 | **E — Open Field**：项目有足够历史后再增加相关项目、前后版本和相邻条目入口。 | `P1` | [E](../../../output/component-lab-remaining-v0.1/index.html#D-10-E) |
| `P-01` | Home Hero | **B — Quiet Grid**：左侧身份/定位，右侧可放 Live Index；首屏先建立人与当前工作的关系，不做模板式宣传。 | `P0-L` | [B](../../../output/component-lab-v0.2/index.html#P-01-B) |
| `P-02` | Current Focus | **B — Quiet Grid**：用安静双栏或事实区块说明当前正在推进什么，避免个人 Dashboard 化。 | `P0-L` | [B](../../../output/component-lab-v0.2/index.html#P-02-B) |
| `P-03` | Selected Work 区块 | **融合：沿用 A-02**：第一项采用反色 selected 处理，其他项目保持白色或淡主题色，并复用 B 的排版规则。 | `P0-L` | [D](../../../output/component-lab-remaining-v0.1/index.html#P-03-D) + [B](../../../output/component-lab-remaining-v0.1/index.html#P-03-B) |
| `P-04` | Now 页面结构 | **融合：B + D**：保留 B 的左右结构和空旷感，使用 D 的局部反色强调；去掉外层多余边框，不采用 D 的上下排版。 | `P1` | [B](../../../output/component-lab-v0.2/index.html#P-04-B) + [D](../../../output/component-lab-v0.2/index.html#P-04-D) |
| `P-05` | Currently Reading | **B — Quiet Grid**：先展示当前正在读的少量内容及其与当前问题的关系，不先建复杂 Library。 | `P1` | [B](../../../output/component-lab-remaining-v0.1/index.html#P-05-B) |
| `P-06` | About 简介区块 | **B — Quiet Grid**：使用舒适、清晰的简介区块说明背景、长期兴趣和工作方式；不写空泛个人宣言。 | `P0-L` | [B](../../../output/component-lab-remaining-v0.1/index.html#P-06-B) |
| `P-07` | How I Work | **E — Open Field**：用开放文字和事实说明研究、AI 协作、实现和验收方法，不做流程图装饰。 | `P1` | [E](../../../output/component-lab-remaining-v0.1/index.html#P-07-E) |
| `P-08` | Timeline / Trajectory | **E — Open Field**：经历和方向变化以开放、可追加的记录呈现；暂不做复杂时间轴动效。 | `P1` | [E](../../../output/component-lab-remaining-v0.1/index.html#P-08-E) |
| `P-09` | Contact / Collaboration CTA | **E — Open Field**：保留直接、真实的联系入口和合作方向，不使用夸张 CTA。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#P-09-E) |
| `P-10` | 页面结尾与下一步入口 | **E — Open Field**：页面结尾提供相关内容、返回或下一步入口，保持轻量连续性。 | `P0-L` | [E](../../../output/component-lab-remaining-v0.1/index.html#P-10-E) |
| `X-01` | Notes 列表页 | **E — Open Field**：未来 Notes 使用开放列表；只有形成持续内容后才建立独立页面。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-01-E) |
| `X-02` | Note 详情页 | **E — Open Field**：未来长文复用详情结构和阅读规则，不提前做博客系统。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-02-E) |
| `X-03` | Reading / Library 页面 | **E — Open Field**：先作为 Home/Now 的 Currently Reading 模块；形成稳定判断记录后再独立成页。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-03-E) |
| `X-04` | Updates / Changelog 页面 | **E — Open Field**：未来用于长期项目进展；当前先用项目更新时间和 Next 字段承载。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-04-E) |
| `X-05` | Resume / CV 页面 | **E — Open Field**：未来为面试场景提供事实化经历摘要，不把首页变成简历模板。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-05-E) |
| `X-06` | Uses / Toolkit 页面 | **E — Open Field**：只有工具和工作方式形成稳定记录后再开放；不做装备清单炫耀。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-06-E) |
| `X-07` | Lab / Experiments 页面 | **E — Open Field**：未来承载实验和未完成作品，可复用 Archive 行和详情结构。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-07-E) |
| `X-08` | Search / Tag Index | **E — Open Field**：内容规模变大后再加入搜索和标签；不在第一版引入命令面板。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-08-E) |
| `X-09` | RSS / 订阅入口 | **E — Open Field**：形成稳定更新流后再提供订阅，不为了完整度制造空入口。 | `FUTURE` | [E](../../../output/component-lab-remaining-v0.1/index.html#X-09-E) |
| `X-10` | 实时状态 / 数据面板 | **融合：D + E**：仅保留 D 的“数据必须有来源”反色提示和 E 的具体数据框；当前明确不进入第一版。 | `FUTURE / 不实现` | [D](../../../output/component-lab-remaining-v0.1/index.html#X-10-D) + [E](../../../output/component-lab-remaining-v0.1/index.html#X-10-E) |

### 7.1 关键融合规则

- **S-06**：D 的反色强调只能作为明确的路径/状态/入口信号；B 的圆角、简洁和宽松空间是基础，不随机制造反色块。
- **A-02 / P-03**：第一项精选内容可以反色 selected；其他条目保持白色或淡主题色，并复用 B 的排版。
- **P-04**：Now 保留 B 的左右结构和空旷感，取 D 的局部反色；去掉 B 外层多余圆角边框，不使用 D 的上下排版。
- **X-10**：只保留“数据必须有来源”的警示语义和具体数据框作为未来实验；不因为有 Lab 样例就进入第一版。
- **D-01**：B 的圆角优先；如果需要按钮，不使用 D 的完全矩形按钮作为默认。

## 8. 硬性引用：Lab、实验代码与生产代码

### 8.1 Lab 视觉证据

- 21×5：`output/component-lab-v0.2/index.html`、`lab.js`、`lab.css`；
- 39×5：`output/component-lab-remaining-v0.1/index.html`、`lab.js`、`remaining.css`；
- 每个组件的表格已经提供精确锚点，例如 `#A-02-D`；融合组件必须同时查看两个或多个锚点；
- Lab 是隔离实验，不是生产组件库。不要把未选中的 CSS 或整个静态页面复制进 `src/`。

### 8.2 当前生产代码只是迁移审计材料

当前 Astro 代码入口包括：

- `src/components/SiteHeader.astro`、`SiteFooter.astro`、`SectionIntro.astro`；
- `src/components/ProjectCard.astro`、`WorkCard.astro`、`StatGrid.astro`；
- `src/pages/index.astro`、`projects.astro`、`works.astro`、`about.astro`、`contact.astro`；
- `src/data/`、`src/site-content/` 和 `public/assets/`。

这些文件必须先做只读审计，确认哪些内容模型、数据读取和事实资料可以保留。旧版全局样式中的暖色衬线视觉不能作为新方向继承来源。

### 8.3 生产代码索引的回写规则

每个组件进入生产后，在本 Contract 或后续版本补充：

| 字段 | 示例 |
|---|---|
| 生产组件 | `src/components/ArchiveRow.astro` |
| 样式/token | `src/styles/global.css` 或共享 theme 文件 |
| 数据入口 | `src/site-content/...` / `src/data/...` |
| 验收证据 | `output/playwright/...png` |
| 状态 | implemented / needs review / superseded |

不要把完整源码复制进 Contract；保留可定位的文件、行号、截图和验收结果即可。

## 9. 每个组件的实现协议

任何 Agent 开始修改某个组件前，必须完成以下步骤：

1. 扫描当前实现和内容真源；
2. 重新读取本 Contract、Baseline 和对应 Lab 锚点；
3. 明确当前组件要复用的结构、token、交互和需要放弃的旧样式；
4. 列出修改文件、影响范围、不确定项和验收方式；
5. 只实现当前组件及其明确依赖；
6. 浏览器检查桌面、约 `390 × 844` 移动视口、键盘 Focus、Hover/Click、长标题和缺少图片/证据的状态；
7. 记录截图、构建结果、控制台错误和未解决问题；
8. 通过当前 Gate 后再进入下一个组件。

Agent 遇到以下情况必须停止扩大范围并报告：

- 选择规则与真实内容冲突；
- 需要修改未授权页面或全局结构；
- 需要改变 `[LOCKED]` 方向；
- 发现 Lab 样例与生产架构不能直接对应；
- 无法判断事实、链接、指标或个人经历是否真实。

## 10. 验收 Gate

### Gate A：代码和静态检查

- Astro/TypeScript 检查和 `npm run build` 通过；
- 没有引入未选择的 Lab CSS；
- Git diff 只包含当前板块和必要的共享 token/数据变更。

### Gate B：页面行为

- 桌面和约 `390 × 844` 移动视口可读、可操作；
- 没有水平溢出；
- Header、移动菜单、返回、外部链接和主题入口可用；
- 键盘 Focus 清楚；
- 内容不依赖 Hover 才能发现；
- reduced-motion 下仍然完整可用。

### Gate C：内容与视觉

- 使用真实内容而不是占位文案；
- 长标题、中文英文混排、缺少图片/证据和长摘要都能成立；
- 视觉与 Working Archive 规则一致；
- 没有 AI 模板文案、虚假指标、无意义卡片或过度动效。

### Gate D：维护性

- 新增一个 Archive 条目主要是新增内容记录，而不是重新设计 UI；
- 组件职责和数据入口可定位；
- 暗色只改变语义 token，不复制另一套页面；
- 未来可以局部替换组件，不需要全站重写。

## 11. 选择失败和版本迭代规则

Lab 选择是经过筛选的初始假设，不是永久承诺。发现问题时按以下方式处理：

1. 先判断是内容、实现、响应式、可访问性还是视觉方向的问题；
2. 如果只是实现问题，修生产组件，不推翻选择；
3. 如果视觉方向本身不适合真实内容，只重新打开该组件的 Lab 方案；
4. 保留旧决定和验收截图，创建 `Component Contract v0.2`，不要静默覆盖 v0.1；
5. 全局方向只有在多个组件持续冲突时才重新讨论。

版本含义：

- `v0.1`：Lab 选择沉淀为可执行合同，尚未经过真实链路；
- `v0.2`：第一条真实链路验收后的修订；
- `v1.0`：亮色第一条链路、暗色同构、真实内容、响应式和维护性均通过 Gate 后的稳定合同。

## 12. 给新 Agent 的启动指令

```text
你正在协助重建 Maki 的长期个人工作档案网站。

先读取：
1. docs/research/08-Component-Contract-v0.1/component-contract-v0.1.md
2. docs/research/05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md
3. docs/research/06-Site-Architecture-v0.1/site-map-v0.1.md
4. 当前真实内容和 Git 状态。

本 Contract 是当前设计选择的执行依据。不要重新发散已选组件，不要复制未选择的 Lab CSS，不要把 X 组未来功能实现进第一版。
先只读审计现有 Astro 代码，报告 Home、Header、全局样式、Projects/Works 数据和可复用组件的迁移边界。
审计后只实现 P0-L 的第一条亮色链路：共享 Header/移动导航 → Home/Working Archive → Archive 列表 → 一个真实详情页。
每次只修改一个明确板块；改前列出文件、影响范围和验收方式；改后提供构建、截图、移动端、Focus、无溢出和控制台证据。
亮色链路通过后，再接入 P0-D 暗色主题。
如发现 Contract 与真实内容或现有架构冲突，先报告冲突和可选方案，不要擅自改变 LOCKED 规则。
```

## 13. 当前下一步

1. Maki 确认或修改第 5.3 节的 P0/P1 提案；
2. 对现有 `src/` 做只读迁移审计；
3. 按 P0-L 实现第一条亮色真实 Astro 链路；
4. 用真实内容和浏览器证据验收，再更新 Component Contract v0.2。
