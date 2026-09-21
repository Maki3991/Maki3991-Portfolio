# Foundation Token Decision Matrix v0.1

## 0. 文档状态

**当前有效 / P0 矩阵已建立 / 具体值仍以真实 Astro 链路为最终验收。**

这份矩阵把用户已确认的 Foundation 组合翻译成可供代码使用的 token 候选，并为每个 token 记录语义、证据和通过条件。

它不是生产 CSS。通过 DS-1 和后续真实组件验收后，才把其中状态为 `accepted` 或 `provisional` 的值迁移到共享 theme 文件和 Component Contract。

来源：

- 用户选择：[foundation-decision-v0.1.md](./foundation-decision-v0.1.md)
- 当前选定组合：[foundation-profile-selected-v0.1.md](./foundation-profile-selected-v0.1.md)
- 真实内容预览：[Foundation Preview](../../../output/foundation-preview-v0.1/index.html)
- 预览判断：[foundation-preview-review-v0.1.md](./foundation-preview-review-v0.1.md)
- Raw value audit：[raw-value-audit-v0.1.md](./raw-value-audit-v0.1.md)

## 1. 状态定义

| 状态 | 含义 |
| --- | --- |
| `accepted-combination` | 用户已经选择了这一组视觉方向，但不代表每个像素值已通过生产链路 |
| `provisional` | 已有可运行候选，已进入 Foundation Preview，等待真实页面和环境验收 |
| `proposed` | 语义和候选已经足够明确，可以在组件实现时使用，但尚未完成完整证据闭环 |
| `open` | 仍需要视觉判断、环境验证或实际状态出现后再定 |
| `deferred` | 按 P1/P2 规则暂不提前锁死 |
| `superseded` | 被后续版本或明确用户决定替代 |

## 2. 当前 Foundation Profile

| 变量组 | 当前选择 | 矩阵含义 |
| --- | --- | --- |
| Palette | A · Cold Index | 冷白页面、蓝灰结构、青蓝行动色 |
| Typography | B · Quiet Editorial | 无衬线正文 + 独立 sans display 候选 |
| Density | A · Open Field | 首屏和 section 保留明显呼吸 |
| Shape | B · Soft Surface | 主要 raised surface 使用中等圆角和轻阴影 |

这四项是当前用户决定；后续不能让 Component Lab 重新发散同类基础变量。

## 3. Token Architecture Matrix

| Token 规则 | 当前决定 | 状态 | 通过条件 | 证据 |
| --- | --- | --- | --- | --- |
| primitive → semantic → component 三层 | 组件优先使用 semantic token，只有系统定义层声明 primitive | `accepted-combination` | 新组件不直接散落 raw color / spacing / type value | Foundation contract §2 |
| semantic token 按用途命名 | 使用 `color-text-muted`，不使用 `blue-600` 作为组件 API | `accepted-combination` | 同一语义跨 Home、Archive、Detail 保持一致 | Foundation contract §6.2 |
| component token 不反向扩散 | 组件局部值只有在重复且可解释时才提升 | `accepted-combination` | 新增 ArchiveRow 不制造新的全局 spacing scale | Component Contract §9 |
| 主题通过 semantic mapping | 暗色只替换 semantic token 的值，不复制页面结构 | `deferred` | 进入 P1 暗色前保持同一 token 名称 | Foundation contract §4.1 |
| raw value 例外 | 仅允许在单次内容修饰、图片比例或浏览器兼容处使用，并在审计记录 | `proposed` | 每个例外可定位、可解释、不会形成新全局变量 | Raw value audit |

## 4. Color Matrix · Palette A / Cold Index

### 4.1 已进入预览的颜色

