# Component Audit Batch 05 v0.1

> 日期：2026-09-17  
> 范围：最后 3 个待审计组件  
> 当前状态：Evidence Block、Detail Navigation、TextLink + Button 均已实现并通过验收  
> 生产代码：本轮未修改  
> 对应队列：[component-audit-queue-v0.1.md](./component-audit-queue-v0.1.md)

## 0. 这份文档要解决什么

本批次审计：

1. Evidence Block
2. Detail Navigation
3. TextLink + Button

这是一轮只读审计，不是实现报告。报告先把当前代码、设计契约、Lab 选择和具体修改位置对齐，再把所有会影响实现的选择列出来。Maki 完成第 5 步后，才进入“改一个、看一个、验收一个”的实现循环。

本批次不重新打开已经确认的 Header、Footer、Archive Detail Item Header、Selected Work 和 Contact CTA，也不修改旧的 Projects / Works 页面。

## 1. 结论先看

| 组件 | 当前实现状态 | 主要问题 | 本轮建议 |
| --- | --- | --- | --- |
| Evidence Block | 已有可用的文字列表 | 没有展示证据类型；截图、代码、测试结果还没有统一呈现约定；空状态文案较泛 | 保留开放列表和公开边界，先决定证据分层及类型信息，不做证据卡片墙 |
| Detail Navigation | 只有详情页顶部返回 Archive；底部、上一项、下一项、相关项目尚未实现 | 访客看完详情后缺少自然的继续浏览路径；relatedWorks 数据目前没有被读取 | 先决定是否只补一个轻量返回入口，再决定是否按 Archive 顺序加入上一项 / 下一项；相关项目先保持可延期 |
| TextLink + Button | Home、Archive、Detail、Now、Contact 各自已有链接和按钮 | 视觉样式分散在多个 CSS 文件；站内链接、外部链接、行动按钮的层级还没有统一规则 | 保留 HTML 语义，确定哪些是真正行动按钮，哪些只是文字入口；不要把所有链接按钮化 |

## 2. 已确认的共同约束

本批次所有选项都必须服从这些已确认规则：

- 亮色 Working Archive 是当前主要开发对象。
- 冷静的浅色背景、深色正文、单一蓝色强调、细线和开放留白继续保留。
- 列表优先，不把所有内容包装成卡片。
- 图片和代码只在能够证明项目过程或结果时出现，不使用装饰性占位图。
- 不制造没有来源的指标、评价、进度数字或 Dashboard 感。
- 外部链接要能被识别，但不应全部变成按钮。
- 动效保持 L0–L1；不加入滚动劫持、复杂转场或必须悬停才能理解的内容。
- 键盘 Focus、移动端换行、长中文和无公开证据状态必须可用。
- 生产实现不能直接复制未选中的 Lab CSS。

## 3. Evidence Block

### 3.1 第 1 步：扫描当前实现

当前详情页模板位于：

- [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro)

当前行为：

- 模板先通过 visibleEvidence 过滤掉非公开 evidence。
- 公开证据以单个 ul 列表呈现。
- 有 url 时渲染外部 a 元素和出口箭头；没有 url 时渲染 strong。
- 每一项只有 label 和 supports 两个可见信息。
- 当前不会把 kind、visibility、截图、代码片段或测试结果单独呈现出来。
- 没有公开证据时显示“公开证据正在整理。”。

数据模型位于：

- [src/data/archive.ts](../../../src/data/archive.ts)

ArchiveEvidence 已经有这些字段：

- kind：public-link、local-file、screenshot、source-record、user-confirmation
- label
- supports
- url
- visibility

所以当前主要缺口不是数据完全不存在，而是页面还没有决定如何把这些字段转化为稳定的证据阅读结构。

现有证据内容来自：

- [src/site-content/archive](../../../src/site-content/archive/)

其中既有公开链接，也有本地文件、截图、用户确认和暂不公开的材料。当前公开过滤规则是必要的，不能为了填满版面显示 private 或 pending 内容。

当前样例截图：

