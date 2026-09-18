# Design System Foundation v0.1：Working Archive / Light-first

## 文档状态

- **状态**：当前有效 / 参数待确定
- **版本**：v0.1
- **日期**：2026-09-18
- **用途**：作为 Design Baseline 与 Component Lab 之间的基础设计系统合同
- **当前结论**：先建立有限 token 和规则，再进行组件探索；本文件暂不直接修改生产 CSS

这份文件解决的问题是：当前项目已经有 Working Archive 的方向、Component Lab 的选择和部分颜色变量，但仍缺少一套能约束字体、字号、字重、间距、布局、圆角、状态和响应式的共同系统。

它不是最终视觉稿，也不是一次性锁死所有像素。P0/P1 的 token 名称、语义角色和选择方法必须先确定；具体数值在真实内容链路通过前可以保持 PROVISIONAL，但 Component Lab 不得继续自行发明同类变量。

## 0. 权威关系与证据边界

### 0.1 权威关系

1. 用户最新明确决定；
2. 项目中已经确认的 LOCKED 方向；
3. 本 Foundation 中经过确认的 token 和基础规则；
4. Design Baseline v0.2；
5. Component Contract v0.1；
6. Component Lab 与旧生产 CSS。

本文件中的候选值在用户确认和真实内容验收前不能标记为永久规则。

### 0.2 规则类型

| 类型 | 含义 | 本文件中的用法 |
| --- | --- | --- |
| source | 设计知识库中已验证的原则 | 例如 PROCESS-005 |
| derived | 由原则组合出的实践方法 | 例如 token matrix、Foundation Preview |
| project | Maki 网站已经确认的方向和边界 | 例如 Working Archive、亮色优先 |
| task | 本轮 Foundation 的具体参数决定 | 例如正文字号候选值 |

### 0.3 适用原则

- PROCESS-002：先解决结构，再处理细节；
- PROCESS-003：用小步循环交付最小版本；
- PROCESS-004：先确定界面个性；
- PROCESS-005：用受限体系减少决策疲劳；
- HIERARCHY-001、HIERARCHY-002：先区分信息重要性，不靠缩小字号制造层级；
- LAYOUT-001、LAYOUT-002、LAYOUT-003、LAYOUT-005、LAYOUT-006：留白、尺寸阶梯、内容宽度和分组关系；
- TYPE-003、TYPE-005：正文行长与行高；
- COLOR-005、COLOR-006：对比度和非颜色状态线索；
- POLISH-003：空状态是第一条用户路径。

## 1. 当前项目方向

以下内容不在本轮重新发散：

- 网站是长期维护的个人工作档案；
- 首页方向是 Working Archive；
- 亮色是第一开发对象；
- 暗色是同一系统的第二主题；
- 内容、编号、细线、状态和真实证据优先于装饰；
- 正文默认使用无衬线；
- 元信息可以使用等宽或窄字体；
- 不回到暖色衬线体；
- 不使用大面积渐变、玻璃拟态、虚假指标、Dashboard 化数据堆叠或复杂动效作为核心体验；
- 项目、作品、文章和未来栏目优先复用同一种列表行与详情结构。

以上属于 project 约束；Foundation 的任务是把它们翻译为可以被代码和 Lab 共同使用的变量与规则。

## 2. Foundation 的三层结构

### 2.1 Primitive tokens

描述原始值或有限阶梯，例如某个颜色、字号、间距、圆角或时长。

### 2.2 Semantic tokens

描述使用意义，例如 canvas、surface、text-muted、accent、focus、space-section。

### 2.3 Component tokens

只描述组件自己的重复关系，例如 ArchiveRow 的内边距、Header 的高度或 EvidenceBlock 的媒体间距。

组件不得直接绕过 semantic token 使用 primitive token，也不得把一次性的局部值提升为全局 token。

## 3. P0：进入 Component Lab 前必须确定