| Token | 当前候选值 | 语义 | 状态 | 通过条件 | 证据 |
| --- | --- | --- | --- | --- | --- |
| `--color-canvas` | `#f7f9fb` | 页面默认背景 | `provisional` | Home、Archive、Detail 都保持冷静但不发灰；无明显脏感 | 预览 + 用户选择 A |
| `--color-surface` | `#ffffff` | 普通内容表面 | `provisional` | 正文区域和列表关系清楚；与 canvas 有足够层次 | 预览 + 用户选择 A |
| `--color-surface-raised` | `#ffffff` | 语义上的抬高表面 | `provisional` | 只通过边界、圆角或阴影形成层次，不制造过多色面 | 预览 + Shape B |
| `--color-text` | `#1d3341` | 标题、正文和主要事实 | `provisional` | 与 canvas / surface 对比清楚，长文不刺眼 | 对比度初筛 + 预览 |
| `--color-text-muted` | `#556b75` | 摘要、说明、次要信息 | `provisional` | 普通正文可读，不抢过标题；不回退到旧 `#68808d` | 对比度初筛 5.61:1 + 预览 |
| `--color-text-subtle` | `#68808d` | 标签、元信息、大字号辅助文字 | `proposed` | 不用于普通正文；与 meta 尺寸和位置同时出现 | 对比度初筛 4.15:1 + 边界规则 |
| `--color-line` | `#d8e2e5` | 结构分隔线 | `provisional` | 能分组但不变成网格噪音 | 当前原型 + 预览 |
| `--color-line-strong` | `#b7c8ce` | 强分组、focus 邻近边界 | `proposed` | 移动端和低亮度屏幕仍可辨认 | 预览候选，待状态检查 |
| `--color-accent` | `#217895` | 链接、编号、主要行动 | `provisional` | 白底对比度通过；不超过页面少量强调比例 | 对比度初筛 5.02:1 + 预览 |
| `--color-accent-strong` | `#1d3341` | active、强强调、按钮 hover | `provisional` | 不与普通正文层级混淆 | 预览 + semantic mapping |
| `--color-accent-soft` | `rgba(33, 120, 149, 0.08)` | selected / 轻提示表面 | `proposed` | 只作为背景辅助，文字仍使用独立 text token | 预览 + Shape B |
| `--color-on-accent` | `#ffffff` | 强调色表面的文字 | `proposed` | 主要按钮和强调块中清晰可读 | 对比度初筛 + 预览 |
| `--color-focus` | `#217895` | 键盘 focus ring | `proposed` | 不依赖 hover，2px ring + 4px offset 清楚可见 | Foundation rule + 待真实 focus 截图 |

### 4.2 暂不全局锁死的状态颜色

| Token | 当前处理 | 状态 | 触发条件 |
| --- | --- | --- | --- |
| `--color-selection` | 候选 `rgba(33, 120, 149, .14)`；只在出现真实文本选择或 selected 状态时验证 | `open` | 浏览器文本选择、Archive selected、导航 active 同时出现时 |
| `--color-disabled` | 候选 `#9aaab1` / `#edf2f3`；必须配合不可交互和文字说明 | `open` | 页面实际出现 disabled 控件 |
| `--color-status-positive` | 不提前新增绿色 | `deferred` | 需要表达真实完成 / 可用状态时再建立 |
| `--color-status-warning` | 不提前新增黄色 | `deferred` | 需要表达待核验或边界时再建立 |
| `--color-status-negative` | 不提前新增红色 | `deferred` | 需要表达错误或不可用时再建立 |

**规则：**状态不存在时不为了“完整色板”提前添加颜色；状态出现后必须同时提供文字或结构线索，不能只靠色相。

## 5. Typography Matrix · Type B / Quiet Editorial

