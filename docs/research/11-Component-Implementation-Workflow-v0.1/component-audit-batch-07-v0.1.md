# Component Audit Batch 07 v0.1

- 日期：2026-09-19
- 状态：P0-02 Header / Desktop Navigation 已通过组件级 Gate
- 本轮范围：桌面 Wordmark、主导航、当前页、hover、focus、跨页一致性
- 明确不包含：P0-03 Mobile Navigation 的菜单展开/关闭交互
- 下一项：P0-03 Mobile Navigation

## 1. 本轮依据

- `S-01-A` Editorial Rail：Header 保留清晰路径、Wordmark 和文字导航。
- `S-03-A` Editorial Rail：当前页用克制的底线/索引状态标记，Focus 不能只依赖颜色。
- Foundation Header C：`rgba(255, 255, 255, 0.88)` + `blur(12px)`。
- Component Contract：nav link 使用直角；active 使用透明背景和底部 inset 当前线；Focus 使用 2px outline、4px offset。

## 2. 当前实现扫描

主要入口：

- `src/components/SiteHeader.astro`
- `src/styles/header.css`
- `src/styles/global.css`
- `src/styles/home.css`
- `src/styles/archive.css`
- `src/site-content/settings/nav-items.json`

当前结构已经具备：

- 语义 `<header>`、`<nav>` 和导航链接；
- 真实导航数据：Home、Archive、Now、About、Contact；
- 基于 pathname 的当前页判定；
- `aria-current=page`；
- 统一的透明直角 active 状态；
- Home、Archive、Archive Detail 和其他一级页面共享同一 Header 规则。

## 3. 真实浏览器审计结果

### 桌面布局

- 1440px 视口：Header 高 69px，导航为单行，导航区域约 278×32px；
- 1160px 视口：Header 使用 32px desktop gutter，导航仍为单行，5 个链接 top 值一致，无换行；
- 1440px 与 1160px 均无横向溢出；
- Header 的实际计算样式为 `rgba(255, 255, 255, 0.88)` + `blur(12px)`。

### 当前页状态

- `/`：Home 唯一获得 `aria-current=page`；
- `/archive/`：Archive 唯一获得 `aria-current=page`；
- `/archive/maki-english/`：详情页正确继承 Archive 当前态；
- `/now/`、`/about/`、`/contact/`：分别只标记对应页面；
- active 链接实际为透明背景、0px 圆角和底部 inset accent 线。

### Hover 与 Focus

- 桌面 hover 只改变文字颜色，不改变链接和导航区域尺寸；
- 键盘 Tab 可进入导航；
- 实际 Focus 计算为 `2px solid` outline、`4px` offset；
- 当前页状态不依赖颜色 alone，同时保留可见底线。

## 4. 修改结论

本轮没有生产代码修改。当前实现已经满足 P0-02 的已锁定规则，强行增加背景、圆角、阴影或额外动效都会偏离已接受的 Header 方向。

桌面导航链接保持紧凑的 Editorial Rail 密度；触控目标与移动菜单的尺寸和展开行为属于下一项 P0-03，不在本轮混合处理。

## 5. 验收证据

截图：

- [Home Header desktop](../../../output/playwright/header-home-desktop-final.png)
- [Archive Detail Header desktop](../../../output/playwright/header-archive-detail-desktop-final.png)

其他结果：

- `npm.cmd run build` 通过，生成 11 个静态页面；Astro 0 errors、0 warnings，保留 2 个既有 Lab 示例脚本 hints；
- 当前 Header 跨页回归浏览器控制台 0 errors、0 warnings；
- 1440px、1160px 桌面视口均无横向溢出；
- 本轮没有需要 Maki 取舍的视觉、内容或范围问题。

## 6. Gate 结论

`P0-02 Header / Desktop Navigation` 标记为 `implemented`。

下一轮只处理 `P0-03 Mobile Navigation`：MENU 按钮、菜单层、Escape、点击外部、窗口变化后的关闭和移动触控尺寸。
