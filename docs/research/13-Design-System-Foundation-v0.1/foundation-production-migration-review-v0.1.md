# Foundation Production Migration Review v0.1

## 状态

**当前有效 / 已完成首轮生产迁移 / 当前阶段视觉已接受并冻结 / 待组件级生产验收。**

这份文件是 Foundation v0.1 从候选参数进入生产 CSS 后的交接记录。它不重新打开已经确认的五类基础选择。

## 当前阶段接受记录

2026-09-18，Maki 反馈当前暂时找不到更多 UI 细节问题。因此，Foundation v0.1 作为当前阶段的视觉基线接受并冻结，后续不再主动发散新的颜色、字体、密度、形状或 Header 候选。

这里的“接受”只表示基础层可以进入组件级生产验收，不表示所有页面和组件已经通过最终 Gate。真实组件出现冲突时，优先判断是实现问题、内容问题还是组件组合问题，再做局部修订。

## 已确认的 Foundation 组合

| 变量组 | 当前选择 | 已落地参数 |
|---|---|---|
| Palette | A · Cold Index | #f7f9fb canvas、#ffffff surface、#1d3341 text、#556b75 muted、#217895 accent |
| Typography | B · Quiet Editorial | body 使用稳定 sans；display 使用独立 sans fallback |
| Density | A · Open Field | 64px section gap、24px grid gap、72px row min-height |
| Shape | B · Soft Surface | 14px raised radius、shadow-soft、列表行不默认加阴影 |
| Header | C · Quiet Blur | rgba(255,255,255,.88)、blur(12px) |

## 已完成

- 新增并接入 foundation-tokens.css；
- global.css 已使用共享 Foundation token，并保留旧变量兼容别名；
- Header C 已同步到全局、Home、Archive 和详情页；
- display title 的桌面最大值统一为 6rem；
- Home、Archive、Archive Detail 已同步颜色、标题字体、focus、主要间距、行高和 raised surface；
- Now、About、Contact、Projects、Works 已同步到同一套基础颜色与标题字体；
- 旧暖色变量不再作为有效生产 token 使用；
- 旧 serif 字体声明已从有效字体路径移除；少量旧 fallback 文本暂以 legacy custom property 形式保留，作为迁移痕迹，不参与渲染。
- 封闭式边框容器统一使用 14px raised radius；胶囊标签保留 pill radius；开放式列表行不使用容器圆角或默认阴影；
- 导航链接保留直角，当前页面通过底部 inset line 标记，避免导航当前态被卡片圆角改变；导航切换按钮仍使用 14px 圆角；
- raised surface 统一使用 shadow-soft，列表行、普通按钮和线性区块保持平面。

## 已验证证据

### 构建

npm.cmd run build 通过：

- 11 个静态页面生成；
- Astro check：0 errors、0 warnings；
- 仅有 2 个原有 hints，来源是 output/design-direction-lab/lab.js 的 deprecated name 属性，与本次 Foundation 迁移无关。

最近一次导航当前态修复后再次执行 npm.cmd run build：0 errors、0 warnings、2 个同源 hints。

### 真实浏览器

使用构建后的 dist、本地 127.0.0.1 静态服务器和 Chromium 验证：

- Home：1280px 与 390px；
- Archive：1280px 与 390px；
- Archive Detail：1280px 与 390px；
- Now、About、Contact、Projects、Works：1280px；
- 上述页面均无横向溢出；
- Home / Archive / Detail 在 390px 均自然收为单栏；
- Header 计算样式为 rgba(255, 255, 255, 0.88) + blur(12px)；
- Home / Archive / Detail 标题桌面计算值为 96px，移动端为 52px；
- Archive row 的计算最小高度为 72px；
- 键盘 focus 为 2px outline、4px offset；
- 浏览器控制台：0 errors、0 warnings。

截图证据：

- [Home desktop](../../../output/playwright/foundation-production-home-desktop.png)
- [Home mobile](../../../output/playwright/foundation-production-home-mobile.png)
- [Archive mobile](../../../output/playwright/foundation-production-archive-mobile.png)
- [Archive Detail desktop](../../../output/playwright/foundation-production-detail-desktop.png)

## 本阶段已接受的范围

当前接受以下 Foundation 组合及其生产例外：

1. Cold Index 亮色语义色板；
2. Quiet Editorial 排印层级；
3. Open Field 的 64px section gap、24px grid gap 和 72px row min-height；
4. Soft Surface 的 14px 封闭容器圆角和 shadow-soft；
5. Quiet Blur Header 的半透明背景与 12px blur；
6. 导航当前态的直角底部指示线、列表行的开放式细线结构，以及标签的胶囊语义。

上面的截图仍然是 Foundation 的视觉证据，但不再作为重新选择基础参数的待办项。

## 尚未擅自锁死的内容

- disabled、selection、status 的完整语义色；
- 空状态、错误状态、loading 的具体组件与文案；
- 暗色主题的最终参数；
- 图标、媒体比例和复杂动效；
- 组件级真实内容、响应式、可访问性和维护性 Gate；
- 旧 legacy custom property 的代码清理。

这些项目不是当前五类 Foundation 选择的缺口；它们应在真实组件或真实状态出现后再决定。

## 下一道闸门

Foundation 接受后，进入 [Component Contract v0.2](../08-Component-Contract-v0.1/component-contract-v0.2.md) 作为当前执行入口，并从 Page Shell / Section Rhythm 开始逐组件生产验收。之后遵循：

改一个 → 看一个 → 反馈一个