| Token | 当前候选值 | 语义 | 状态 | 通过条件 | 证据 |
| --- | --- | --- | --- | --- | --- |
| `--font-family-body` | `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif` | 正文、说明、列表内容 | `provisional` | 中文、英文、数字混排稳定，长摘要不拥挤 | 真实预览 |
| `--font-family-display` | `"Avenir Next", Inter, ui-sans-serif, system-ui, "Microsoft YaHei", sans-serif` | H1、主要标题、display | `open` | fallback 不可用时仍保留 B 的克制编辑感 | 预览；需目标环境检查 |
| `--font-family-meta` | `ui-monospace, SFMono-Regular, Consolas, monospace` | 编号、日期、类型、状态 | `proposed` | 信息可扫描但不压过内容 | 预览 + Component choices |
| `--font-family-mono` | `ui-monospace, SFMono-Regular, Consolas, monospace` | 代码或未来技术证据 | `proposed` | 只在技术内容出现时使用 | Foundation contract |
| `--font-size-display` | `clamp(3.25rem, 8vw, 6rem)` | Home 主标题 / 强显示文字 | `open` | 390px 不产生异常断行；桌面不压过身份与工作内容 | DS-1 Review §1 |
| `--font-size-h1` | `clamp(2.75rem, 7vw, 5rem)` | 页面标题 | `provisional` | Archive / Detail 标题有层级但不占满页面 | 预览 |
| `--font-size-h2` | `2rem` | section 标题 | `proposed` | 作为页面导航锚点清楚可见 | Foundation brief |
| `--font-size-h3` | `1.25rem` | 列表标题和小区块标题 | `proposed` | ArchiveRow 连续扫描不显得跳跃 | Foundation brief |
| `--font-size-body-lg` | `1.125rem` | Hero 摘要或关键说明 | `proposed` | 只在需要建立上下文时使用 | Token scale；待真实页面确认 |
| `--font-size-body` | `1rem` | 默认正文 | `proposed` | 长文与事实字段可持续阅读 | Foundation brief |
| `--font-size-body-sm` | `0.875rem` | 次要正文和说明 | `proposed` | 不用于核心事实或长段落 | Foundation brief |
| `--font-size-meta` | `0.75rem` | 日期、类型、编号 | `proposed` | 与 text-subtle 配合仍可读 | 预览 |
| `--font-size-label` | `0.75rem` | 控件或区块标签 | `proposed` | 不能单独承担关键信息 | 预览 |
| `--font-weight-regular` | `400` | 正文 | `proposed` | 不依赖加粗制造所有层级 | Foundation brief |
| `--font-weight-medium` | `500` | 次级强调 | `proposed` | 仅在需要增加识别时使用 | Foundation brief |
| `--font-weight-semibold` | `600` | display / 标题 | `proposed` | 标题有主张但不显得企业化 | Type B 预览 |
| `--font-weight-bold` | `700` | 主要行动、标签、强事实 | `proposed` | 重点明显但数量有限 | Foundation brief |
| `--line-height-display` | `0.98` | 大标题 | `provisional` | 中文标题不互相挤压，换行后仍有呼吸 | DS-1 Review §1 |
| `--line-height-heading` | `1.15` | H1—H3 | `proposed` | 标题块边界和下方说明清晰 | Foundation brief |
| `--line-height-body` | `1.65` | 正文 | `proposed` | 中英文混排和长摘要可读 | Foundation brief |
| `--line-height-meta` | `1.4` | 元信息 | `proposed` | 小字号不糊成一条线 | Foundation brief |
| `--tracking-display` | `-0.055em` | display 字距 | `provisional` | 大标题紧凑但不粘连 | Type B 预览 |
| `--tracking-meta` | `0.08em` | meta 字距 | `proposed` | 标签可扫描，中文不被过度拉开 | 预览 |
| `--layout-prose-max` | `35em` | 正文最大行长 | `proposed` | 宽屏 Detail 不被拉成长横线 | Foundation brief |

## 6. Spacing / Layout Matrix · Density A / Open Field

### 6.1 有限间距阶梯

| Token | 值 | 主要用途 | 状态 |
| --- | ---: | --- | --- |
| `--space-1` | `4px` | 微调、图标与文字关系 | `proposed` |
| `--space-2` | `8px` | 标签内关系、紧邻元素 | `proposed` |
| `--space-3` | `12px` | 小组内间距 | `proposed` |
| `--space-4` | `16px` | 默认内边距、移动 gutter | `provisional` |
| `--space-5` | `24px` | 卡片内边距、grid gap | `provisional` |
| `--space-6` | `32px` | 桌面 gutter、组间距 | `proposed` |
| `--space-7` | `48px` | 局部 section 间距 | `provisional` |
| `--space-8` | `64px` | Open Field 默认 section 呼吸 | `provisional` |
| `--space-9` | `96px` | 首屏或大型锚点之间 | `open` |

