# Maki 个人网站 Site Map v0.1

## 文档状态

- 状态：待用户确认
- 版本：v0.1
- 日期：2026-09-14
- 用途：在视觉方向实验之前，先给网站建立一个“不锁死”的页面和功能地图。
- 边界：这不是最终需求说明，也不是让 AI 立即开始重构源码；它只决定第一版要承载什么，以及未来内容应该从哪里增长。

## 1. 核心判断

### 1.1 最终网站不是单页 Landing Page

Landing Page 只作为第一阶段的“样板间”，用于验证视觉大方向、内容密度、导航和第一屏表达。长期网站需要至少有：

- 一个能解释当前身份和关注点的 Home；
- 一个能持续增加内容的项目/作品入口；
- 一个能持续增加文章或笔记的入口；
- 一个能说明经历、合作方式和联系方式的入口；
- 后续可以加入 Now、实验、学习记录或生活数据，而不必重新设计全站。

### 1.2 第一版不需要把所有未来栏目都做出来

第一版需要先确定“容器和关系”，不需要填满所有容器。一个栏目没有真实内容时，不显示空的占位页面；等有真实材料，再用已有模板加入。

因此本地图同时包含：

- P0：第一版必须能成立的页面；
- P1：当前已有内容可以保留或逐步迁移的页面；
- P2：未来可以接入、但现在不进入核心范围的栏目；
- X：第一版明确不做的复杂功能。

## 2. 网站目标和受众顺序

### 2.1 网站目标

这是一个长期存在、持续更新的个人空间，用来展示真实的身份、项目、作品、思考和合作方式。它不是一次性作品集，也不是只服务某一次求职的简历页面。

### 2.2 受众顺序

1. 先让网站体现真实的 Maki 和长期个人身份；
2. 再让面试官、合作伙伴快速理解做过什么、如何做事、能提供什么；
3. 最后让普通访客愿意继续浏览。

### 2.3 当前已知约束

- 新增项目、文章或栏目时，尽量只新增内容记录，不重新设计 UI。
- 真实内容优先；不填充虚构成果、虚假数据、空泛评价或模板化自我介绍。
- 避免当前版本的暖色衬线体、橙/绿/淡黄组合，以及明显的 AI 句式。
- 复杂动效不能成为内容可用的前提；核心内容必须有普通页面和移动端路径。

## 3. 建议的第一版页面地图

### P0：第一版核心页面

| 页面 | 建议路线 | 主要任务 | 第一版是否必须有 |
|---|---|---|---|
| Home | / | 说明我是谁、现在关注什么，并把访客带到项目、写作和联系入口 | 是 |
| Projects index | /projects/ | 展示可持续增加的项目/案例入口 | 是 |
| Project detail | /projects/[slug]/ | 说明一个项目的背景、角色、判断、过程、结果和链接 | 是 |
| Writing / Notes index | /writing/ 或 /notes/ | 展示文章、笔记和思考的时间流与分类 | 有真实内容后上线；模板先定义 |
| Article / Note detail | /writing/[slug]/ 或 /notes/[slug]/ | 提供稳定的长文阅读页面，长文才使用目录 | 有真实内容后上线；模板先定义 |
| About / Experience | /about/ | 说明身份、经历、合作方式、长期关心的问题和当前方向 | 是 |
| Contact | /contact/ | 提供真实有效的联系方式、社交链接和合作入口 | 是 |

这里的“有真实内容后上线”不代表架构不设计，而是避免为了凑页面而发布空的文章索引。实验室可以使用一篇真实文章或笔记来验证这个模板。

### P1：当前内容的迁移入口

| 内容 | 当前状态 | v0.1 建议 |
|---|---|---|
| Works / 作品档案 | 当前有 /works/ 和多条作品 Markdown | 暂时保留为作品档案入口，后续决定是否并入 Projects |
| Proof / 数据与证明 | 当前嵌在 Works 页面 | 先作为项目/作品详情中的证据区块；不要把数据单独做成 Dashboard |
| Stats / 首页数字 | 当前存在 | 只有能解释来源和意义时才保留；不把数字作为首页主角 |
| Nav / Links / Profile | 当前由 JSON 配置驱动 | 继续保持配置化，避免把稳定信息写死在页面结构中 |

### P2：未来扩展页面或栏目

