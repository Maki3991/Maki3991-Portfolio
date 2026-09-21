# Foundation Preview Review v0.1 · DS-1 视觉判断

## 当前状态

**技术检查通过 / 视觉验收待用户判断 / 未迁移生产。**

本轮已经把你确认的 A / B / A / B 组合放进三条真实内容锚点：

- Home：首屏、头像、Live Index、Current Workbench、代表项目；
- ArchiveRow：当前四条 Archive 真实记录；
- Archive Detail：Maki English 的贡献、结果、公开范围和证据。

## 直接打开

[打开 Foundation Preview](../../../output/foundation-preview-v0.1/index.html)

验收截图：

- [桌面全页截图](../../../output/playwright/foundation-preview/desktop-full.png)
- [移动端首屏截图](../../../output/playwright/foundation-preview/mobile-top.png)

## 已经可以由 Agent 先确认的部分

- 三个锚点使用的是同一套颜色、排印、间距和形状语义；没有为每个页面另造一套风格。
- Palette A 已落实为 `#f7f9fb / #ffffff / #1d3341 / #556b75 / #217895` 等候选值。
- Typography B 保持无衬线体系，display 层使用独立 sans fallback，未重新引入暖色衬线。
- Density A 使用有限间距阶梯，并保留首屏、section 和项目之间的明显呼吸。
- Shape B 使用中等圆角和轻阴影，但普通列表仍以边框和留白为主。
- 390px 视口下 Home、ArchiveRow、Detail 均切换为单列；当前检查没有水平溢出。
- 头像资源成功加载；预览页面脚本没有运行时错误。

## 请你只判断下面五件事

### 1. Home 首屏的标题力度

当前标题使用 Typography B，并暂定 display 最大字号 `6rem`。

- 你是否觉得“把已选的系统放进真实内容”之后，Home 首屏标题仍然太大？
- 中文标题、英文 tagline 和头像之间的比例是否像你？

可直接回复：

```text
标题：保留
```

### 2. Quiet Editorial 的字体差异

当前 display 使用：

```text
"Avenir Next", Inter, system-ui, "Microsoft YaHei", sans-serif
```

请判断：

- 它是否比正文更有编辑感，但仍然像一个工作档案？
- 如果你看不出差异，是否直接让 display 与 body 使用同一字体？

可直接回复：

```text
字体：保留独立 display
```

### 3. Open Field 的密度

当前使用 `64px` section gap、`24px` grid gap，列表行暂定 `72px` 最小高度。

请判断：

- Home 是否太松，导致需要滚动很久才能看到 Archive？
- ArchiveRow 是否有足够呼吸，同时仍然方便连续扫描？
- Detail 页面是否让正文和证据之间的关系清楚？

可直接回复：

```text
密度：保留
```

### 4. Soft Surface 是否开始像卡片墙

当前主要 raised surface 使用 `14px` 圆角和轻阴影；列表行没有默认阴影。

请判断：

- 代表项目和详情面板是否需要这层抬高感？
- 它是否已经偏离 Working Archive，变得像商业模板？

可直接回复：

```text
形状：保留
```

### 5. Header blur

本预览暂时使用实色 Header，没有提前把 blur 混入 Foundation。

请判断：

```text
Header：需要 blur 候选对比
```

## 不需要你现在判断的部分

以下项目可以等真实交互状态出现后由 Agent 继续完成：

- selection、disabled 和 status colors；
- 键盘 focus 的完整状态矩阵；
- 暗色主题；
- 图标来源、媒体比例和动效层级；
- 生产 CSS 的迁移顺序。

## 回复格式

可以只回复你有感觉的部分，不需要填满：

```text
标题：
字体：
密度：
形状：
Header：
其他自由反馈：
```

收到后，我会把你的判断写回当前 Foundation Profile；如果没有新的否决意见，再进入生产 CSS 迁移前的 token matrix 和组件契约同步。