**约束：**不再因为单个组件感觉不舒服就新增 `18px`、`22px`、`26px`、`28px`、`42px` 等孤立全局值；如果真实内容确实需要例外，写入 component token 并说明原因。

### 6.2 页面和控件尺寸

| Token | 当前值 | 语义 | 状态 | 通过条件 |
| --- | ---: | --- | --- | --- |
| `--layout-page-max` | `1120px` | 页面最大宽度 | `provisional` | Home、Archive、Detail 共享，不因页面另设宽度 |
| `--layout-content-max` | `980px` | 主要内容列 | `provisional` | 长文和事实区有稳定阅读宽度 |
| `--layout-gutter-mobile` | `16px` | 移动边距 | `provisional` | 390px 内容不挤压、不溢出 |
| `--layout-gutter-desktop` | `32px` | 桌面边距 | `proposed` | 1120px 容器内仍有明显边界 |
| `--layout-section-gap` | `64px` | Open Field section 间距 | `open` | Home 不需要过度滚动；Archive 仍易扫描 |
| `--layout-grid-gap` | `24px` | 双栏或并列区块 | `provisional` | Home / Detail 栏位有关系但不拥挤 |
| `--layout-row-min-height` | `72px` | ArchiveRow 最小高度候选 | `open` | 四条真实条目连续扫描仍然舒服 |
| `--size-control-sm` | `36px` | 非主要小控件 | `proposed` | 不用于主要触控入口 |
| `--size-control-md` | `44px` | 默认按钮和触控目标 | `provisional` | 键盘、鼠标、触屏均可操作 |
| `--size-control-lg` | `52px` | 主要行动 | `proposed` | 不因放大而变成营销 CTA |
| `--size-target-min` | `44px` | 触控目标下限 | `provisional` | 所有主要操作不低于此尺寸 |

## 7. Shape / Depth Matrix · Shape B / Soft Surface

| Token | 当前值 | 语义 | 状态 | 通过条件 |
| --- | ---: | --- | --- | --- |
| `--radius-none` | `0` | 分隔线或硬边界 | `proposed` | 仍保留档案式结构的选择 |
| `--radius-sm` | `8px` | 输入框、小按钮 | `provisional` | 控件不显得玩具化 |
| `--radius-md` | `14px` | raised surface、featured block | `open` | 轻柔但不形成卡片墙 |
| `--radius-pill` | `999px` | 标签、状态、圆形控件 | `proposed` | 不用于普通内容容器 |
| `--border-width-thin` | `1px` | 默认结构线 | `proposed` | 分组关系清楚，线不成为噪音 |
| `--border-width-strong` | `2px` | focus / selected / 强边界 | `proposed` | 状态不只依赖色彩 |
| `--shadow-none` | `none` | 普通列表和普通内容表面 | `provisional` | ArchiveRow 仍以边框和留白为主 |
| `--shadow-soft` | `0 10px 28px rgba(29, 51, 65, 0.10)` | raised surface | `open` | Home selected work 和 Detail 不像商业模板 |
| `--focus-width` | `2px` | 键盘焦点 | `provisional` | 视觉明显且不改布局 |
| `--focus-offset` | `4px` | 焦点与表面距离 | `provisional` | 不被容器裁切 |

## 8. Responsive / Interaction Matrix

