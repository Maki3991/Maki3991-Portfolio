# Component Audit Batch 09 v0.1

- 日期：2026-09-19
- 状态：P0-04 Display Title / Page Hero 通过组件级 Gate
- 本轮范围：Home、Archive、Now、About、Contact 五个主页面的标题字号、标题顶部节奏、kicker、Hero/正文关系和移动折叠
- 明确不包含：Archive Detail 自有详情标题、页面正文组件和跨页主链路组合回归
- 下一项：Home 与 Archive 主链路的跨页回归

## 1. 本轮依据

- Component Contract v0.2：Display Title 桌面顶部留白 `96px`，移动端顶部留白 `64px`；
- Foundation token：`--font-size-display: clamp(3.25rem, 8vw, 6rem)`、`--font-family-display`、`--tracking-display` 和 `--line-height-display`；
- 页面规则：标题轨道共享排印系统，Home、Archive、Now、About、Contact 保留各自内容结构；
- 生产验收标准：1440px 桌面视口、390 × 844 移动视口、真实内容、无横向溢出和浏览器控制台检查。

## 2. 当前实现审计

主要入口：

- `src/styles/display-title.css`
- `src/styles/foundation-tokens.css`
- `src/styles/global.css`
- `src/styles/home.css`
- `src/styles/archive.css`
- `src/styles/now.css`
- `src/styles/secondary-pages.css`
- `src/pages/index.astro`
- `src/pages/archive.astro`
- `src/pages/now.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`

已确认：

- 五个主页面都使用真实 `.display-title` 标题和页面专属 kicker；
- `display-title.css` 统一标题字体、字号 token、字重、字距、行高以及 96/64px 顶部节奏；
- Home 的双行标题、Archive 的 Hero 双栏、Now 的开放内容壳、About/Contact 的共享 Page Hero 都由页面专属结构承载；
- Archive Detail 不被强行套入这套页面级 Title Rail，保留详情页自己的节奏。

## 3. 浏览器审计结果

### 1440px 桌面视口

| 页面 | 标题顶部 | 标题字号 | 结果 |
|---|---:|---:|---|
| Home | Header 后 130px（kicker 从 96px 开始） | 96px | 通过 |
| Archive | Header 后 130px（kicker 从 96px 开始） | 96px | 通过 |
| Now | Header 后 96px | 96px | 通过 |
| About | Header 后 96px | 96px | 通过 |
| Contact | Header 后 96px | 96px | 通过 |

Home 与 Archive 因为自身 Hero 结构还包含布局内容，标题后的内容关系不同；标题轨道本身仍从同一套 96px 顶部 token 开始。所有页面 `clientWidth = scrollWidth = 1440px`。

### 390 × 844 移动视口

- 五个页面的 Header 高度均为 81px（包含修正后的 44px MENU 触控入口）；
- 五个页面的 kicker 均从 Header 后 `64px` 开始，标题从 kicker 后 `18px` 开始；
- Display Title 实际字号为 `52px`，来自 `clamp(3.25rem, 8vw, 6rem)`，不是额外的页面特例；
- Home 的 `Maki3991 / 羽轩` 双行标题保持可读换行；Archive、Now、About、Contact 标题均保持单行且不裁切；
- Archive 的索引栏在移动端自然折叠到 Hero 下方，没有挤压标题或制造横向溢出；
- 五个页面均 `clientWidth = scrollWidth = 390px`。

## 4. 视觉与结构结论

- 共享标题轨道已经实际覆盖五个主页面；
- 96/64px 规则没有被旧版 `page-hero`、`now-shell` 或页面专属 padding 破坏；
- 页面之间的差异来自真实内容结构，而不是重复定义的标题系统；
- 本轮没有发现需要 Maki 做取舍的字号、字体、顶部节奏或路径信息问题。

## 5. 验证结果

- 浏览器控制台：0 errors、0 warnings；
- `npm.cmd run build`：通过；11 个静态页面生成；Astro 0 errors、0 warnings，保留 2 个既有 Lab hints；
- 截图证据：[Home desktop](../../../output/playwright/display-title-home-desktop-final.png)、[Archive mobile](../../../output/playwright/display-title-archive-mobile-final.png)。

## 6. Gate 结论

`P0-04 Display Title / Page Hero` 标记为 `implemented / Gate passed`。

下一步进入 Home 与 Archive 主链路的跨页回归，不重新发散已接受的 Foundation 或标题参数。
