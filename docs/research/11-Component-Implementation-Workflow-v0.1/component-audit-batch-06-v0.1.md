# Component Audit Batch 06 v0.1

- 日期：2026-09-19
- 状态：Page Shell / Section Rhythm 已通过组件级 Gate
- 本轮范围：P0-01 Page Shell / Section Rhythm
- 下一项：P0-02 Header / Desktop Navigation

## 1. 本轮目标

核对全站页面的主轨道、桌面与移动 gutter、Header 偏移、section 的自然节奏、区块边界和 Footer 轨道。只处理 Page Shell 的共享布局规则，不重新打开已经锁定的 Foundation 视觉选择，也不处理 Header 当前态、Display Title 视觉或具体内容区块。

## 2. 依据的已锁定规则

- 主页面轨道使用 `--layout-page-max: 1120px`。
- 可读内容使用 `--layout-content-max: 980px`。
- 桌面 gutter 使用 `--layout-gutter-desktop: 32px`。
- 移动端 gutter 使用 `--layout-gutter-mobile: 16px`。
- 默认 section 呼吸使用 `--layout-section-gap: 64px`。
- 页面保持自然内容高度，不用人为的全屏区块制造空白。
- Archive Detail 使用 1120px 主轨道，不保留 1240px 特例。

## 3. 审计发现

### 已发现并修正

`src/styles/foundation-tokens.css` 已定义 32px desktop gutter，但 `src/styles/global.css` 之前让 `main`、Footer 和 Header 在所有非移动视口继续使用 16px gutter。

在 1160px 桌面视口、浏览器内容宽度 1145px 时，修正前实际结果是：

- `main` 左边距约 16px；
- `main` 宽度约 1113px；
- Header 内部内容也从约 16px 开始。

这与已接受的 desktop gutter token 不一致。

### 未发现需要重新取舍的问题

- 1440px 下主轨道仍为 1120px；
- 390px 移动视口仍保留 16px 内容边距；
- Home、Archive、Archive Detail、About、Contact、Now、Projects、Works 没有横向溢出；
- section 仍以自然内容高度呈现，未重新引入全屏空白方案；
- Archive Detail 的 1120px shell 与内部 24px 内容 padding 保持现行决定。

## 4. 实施修改

### `src/styles/global.css`

- 将 `main` 和 `.site-footer` 的默认宽度计算改为使用两个 `--layout-gutter-desktop`；
- 在 `max-width: 640px` 下恢复两个 `--layout-gutter-mobile`；
- 将 Header 的默认水平 padding 计算改为使用 desktop gutter。

### `src/styles/header.css`

- 在移动断点明确恢复 `padding-inline: var(--layout-gutter-mobile)`。

没有修改页面内容、组件结构、导航当前态、标题 token 或 Archive Detail 字段结构。

## 5. 真实渲染证据

| 场景 | 实际结果 |
|---|---|
| Home / 1440px | `main`、Home、Footer 均为 1120px；无横向溢出 |
| Archive / 1160px | `main` 和 Hero 宽 1081px，左边距 32px；Header 内容左边距 32px |
| Home / 390×844 | `main` 宽 343px，左右 16px；`scrollWidth = clientWidth = 375px` |
| Archive Detail / 1440px | shell 宽 1120px，内部内容宽 1072px；无横向溢出 |
| Archive Detail / 390×844 | shell 宽 343px，内部内容宽 311px；`scrollWidth = clientWidth = 375px` |
| About、Contact、Now、Projects、Works | 桌面和移动回归均保持正确主轨道，未出现横向溢出 |

截图：

- [Home desktop](../../../output/playwright/page-shell-home-desktop-final.png)
- [Archive Detail desktop](../../../output/playwright/page-shell-archive-detail-desktop-final.png)
- [Archive Detail mobile](../../../output/playwright/page-shell-archive-detail-mobile-final.png)

其他验收结果：

- `npm.cmd run build` 通过，生成 11 个静态页面；Astro 0 errors、0 warnings，保留 2 个既有 Lab 示例脚本 hints；
- 跨页浏览器控制台 0 errors、0 warnings；
- 390×844 移动视口无横向溢出；
- 本轮没有需要 Maki 取舍的视觉、内容或范围问题。

## 6. Gate 结论

`P0-01 Page Shell / Section Rhythm` 标记为 `implemented`。

下一轮进入 `P0-02 Header / Desktop Navigation`，重点检查 Wordmark、桌面导航当前态、hover/focus 以及跨页一致性。
