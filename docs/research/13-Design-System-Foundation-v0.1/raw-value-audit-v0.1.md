# Raw Value Audit v0.1：当前生产样式

## 审计范围

- 文件：src/styles/global.css
- 方向依据：Design Baseline v0.2 / Working Archive / light-first
- 审计目的：区分可以保留为候选的值、旧实现、冲突值和缺失变量
- 状态：只读审计完成；本文件不代表已经批准迁移

## 1. 颜色

### 1.1 根级值

| 当前值 | 当前用途 | 判断 |
| --- | --- | --- |
| #f7f5f0 | 根背景 | legacy warm canvas；不作为 Working Archive 默认值 |
| #fffdf8 | 根 surface | legacy warm surface；不作为默认值 |
| #ffffff | surface-strong | 可作为候选 |
| #1f2523 | 根 text | 可读，但与当前冷蓝灰方向不一致 |
| #68706c | 根 muted | legacy muted |
| #ded9cf | 根 line | legacy warm line |
| #217895 | accent | 与当前方向一致，可作为候选 |
| #1d3341 | accent-strong | 与当前方向一致，可作为 text / strong 候选 |
| #b76f3b | warm | 与 LOCKED 的暖色排除冲突，应移除或隔离 |
| 0 18px 50px rgba(32, 35, 31, 0.08) | shadow | 目前是单一全局阴影，不应继续作为默认层次 |

### 1.2 页面级覆盖值

| 当前值 | 当前用途 | 判断 |
| --- | --- | --- |
| #f7f9fb | Working Archive 页面背景 | 与 Baseline light prototype 一致，保留为 provisional candidate |
| #ffffff | 页面 surface | 保留为 provisional candidate |
| #1d3341 | 页面 text / strong | 保留为 provisional candidate |
| #68808d | 页面 muted | 作为普通正文只有 4.15:1，对白底低于 4.5:1；不能作为普通正文 muted |
| #d8e2e5 | 页面 line | 可作为结构线候选，不用于正文 |
| #217895 | 页面 accent | 白底约 5.02:1，可作为链接和主要行动候选 |
| #217895 覆盖 --warm | 页面 warm | 说明旧 token 仍被兼容性使用，不能继续保留 warm 语义 |

### 1.3 直接写入和派生色

- #f7f9fb 直接写入 html background；
- #f0ece4 直接写入 contain 图片背景；
- rgba(247, 245, 240, 0.72) 用于 sticky header；
- rgba(255, 255, 255, 0.72) 用于 nav active；
- rgba(33, 120, 149, 0.08) 和 rgba(33, 120, 149, 0.14) 用于 pill；
- rgba(31, 37, 35, 0.34) 用于 dialog backdrop。

判断：下一版应把这些值映射到 semantic token 或 component token，不再让组件直接拥有独立颜色。

## 2. 字体与排印

### 2.1 当前字体

| 当前规则 | 判断 |
| --- | --- |
| Inter + ui-sans-serif + system-ui + Microsoft YaHei | 可作为 sans provisional candidate |
| Noto Serif SC / Songti SC / SimSun / Georgia | 与 LOCKED 的暖色衬线排除项冲突，应从 Working Archive 生产样式移除 |
| 没有独立 meta / mono 字体角色 | 缺失 |

### 2.2 当前直接值

- body line-height：1.7；
- brand：font-weight 750；
- nav：0.94rem；
- eyebrow：0.78rem / 800；
- h1：3rem–6.5rem / 0.95；
- page h1：3rem–5.8rem / 1.08；
- page intro：1.05rem–1.28rem / 1.8；
- h2：1.8rem–3rem / 1.15 / 800；
- h3：1.15rem / 1.35 / 800；
- headline：1.25rem–1.7rem / 700；
- card h3：1.28rem–1.75rem；
- stat number：1.7rem–2.3rem；
- body small：0.88rem–0.95rem。

判断：当前有很多局部值，但没有完整的 role-based type scale。h1、h2、h3 的衬线规则还与当前方向冲突。