- [Evidence：Maki English 桌面端](../../../output/playwright/component-audit-evidence-maki-english-v0.1.png)
- [Evidence：Maki English 移动端](../../../output/playwright/component-audit-evidence-maki-english-mobile-v0.1.png)
- [Evidence：无公开证据状态](../../../output/playwright/component-audit-evidence-empty-v0.1.png)

当前运行验收中，详情页控制台错误为 0，说明本轮关注的是信息结构和视觉层级，不是已有 Evidence 列表的运行故障。

### 3.2 第 2 步：重新读取设计库

相关设计契约：

- D-07 产物与交付链接：B — Quiet Grid
- D-08 Evidence / 验证信息：A — Editorial Rail
- D-09 图片、截图与代码展示：B — Quiet Grid
- C-09 Evidence Block：由 EvidenceHeader、EvidenceItem、EvidenceType、EvidenceLink、EvidenceMedia、VerificationNote 组成

对应文档：

- [Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)
- [Component Contract v0.1](../08-Component-Contract-v0.1/component-contract-v0.1.md)
- [Component Map v0.1](../07-Component-Lab-v0.1/component-map-v0.1.md)

设计含义：

- Evidence 是项目详情中的一个证明区域，不是独立的“炫技画廊”。
- Editorial Rail 只说明信息如何分轨，不代表必须增加厚重侧栏。
- 交付链接、验证说明、截图和代码可以分层，但每层都必须能回答“它证明了什么”。
- 没有真实截图或代码时，不应该生成看起来像证据的占位内容。

### 3.3 第 3 步：查看已选参考方案和代码

已选方案：

