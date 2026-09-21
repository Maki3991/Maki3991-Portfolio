# Home / Hero 视觉方向实验（独立版）

这是一组不接入 Astro 生产站点的静态 Home / Hero 原型。五个方向使用同一批真实内容，差异来自页面结构、排印、密度、导航、媒体角色与动效边界。

## 入口

| 方向 | 页面预览 | 方向说明 | 桌面截图 | 移动截图 |
|---|---|---|---|---|
| 01 · Cold Index / 冷静档案 | [打开页面](./direction-01-cold-index/index.html) | [阅读说明](./direction-01-cold-index/notes.md) | [桌面](./screenshots/01-cold-index-desktop.png) | [移动](./screenshots/01-cold-index-mobile.png) |
| 02 · Split Signal / 分栏信号 | [打开页面](./direction-02-split-signal/index.html) | [阅读说明](./direction-02-split-signal/notes.md) | [桌面](./screenshots/02-split-signal-desktop.png) | [移动](./screenshots/02-split-signal-mobile.png) |
| 03 · Field Notes / 现场笔记 | [打开页面](./direction-03-field-notes/index.html) | [阅读说明](./direction-03-field-notes/notes.md) | [桌面](./screenshots/03-field-notes-desktop.png) | [移动](./screenshots/03-field-notes-mobile.png) |
| 04 · Media Cabinet / 媒体档案柜 | [打开页面](./direction-04-media-cabinet/index.html) | [阅读说明](./direction-04-media-cabinet/notes.md) | [桌面](./screenshots/04-media-cabinet-desktop.png) | [移动](./screenshots/04-media-cabinet-mobile.png) |
| 05 · Live Brief / 当前简报 | [打开页面](./direction-05-live-brief/index.html) | [阅读说明](./direction-05-live-brief/notes.md) | [桌面](./screenshots/05-live-brief-desktop.png) | [移动](./screenshots/05-live-brief-mobile.png) |

## 本轮固定内容

- `Maki 羽轩`；`英语内容创作者 / 内容运营实践者 / 国际政治本科生`。
- 个人介绍、关注方向、地点、中国、求职方向和邮箱，来自 `src/site-content/settings/profile.json`。
- `Maki 羽轩英语自媒体` 项目及其角色、职责、829 万+累计播放、53 万+累计互动、491 万+单条最高播放，来自 `src/site-content/projects/01-english-media.md`。
- `四级六级听力吐槽与学习路径内容` 作品及抖音平台、日期、491.2 万播放、22.4 万点赞、1.1 万评论、1.8 万收藏、4.4 万分享，来自 `src/site-content/works/01-v028.md`。
- About 的固定说明来自当前 `src/pages/about.astro`；Contact 使用当前设置中的邮箱、GitHub、抖音主页入口；Now 只复用 About 与项目中的“整理作品/数据/复盘、继续沉淀方法”表述，没有另造经历或指标。

## 验收边界

- 只做 Home / Hero 级别的可浏览原型，不制作完整 Project detail 或 Article detail。
- 没有修改 `src/`、生产页面或 Astro 组件。
- 不使用 Canvas/WebGL、滚动劫持或复杂全屏转场；动效限于 hover/focus、短状态反馈和可关闭的移动导航。
- `V028.jpg` 是现有真实作品封面，仅复制到本隔离目录供原型引用。
- 方向确认前不替用户选择最终方案；截图和说明用于下一轮选择或融合。

