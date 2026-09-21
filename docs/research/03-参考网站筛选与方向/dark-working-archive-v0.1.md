# Dark Working Archive v0.1

状态：视觉方向预览，待 Maki 选择是否进入下一轮。它是 02 — Working Archive 的深色变体，不是最终主题切换实现。

## 预览

- [Dark Working Archive 页面](../../../output/design-direction-fusion-lab/dark-working-archive.html#top)
- [浅色 Working Archive 对照页](../../../output/design-direction-fusion-lab/direction.html?d=2#top)
- [桌面截图](../../../output/playwright/dark-working-archive-audit/.playwright-cli/dark-working-archive-desktop.png)
- [移动截图](../../../output/playwright/dark-working-archive-audit/.playwright-cli/dark-working-archive-mobile.png)

## 这版具体改变了什么

- 保留 02 的核心顺序：工作索引 → 项目/作品 → 详情证据 → Writing / Notes → About / Now → Contact。
- 背景使用深石墨色，不使用纯黑，避免长时间阅读时过于刺眼。
- 文字使用冷白、灰蓝和一个受控的钴蓝强调色；青色只用于状态点和少量“当前状态”。
- 取消大面积卡片堆叠，改用暗色表面、细线、编号和列表行来形成层次。
- 首屏右侧仍然是 Role、Study、Location、Seeking、Now 的工作索引，不放照片，保留 Working Archive 的核心判断。
- 项目详情使用一张真实作品封面作为证据入口，但没有把播放量单独做成 Dashboard。
- 移动端改为 `MENU` 折叠导航，项目和笔记仍然以列表形式阅读。

## 我对它的判断

### 可能更适合你的地方

- 深色让它更像一个长期维护的个人工作台/档案，而不是常见的浅色个人简历页。
- 02 的长期扩展性没有被破坏：新项目、文章、实验或人生记录，都可以继续新增为同一种条目。
- 深色底能压低“个人介绍文案”的视觉音量，让项目结果和工作方法成为主要内容。

### 需要警惕的地方

- 深色会让网站更偏“工作档案”或“个人工具”，个人亲和力比浅色版本低。
- 如果以后加入很多图片、长文章或生活记录，深色表面需要重新检查阅读舒适度，不能所有内容都堆在深底上。
- 当前色板仍是实验值；下一步需要用真实的多篇文章、更多项目和真实截图检查信息密度，而不是现在就锁死色值。
- 真正的最终版本还需要决定主题切换是手动按钮、跟随系统，还是只保留一种主题；这轮没有提前实现复杂切换逻辑。

## 浏览器验收

- 页面标题：`Dark Working Archive / Maki`。
- 已在 `1440 × 1000` 桌面视口和 `390 × 844` 移动视口抓取完整截图。
- 移动端 `MENU` 可以展开 Projects、Writing、About、Contact。
- 移动端检查到页面宽度为 `390px`，没有产生水平溢出。
- 真实头像没有被引入这版首屏；真实作品封面加载于项目详情区域。
- 原型只新增 `output/design-direction-fusion-lab/dark-working-archive.html` 和对应样式文件，没有修改 `src/`，没有替换生产页面，也没有运行 `npm run build`。

## 下一步决策

先比较三个页面的气质：

1. 浅色 02 是否更适合长期公开展示；
2. 深色 02 是否更接近你想要的“个人工作档案”；
3. 是否需要做一个“深色结构 + 浅色内容区”的混合版本。

如果深色方向成立，下一轮应该优先做主题规则和真实内容验收，不要直接开始全站重构。
