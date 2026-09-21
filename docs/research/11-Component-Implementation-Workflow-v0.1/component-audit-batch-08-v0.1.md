# Component Audit Batch 08 v0.1

- 日期：2026-09-19
- 状态：P0-03 Mobile Navigation 通过组件级 Gate
- 本轮范围：移动端 MENU 入口、菜单展开层、关闭路径、当前页状态、触控尺寸和响应式恢复
- 明确不包含：Display Title / Page Hero，以及后续页面组件的内容与组合回归
- 下一项：P0-04 Display Title / Page Hero

## 1. 本轮依据

- Component Contract v0.2：共享 Header、`aria-current`、透明直角 active、底部 inset 当前线和统一 Focus 规则；
- Foundation token：`--size-target-min: 44px`，主要触控入口不能低于 44px；
- Mobile Navigation 的真实行为：MENU 开关、Escape、点击 Header 外部、窗口宽度变化后关闭；
- 生产验收标准：真实页面、390 × 844 移动视口、无横向溢出、浏览器控制台和生产构建。

## 2. 当前实现审计

主要入口：

- `src/components/SiteHeader.astro`
- `src/styles/header.css`
- `src/styles/home.css`

已确认：

- `SiteHeader.astro` 使用真实 `<header>`、`<nav>`、按钮和导航链接；
- 按钮同步 `aria-expanded` 与 `aria-label`，菜单同步 `data-open`；
- 点击菜单链接后关闭；Escape 关闭；点击 Header 外部关闭；窗口回到桌面断点时关闭；
- Home、Archive 与 Archive Detail 共享当前页判断，详情页保持 Archive 当前态；
- 移动菜单以绝对定位展开，不改变主页面横向轨道。

## 3. 浏览器审计结果

### Home / 390 × 844

- 初始状态：菜单隐藏，按钮为 `aria-expanded=false`，当前页只有 Home；
- 修复后 MENU 实际高度为 `44px`，计算 `min-height` 为 `44px`；
- 打开后菜单显示为纵向导航，五个链接实际高度约 `44.33px`；
- Escape 关闭后恢复 `data-open=false`、`aria-expanded=false` 和“打开主导航”；
- 点击 `main` 等 Header 外部区域后菜单关闭；
- `clientWidth = 375px`、`scrollWidth = 375px`，无横向溢出。

### Archive / 390 × 844

- 初始状态：菜单隐藏，当前页只有 Archive；
- 打开后保持与 Home 相同的菜单尺寸和关闭行为；
- Archive 链接保留唯一的 `aria-current=page`；
- 打开态按钮为 `44px`，五个链接均约 `44.33px`；
- `clientWidth = 375px`、`scrollWidth = 375px`，无横向溢出。

### 响应式恢复

- 在移动菜单打开时切换到 `1000px` 视口，菜单自动关闭；
- 桌面导航恢复为单行 `display:flex`，MENU 按钮恢复隐藏；
- 桌面视口 `clientWidth = scrollWidth`，没有新增横向溢出。

## 4. 本轮生产修改

审计发现 MENU 是移动端主要导航入口，但原实现仍使用 `36px` 小控件尺寸。按照已接受的 Foundation 规则，将以下两个生产样式入口收敛到 `var(--size-target-min)`：

- `src/styles/header.css`
- `src/styles/home.css`

本轮没有改变桌面导航的 Editorial Rail 密度、当前态样式、圆角规则或页面内容。

## 5. 验证结果

- 浏览器控制台：0 errors、0 warnings；
- `npm.cmd run build`：通过；11 个静态页面生成；Astro 0 errors、0 warnings，保留 2 个既有 Lab hints；
- 移动导航打开态截图：[header-mobile-open-final.png](../../../output/playwright/header-mobile-open-final.png)。

## 6. Gate 结论

`P0-03 Mobile Navigation` 标记为 `implemented / Gate passed`。

下一步进入 `P0-04 Display Title / Page Hero`。本轮没有发现需要 Maki 做取舍的设计问题。