## 3. 间距与尺寸

### 3.1 当前重复值

| 类型 | 当前值 |
| --- | --- |
| 页面最大宽度 | 1120px |
| 页面 gutter | 16px |
| hero / section | 40px、44px、48px |
| 常见 gap | 8px、10px、12px、16px、18px、20px、22px、24px |
| 大间距 | 26px、28px、40px、42px、48px、56px |
| 控件最小高度 | 44px |
| 内容列 | 280px、320px、760px、980px |
| 图片最大宽度 | 78% |
| QR / thumbnail | 58px、96px |
| min-width | 320px |

判断：

- 可以整理为有限的 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 阶梯候选；
- 18、22、26、28、42 等值需要在迁移时判断是内容必要还是历史遗留；
- 1120px、16px、44px 可以作为当前 layout candidate；
- 760px、980px 需要分别归入 prose、hero 或 page-content 角色。

## 4. 圆角、边框、阴影

### 当前值

- pill：999px；
- 普通容器：8px；
- 图片：6px；
- 边框：1px；
- 左侧强调线：3px；
- focus：2px outline / 4px offset；
- 阴影：单一 0 18px 50px rgba(..., 0.08)；
- sticky header 使用 blur(24px) saturate(1.3)。

判断：

- 6px / 8px 可以合并为有限 radius scale 的候选；
- pill 只保留给标签或明确的状态组件；
- 3px 左侧线应进入 component token；
- focus 规则可以作为 P0 候选；
- 默认阴影不应扩散到所有 surface；
- backdrop-filter 应作为 P1 的局部交互效果，而不是全局风格基础。

## 5. 响应式与交互

### 当前值

- 断点：900px、640px；
- body min-width：320px；
- nav 在 640px 以下变为纵向；
- hero、contact、detail、about、proof 和 card grid 在 900px 以下变为单列；
- stat grid 在 900px 以下变两列、640px 以下变一列；
- 没有 prefers-reduced-motion 规则；
- 没有统一 transition / easing token；
- sticky header z-index：20；
- dialog 有 backdrop-filter；
- 只有部分 focus-visible 规则。

判断：

- 900px / 640px 先作为观察值，不直接升级为系统断点；
- 断点应由 Hero、ArchiveRow、Detail 的内容失效位置复核；
- reduced-motion、focus、expanded、empty、disabled 需要补入 P0/P1 状态矩阵；
- z-index 和 motion token 属于 P1。

## 6. 缺失的系统变量

- text-subtle；
- surface-raised；
- accent-soft 的统一定义；
- focus semantic token；
- selection token；
- disabled token；
- success / warning / error 的使用规则；
- body / display / meta / mono 字体角色；
- role-based font-size、font-weight、line-height；
- spacing scale；
- layout max-width、prose-width、gutter token；
- radius scale；
- border scale；
- shadow scale；
- motion duration / easing；
- z-index scale；
- reduced-motion；
- empty / error / loading 状态规则；
- dark theme semantic mapping。

## 7. 审计结论

### 可以先保留为 provisional candidate

- light canvas：#f7f9fb；
- surface：#ffffff；
- strong text：#1d3341；
- accent：#217895；
- page max：1120px；
- mobile gutter：16px；
- control min-height：44px；
- focus：2px outline / 4px offset；
- sans body stack：Inter / system-ui / Microsoft YaHei。

### 必须先修正或重新判断

- 普通正文 muted：#68808d 对白底不足 4.5:1；
- 暖色根级 palette；
- warm token；
- Noto Serif SC 等标题规则；
- sticky header 的玻璃化默认处理；
- 单一全局 shadow；
- 直接写入的 spacing、type 和 radius；
- 页面级 token 覆盖。

### 需要用户视觉判断

- 最终字体和中文 fallback；
- sans-only 标题是否成立；
- muted 的具体冷灰蓝色；
- 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 间距阶梯是否太松或太紧；
- 6px / 8px 圆角是否保留；
- header 是否保留半透明和 blur；
- light canvas 的冷度；
- display 字号的最大值。
