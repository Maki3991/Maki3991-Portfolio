# Component Contract v0.2：Foundation-aligned production contract

状态：当前有效 / Foundation v0.1 已接受 / 组件级生产验收进行中

更新时间：2026-09-18

## 0. 版本边界

这是当前生产实现的设计执行入口。它继承 [Component Contract v0.1](./component-contract-v0.1.md) 中的 Working Archive 方向和 60 个组件选择，但把已经进入生产 CSS、并经过用户反馈收口的 Foundation 规则正式写成硬性执行合同。

v0.2 不表示所有组件已经通过最终视觉、响应式、可访问性和维护性 Gate。它表示：基础设计系统已经接受，后续工作从 Foundation 调参转入真实内容驱动的组件级验收。

## 1. 权威关系

1. 用户最新明确决定；
2. 本文件中标记为 [LOCKED] 的生产规则；
3. Component Contract v0.1 中的组件选择与融合规则；
4. Design Baseline、Site Map 和 Foundation 交接记录；
5. Component Lab 的样例、实验代码和旧版 src/。

旧版 src/ 只能作为迁移审计材料。不得把未选择的 Lab CSS、旧暖色衬线风格或占位内容带入生产。

## 2. [LOCKED] Foundation 生产规则

### 2.1 颜色

生产代码使用 src/styles/foundation-tokens.css 中的语义 token，并由 src/styles/global.css 接入：

| 角色 | Token | 当前亮色值 |
|---|---|---|
| 页面背景 | --color-canvas | #f7f9fb |
| 普通表面 | --color-surface | #ffffff |
| Raised 表面 | --color-surface-raised | #ffffff |
| 主文字 | --color-text | #1d3341 |
| 次要文字 | --color-text-muted | #556b75 |
| 细线 | --color-line | #d8e2e5 |
| 强细线 | --color-line-strong | #b7c8ce |
| 强调色 | --color-accent | #217895 |
| 强调深色 | --color-accent-strong | #1d3341 |
| 焦点 | --color-focus | #217895 |

组件不得在局部重新发明颜色。状态色、暗色主题、完整 disabled/selection/loading/error 语义仍在真实状态出现后逐项确认。

### 2.2 字体与排印

- 正文使用 --font-family-body；
- 标题使用 --font-family-display；
- 日期、编号、状态、路径和小型元信息使用 --font-family-meta 或 --font-family-mono；
- 桌面 display 最大值为 6rem，移动端按现有响应式规则收缩；
- 正文行高使用 --line-height-body，标题使用 --line-height-heading；
- 中英文、数字和标点必须在真实内容中复核，不用整页等宽字体制造控制台感。

### 2.3 空间与布局

- 页面最大宽度：--layout-page-max / 1120px；
- 内容最大宽度：--layout-content-max / 980px；
- 页面 section gap：--layout-section-gap / 64px；
- 网格 gap：--layout-grid-gap / 24px；
- 列表行最小高度：--layout-row-min-height / 72px；
- 移动端自然收为单栏，不以横向压缩保留桌面栏位。

### 2.4 圆角、边框和阴影

圆角按组件语义统一，不把所有边框元素强行变成同一种视觉对象：

| 对象 | 规则 |
|---|---|
| 封闭式卡片、图片、二维码、弹窗、主要 raised surface | --radius-md / 14px |
| 标签、状态、明确的胶囊控件 | --radius-pill / 999px |
| 纯横线列表、开放式事实区、导航链接 | --radius-none / 0 |
| raised surface | --shadow-soft |
| 列表行、普通按钮、线性区块 | --shadow-none |

导航当前页面是有意保留的例外：nav link 使用直角，active 使用 inset bottom line；导航切换按钮属于独立的封闭控件，使用 14px 圆角。这个例外不能被“全站统一圆角”的机械替换覆盖。

### 2.5 Header、焦点和动效

- Header 使用 Quiet Blur：rgba(255, 255, 255, 0.88) + blur(12px)；
- 当前导航项使用清晰但克制的底部指示线，不能只依赖颜色；
- Focus 使用 2px outline、4px offset；
- 动效保持 L0/L1 范围，使用 120–220ms token；
- prefers-reduced-motion 下内容和操作仍然直接可用。