- D-07：B — Quiet Grid  
  [查看 D-07-B](../../../output/component-lab-remaining-v0.1/index.html#D-07-B)
- D-08：A — Editorial Rail  
  [查看 D-08-A](../../../output/component-lab-v0.2/index.html#D-08-A)
- D-09：B — Quiet Grid  
  [查看 D-09-B](../../../output/component-lab-remaining-v0.1/index.html#D-09-B)

这三个选择合并后的可执行解释：

- 外层仍然是开放的证据轨道，而不是卡片网格。
- 每条证据保持清晰的标题、证明说明和必要的入口。
- 截图、代码和测试结果作为证据类型或证据内容出现，不能与普通项目装饰图混在一起。
- 类型标签应当帮助扫描，而不是制造一串标签。

### 3.4 第 4 步：找出当前网站的具体修改位置

如果 Maki 选择进入实现，候选改动位置是：

1. [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro) 的 Evidence section。
2. [src/data/archive.ts](../../../src/data/archive.ts) 的 ArchiveEvidence 显示映射；第一版可以不扩展 schema。
3. [src/site-content/archive](../../../src/site-content/archive/) 中确实拥有公开材料的条目。
4. [src/styles/archive-detail.css](../../../src/styles/archive-detail.css) 的 evidence list 和 section 样式。
5. 如果需要真实截图或代码展示，再从现有公开资产中选择；没有资产的条目不补假图。

本组件第一轮不应该做：

- 把所有 evidence 改成圆角卡片。
- 展示 private、pending 或无法公开核验的材料。
- 为每个项目强行补齐截图、代码、测试结果。
- 先做复杂灯箱、横向滚动或媒体画廊。

### 3.5 第 5 步：请 Maki 判断

请在本文件中勾选。每个问题原则上只选一个；带“可组合”的问题可以同时选择。

#### EVID-01：Evidence 的总体排布

- [x] A — 保留当前开放列表，左侧或上方只增加轻量的证明类型/字段提示。推荐。
- [ ] B — 分成“产物与交付”和“验证与过程”两个细线列表。
- [ ] C — 每条 evidence 都使用独立容器，允许列表和媒体混合。
- [ ] 自定义：

#### EVID-02：证据类型如何显示

- [x] A — 保留文字优先；只在有帮助时显示简短类型，如 PUBLIC LINK、SCREENSHOT、TEST。推荐。
- [ ] B — 交付链接使用安静表面，验证信息保持开放文字列表。
- [ ] C — 截图、代码和测试结果都作为独立子块显示。
- [ ] 自定义：

#### EVID-03：第一版是否扩展 Evidence 数据字段

- [ ] A — 不扩展 schema，只使用现有 kind、label、supports、url、visibility。
- [x] B — 使用现有 schema，但把 kind 转成页面可见的小型类型信息。推荐。
- [ ] C — 增加 assetPath、alt、capturedAt、version 等字段，为未来媒体证据做准备。
- [ ] 自定义：

#### EVID-04：没有公开证据时怎么写

- [x] A — 保留当前“公开证据正在整理。”。
- [ ] B — 明确写“当前没有可公开核验的材料”，并隐藏 pending/private 内容。推荐。
- [ ] C — 显示低对比度的“待补充”状态，让访客知道此处未来会更新。
- [ ] 自定义：

## 4. Detail Navigation

### 4.1 第 1 步：扫描当前实现

详情页模板位于：

- [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro)

当前行为：

- 顶部有一个返回 Archive 的链接。
- Evidence section 之后没有上一项、下一项、相关项目或页尾详情导航。
- 页面最后直接进入公共 Footer。
- 当前没有根据 Archive 顺序计算相邻项目的逻辑。
- ArchiveItem 有 relatedWorks 字段，但详情页尚未读取、解析或渲染它。

Archive 列表当前可以从列表行进入详情，但访客看完一个详情后，若想看另一个记录，必须回到 Archive 列表。当前截图：

- [Detail Navigation 当前状态](../../../output/playwright/component-audit-detail-navigation-current-v0.1.png)

### 4.2 第 2 步：重新读取设计库

相关设计契约：

- D-10 更新历史与相关项目：E — Open Field
- P-10 页面结尾与下一步入口：E — Open Field
- S-08 面包屑与返回入口：E — Open Field，已实现并验收

设计含义：

- 页面结尾可以给出轻量的连续阅读入口。
- 不应该为了“看起来完整”制造上一篇 / 下一篇。
- 相关项目要等到内容关系足够清晰时再展示。
- Archive 页面已经确认的 NEXT → NOW / 当前阶段入口继续保留；本批不重新推翻这个决定。

### 4.3 第 3 步：查看已选参考方案和代码

当前选定：

- D-10：E — Open Field  
  [查看 D-10-E](../../../output/component-lab-remaining-v0.1/index.html#D-10-E)

历史记录中 C-10 Detail Navigation 曾选择过 A，但那是早期按组件组记录的选择，不能直接替代当前更具体的 D-10 约束。当前实现应该以 D-10 E 为主，再由 Maki 决定第一版到底开放到哪一级。

D-10 E 的执行方向：

- 页面末尾只放自然、克制的出口。
- 相关内容保持柔和，不抢当前项目主题。
- 更新历史、前后版本和相邻条目不是第一版的强制内容。

### 4.4 第 4 步：找出当前网站的具体修改位置

如果 Maki 选择进入实现，候选改动位置是：

1. [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro) 的 Evidence section 之后、详情页 shell 结束之前。
2. [src/data/archive.ts](../../../src/data/archive.ts) 的 ArchiveItem 顺序读取逻辑；如果加入相邻项目，需要明确顺序真源。
3. [src/site-content/archive](../../../src/site-content/archive/) 的 relatedWorks 数据；只有真正存在且公开的关系才可显示。
4. [src/styles/archive-detail.css](../../../src/styles/archive-detail.css) 增加详情页结尾导航的桌面端和移动端样式。
5. 不需要 JavaScript；优先用静态生成的 a 元素完成导航。

本组件第一轮不应该做：

- 把 relatedWorks 中的字符串 ID 直接原样显示给访客。
- 在只有少量条目的情况下制造“内容网站”式的上一篇 / 下一篇压力。
- 加入横向拖拽、滚动锁定或复杂的项目浏览动画。

### 4.5 第 5 步：请 Maki 判断

#### NAV-01：详情页第一版需要哪些页尾入口

- [x] A — 只增加一个页尾 BACK TO ARCHIVE，顶部返回继续保留；上一项、下一项和相关项目暂缓。推荐。
- [ ] B — 页尾增加上一项 / 下一项，暂不增加相关项目。
- [ ] C — 页尾同时增加上一项 / 下一项和相关项目。
- [ ] D — 只保留顶部返回，不增加页尾入口。
- [ ] 自定义：

#### NAV-02：如果加入上一项 / 下一项，顺序从哪里来

- [x] A — 使用 Archive 列表当前 order，形成稳定的相邻阅读顺序。
- [ ] B — 在每个条目中新增手动 previous / next 字段。
- [ ] C — 不使用相邻顺序，只显示明确配置的 relatedWorks。
- [ ] 自定义：

#### NAV-03：relatedWorks 现在怎么处理

- [x] A — 第一版不显示，保留数据字段，等有足够清晰的内容关系后再启用。推荐。
- [ ] B — 只显示能够解析到现有公开 Archive 条目的 relatedWorks。
- [ ] C — 现在就显示所有 relatedWorks，并允许链接到未来页面。
- [ ] 自定义：

#### NAV-04：详情页是否也指向 Now

Archive 列表页已经确认保留 NEXT → NOW / 当前阶段。因此本题只询问详情页：

- [x] A — 详情页只回 Archive；Now 继续由 Archive 页尾入口承载。推荐。
- [ ] B — 详情页页尾也增加 NEXT → NOW。
- [ ] C — 自定义：

## 5. TextLink + Button

### 5.1 第 1 步：扫描当前实现

当前项目已经有真实的链接和按钮，但它们分散在多个页面：

| 位置 | 当前元素 | 当前用途 |
| --- | --- | --- |
| [src/pages/index.astro](../../../src/pages/index.astro) | button primary | Hero 的“查看代表项目” |
| [src/pages/index.astro](../../../src/pages/index.astro) | button | Hero 的“联系我” |
| [src/pages/index.astro](../../../src/pages/index.astro) | home-selected-link | Selected Work 的文字入口 |
| [src/components/ArchiveRow.astro](../../../src/components/ArchiveRow.astro) | archive-row-link | Archive 行的“查看记录” |
| [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro) | archive-detail-back、evidence link | 返回 Archive、外部证据 |
| [src/pages/now.astro](../../../src/pages/now.astro) | now-back-link | 返回 Home |
| [src/pages/contact.astro](../../../src/pages/contact.astro) | contact-link-main | 邮件、社交、音乐、GitHub 等入口 |
| [src/pages/contact.astro](../../../src/pages/contact.astro) | qr-zoom-trigger、qr-dialog-close | 打开和关闭二维码对话框 |

当前语义总体是合理的：

- 页面跳转使用 a。
- 菜单开关和二维码预览使用真正的 button。
- 外部 HTTP 链接使用 target 和 rel=noreferrer。
- Home 的两个 Hero 行动使用 a，但采用 button 视觉。

当前主要问题是样式和层级分散：

- 通用 button 和 text-link 在 [src/styles/global.css](../../../src/styles/global.css)。
- Home 对 button、Selected Work link、contact card 有自己的规则，在 [src/styles/home.css](../../../src/styles/home.css)。
- Archive、Archive Detail、Now 又各自拥有链接样式。
- 当前没有共享的 InternalLink、ExternalLink、PrimaryButton 等组件。

旧页面还存在 ProjectCard 和 WorkCard，但它们属于尚未决定是否合并的旧 Projects / Works 路由。本轮不自动把旧页面纳入统一改造。

当前运行样例：

- [Home 行动入口](../../../output/playwright/component-audit-textlink-button-home-actions-v0.1.png)
- [Contact 链接和二维码按钮](../../../output/playwright/component-audit-textlink-button-contact-v0.1.png)

### 5.2 第 2 步：重新读取设计库

相关设计契约：

- S-09 外部链接表现：E — Open Field
- P-09 Contact / Collaboration CTA：E — Open Field
- P-10 页面结尾与下一步入口：E — Open Field
- C-11 TextLink + Button 的组件范围包括 InternalLink、ExternalLink、IconLink、PrimaryButton、SecondaryButton、QuietButton

S-09 的核心约束：

- 外部链接使用文字、出口箭头和必要的类型信息区别于站内链接。
- Demo、代码、社交入口可以有不同优先级。
- 不把所有外部链接包装成按钮。
- 真正的 button 保留给页面内行为，如菜单和二维码对话框。

### 5.3 第 3 步：查看已选参考方案和代码

当前选定：

- S-09：E — Open Field  
  [查看 S-09-E](../../../output/component-lab-remaining-v0.1/index.html#S-09-E)

早期 C-11 的 A 选择是历史组件组选择；现在不把它理解成“所有入口都必须做成同一种按钮”，而是把它拆成语义清楚的几类入口。

建议的语义映射：

- PrimaryButton：用户需要立即采取的主要行动，例如 Hero 的查看代表项目。
- SecondaryButton：与主要行动并列但优先级较低的行动，例如联系我。
- QuietButton：确实是行动但不应抢视觉注意力的入口。
- InternalLink：站内页面跳转。
- ExternalLink：站外入口，带出口箭头或必要类型说明。
- IconLink：只有图标能够被无障碍名称和上下文解释时才使用。

### 5.4 第 4 步：找出当前网站的具体修改位置

如果 Maki 选择进入实现，候选改动位置是：

1. [src/pages/index.astro](../../../src/pages/index.astro) 的 Hero actions、Selected Work link 和 Contact cards。
2. [src/components/ArchiveRow.astro](../../../src/components/ArchiveRow.astro) 的标题链接与查看记录链接。
3. [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro) 的返回链接与 evidence 外部链接。
4. [src/pages/now.astro](../../../src/pages/now.astro) 的返回入口。
5. [src/pages/contact.astro](../../../src/pages/contact.astro) 的联系入口和二维码 button。
6. 对应样式文件：global.css、home.css、archive-implementation.css、archive-detail.css、now.css。
7. [src/components/SiteHeader.astro](../../../src/components/SiteHeader.astro) 已验收；除非发现本批决策确实影响导航，不应顺手重做 Header。

本组件第一轮不应该做：

- 把所有 a 都替换成 button。
- 为普通站内链接增加夸张的胶囊、渐变或阴影。
- 把 Contact card、Archive row 和 Hero action 强行做成完全相同的视觉块。
- 顺手修改旧 Projects / Works 页面。

### 5.5 第 5 步：请 Maki 判断

#### ACT-01：行动层级

- [x] A — 只有 Hero 的“查看代表项目”是主要行动；“联系我”是次要行动；其余入口使用文字链接或列表行。推荐。
- [ ] B — 保持当前 Home 两个 button 外观，其余页面暂不统一。
- [ ] C — Archive、Contact 等关键入口也使用按钮视觉。
- [ ] 自定义：

#### ACT-02：外部链接的视觉表现

- [x] A — 文字 + 出口箭头 + 必要类型信息；保持 Open Field。推荐。
- [ ] B — Demo / GitHub 等交付入口可以使用安静表面，普通社交链接继续用文字。
- [ ] C — 外部链接统一使用按钮或胶囊。
- [ ] 自定义：

#### ACT-03：Home 中两个“查看代表项目”入口是否都保留

- [x] A — Hero 保留主行动，Selected Work 区块也保留上下文内文字入口；两者用途不同。推荐。
- [ ] B — 只保留 Hero 的主行动，删除 Selected Work 内的重复入口。
- [ ] C — 删除 Hero 主行动，只保留 Selected Work 内的入口。
- [ ] 自定义：

#### ACT-04：本轮统一范围

- [x] A — 只统一当前 Working Archive 链路：Home、Archive、Archive Detail、Now、Contact。旧 Projects / Works 暂缓。推荐。
- [ ] B — 当前链路和旧 Projects / Works 一起统一。
- [ ] C — 只处理当前已经明显不一致的入口，不建立更完整的统一规则。
- [ ] 自定义：

#### ACT-05：真实 button 的处理

- [x] A — 菜单、二维码预览等页面内行为继续使用真正的 button；页面跳转继续使用 a。推荐。
- [ ] B — 额外抽取共享 Button / Link 组件，再逐页迁移。
- [ ] C — 暂不抽取共享组件，只用现有 class 规则实现视觉统一。
- [ ] 自定义：

### 5.6 已确认的第 5 步选择

#### Evidence Block

- EVID-01：A，保留当前开放列表，只增加轻量证明类型或字段提示。
- EVID-02：A，文字优先，只在有帮助时显示简短类型。
- EVID-03：B，沿用现有 schema，把 kind 转成页面可见的小型类型信息。
- EVID-04：A，保留当前“公开证据正在整理。”。

#### Detail Navigation

- NAV-01：A，首版只增加页尾 BACK TO ARCHIVE；上一项、下一项和相关项目暂缓。
- NAV-02：A，未来若启用上一项 / 下一项，使用 Archive 当前 order。
- NAV-03：A，首版不显示 relatedWorks，保留数据字段。
- NAV-04：A，详情页只回 Archive；Now 继续由 Archive 页尾入口承载。

#### TextLink + Button

- ACT-01：A，只有 Hero 的“查看代表项目”是主要行动，“联系我”是次要行动。
- ACT-02：A，外部链接使用文字、出口箭头和必要类型信息。
- ACT-03：A，Hero 和 Selected Work 内的两个入口都保留。
- ACT-04：A，只统一当前 Working Archive 链路，旧 Projects / Works 暂缓。
- ACT-05：A，页面行为使用真正的 button，页面跳转继续使用 a。

因此，NAV-02 是未来条件性约束，不会推翻 NAV-01 的首版范围。当前三个组件都已经完成第 5 步，可以进入第 6 步，但生产实现仍需逐个进行。

## 6. 原始默认方案（历史对照）

这一节保留原先的建议，只有追溯审计过程时参考；实际实现不得读取这一节作为当前决定，必须以“5.6 已确认的第 5 步选择”为准。

- Evidence：EVID-01 A、EVID-02 A、EVID-03 B、EVID-04 B。
- Detail Navigation：NAV-01 A、NAV-03 A、NAV-04 A；如果未来确实需要相邻阅读，再选择 NAV-02 A。
- TextLink + Button：ACT-01 A、ACT-02 A、ACT-03 A、ACT-04 A、ACT-05 A。

其中 EVID-04 B 已被 Maki 的实际选择 EVID-04 A 覆盖。

## 7. Maki 回填区

第 5 步的复选框已经完成；这里记录当前决定，供后续 agent 直接读取：

- Evidence Block：EVID-01 A；EVID-02 A；EVID-03 B；EVID-04 A。
- Detail Navigation：NAV-01 A；NAV-02 A（未来条件性约束）；NAV-03 A；NAV-04 A。
- TextLink + Button：ACT-01 A；ACT-02 A；ACT-03 A；ACT-04 A；ACT-05 A。
- 本批共同排除：证据卡片墙、虚假媒体、首版详情页上一项 / 下一项、首版 relatedWorks、旧 Projects / Works 统一改造。
- 希望先实现的组件顺序：未指定，建议先 Evidence Block，再 Detail Navigation，最后 TextLink + Button。

Evidence Block、Detail Navigation 和 TextLink + Button 均已完成实现并通过 Maki 验收。Batch 05 正式收口。

## 8. Evidence Block 第 6 步实现记录

### 实现内容

- 沿用现有 visibleEvidence 公开过滤，不展示 private、pending 或 public-pending-copy 内容。
- 沿用现有 ArchiveEvidence schema，没有增加 assetPath、alt、capturedAt 或 version 字段。
- 为每条公开证据增加轻量类型标签：PUBLIC LINK、LOCAL FILE、SCREENSHOT、SOURCE RECORD、USER CONFIRMATION。
- 保留原有证据标题、外部出口箭头和 supports 说明。
- 保留原有空状态文案“公开证据正在整理。”。
- 只增加开放列表中的标题行布局，没有引入卡片墙、媒体占位或复杂交互。

### 修改文件

- [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro)
- [src/styles/archive-detail.css](../../../src/styles/archive-detail.css)

### 验收证据

- [桌面端完整截图](../../../output/playwright/component-implementation-evidence-block-desktop-v0.1.png)
- [移动端完整截图](../../../output/playwright/component-implementation-evidence-block-mobile-v0.1.png)
- [无公开证据空状态截图](../../../output/playwright/component-implementation-evidence-block-empty-v0.1.png)
- Maki English 页面：3 条公开证据显示为 2 条 PUBLIC LINK 和 1 条 SCREENSHOT。
- 移动端 390 × 844：documentOverflow 为 0，3 个证据标题行均未超出容器。
- 外部链接：target 为 _blank，rel 为 noreferrer。
- 空状态页面：控制台 Errors 为 0，Warnings 为 0。
- npm.cmd run build：通过；0 errors、0 warnings、2 个既有 Lab hints。

### 当前验收状态

实现已完成，但“好不好看”仍由 Maki 进行最终视觉验收。若发现类型标签过重、间距不合适或某种 evidence 类型不应该展示，再进入下一轮针对 Evidence Block 的微调；不要同时修改后面的两个组件。

## 9. Detail Navigation 第 6 步实现记录

### 实现内容

- 在详情页 Evidence section 之后增加一个独立的页尾导航区域。
- 页尾只提供 BACK TO ARCHIVE，并保留详情页顶部原有的返回入口。
- 使用静态 a 元素完成跳转，不加入 JavaScript。
- 没有加入上一项、下一项、relatedWorks 或详情页到 Now 的入口。
- Archive 列表页已经确认的 NEXT → NOW 不受本次修改影响。

### 修改文件

- [src/pages/archive/[slug].astro](../../../src/pages/archive/%5Bslug%5D.astro)
- [src/styles/archive-detail.css](../../../src/styles/archive-detail.css)

### 验收证据

- [桌面端完整截图](../../../output/playwright/component-implementation-detail-navigation-desktop-v0.1.png)
- [移动端完整截图](../../../output/playwright/component-implementation-detail-navigation-mobile-v0.1.png)
- 桌面端快照确认导航位于 Evidence 之后，页面中没有意外出现上一项、下一项或 relatedWorks。
- 移动端 390 × 844 快照确认入口正常显示，导航菜单仍正常工作。
- 实际点击 BACK TO ARCHIVE 后到达 /archive/，Archive 页面正常渲染。
- 控制台 Errors 为 0，Warnings 为 0。
- npm.cmd run build：通过；0 errors、0 warnings、2 个既有 Lab hints。

### 当前验收状态

实现已完成，等待 Maki 进行视觉验收。若通过，Detail Navigation 才标记为已验收；若需要调整，只针对页尾返回入口的间距、字号或箭头表达进行修改。

## 10. TextLink + Button 第 6 步实现记录

### 实现内容

- 为 Contact 链路增加 isExternalLink 判断，只识别 HTTP / HTTPS 外部链接。
- 外部链接显示轻量出口箭头，并给链接增加可访问名称“external link”。
- 邮箱、二维码图片、视频号本地入口和简历 PDF 等非 HTTP 链接不显示外部箭头。
- 菜单和二维码预览继续使用真正的 button；页面跳转继续使用 a。
- 为 Contact 链接、二维码预览按钮和二维码关闭按钮增加可见键盘 Focus。
- Home 的 primary / secondary 按钮、Selected Work 文字入口和旧 Projects / Works 页面没有改动。

### 修改文件

- [src/pages/contact.astro](../../../src/pages/contact.astro)
- [src/styles/global.css](../../../src/styles/global.css)

### 验收证据

- [Contact 桌面端完整截图](../../../output/playwright/component-implementation-textlink-button-contact-desktop-v0.1.png)
- [Contact 移动端完整截图](../../../output/playwright/component-implementation-textlink-button-contact-mobile-v0.1.png)
- Contact 页显示 4 个外部出口箭头，5 个二维码预览按钮仍存在。
- 邮箱、微信二维码、视频号和简历 PDF 没有被误判为外部链接。
- 外部链接仍使用 target 为 _blank 和 rel 为 noreferrer。
- 二维码预览可以打开和关闭。
- 移动端 390px 下 documentOverflow 为 0。
- Home 快照确认 Hero 的查看代表项目、联系我和 Selected Work 入口保持原有结构。
- 控制台 Errors 为 0，Warnings 为 0。
- npm.cmd run build：通过；0 errors、0 warnings、2 个既有 Lab hints。

### 当前验收状态

TextLink + Button 已通过 Maki 视觉验收。本批次最后一个组件完成，后续不再对这三个组件做无目标的继续美化。