P0 的要求不是所有数值必须永久不变，而是每个变量必须有：

- 明确语义；
- 候选值；
- 选择依据；
- 测试内容；
- 通过条件；
- 当前状态。

### 3.1 Token 架构变量

| 变量组 | 需要提前确定 |
| --- | --- |
| 命名 | primitive、semantic、component 的命名方式 |
| 范围 | 全局 token 与组件 token 的边界 |
| 状态 | proposed、accepted、provisional、superseded |
| 例外 | 允许 raw value 的情况和记录方式 |
| 主题 | 语义 token 不随主题改变名称 |
| 证据 | 每个已接受 token 的预览、截图或对比度记录 |

### 3.2 色彩变量

~~~text
--color-canvas
--color-surface
--color-surface-raised
--color-text
--color-text-muted
--color-text-subtle
--color-line
--color-line-strong
--color-accent
--color-accent-strong
--color-accent-soft
--color-on-accent
--color-focus
--color-selection
--color-disabled
~~~

需要同时确定：

- 正文与背景的最低对比度；
- 标题、正文、弱文字、细线的层级关系；
- 链接的默认、hover、active、visited、focus 状态；
- selected、disabled、unavailable 的非颜色线索；
- 是否需要 status colors；
- 强调色的使用范围和比例；
- 图片上文字的可读性规则；
- 组件是否禁止自行新增颜色；
- 亮色中的 semantic mapping。

### 3.3 字体与排印变量

~~~text
--font-family-body
--font-family-display
--font-family-meta
--font-family-mono

--font-size-display
--font-size-h1
--font-size-h2
--font-size-h3
--font-size-body-lg
--font-size-body
--font-size-body-sm
--font-size-meta
--font-size-label

--font-weight-regular
--font-weight-medium
--font-weight-semibold
--font-weight-bold

--line-height-display
--line-height-heading
--line-height-body
--line-height-meta
~~~

需要同时确定：

- 中文、英文、数字的字体 fallback；
- 标题与正文是否使用同一字体族；
- 可用字重数量；
- 正文行长；
- 标题最大宽度；
- 中英文混排、断行和数字格式；
- 全大写标签的适用范围；
- 长标题是否允许截断；
- 最小可读字号；
- 代码、表格、图片说明的后续排印规则。

### 3.4 间距与尺寸变量

~~~text
--space-1
--space-2
--space-3
--space-4
--space-5
--space-6
--space-7
--space-8

--size-control-sm
--size-control-md
--size-control-lg
--size-target-min
~~~

需要同时确定：

- 间距阶梯；
- 组内与组外间距；
- 页面、section、列表行和按钮的默认间距；
- 控件的最佳尺寸；
- 触控目标最小尺寸；
- 允许的密集区域；
- 是否允许出现只差 1–2px 的相邻值。

### 3.5 页面与布局变量

~~~text
--layout-page-max
--layout-content-max
--layout-prose-max
--layout-gutter-mobile
--layout-gutter-desktop
--layout-section-gap
--layout-grid-gap
--layout-row-min-height
~~~

需要同时确定：

- 页面最大宽度；
- 正文阅读宽度；
- 标题和摘要最大宽度；
- 桌面与移动端 gutter；
- 双栏、单栏和列表的默认关系；
- section 的自然内容高度；
- full-bleed 与 constrained 内容的边界；
- 图片、证据和正文的宽度关系；
- 不允许水平溢出；
- 大屏剩余空间如何保留或使用。

### 3.6 形状、边框和层次变量

~~~text
--radius-none
--radius-sm
--radius-md
--radius-pill

--border-width-thin
--border-width-strong

--shadow-none
--shadow-soft
--shadow-overlay

--focus-width
--focus-offset
~~~

需要同时确定：

