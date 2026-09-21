# Foundation Profile v0.1 · 当前最终选择

## 状态

**当前有效 / 视觉选择完成 / 首轮生产迁移完成 / 最终视觉接受待用户确认。**

这是当前 Foundation 的唯一组合结论。此前的候选简报、视觉判断板和 Header 对比文件保留为过程证据；如果没有新的用户否决，不再重新发散 Palette、Typography、Density、Shape 或 Header 这五类方向。

## 1. 用户已确认的完整组合

| 变量组 | 最终选择 | 当前 token 方向 |
| --- | --- | --- |
| Palette | A · Cold Index | `#f7f9fb` canvas、`#ffffff` surface、蓝灰正文、`#217895` accent |
| Typography | B · Quiet Editorial | body 使用稳定 sans，display 保留独立 sans fallback |
| Density | A · Open Field | `64px` section gap、`24px` grid gap、`72px` row 候选 |
| Shape | B · Soft Surface | `14px` raised radius、`shadow-soft`，普通列表不默认加阴影 |
| Header | C · Quiet Blur | `rgba(255,255,255,.88)` + `blur(12px)` |

## 2. 当前可迁移的核心值

### 颜色

```text
--color-canvas: #f7f9fb
--color-surface: #ffffff
--color-surface-raised: #ffffff
--color-text: #1d3341
--color-text-muted: #556b75
--color-text-subtle: #68808d
--color-line: #d8e2e5
--color-line-strong: #b7c8ce
--color-accent: #217895
--color-accent-strong: #1d3341
--color-accent-soft: rgb(33 120 149 / 8%)
--color-on-accent: #ffffff
--color-focus: #217895
```

### 字体与排印

```text
--font-family-body: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif
--font-family-display: "Avenir Next", Inter, ui-sans-serif, system-ui, "Microsoft YaHei", sans-serif
--font-family-meta: ui-monospace, SFMono-Regular, Consolas, monospace
--font-size-display: clamp(3.25rem, 8vw, 6rem)
--font-size-h1: clamp(2.75rem, 7vw, 5rem)
--font-size-h2: 2rem
--font-size-h3: 1.25rem
--font-size-body: 1rem
--font-size-body-sm: .875rem
--font-size-meta: .75rem
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--line-height-display: .98
--line-height-heading: 1.15
--line-height-body: 1.65
--line-height-meta: 1.4
```

### 间距、布局、形状

```text
--space-scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px
--layout-page-max: 1120px
--layout-content-max: 980px
--layout-prose-max: 35em
--layout-gutter-mobile: 16px
--layout-gutter-desktop: 32px
--layout-section-gap: 64px
--layout-grid-gap: 24px
--layout-row-min-height: 72px
--radius-sm: 8px
--radius-md: 14px
--radius-pill: 999px
--shadow-soft: 0 10px 28px rgb(29 51 65 / 10%)
--focus-width: 2px
--focus-offset: 4px
```

### Header C

```text
--header-background: rgb(255 255 255 / 88%)
--header-backdrop-filter: blur(12px)
--header-border: #d8e2e5
```

Header C 是用户在对比板中选择的方案。移动端菜单展开面仍使用实色 surface，避免菜单内容透过背景影响可读性。

## 3. 仍然不是本轮最终决定的内容

这些不是视觉组合的缺口，而是需要真实交互或实际内容出现后再补的状态：

- selection、disabled 和 status colors；
- 空状态、错误状态和 loading 的具体文案与组件结构；
- 暗色主题的具体值；
- 图标、媒体比例和复杂动效；
- 未来页面和筛选系统。

它们不能反过来重新打开已经确认的五类基础方向。

## 4. 生产迁移闸门

Foundation 的视觉选择已经完成，首轮生产迁移已完成；以下是已验证的闸门和下一步：

1. 已将 `foundation-tokens.css` 作为共享 token 层接入 global.css；
2. global.css、header.css 和页面级 CSS 已完成第一轮 token 与旧值迁移；
3. Header C 已同步到全局、Home、Archive 和 Archive Detail；
4. 普通正文使用 #556b75，#68808d 保留为 subtle / meta 候选；
5. Home、Archive、Archive Detail 已完成 build、桌面、390px、Focus、console 验收；
6. 用户接受生产截图后，再更新 Component Contract v0.2。

当前生产 CSS 已完成首轮迁移；最终视觉接受、Component Contract v0.2 和剩余 P2 状态仍待后续闸门。

## 证据

- 用户视觉判断：[foundation-preview-review-v0.1.md](./foundation-preview-review-v0.1.md)
- Header 对比：[header-blur-review-v0.1.md](./header-blur-review-v0.1.md)
- Header 验证：[header-blur-validation-v0.1.md](./header-blur-validation-v0.1.md)
- Token Matrix：[foundation-token-matrix-v0.1.md](./foundation-token-matrix-v0.1.md)
- 非生产 token CSS：[foundation-tokens-v0.1.css](./foundation-tokens-v0.1.css)