| 栏目 | 第一阶段形态 | 何时独立成页面 |
|---|---|---|
| Now / 当前正在做什么 | Home 的一个短区块 | 更新频率和内容量足够高，且需要独立链接时 |
| Experiments / 实验项目 | Projects 的类型或标签 | 有多个可独立浏览的实验，且需要自己的索引时 |
| Learning / 学习记录 | Writing 的 topic/type | 内容数量足够，单独入口能减少浏览成本时 |
| Timeline / 经历时间线 | About / Experience 的区块 | 经历和阶段叙事需要独立浏览时 |
| Life / Fitness / 数据记录 | 暂不进入核心导航 | 有真实数据源、隐私边界和稳定更新方式后 |
| RSS | 输出能力，不一定是页面 | Writing 形成持续更新后 |
| Personal dashboard | 暂不做 | 只有在明确使用场景和维护成本后重新评估 |

## 4. 页面之间的关系

    Home
    ├── 精选项目 ──> Projects index ──> Project detail
    ├── 最新文章 ──> Writing index ──> Article / Note detail
    ├── 当前状态 ──> 先作为 Home 区块
    ├── 关于我 ────> About / Experience
    └── 联系我 ────> Contact

### 4.1 Home 的职责

Home 不承担所有内容。它只回答五个问题：

1. 你是谁；
2. 你最近在关注或做什么；
3. 你有哪些值得先看的项目；
4. 你是否持续写作或记录；
5. 访客下一步应该去哪里。

建议的 Home 区块顺序：

1. Identity / 当前定位；
2. Current focus / Now；
3. Selected projects；
4. Latest writing；
5. About / Experience 的简短入口；
6. Contact / Footer。

### 4.2 Projects index 的职责

Projects index 是长期增长的目录，不是把所有项目全文堆在一页。每条记录至少显示：

- 项目名称；
- 类型或状态；
- 时间；
- Maki 的角色；
- 一句话说明；
- 是否有详情、代码、演示或外部链接。

### 4.3 Project detail 的职责

项目详情页按真实材料决定章节，不要求所有项目都有完全一样的内容。推荐的可选结构：

1. Context / 背景；
2. Problem / 要解决的问题；
3. Role / 我负责什么；
4. Decisions / 关键判断；
5. Process / 过程；
6. Result / 结果和证据；
7. Reflection / 复盘；
8. Links / 代码、演示、相关材料；
9. Next / 后续。

短项目可以只用其中 3–5 个区块；长项目才显示 TOC。

### 4.4 Writing index 和 detail 的职责

Writing index 负责发现和回看，detail 负责阅读。索引页未来可以支持：

- 内容类型：article、note、log、review 等；
- topic；
- 日期或年份；
- draft / published 状态。

第一版不预先实现复杂搜索和筛选；内容数量达到需要时，再从现有列表原语上增加。

## 5. 第一版功能范围

### 5.1 P0：内容成立所需的功能

| 功能 | 用途 | 第一版策略 |
|---|---|---|
| 全局导航 | 在 Home、项目、写作、About、Contact 之间移动 | 必须有；桌面和移动都可用 |
| 项目索引与详情链接 | 让项目从首页入口进入可阅读的详情 | 必须有 |
| 文章/笔记索引与详情链接 | 让长期写作不依赖手动改首页布局 | 有真实内容后启用 |
| 外部链接 | GitHub、作品、社交或合作入口 | 只放真实有效链接 |
| 移动端布局 | 保证核心内容可读可操作 | 必须有 |
| 键盘焦点和基础无障碍 | 让导航、菜单、对话框和链接可使用 | 必须有 |
| 简单的返回路径 | 返回索引、回到顶部 | 长页面使用 |

### 5.2 P1：可以在第一版后加入

| 功能 | 触发条件 |
|---|---|
| 亮/暗色主题 | 视觉方向确定且不增加内容维护成本 |
| 文章 TOC | 出现较长文章时 |
| topic/type/year 筛选 | 内容数量达到手动浏览不方便时 |
| RSS | Writing 形成持续更新后 |
| 轻量搜索 | 内容档案足够大且有明确搜索场景时 |
| Now 独立页面 | Now 内容需要单独分享或频繁更新时 |

### 5.3 X：第一版不做

- Canvas/WebGL 画布作为核心导航；
- 滚动劫持；
- 复杂的全屏页面转场；
- 实时 GitHub、健身、财务或身体指标 Dashboard；
- 为了视觉效果制造虚假的数字、访客数或指标；
- 每个栏目一套独立的视觉组件；
- 没有真实内容支持的 Newsletter、会员或社交功能。

## 6. 内容模型草案

页面地图要能长期扩展，关键不在于现在把页面做多，而在于让新增内容有稳定的记录格式。

### Profile

稳定的身份和站点设置：

- name；
- headline；
- intro；
- location；
- current focus；
- seeking；
- avatar；
- links。

### Project

项目或作品的统一入口：