| 规则 | 当前决定 | 状态 | 证据 / 通过条件 |
| --- | --- | --- | --- |
| 移动验证基准 | `390 × 844` | `accepted-combination` | Foundation Preview 通过无水平溢出检查 |
| 页面最小宽度 | `320px` | `proposed` | 不让内容在常见窄屏直接断裂 |
| 栏位折叠 | Home、Archive、Detail 有空间时双栏，无空间时单栏 | `provisional` | 390px 预览为单栏；无水平溢出 |
| 断点来源 | 内容第一次无法成立的位置，而非设备名称 | `accepted-combination` | Foundation contract §3.7 |
| 长标题 | 允许自然换行，不截断核心标题 | `accepted-combination` | 中文 / 英文真实标题检查 |
| Hover | 只提供轻量反馈 | `proposed` | 内容和入口不依赖 hover 才能发现 |
| Focus | 2px ring + 4px offset | `provisional` | 需要在 Astro 真实链接与按钮上补截图 |
| Reduced motion | 取消非必要 transition，不影响操作 | `proposed` | 需要生产样式迁移后验收 |
| 状态线索 | 颜色之外必须有文字、边框或结构变化 | `accepted-combination` | Foundation contract §3.8 |
| Header blur | 当前预览使用实色 Header | `open` | 用户视觉判断，见 DS-1 Review §5 |
| 暗色主题 | 复用 token 名称，第二阶段再填值 | `deferred` | DS-2 前不复制页面结构 |

## 9. Component Mapping Matrix

这张表把基础 token 连接到真实锚点；它不改 Component Contract 已选的组件结构。

| 真实锚点 | 主要 token | 不应自行新增 | 当前验收重点 |
| --- | --- | --- | --- |
| Home Hero | display、heading、body、canvas、surface、space-8、layout-page-max | 新色、新字体族、新 hero 专用 spacing scale | 标题力度、头像比例、首屏滚动和中文英文混排 |
| Live Index | meta、text-subtle、line、space-3、space-4 | 额外 status 色、pill 容器 | 事实清楚，不变成 Dashboard |
| Current Workbench | meta、h3、body-sm、line、space-5、row-min-height | 每行不同高度规则 | 连续扫描、状态不抢标题 |
| Selected Work | accent-soft、surface-raised、radius-md、shadow-soft | 第二种 selected 色板 | 重点突出但不变成卡片墙 |
| ArchiveRow | meta、text-subtle、text、line、space-5、row-min-height | 每条记录不同布局 | 四条记录快速扫描，长摘要不破坏关系 |
| Archive Detail Hero | display / h1、body-lg、line、space-6 | 详情页独有字体 | 标题、事实字段和公开范围的层级 |
| Detail Evidence | h2 / h3、body、line、accent、space-5 | 证据专属装饰色 | 证据入口可核验，公开边界清楚 |

Component Contract 中已有的结构选择仍然有效；本矩阵只提供统一的基础 token，不把 Foundation 的 `Density A` 误读成覆盖组件结构选择的 `Quiet Grid` 等 Lab 结论。

## 10. Gate 状态

### DS-0 · 清单完成：可视为通过

- P0 / P1 / P2 已分类；
- raw value audit 已完成；
- 用户已选择四项 Foundation 组合；
- token 语义、候选值、开放项和证据入口已写入本矩阵；
- Component Lab 不再拥有重新发明全局基础变量的权限。

### DS-1 · 参数预览：技术通过，视觉待确认

- Home、ArchiveRow、Archive Detail 使用真实内容；
- 桌面和 390px 移动布局已检查；
- 头像资源已加载；
- 没有水平溢出；
- 仍待用户判断标题力度、字体差异、密度、形状和 Header blur。

证据：[foundation-preview-review-v0.1.md](./foundation-preview-review-v0.1.md)

### DS-2 · 进入 Component Lab：尚未开放

在 DS-1 的五项视觉判断没有完成前，不把 token 迁移到生产 CSS，也不开始新的全局组件发散。

## 11. 下一步边界

Agent 可以继续完成：

- 把 token matrix 转成非生产的 CSS variable reference；
- 为 focus、selected、disabled、empty 状态补充隔离 fixture；
- 检查真实 Astro 链路中的字体 fallback、链接和键盘焦点；
- 形成生产迁移清单。

需要用户判断后才能继续锁定：

- display 最大字号和字体 fallback 的最终选择；
- Open Field 的实际 section / row 密度；
- Soft Surface 的圆角和阴影强度；
- Header blur 是否进入共享 Header；
- 任何会改变四项已选方向的视觉替代方案。