## 3. 生产代码映射与当前状态

| 组件 / 设计维度 | 主要代码入口 | 当前状态 |
|---|---|---|
| Foundation tokens | src/styles/foundation-tokens.css、src/styles/global.css | accepted |
| Page Shell / Section Rhythm | src/styles/global.css、home.css、archive.css、secondary-pages.css | needs review |
| Header / Navigation | src/components/SiteHeader.astro、src/styles/header.css、home.css、archive.css | implemented / needs component Gate |
| Home / Working Archive | src/pages/index.astro、src/styles/home.css | foundation-synced / needs review |
| Archive list | src/pages/archive.astro、src/styles/archive.css、archive-implementation.css | foundation-synced / needs review |
| Archive detail | src/pages/archive/[slug].astro、src/styles/archive-detail.css | foundation-synced / needs review |
| Now / About / Contact | src/pages/now.astro、about.astro、contact.astro、src/styles/now.css、secondary-pages.css | foundation-synced / needs review |
| Shared footer | src/components/SiteFooter.astro 及对应页面样式 | needs review |

这里的 needs review 是组件级 Gate 状态，不代表 Foundation 需要重新选择。

## 4. 内容与数据合同

- 个人经历、项目结果、评价、指标和链接必须来自 src/site-content/、src/data/、public/assets/ 或用户确认；
- 不把 Lab 占位文案、示例数据或虚假指标带入生产；
- Archive 条目优先支持 index、type/category、date/year/status、title、summary、evidence、next 和 link；
- 项目详情优先按 Context → Role → Decisions → Process → Results/Evidence → Reflection → Next 组织；
- 新增条目主要通过新增内容记录完成，不复制整页 HTML 或重新设计 UI。

## 5. 组件级实施协议

每轮只处理一个组件或一个明确设计维度：

1. 先扫描当前结构、真实内容、CSS、脚本和受影响页面；
2. 重新读取本 Contract、Design Baseline、Site Map 和对应 Lab 锚点；
3. 写明本轮目标、影响范围、不处理的相邻问题和不确定项；
4. 只有会改变结果的不确定项才交给 Maki 做取舍；
5. 只修改当前组件及明确依赖；
6. 用真实内容检查桌面、约 390 × 844 移动视口、键盘 Focus、Hover/Click、长标题、混排和缺少证据的状态；
7. 执行 npm.cmd run build，并记录构建、控制台、溢出和未解决问题；
8. 当前组件通过后再进入下一个组件。

第一轮顺序：

1. Page Shell / Section Rhythm；
2. Header / Navigation；
3. Hero；
4. Live Index；
5. Current Workbench；
6. Selected Work；
7. Contact；
8. Footer 与跨组件响应式联调。

不把整个 Home 或整个 Archive Detail 当成一次性修改单位。

## 6. 当前不锁死的内容

- 暗色主题的最终参数与切换交互；
- disabled、selection、status、loading、error 的完整语义系统；
- 图标、媒体比例和复杂动效；
- Projects / Works 的长期路由合并方式；
- Notes、Reading、Search、RSS、实时数据面板等 FUTURE 内容；
- 旧 legacy custom property 的清理时间。

这些项目只有在真实页面或真实状态证明需要时才进入合同，不因为 Lab 中存在样例就提前实现。

## 7. 变更记录

- v0.2：Foundation v0.1 已接受；补入实际生产 token、14px/胶囊/开放列表的形状规则、raised surface 的 shadow-soft 规则，以及导航当前态的直角例外；建立组件级生产验收入口。
- v0.1：保留在 component-contract-v0.1.md，作为 21×5 与 39×5 选择和融合关系的历史来源。

## 8. 当前下一步

从 [Component Production Acceptance Queue v0.2](../11-Component-Implementation-Workflow-v0.1/component-production-acceptance-queue-v0.2.md) 的 Page Shell / Section Rhythm 开始做内部源码审计；没有重大设计取舍时直接修改，之后按“改一个 → 看一个 → 反馈一个”进入组件级生产验收。不要重新发散 Foundation，也不要在本阶段主动实现暗色主题或 FUTURE 页面。