- 哪些组件可以使用 pill；
- 哪些表面默认无圆角；
- 列表行和卡片的区分；
- 细线是否承担主要分组作用；
- 阴影的默认使用范围；
- raised surface、浮层和 modal 的层级；
- focus ring 不得被裁切。

### 3.7 响应式基础变量

P0 先确定响应式策略，不要求现在锁死所有断点数值：

- 从约 390 × 844 移动视口验证；
- 断点由内容失效决定，而不是由设备名称决定；
- 标题和正文不按同一比例缩放；
- 组件有空间时保持最佳尺寸；
- Header、Hero、列表和详情的折叠顺序；
- 长标题、长摘要、长标签的换行；
- 触控目标不能被压缩；
- reduced-motion 下不依赖动画完成操作。

### 3.8 基础交互与可访问性变量

至少建立这些状态集合：

~~~text
default
hover
focus
active
pressed
selected
disabled
expanded
collapsed
loading
empty
error
unavailable
visited
~~~

需要同时确定：

- 键盘焦点的视觉强度；
- hover 不是唯一信息入口；
- 状态不能只靠颜色；
- 主要操作、次要操作和第三级操作的层级；
- 按钮与链接的最小触控尺寸；
- 语义 HTML；
- heading 顺序；
- 图片 alt 与证据说明；
- reduced-motion；
- 页面缩放和窄屏可用性。

## 4. P1：进入第一条真实链路前必须确定

### 4.1 暗色主题变量

~~~text
--theme-dark-color-canvas
--theme-dark-color-surface
--theme-dark-color-surface-raised
--theme-dark-color-text
--theme-dark-color-text-muted
--theme-dark-color-line
--theme-dark-color-accent
--theme-dark-color-focus
~~~

暗色只改变 semantic token 的值，不复制另一套页面结构。

### 4.2 组件变量

- Header 的高度、间距和移动折叠；
- ArchiveRow 的行高、内边距和 selected 状态；
- IndexList 的 label/value 间距；
- Detail 的事实字段布局；
- EvidenceBlock 的媒体和文字间距；
- Button 的尺寸和层级；
- EmptyState 的说明与 CTA 间距；
- ContactCTA 的主要操作层级；
- Footer 的页面结尾节奏。

### 4.3 图像与图标变量

- 图标来源、风格和线宽；
- 图标尺寸阶梯；
- 外链、返回、展开、关闭图标；
- 头像、封面、截图、代码图比例；
- cover / contain 规则；
- 图片说明、来源和缺图状态；
- 图片在不同主题下的边框和可读性。

### 4.4 动效与层级变量

~~~text
--motion-duration-fast
--motion-duration-base
--motion-duration-slow
--motion-ease-standard
--motion-ease-emphasized
--z-base
--z-sticky
--z-overlay
--z-modal
~~~

第一版仍排除滚动劫持、复杂全屏转场和依赖连续滚动才能理解的动效。

### 4.5 内容格式变量

- 类型标签；
- 状态词汇；
- 日期与年份格式；
- 编号格式；
- 证据标签；
- external link 标记；
- project detail 字段顺序；
- 空状态、缺失证据和缺图状态；
- 中文与英文混排的展示规则。

## 5. P2：暂不提前锁死

- 所有未来页面；
- 所有未来组件变体；
- 搜索、筛选、排序、RSS；
- 实时状态和 Dashboard；
- 完整图标库；
- 尚未出现的 status colors；
- Projects / Works 的最终合并路由；
- 复杂 Canvas / WebGL；
- 每个页面的最终像素值；
- 只出现一次且不影响系统一致性的局部数值。

## 6. 具体参数的确定协议

### 6.1 Raw value audit

从当前 CSS、Lab 和真实页面抽取所有现有值，并标记：

- keep candidate；
- duplicate；
- conflict；
- legacy；
- missing。

本阶段只观察，不立即改生产 CSS。

### 6.2 Semantic mapping

先规定用途，再填写数值。

错误示例：

~~~text
这个组件使用 #217895
~~~

