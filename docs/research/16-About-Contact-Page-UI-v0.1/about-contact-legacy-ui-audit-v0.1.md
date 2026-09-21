# About / Contact 旧页面 UI 审计 v0.1

状态：代码审计完成 / 首轮生产实现完成 / 视觉 Review 待开始

审计日期：2026-09-20

## 1. 审计范围与证据边界

本报告只记录当前仓库中可直接确认的实现，不把旧页面的视觉意图推断为用户当前决定。

### 已检查文件

- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/styles/secondary-pages.css`
- `src/styles/global.css`
- `src/styles/display-title.css`
- `src/layouts/BaseLayout.astro`
- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`
- `src/data/site.ts`
- `src/site-content/settings/profile.json`
- `src/site-content/settings/links.json`
- `public/assets/profile/maki-avatar.jpg`
- `public/assets/contact/` 下的二维码资源

### 设计依据

- `docs/research/05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md`
- `docs/research/08-Component-Contract-v0.1/component-contract-v0.2.md`
- `docs/research/13-Design-System-Foundation-v0.1/`
- `docs/research/11-Component-Implementation-Workflow-v0.1/README.md`
- `refactoring-ui-zh/_agent-kb/00-entrypoint.md`
- `refactoring-ui-zh/_agent-kb/principles/POLISH-004.md`

视觉证据还包括用户在本轮对话中提供的 About / Contact 截图。新的运行截图和交互验收留到 Review Preview 阶段，不在本报告中冒充已完成证据。

## 2. 当前页面结构

### About

审计时 `src/pages/about.astro` 由两部分组成；首轮实现后改为：

1. `page-hero about-page`：`WORKING CONTEXT`、`About`、`我在把经历变成方法。`；
2. `about-article`：一篇连续文章，包含引导段落和三个小标题，当前内容为临时草稿。

当前正文事实包括：国际政治本科生、英语学习内容、自媒体账号运营、英语产品交付、个人学习系统、AI 辅助创作和音乐创作。最后一块从 `profile.seeking` 读取公开寻找方向。

### Contact

审计时 `src/pages/contact.astro` 由三部分组成；首轮实现后改为：

1. `page-hero contact-page`：`OPEN TO CONVERSATION`、`Contact`、`有具体的事情，欢迎联系我。`；
2. 全宽 `contact-layout`：按直接联系、公开账号、其他作品与资料分为三组；
3. 每组内部使用开放式 `link-list`；固定左侧二维码栏已删除。

页面还包含一个原生 `dialog`，用于放大查看带二维码的链接图片；支持关闭按钮、点击背景关闭和浏览器原生 Escape 关闭路径。

## 3. 当前代码事实

### 已经接入当前 Foundation 的部分

- 页面共享 `BaseLayout`、Header、Footer 和 `display-title`。
- 页面背景、文字、弱文字、强调色、字体、字号、行高、圆角和阴影已经有 Foundation token 来源。
- Contact 的二维码放大交互已经存在，不需要为了重构视觉重新发明交互。
- 外部 HTTP 链接会添加新窗口行为和外部链接标记；邮箱和本地资源保持当前窗口路径。
- Contact 的二维码放大交互仍保留；当前桌面端三组链接占满正文轨道，900px 以下保留链接内容顺序，640px 以下缩略图条目收为单列。

### 仍带有旧页面实现特征的部分

1. `secondary-pages.css` 与 `global.css` 仍同时定义部分旧选择器；本轮只完成页面结构迁移，未做全局旧选择器清理。
2. About 已从五个相似文本块改为连续文章，但正文宽度与小标题节奏仍需本地视觉验收。
3. Contact 已按三组入口分组，列表密度和二维码缩略图尺寸仍需本地视觉验收。
4. Contact 固定左侧二维码栏已删除，避免微信二维码重复展示和空白栏位。
5. 页面样式中同时出现 `var(--color-*)` 和由 `global.css` 兼容映射提供的 `var(--line)`、`var(--muted)`、`var(--accent-strong)`。当前能运行，但后续重构应避免继续扩大这两套命名。
6. 页面 Hero 没有底部边界线，这是 Maki 经过视觉反馈后确认的当前决定，不应在本轮审计中重新当成缺陷修复。

## 4. 已回写的实现漂移

审计时仓库中的 Hero 文案与此前确认版本存在未完全回写；首轮实现已完成以下修正：

- About H1 最新改为 `About`，副标题为 `我在把经历变成方法。`；
- Contact H1 最新改为 `Contact`；
- Contact 的小标题和副标题保持已确认版本。
- About 正文改为复用 Now 的 `now-entry-content` 排版规则。

这不是新的内容决策，已作为实现修正完成。

## 5. 保留、重写与暂不动

### 建议保留

- `BaseLayout`、SiteHeader、SiteFooter 和当前导航行为；
- Foundation token 与共享标题轨道；
- Contact 的原生 `dialog` 交互模型；
- `profile.json` 和 `links.json` 作为事实来源；
- 已存在且可核验的头像、二维码、GitHub、社交主页和 PDF 资源。

### 建议重写或重新组合

- About 正文的区块结构与阅读顺序；
- Contact 的入口分组、优先级和 QR 位置；
- 两页的正文起始节奏、内容宽度和桌面 / 移动端组合；
- 页面级 CSS 与旧全局规则的职责边界。

### 暂不动

- Home、Archive、Now 的已接受视觉；
- 暗色主题；
- 新增统计、复杂动效或新的外部服务；
- 没有新事实依据的个人经历和结果描述。

## 6. P0：进入视觉 Review Preview 前必须确定

### P0-01｜About 正文结构

需要在以下方向中选定一个：

- B：一篇连续的 About 文章，内部只保留少量小标题；

### P0-02｜Contact 入口优先级

需要确定邮箱、微信、公开账号、音乐主页和简历 PDF 是否分组，以及第一入口是什么。

1. 直接联系：邮箱、微信；
2. 公开账号：抖音、小红书、视频号；
3. 其他作品与资料：网易云音乐、GitHub、简历 PDF。

### P0-03｜微信二维码的重复展示与左栏

列表中展示二维码缩略图；左侧不再展示二维码，左栏整体删除。

## 7. P1：进入生产实现前需要预览的 UI 变量

- About 连续文章的正文宽度、小标题节奏和段落长度；
- Contact 三组入口的列表密度与组间间距；
- 二维码缩略图和放大弹窗的边界、圆角、阴影是否继续沿用当前 Foundation 选择；
- 640px / 900px 两个断点下的内容顺序和间距。

## 8. 审计结论与下一步

当前问题不是需要重新选择全站 UI，而是两个旧页面缺少明确的信息架构：

- About 需要从“五段相似说明”变成有阅读顺序的个人工作上下文；
- Contact 需要从“混合链接清单”变成有优先级的联系入口；
- 两页可以继续共享 Hero、排版和 Foundation token，但不应强行复用 Archive 的统计索引。

下一步：在本地完成 About / Contact 的视觉验收；若有反馈，再针对正文宽度、列表密度或断点细节做小范围修改。
