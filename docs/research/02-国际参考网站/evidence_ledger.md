# 个人网站长期重建：证据账本

> 访问日期：2026-09-12。  
> 这份账本把来源事实、可支持的判断和不能推出的结论分开。社区评论是样本，不代表全体用户。

## 证据等级

- A：官方页面、官方文档、公开仓库或可直接访问的实际页面。
- B：独立项目案例或公开设计流程。
- C：Reddit、YouTube 等社区讨论。
- D：基于来源的本项目判断，需要在本地原型中验证。

## 技术和架构

| ID | 来源 | 已核验事实 | 可以支持的判断 | 不能推出的结论 |
| --- | --- | --- | --- | --- |
| A01 | [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) | 官方文档提供结构化内容、schema、类型检查、查询和路由生成；构建时集合适合相对稳定的博客、文档和产品内容 | 新栏目可以先设计内容模型，再复用列表页、详情页和阅读页 | 文档本身不能决定网站视觉，也不能保证内容写得好 |
| A02 | [Astro Islands](https://docs.astro.build/en/concepts/islands/) | Astro 默认输出静态 HTML，只为明确的交互岛加载客户端 JavaScript | 搜索、筛选、主题切换和命令面板可以局部引入 | 采用 islands 不自动证明移动端性能或无障碍 |
| A03 | [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/) | 官方提供可选页面转场，并包含 prefers-reduced-motion 相关支持 | 页面连续性可以作为渐进增强 | 所有页面都不需要转场，也不能只凭文档判断真实设备体验 |
| A04 | [Starwind UI 文档](https://starwind.dev/docs/getting-started/) | 当前文档把 styled components、primitive adapter、framework-neutral runtime、raw HTML 分成层次；Astro adapter 稳定 | 组件可以复制到项目、逐层控制样式和行为，适合验证 source-first 路线 | 默认组件外观是否符合个人网站，需要本地试做 |
| A05 | [Starwind UI 仓库](https://github.com/starwind-ui/starwind-ui) | README 公开说明 Astro、React、Vue 适配，组件源码归项目拥有，MIT 许可，并列出 55 个组件 | 当前 Astro 项目有较直接的组件候选 | 仓库的 star 数、组件数量不等于适合本项目 |
| A06 | [Web Awesome](https://webawesome.com/) | 官网显示 50+ Web Standards 组件、20+ utilities、主题、布局、本地化和 HTML/CSS/JS 方案；项目由 Shoelace 演化而来 | 可作为框架无关行为和主题参考 | Shadow DOM、默认样式、Pro 边界和 Astro 构建成本需要实测 |
| A07 | [Astro Kami](https://github.com/automann/astro-kami) | README 列出 Astro 7 静态输出、Zod 内容集合、英语与简体中文路由、MDX、归档、标签、Showcase、RSS、Pagefind、中文字体 token 和 MIT | 适合研究长期写作、中文排版、归档和双语内容 | 编辑型字体和视觉不能直接作为当前网站方向 |
| A08 | [Kepler](https://github.com/kpab/astro-kepler) | README 列出 blog、portfolio、landing 三种 preset，共享 token、Content Collections、Pagefind、RSS、vanilla script、zero-JS 默认和 MIT | 适合研究一个设计系统承载多种内容页面 | navy、orange、硬阴影和 orbit motif 是项目自身风格，不应直接继承 |
| A09 | [hmbldv portfolio template](https://github.com/hmbldv/portfolio-template) | README 列出项目、博客、Wiki、认证、内容集合、TOC、面包屑、项目版本、commit changelog 和 Mermaid | 适合研究项目如何保留过程、版本和长期更新记录 | README 的功能清单不证明仓库长期活跃或所有功能稳定 |
| A10 | [SDBurt astro portfolio](https://github.com/SDBurt/astro-portfolio) | README 列出项目、博客、工作经历内容集合；Vanilla CSS token、4px spacing、语义类、暗色模式、reduced motion 和 view transitions | 适合研究无 UI 框架时建立可维护 CSS 系统 | 项目方的性能、安全和无障碍表述需要独立测试 |
| A11 | [APortfolio](https://github.com/damien220/APortfolio) | README 采用 Markdown + Zod、plain CSS、Astro zero-JS 默认，筛选只需少量 vanilla script，并提供面向内容编辑者的文档 | 适合研究非设计人员也能维护的内容入口 | 主要目标是项目展示，未证明适合复杂个人内容系统 |

## 设计系统和页面模式

| ID | 来源 | 已核验事实 | 可以支持的判断 | 不能推出的结论 |
| --- | --- | --- | --- | --- |
| B01 | [Ronald Lopez Portfolio Design System](https://www.ronglopez.com/projects/ronglopez-portfolio.html) | 案例公开四阶段流程：Reference Research、Define Principles、Build System、Implement & Ship；先建立 token，再建立组件；同一组件库服务 landing、index card、导航、长篇 case study 和 utility pattern；还展示对比度、Storybook 和视觉回归流程 | 个人网站可以按长期产品来建立 token、组件、页面模式和验证页 | 这套 Pug/Vite/Storybook 技术不能直接移植到当前 Astro |
| B02 | [Andrew Aarestad Design Process](https://www.andrewaarestad.com/design-process) | 案例分开记录品牌基础、视觉系统、互动 mood board、反馈、实现和部署 | 设计方向应通过可运行的对比和反馈收敛 | 该流程不提供当前网站的内容 schema |
| B03 | [bueno.fyi](https://bueno.fyi/) | 实际页面采用窄列链接目录、分类、搜索、书签和较长列表 | 目录、索引、标签和搜索可以成为个人站的长期内容模式 | 目录结构本身不能替代项目过程和能力证据 |
| B04 | [Robert Feasley](https://rfeasley.io/) | 页面用网格组织项目，并把策略背景、影响和 CV 放在同一表达系统内 | 作品可以同时说明做了什么、为什么做、产生了什么影响 | 仍需检查完整详情页、写作栏目和移动端 |
| B05 | [Specia1ne](https://specia1ne.com/) | 页面用连续结构轴、编号、过渡和滚动交互串联多个区块，项目页面公开标注 Astro、GSAP | 导航线索和页面连续性可以形成作者识别度 | 一页式叙事对新增内容的承载能力有限 |
| B06 | [Justin Lerner](https://jlern.com/) | 页面按年份组织项目、插画和摄影，使用平铺网格并包含动画技术标注 | 网格、年份和媒体混排可以形成内容索引 | 动效、图像密度和移动端需要验证 |
| B07 | [One Page Love Personal](https://onepagelove.com/genre/personal) | 公开分类提供个人网站截图、功能标签和真实链接，当前页面可用于批量发现候选 | 适合发现具体 section 和局部交互 | 图库精选不能证明代码质量、可维护性或长期内容架构 |

## 社区证据

| ID | 来源 | 评论或讨论呈现的观点 | 本项目的使用边界 |
| --- | --- | --- | --- |
| C01 | [Reddit：extremely minimal personal website](https://www.reddit.com/r/webdev/comments/1jh5x6d/my_extremely_minimal_personal_website/) | 多条评论称赞简单、可读、有个性、容易快速了解作者；有人建议 Astro 配 GitCMS 维护 Markdown 博客 | 作为“可读性和作者感优先”的单帖证据，不作为普遍用户研究 |
| C02 | [Reddit：best portfolio website](https://www.reddit.com/r/webdev/comments/112r7m5/whats-the-best-portfolio-website-youve_ever_seen/) | 讨论中有人建议大字号、留白、少量强调色和轻动效，反对让过多文字或动画遮住作品 | 作为可用性方向的社区样本，不把评论者建议当成规则 |
| C03 | [Reddit：best portfolio website 2025](https://www.reddit.com/r/webdev/comments/1l28a6s/whats-the-best-portfolio-website_youve_ever_seen/) | 有评论认为 3D 和过度动画会降低信息可读性、增加加载成本；也有人偏好简单、直接、可爬取的页面 | 支持把可读性、性能和信息可见性列入评分；不否定实验性页面的局部价值 |
| C04 | [Reddit：component library criteria](https://www.reddit.com/r/reactjs/comments/1uk4iqn/what_would_make_you_actually_try_a_new_react_component_library/) | 讨论强调完整度、可定制性、源码可检查、无障碍和实际开发体验，漂亮截图不足以证明组件库好用 | 支持评价组件库时查看源码、状态和文档，不只看官网截图 |
| C05 | [Reddit：React Aria vs Base UI](https://www.reddit.com/r/reactjs/comments/1veiovb/react_aria_vs_base_ui/) | 评论把 React Aria 的优势归到无障碍和国际化，把 Base UI 的优势归到 API 和开发体验，同时提醒使用者需要保持设计纪律 | 只作为社区体验对照，不能代替官方 API 和本地测试 |
| C06 | [YouTube：UI Components discussion](https://www.youtube.com/watch?v=9-6deom3ZdY) | 公开讨论把组件方案放在功能、样式适配、无障碍、国际化、主题、variants、headless/styled 等维度比较 | 作为组件评估字段来源，不能把视频观点当成项目结论 |
| C07 | [Reddit：portfolio accessibility feedback](https://www.reddit.com/r/webdev/comments/1lhxpob/i_am_building_my_portfolio_website_id_appreciate/) | 评论指出特殊交互需要明确可点击、文字要有足够对比、移动端导航要易用 | 支持在下一轮加入可点击性、对比度、移动端和键盘检查 |

## 负向证据

| ID | 来源 | 事实 | 影响 |
| --- | --- | --- | --- |
| N01 | [Web Awesome](https://webawesome.com/) | Shoelace 已进入 sunset，Web Awesome 是后继项目 | 新项目不把旧 Shoelace 作为长期依赖 |
| N02 | [当前项目 global.css](../../../src/styles/global.css) | 本地样式已有米白背景、深绿/橙色强调、衬线标题、圆角卡片、胶囊导航、半透明模糊和阴影 | 研究候选需要主动避开同一组暖色模板信号 |
| N03 | [Reddit：good website design inspiration](https://www.reddit.com/r/web_design/comments/1ko8f6i/where_do_you_find_actually_good_website_design/) | 社区把多个图库当作发现入口，同时提醒灵感站点偏实验性，不能直接当作真实产品方案 | 把图库用于候选发现，把架构判断交给源码、内容模型和可用性验证 |

## 页面级核验补充

| ID | 来源 | 已观察到的页面结构 | 研究意义 |
| --- | --- | --- | --- |
| A12 | [Astro Kami live demo](https://automann.github.io/astro-kami/) | 首页导航包含 Home、Posts、Showcase、About、语言和主题切换；首页同时展示文章列表、标签、Showcase 项目、RSS 和双语入口 | 这个模板确实把写作、项目展示和个人信息放进同一套导航，适合研究内容类型之间的关系 |
| A13 | [Kepler live demo](https://astro-kepler.pages.dev/work/) | Work 索引页提供 All、Web App、Branding、Design System、Mobile、Website 筛选；项目卡片显示年份、类型、简介和技术标签；页面另有 Search、Blog、RSS、About 等入口 | 证明其页面模式不仅停留在 README；筛选和索引结构可作为候选模式，商业页面上的 100 Lighthouse、12,000+ builders 和 testimonials 仍按项目方自述处理 |
| A14 | [Starwind component docs](https://starwind.dev/docs/components/) | 页面列出 55 个 CLI-installed components，按 Form、Navigation、Overlay、Feedback、Layout、Content 分类；每个组件提供安装、复制示例、API；CLI 默认把源码复制到本地组件目录，并支持 class overrides | 证明 source-first 和本地可改不是宣传语，而是当前文档中的安装路径；仍需在本地项目检查依赖和生成代码质量 |
| A15 | [hmbldv repository](https://github.com/hmbldv/portfolio-template) | GitHub 页面显示仓库有 README、src、public 和 package 文件，但 README 没有找到 live demo 入口，仓库当前公开提交数较少 | 可以把它当作内容 schema 和项目版本结构参考 | 暂时不能评价真实页面的移动端、视觉层级和交互质量 |
| A16 | [SDBurt home](https://sdburt.com/)、[projects](https://sdburt.com/projects)、[Astro project detail](https://sdburt.com/projects/astro-portfolio-site) | 实际站点有 home、work、projects、blog、about；首页有 latest posts、recent projects、contact；项目索引按日期列项目和技术标签；详情页有阅读时间、live/repo 链接、目录式标题、技术架构、内容策略和迁移记录 | 这是目前最接近当前仓库的实际结构参考：静态 Astro、内容集合、项目/文章/经历分离、长文详情和 CSS token 可以同时存在 | 页面当前公开内容和项目方自述仍需按本项目目标重新取舍，不能直接复制文案 |
| A17 | [Astro Kami home](https://automann.github.io/astro-kami/)、[post detail](https://automann.github.io/astro-kami/posts/hello-world/) | 实际首页把 Posts、Showcase、About、语言和主题切换放在主导航；文章详情有日期、作者、阅读时间、标签、锚点标题、代码块、公式、引用、分享、前后文章导航和返回顶部 | 可以把文章、项目、双语和长文阅读放在一套稳定骨架里 | 示例内容仍是模板内容，编辑风格和字体不能直接继承 |
| A18 | [Kepler work index](https://astro-kepler.pages.dev/work/) | 实际索引页有分类筛选，项目卡显示类型、年份、简介和技术标签；移动视口隐藏部分桌面导航，但保留 Search 和 Get Kepler；筛选按钮点击后只保留对应类别项目 | 适合研究项目索引和小型筛选交互 | 商业演示页的营销文案、价格、统计和 testimonials 都属于项目方自述；不适合作为内容可信度证据 |
| A19 | [Starwind component overview](https://starwind.dev/docs/components/) | 实际文档首页按 Form、Navigation、Overlay、Feedback、Layout、Content 分类；移动视口通过 Toggle Menu 打开 dialog，组件文档仍可访问；页面提供 Skip to main content | 组件库的文档信息架构和移动导航本身值得参考 | 文档站的导航复杂度高于个人网站，不应整套照搬 |

## 当前证据边界

已经有公开页面、仓库、官方文档和社区讨论支持候选发现与初步比较。以下事项仍需要本地或浏览器级验证：

- 每个候选的移动端布局、键盘焦点和 reduced-motion。
- 真实依赖安装、构建时间、静态输出和 bundle 体积。
- 许可证是否覆盖当前计划和后续发布。
- 页面内容是否能承载真实的个人经历，而不只承载示例内容。
- 在不复制暖色衬线模板的前提下，候选结构能否形成独立视觉语言。