正确示例：

~~~text
--color-accent 用于编号、主要链接和主要行动
~~~

### 6.3 Anchor-first

每类 token 先选择锚点：

- 字体：正文；
- 颜色：正文与背景；
- 间距：页面 gutter 和正文宽度；
- 布局：Home / Archive / Detail 的内容列；
- 圆角：主要 surface；
- 阴影：raised surface；
- 断点：内容第一次无法成立的位置。

### 6.4 Candidate profiles

不要让每个组件分别产生一组值。每类参数只形成少量完整候选，例如：

- Typography A / B；
- Density A / B；
- Palette A / B；
- Radius A / B。

最后比较完整的 Foundation Profile，而不是比较互相不兼容的局部选择。

### 6.5 Real-content fixture

每个候选至少在以下锚点测试：

- Home Hero；
- ArchiveRow；
- Archive Detail；
- 中文长标题；
- 英文长标题；
- 中英文混排；
- 长摘要；
- 缺少图片；
- 空状态；
- hover / focus；
- 移动端。

### 6.6 Token Decision Matrix

每个变量都使用同一张表：

| Token | 语义 | 候选值 | 选择依据 | 测试内容 | 通过条件 | 状态 | 证据 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| --font-size-body | 正文默认字号 | 待填 | 行长、中文可读性 | Home / Detail | 正文不拥挤、不难读 | proposed | 待补 |
| --layout-prose-max | 正文最大宽度 | 待填 | 阅读行长 | Detail | 宽屏不拉长 | proposed | 待补 |
| --color-text-muted | 次要文字 | 待填 | 层级与对比度 | Home / Archive | 可读且不抢主信息 | proposed | 待补 |

### 6.7 Acceptance

Foundation 通过前必须满足：

- 同类决定来自有限 token；
- 三个锚点页面不会出现三种不同风格；
- 中文、英文和数字都能正常排版；
- 桌面和移动端均无水平溢出；
- 正文行长和行高可读；
- 颜色对比度通过；
- focus 清楚；
- 状态不依赖单一颜色；
- 空状态和缺图状态成立；
- Lab 不再直接创造新的全局字体、颜色、间距和圆角。

## 7. Foundation Gate

### Gate DS-0：清单完成

- P0/P1 变量已经分类；
- 每个变量已有语义；
- 当前 raw values 已审计；
- OPEN 项和暂缓项明确；
- 没有把组件局部值误当成全局 token。

### Gate DS-1：参数预览

- P0 已有候选值；
- Home、ArchiveRow、Detail 使用真实内容；
- 桌面、移动端、长标题、空状态和 focus 已检查；
- 颜色、排印、间距和密度能够组合成立。

### Gate DS-2：进入 Component Lab

- Lab 只能使用 Foundation token；
- 每个候选组件记录使用了哪些 token；
- Lab 不再同时修改基础字体、色板和间距；
- 用户选择的是组件结构和状态，而不是无穷的局部参数。

## 8. 当前生产迁移边界

当前 src/styles/global.css 作为迁移审计材料，不作为最终设计系统真源。

迁移时需要重点处理：

- 根级颜色 token；
- 页面级重复颜色覆盖；
- 暖色和衬线旧规则；
- 直接写入的字号、行高、间距和圆角；
- 组件中未经过系统定义的颜色；
- 缺失的 focus、disabled、empty 和 reduced-motion 规则。

本文件通过 Foundation Gate 前，不直接进行全站 CSS 替换。

## 9. 当前下一步

1. 建立 P0 Token Decision Matrix；
2. 从现有 global.css 提取 raw value audit；
3. 为字体、色板、间距和布局各准备少量完整候选；
4. 创建隔离的 Foundation Preview；
5. 通过 DS-1 后，再决定是否重新制作 Component Lab；
6. Foundation 通过真实链路后，再把已验证 token 迁移到生产 CSS。