- title；
- slug；
- kind：case-study、work、experiment；
- status：ongoing、completed、paused、prototype；
- date / period；
- role；
- topics / stack；
- summary；
- cover；
- featured；
- links；
- body。

### Article / Note

文章、笔记和长期记录：

- title；
- slug；
- type；
- date；
- topics；
- excerpt；
- status；
- cover（可选）；
- body。

### Experience

经历和合作证据：

- organization；
- role；
- period；
- context；
- highlights；
- links；
- evidence。

### Now

当前状态可以先作为一个短内容文件或 Home 区块：

- updated；
- current focus；
- doing；
- learning；
- looking for；
- next。

上述内容模型是候选结构，不是现在就要改代码的字段清单。当前项目已有 Markdown + frontmatter 和 settings JSON 读取方式，后续可以逐步增加集合和类型，不需要马上换框架。

## 7. Projects 与 Works 的暂定处理

当前项目同时有 Projects 和 Works。v0.1 不强行删除其中一个，但先给它们分工：

- Projects：较完整的项目、系统或案例，强调背景、角色、判断、过程和结果；
- Works：单个作品或内容产出，强调成品、链接、平台、日期和简短复盘。

推荐的短期做法：

1. 先保留两个底层内容集合，避免一次迁移造成事实和链接丢失；
2. 视觉上尽量复用同一套列表、标签、状态和详情原语；
3. 等真实内容盘点完成后，再决定公开导航是分成两个入口，还是统一成 Projects 并用 kind 筛选。

这是本版本最重要的开放决策之一，但不会阻塞 Home / Hero 的视觉方向实验。

## 8. 当前项目与目标地图的对应关系

| 当前页面或数据 | v0.1 对应 | 处理意见 |
|---|---|---|
| src/pages/index.astro | Home | 保留内容职责，之后重新设计视觉与区块顺序 |
| src/pages/projects.astro | Projects index + detail 的临时合并 | 后续考虑拆成索引和 /projects/[slug]/ |
| src/pages/works.astro | Works archive / Project output | 先保留，后续与 Projects 关系待定 |
| src/pages/about.astro | About / Experience | 可先扩充真实经历和合作方式 |
| src/pages/contact.astro | Contact | 保留真实链接和二维码；不把联系功能做复杂 |
| src/site-content/projects/*.md | Project collection | 可继续复用，逐步补充 status、links、topics 等字段 |
| src/site-content/works/*.md | Work collection | 可继续复用，逐步统一为项目/作品内容原语 |
| src/site-content/settings/*.json | Profile、导航、链接、精选项 | 继续作为站点级配置 |

## 9. 这份地图暂时不决定的事情

以下问题留到视觉方向实验或真实内容盘点时再决定：

- 最终使用哪一套字体；
- 具体颜色、间距、圆角和阴影数值；
- /writing/ 还是 /notes/ 作为公开 URL；
- Projects 与 Works 最终是否合并；
- About 与 Experience 是否拆页；
- Now 是否独立成页；
- 是否需要搜索、筛选、主题切换；
- 是否使用页面转场或更明显的动效。

这样做是为了先确定网站“承载什么”，再用实验确定“长什么样”，不让尚未验证的视觉偏好反过来锁死内容架构。

## 10. 下一道 Gate：Home / Hero 视觉方向实验

这份地图完成后，下一步不是实现所有 P0 页面，而是：

1. 选一组真实测试内容：一个项目、一篇文章或笔记、一段 About/Now、联系方式；
2. 只制作 Home / Hero 的 3–5 个视觉大方向；
3. 每个方向都使用同一组内容，方便比较；
4. 同时保存桌面和移动截图；
5. 你选择一个方向，或指出需要融合的部分；
6. 方向确认后，再进入导航、项目详情、文章阅读版式和动效曲线等组件级实验。

验收标准不是“看起来已经像最终网站”，而是：

- 能看出 3–5 个方向确实不同；
- 每个方向都能表达真实内容；
- 至少有一个方向让你愿意继续往下打磨；
- 方向能自然延伸到 Project detail 和 Article index；
- 没有因为实验而修改生产站点。

## 11. 需要 Maki 最后确认的最小问题

为了进入视觉实验，不需要回答所有未来问题，只需确认以下默认方案是否可以继续：

1. 第一版采用多页面结构，而不是只做一个 Landing Page；
2. Home、Projects、About、Contact 作为第一版稳定入口；
3. Writing 先定义模板，有真实内容后显示；
4. Now 先作为 Home 区块；
5. Projects 和 Works 暂时保留内容层面的区分，之后再决定是否合并；
6. 第一版不做 Dashboard、Canvas/WebGL 和复杂搜索。

如果没有反对意见，就可以按这个默认方案进入 Home / Hero 方向实验。
