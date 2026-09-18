# Foundation Production Migration Review v0.1

## 状态

**当前有效 / 已完成首轮生产迁移 / 待用户做最终视觉接受。**

这份文件是 Foundation v0.1 从候选参数进入生产 CSS 后的交接记录。它不重新打开已经确认的五类基础选择。

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

## 已验证证据

### 构建

npm.cmd run build 通过：

- 11 个静态页面生成；
- Astro check：0 errors、0 warnings；
- 仅有 2 个原有 hints，来源是 output/design-direction-lab/lab.js 的 deprecated name 属性，与本次 Foundation 迁移无关。

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

## 现在需要用户判断的内容

请优先看上面的 Home desktop、Home mobile、Archive mobile 和 Archive Detail desktop 四张图，只反馈视觉是否接受，不需要读 CSS：

1. 96px 桌面大标题是否仍然有足够存在感，但没有压过真实内容；
2. 52px 移动标题是否过松、过紧或换行不理想；
3. Home section 的 64px 节奏、Archive row 的 72px 高度是否舒服；
4. 14px raised surface 和 soft shadow 是否应该保留；
5. Header C 的透明度与模糊是否安静，还是仍然太像玻璃效果。

反馈可以直接写：接受、某张图的某个位置需要改，或自由描述感受。

## 尚未擅自锁死的内容

- disabled、selection、status 的完整语义色；
- 空状态、错误状态、loading 的具体组件与文案；
- 暗色主题的最终参数；
- 图标、媒体比例和复杂动效；
- Component Contract v0.2 的正式回写；
- 旧 legacy custom property 的代码清理。

这些项目不是当前五类 Foundation 选择的缺口；它们应在真实组件或真实状态出现后再决定。

## 下一道闸门

只有当用户接受这四张生产截图后，才进入 Component Contract v0.2 回写和逐组件生产验收。之后遵循：

改一个 → 看一个 → 反馈一个

