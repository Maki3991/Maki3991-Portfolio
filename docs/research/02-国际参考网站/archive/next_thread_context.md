# 下一轮 Thread 上下文：个人网站长期重建

## 任务

继续为 Maki 的长期个人网站做公开网络研究和设计系统筛选。当前阶段只研究，不修改网站代码，不直接引入模板。

## 已确认目标

网站要长期存在并持续更新，服务三类访客：

1. 先让访客认识真实的 Maki 和长期身份。
2. 让面试官、合作伙伴快速理解做过什么、如何思考、能提供什么价值。
3. 让朋友和普通访客愿意继续浏览。

第一版栏目暂时不锁死。以后增加项目、文章、时间线、链接集合、学习记录或其他栏目时，应复用已有的 token、组件、页面骨架和内容 schema，不重新设计一套 UI。

## 明确避开的方向

- 米白、浅黄、橙色、橄榄绿与高级感衬线体的常见组合。
- 大面积渐变、玻璃拟态、过度圆角、卡片堆叠。
- 动效遮住阅读、导航和信息层级。
- 空泛的个人介绍和模板化 AI 文案。
- 机械重复“不是……而是……”的对比句式。
- 看起来很特别、实际无法长期添加内容的一页实验作品。

可以借鉴不符合这些条件的网站中的局部结构，例如目录、标签、时间线、索引、文章阅读器、项目版本和搜索。

## 当前仓库边界

- Astro 5.x。
- 静态输出。
- 主要使用 .astro 组件和全局 CSS。
- 当前没有 React、Vue 或 Svelte 集成。
- 后续重建会在隔离分支中推进，先达到可用状态，再考虑合并生产分支。
- 当前研究阶段没有修改网站代码。

## 当前最值得研究的组合

### 内容模型

- Astro Content Collections
- SDBurt/astro-portfolio
- hmbldv/portfolio-template
- Astro Kami
- Kepler

### 设计系统

- Ronald Lopez Portfolio Design System
- Starwind UI
- 原生 Astro + CSS token
- Web Awesome 作为 Web Components 参考

### 页面模式

- bueno.fyi：目录、标签、搜索和长列表
- Robert Feasley：作品、背景、影响和 CV 的组合
- Specia1ne：编号、连续结构轴和局部滚动交互
- Justin Lerner：年份、网格和媒体索引

## 已有文件

- 直播摘要：docs/个人网站重建_AI工作流直播摘要.md
- 国际研究主报告：docs/research/个人网站长期重建_国际参考资源研究报告.md
- 候选清单：docs/research/portfolio_research_candidates.md
- 证据账本：docs/research/evidence_ledger.md

读取文件时，以国际研究主报告和证据账本为准。不要把候选表中的评分当成客观排名。评分只用于决定下一轮验证顺序。

## 下一轮执行任务

从以下 6 个对象开始做深度核验：

1. SDBurt/astro-portfolio
2. hmbldv/portfolio-template
3. Astro Kami
4. Kepler
5. Starwind UI
6. Ronald Lopez Portfolio Design System

对每个对象记录：

- 首页或文档首页
- 一个索引/列表页
- 一个详情/阅读页或组件页
- 信息架构
- 内容模型
- token 和组件边界
- 搜索、筛选、目录和导航
- 移动端结构
- 键盘焦点和 reduced-motion
- 许可证、依赖活跃度和构建成本
- 可直接复用的结构
- 只能作为视觉灵感的部分
- 对 Maki 网站的具体适用场景

然后形成 3 至 5 个可组合方向，例如：

- 冷静编辑型内容站
- 结构化个人档案型
- 项目过程和证据型
- 目录/索引型个人互联网主页
- 少量实验交互加稳定内容骨架

每个方向要写清：页面骨架、内容 schema、组件集合、视觉语言、动效边界、长期新增栏目方式和风险。

## 当前页级核验进度

已经通过公开页面和只读 Playwright 检查：

- Astro Kami：首页、文章详情页、移动视口、跳过链接和首个键盘焦点。
- Kepler：Work 索引、分类筛选、移动视口和筛选后的项目数量。
- Starwind UI：组件文档分类、安装/源码复制路径、移动菜单 dialog 和 Skip to main content。
- SDBurt：首页、Projects 索引、Astro 项目详情页和移动视口。
- Ronald Lopez：设计系统案例页和 Storybook 入口。
- hmbldv：公开仓库 README 和目录结构；README 未提供 live demo，页面级证据暂缺。

当前仍未完成：

- 6 个对象的本地 clone/build/依赖和许可证复核。
- 所有对象的完整键盘遍历、焦点样式、reduced-motion 实测。
- hmbldv 的实际页面核验。
- 把 3 至 5 个可组合方向写成低保真页面骨架，再由 Maki 选择。
## 研究纪律

- 公开来源优先，不登录，不保存 Cookie，不使用私有链接。
- 官方事实、项目自述、社区观点和本项目推断分开记录。
- 社区评论要附原链接，不把单条评论写成普遍共识。
- 不编造社区星级、用户数量、性能分数或设计师结论。
- 先研究结构，再讨论颜色、字体和动画。
- 研究结果要能直接指导下一步原型，而不是停留在网址收藏。
- 在完成 6 个候选的页面级核验前，不宣布最终视觉方向，也不开始重构代码。