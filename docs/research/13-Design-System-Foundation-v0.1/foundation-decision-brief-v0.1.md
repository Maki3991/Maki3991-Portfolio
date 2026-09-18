# Foundation Decision Brief v0.1

## 状态

**待用户判断。**

本文件记录当前可以由 Agent 先提出的 provisional parameters，以及仍然需要 Maki 进行视觉判断的选择。

本文件不修改生产 CSS，也不代表以下候选已经成为最终设计系统。

## 1. 已经可以先确定的系统规则

### 1.1 Token 层级

采用三层：

1. primitive tokens：原始色值、字号、间距、圆角、时长；
2. semantic tokens：canvas、surface、text、muted、accent、focus 等用途；
3. component tokens：只描述组件内部的重复关系。

组件不得直接使用散落 raw values 代替 semantic token。

### 1.2 亮色优先

- 先确定 light theme；
- 暗色只复用同一套 semantic token；
- 暗色参数在亮色真实链路通过后再定；
- 不为暗色复制另一套页面结构。

### 1.3 当前系统方向

- Working Archive；
- 冷静、编辑式、内容优先；
- sans-first；
- metadata 可以使用 mono / narrow；
- 细线、留白和编号建立秩序；
- 不使用暖色衬线、玻璃拟态、大面积渐变、虚假指标和复杂核心动效。

## 2. 推荐先采用的 P0 候选

### 2.1 Light color profile A

| Token | 推荐候选 | 依据 | 状态 |
| --- | --- | --- | --- |
| color-canvas | #f7f9fb | 已在 Baseline prototype 和当前页面覆盖中使用 | provisional |
| color-surface | #ffffff | 当前页面 surface | provisional |
| color-surface-raised | #ffffff | 先用语义区分，避免提前制造更多色面 | provisional |
| color-text | #1d3341 | 当前页面主文字，白底约 13.11:1 | provisional |
| color-text-muted | #556b75 | 替代当前 #68808d；白底约 5.61:1 | proposed |
| color-text-subtle | #68808d | 只用于大字号、标签或非正文辅助信息 | proposed |
| color-line | #d8e2e5 | 结构线，不承担正文信息 | provisional |
| color-line-strong | #b7c8ce | 待真实页面确认 | proposed |
| color-accent | #217895 | 白底约 5.02:1，可用于链接和主要行动 | provisional |
| color-accent-strong | #1d3341 | hover / active / strong emphasis | provisional |
| color-accent-soft | rgba(33, 120, 149, 0.08) | 当前 pill 背景的整理版 | proposed |
| color-on-accent | #ffffff | accent 上的文字 | proposed |
| color-focus | #217895 | 复用 accent，减少颜色数量 | proposed |
| color-selection | 待定 | 需要浏览器真实选择态检查 | open |
| color-disabled | 待定 | 需要状态矩阵检查 | open |

当前 #68808d 不适合作为普通正文 muted，因为对白底只有约 4.15:1。

### 2.2 Typography profile A：sans-only baseline

| Token | 推荐候选 | 状态 |
| --- | --- | --- |
| font-family-body | Inter, ui-sans-serif, system-ui, Microsoft YaHei, sans-serif | provisional |
| font-family-display | 与 body 相同，先不引入衬线 | proposed |
| font-family-meta | ui-monospace, SFMono-Regular, Consolas, monospace | proposed |
| font-family-mono | ui-monospace, SFMono-Regular, Consolas, monospace | proposed |
| font-size-body | 1rem | proposed |
| font-size-body-sm | 0.875rem | proposed |
| font-size-meta | 0.75rem | proposed |
| font-size-label | 0.75rem | proposed |
| font-size-h3 | 1.25rem | proposed |
| font-size-h2 | 2rem | proposed |
| font-size-h1 | clamp(2.75rem, 7vw, 5rem) | proposed |
| font-size-display | clamp(3.5rem, 10vw, 7rem) | open |
| font-weight-regular | 400 | proposed |
| font-weight-medium | 500 | proposed |
| font-weight-semibold | 600 | proposed |
| font-weight-bold | 700 | proposed |
| line-height-body | 1.65 | proposed |
| line-height-heading | 1.15 | proposed |
| line-height-meta | 1.4 | proposed |

选择理由：

- 当前项目已经明确排除暖色衬线风格；
- sans-only 能先消除当前 serif / sans 混用；
- Inter 和系统中文 fallback 已经存在于当前 CSS；
- 具体中文字体与 display 最大字号仍需要视觉判断。

