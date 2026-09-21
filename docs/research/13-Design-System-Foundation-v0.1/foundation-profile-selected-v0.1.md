# Foundation Profile v0.1 · 当前选定组合

## 状态

**当前有效 / 已完成视觉选择 / 数值待真实链路验收。**

这份文件是用户完成视觉判断后的当前选型记录。它覆盖此前候选简报中的“组合选择”，但不把预览中的相对感觉误写成已经通过真实网站验收的最终 token。

用户原始判断记录：[foundation-decision-v0.1.md](./foundation-decision-v0.1.md)

## 1. 已选组合

| 变量组 | 已选候选 | 解释 |
| --- | --- | --- |
| Palette | A · Cold Index | 冷白、蓝灰、清晰的 Working Archive 索引感 |
| Typography | B · Quiet Editorial | 保持无衬线，但增加克制的编辑感 |
| Density | A · Open Field | 区块之间保留明显呼吸，让项目成为视觉锚点 |
| Shape | B · Soft Surface | 使用中等圆角和轻阴影增加层次 |

这组组合优先级高于 Foundation 之前的候选推荐。后续如果真实内容链路证明某个具体数值不成立，只调整该数值，不重新发散四种视觉方向。

## 2. 当前 provisional token profile

### 2.1 Palette A · Cold Index

| Token | 当前值 | 使用边界 |
| --- | --- | --- |
| `--color-canvas` | `#f7f9fb` | 页面默认底色 |
| `--color-surface` | `#ffffff` | 普通内容表面 |
| `--color-surface-raised` | `#ffffff` | 先与 surface 共值，只保留语义区别 |
| `--color-text` | `#1d3341` | 正文、标题、主要信息 |
| `--color-text-muted` | `#556b75` | 普通弱化文字；替代旧的 `#68808d` 正文用法 |
| `--color-text-subtle` | `#68808d` | 仅用于大字号、标签和辅助元信息 |
| `--color-line` | `#d8e2e5` | 结构线，不承担正文信息 |
| `--color-line-strong` | `#b7c8ce` | 强分组线和需要更明显边界的位置 |
| `--color-accent` | `#217895` | 链接、编号、主要行动 |
| `--color-accent-strong` | `#1d3341` | active、强调和高权重状态 |
| `--color-accent-soft` | `rgba(33, 120, 149, 0.08)` | 轻量背景提示 |
| `--color-on-accent` | `#ffffff` | 强调色表面的文字 |
| `--color-focus` | `#217895` | 键盘焦点 |

`selection`、`disabled`、status colors 仍需在真实状态矩阵中确定。

### 2.2 Typography B · Quiet Editorial

B 不是重新引入衬线体，而是在无衬线基础上给 display 层一个较克制的编辑感。当前先采用以下可验证候选：

| Token | 当前候选值 | 状态 |
| --- | --- | --- |
| `--font-family-body` | `Inter, ui-sans-serif, system-ui, "Microsoft YaHei", sans-serif` | provisional |
| `--font-family-display` | `"Avenir Next", Inter, ui-sans-serif, system-ui, "Microsoft YaHei", sans-serif` | provisional，需检查本机与部署环境 fallback |
| `--font-family-meta` | `ui-monospace, SFMono-Regular, Consolas, monospace` | proposed |
| `--font-size-body` | `1rem` | proposed |
| `--font-size-body-sm` | `0.875rem` | proposed |
| `--font-size-meta` | `0.75rem` | proposed |
| `--font-size-label` | `0.75rem` | proposed |
| `--font-size-h3` | `1.25rem` | proposed |
| `--font-size-h2` | `2rem` | proposed |
| `--font-size-h1` | `clamp(2.75rem, 7vw, 5rem)` | provisional |
| `--font-size-display` | `clamp(3.25rem, 8vw, 6rem)` | open until Home fixture |
| `--font-weight-regular` | `400` | proposed |
| `--font-weight-medium` | `500` | proposed |
| `--font-weight-semibold` | `600` | proposed |
| `--font-weight-bold` | `700` | proposed |
| `--line-height-body` | `1.65` | proposed |
| `--line-height-heading` | `1.15` | proposed |
| `--line-height-meta` | `1.4` | proposed |

B 的验收重点：中文、英文和数字混排时，标题要有编辑感但不能变成装饰；正文仍然要保持长时间阅读的稳定性。

### 2.3 Density A · Open Field

先复用 Foundation 的有限间距阶梯：

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px
```

当前布局候选：

| Token | 当前候选值 | 说明 |
| --- | --- | --- |
| `--layout-page-max` | `1120px` | 页面最大宽度 |
| `--layout-content-max` | `980px` | 内容列最大宽度 |
| `--layout-prose-max` | `35em` | 正文阅读宽度 |
| `--layout-gutter-mobile` | `16px` | 移动端边距 |
| `--layout-gutter-desktop` | `32px` | 桌面端边距 |
| `--layout-section-gap` | `64px` | Open Field 的默认 section 呼吸 |
| `--layout-grid-gap` | `24px` | 并列内容的默认间距 |
| `--layout-row-min-height` | `72px` | 暂定，需用 ArchiveRow 验收 |
| `--size-target-min` | `44px` | 控件与触控目标下限 |

A 的关键不是所有间距都变大，而是首页首屏、section 之间和项目锚点之间不要被压缩成紧凑索引。

### 2.4 Shape B · Soft Surface

| Token | 当前候选值 | 使用边界 |
| --- | --- | --- |
| `--radius-none` | `0` | 分隔线、极少数档案式表面 |
| `--radius-sm` | `8px` | 小控件、输入框 |
| `--radius-md` | `14px` | 主要 raised surface 和 featured block |
| `--radius-pill` | `999px` | 标签、状态、明确的圆形控件 |
| `--border-width-thin` | `1px` | 默认结构线 |
| `--border-width-strong` | `2px` | selected、focus 或强边界 |
| `--shadow-none` | `none` | 普通列表和普通内容表面 |
| `--shadow-soft` | `0 10px 28px rgba(29, 51, 65, 0.10)` | raised surface；不能全站默认使用 |
| `--focus-width` | `2px` | 键盘焦点 |
| `--focus-offset` | `4px` | 键盘焦点与表面的距离 |

B 的验收重点：圆角和轻阴影只增加层次，不把 Working Archive 变成商业卡片墙。

## 3. 仍未被这次选择解决的变量

- `selection`、`disabled` 和各类 status colors；
- Header 是否保留 blur；
- display 最大字号在真实 Home Hero 中是否需要降低；
- `Avenir Next` 在目标环境不可用时的 fallback 是否仍保留 B 的编辑感；
- 暗色主题；
- 组件级 token、图标、媒体比例和动效层级。

这些项目仍按 P1/P2 顺序处理，不因为四项视觉组合已选就提前全部锁死。

## 4. 下一闸门：Foundation Preview / DS-1

下一步只做一件事：把当前组合放进三个真实内容锚点：

1. Home Hero / 首屏；
2. ArchiveRow / 项目索引行；
3. Archive Detail / 作品详情。

需要检查：中文长标题、英文长标题、中英文混排、长摘要、缺图或空状态、focus、390px 移动宽度和宽屏阅读宽度。

通过 DS-1 后，才把已经验证的值迁移到生产样式和 Component Contract；当前不直接修改生产 CSS。

## 证据

- 用户选择：[foundation-decision-v0.1.md](./foundation-decision-v0.1.md)
- 视觉板：[visual-judgment-board-v0.1.md](./visual-judgment-board-v0.1.md)
- 浏览器验证：[visual-judgment-board-validation-v0.1.md](./visual-judgment-board-validation-v0.1.md)