### 2.3 Spacing profile A

~~~text
space-1   4px
space-2   8px
space-3   12px
space-4   16px
space-5   24px
space-6   32px
space-7   48px
space-8   64px
space-9   96px
~~~

布局候选：

| Token | 推荐候选 | 状态 |
| --- | --- | --- |
| layout-page-max | 1120px | provisional |
| layout-content-max | 980px | provisional |
| layout-prose-max | 35em | proposed |
| layout-gutter-mobile | 16px | provisional |
| layout-gutter-desktop | 32px | proposed |
| layout-section-gap | 48px | provisional |
| layout-grid-gap | 16px | proposed |
| layout-row-min-height | 72px | open |
| size-target-min | 44px | provisional |

这套阶梯把当前 CSS 中的 8、12、16、24、48 等重复值保留下来，同时收敛 18、22、26、28、42 等局部值。

### 2.4 Shape profile A

~~~text
radius-none   0
radius-sm     6px
radius-md     8px
radius-pill   999px

border-thin   1px
border-strong 2px

shadow-none   none
shadow-soft   0 12px 32px rgba(29, 51, 65, 0.10)
~~~

规则：

- surface 默认优先使用边框和留白，而不是阴影；
- shadow-soft 只给浮层、dialog 或明确需要抬高的表面；
- pill 只给标签、状态和明确的圆形控件；
- focus 使用 2px outline 和 4px offset；
- 8px 是当前主要容器的暂定上限。

### 2.5 Motion profile A

~~~text
motion-duration-fast   120ms
motion-duration-base   180ms
motion-duration-slow   220ms
motion-ease-standard   ease-out
~~~

规则：

- 默认先让交互瞬时完成；
- 动效只承担反馈，不承担信息理解；
- prefers-reduced-motion 时取消非必要 transition；
- 第一版不引入滚动劫持和复杂页面转场。

## 3. 仍需要用户视觉判断的选择

### 3.1 字体

需要判断：

- sans-only 标题是否足够有个人识别度；
- Inter 的拉丁字形与中文 fallback 是否协调；
- 是否需要一个不同于正文的 display sans；
- metadata 使用 mono 是否符合 Working Archive 的气质；
- display 的最大字号是否过于张扬。

推荐判断顺序：

1. 先看正文和中文英文混排；
2. 再看 H1 / H2；
3. 最后看 metadata 和编号；
4. 不要只看单个字体样本。

### 3.2 色彩

需要判断：

- #f7f9fb 是否足够冷静；
- #217895 是否过于偏青；
- #556b75 是否太深；
- #d8e2e5 是否能在真实页面中形成足够分组；
- #ffffff surface 是否需要与 canvas 拉开更多距离；
- accent-soft 是否保留。

### 3.3 密度

需要判断：

- 48px section gap 是否太松；
- 1120px 页面宽度是否太宽；
- 35em 正文宽度是否适合中英文混排；
- ArchiveRow 的 72px 最小高度是否足够；
- 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 是否需要增加 20px 或 40px；
- Home 首屏是否应该保持自然内容高度。

### 3.4 形状

需要判断：

- 6px / 8px 是否仍然显得过于卡片化；
- 是否应该更多使用无圆角的列表行；
- sticky header 是否保留半透明和 blur；
- raised surface 是否真的需要阴影；
- selected Work 是否使用反色 surface。

## 4. 用户判断格式

可以直接按下面格式回复：

~~~text
字体：A / 修改
色彩：A / 修改
间距：A / 修改
形状：A / 修改
Header：保留 blur / 去掉 blur
display 最大字号：保留 / 降低
~~~

如果没有特别意见，默认先采用推荐候选作为 provisional profile，再制作 Foundation Preview；如果视觉预览证明不成立，只改 Foundation 参数，不重新发散 Component Lab。

## 5. 当前停止点

Agent 可以自行完成：

- raw value audit；
- token 分类；
- 语义命名；
- 对比度初筛；
- P0/P1 边界；
- 候选 profile；
- Foundation Gate；
- 生产迁移清单。

在没有视觉确认前，不自行锁死：

- 最终字体；
- display 比例；
- 色彩冷暖和 accent 个性；
- 页面密度；
- Header 的 blur；
- 圆角与 selected surface 的最终表现。

因此下一步应由用户先判断本文件第 2、3 节，之后再创建隔离的 Foundation Preview。
