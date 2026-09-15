const families = [
  {
    key: 'a',
    code: 'A',
    name: 'Editorial Rail',
    description: '左侧编号、细线和清晰主次关系，强调档案与阅读路径。',
    tags: ['rail', 'order', 'editorial']
  },
  {
    key: 'b',
    code: 'B',
    name: 'Quiet Grid',
    description: '更多留白、柔和表面和稳定网格，强调持续阅读的舒适度。',
    tags: ['quiet', 'surface', 'calm']
  },
  {
    key: 'c',
    code: 'C',
    name: 'Dense Index',
    description: '更高信息密度和等宽元数据，强调索引、扫描与长期追加。',
    tags: ['index', 'dense', 'system']
  },
  {
    key: 'd',
    code: 'D',
    name: 'Split Signal',
    description: '用一块高对比强调面制造信号，强调状态、行动和页面记忆点。',
    tags: ['signal', 'contrast', 'active']
  },
  {
    key: 'e',
    code: 'E',
    name: 'Open Field',
    description: '减少容器和装饰，让内容在开放留白中建立层级和节奏。',
    tags: ['open', 'field', 'quiet']
  }
];

const components = [
  {
    id: 'F-05', group: 'foundation', groupLabel: '全站视觉基础', name: '等宽字体元数据', kind: 'mono',
    question: '日期、状态、编号、路径和小型数据如何获得稳定的扫描节奏？',
    lenses: [
      '等宽文字沿左侧轨道排列，让档案字段有明确起点。',
      '等宽只出现在辅助信息，正文仍然保持舒服的阅读宽度。',
      '日期和编号成为主要视觉骨架，适合未来内容增多。',
      '重要元数据进入高对比信号条，访客先看到当前状态。',
      '元数据只作为开放旁注出现，不让系统感压过个人内容。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'F-08', group: 'foundation', groupLabel: '全站视觉基础', name: '间距节奏', kind: 'spacing',
    question: '页面上下留白、区块间距和列表密度怎样支持长期阅读？',
    lenses: [
      '用明确的 8 / 16 / 32 / 64 轨道形成编辑节奏。',
      '间距偏宽，减少视觉压力，让新内容也有呼吸空间。',
      '间距偏紧，优先提高 Archive 的扫描效率和追加容量。',
      '重点区块拉开距离，行动和状态获得更强的停顿。',
      '只保留内容自然需要的间隙，让页面不显得被设计过。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'F-10', group: 'foundation', groupLabel: '全站视觉基础', name: '形状、图像与基础动效', kind: 'motion',
    question: '圆角、图片裁切、悬停反馈和进入动效需要共享什么程度的规则？',
    lenses: [
      '直角、细线和短位移动效，保持档案页面的克制。',
      '柔和圆角和低幅度抬升，让浏览更像使用工作台。',
      '几何边界和等宽状态变化，动效服务于索引反馈。',
      '高对比块在进入和悬停时短暂响应，突出当前行动。',
      '图片和文字先于动效，默认静止，减少长期维护成本。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'S-02', group: 'shell', groupLabel: '共享 Shell / 导航', name: '品牌 / 姓名区块', kind: 'brand',
    question: 'Maki、羽轩、个人身份和首页入口如何被记住，而不是像一个产品 Logo？',
    lenses: [
      '姓名放在左侧轨道，身份作为一行可读的档案说明。',
      '姓名和一句短介绍放进柔和表面，入口更亲近。',
      '姓名成为等宽索引标题，身份信息压缩成字段。',
      '姓名占据高对比面，当前身份和行动入口同时突出。',
      '只保留名字、地点和正在做的事，让真实内容尽快出现。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'S-03', group: 'shell', groupLabel: '共享 Shell / 导航', name: '导航当前状态', kind: 'navState',
    question: '当前页面、悬停、键盘聚焦和已访问状态如何被明确感知？',
    lenses: [
      '当前项由底线和左侧编号共同标记，路径关系清楚。',
      '当前项获得柔和表面，其他导航保持低干扰。',
      '当前项反转为等宽索引，适合高密度页面。',
      '当前项使用高对比填充，行动方向一眼可见。',
      '只改变文字和线条，不加入会跳动的复杂导航动效。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'S-05', group: 'shell', groupLabel: '共享 Shell / 导航', name: '主题切换入口', kind: 'themeEntry',
    question: 'Light / Dark 入口放在哪里、如何说明当前状态，又不打断阅读？',
    lenses: [
      '主题切换和路径并列，像档案系统中的一个明确设置。',
      '切换藏在轻量工具区，存在但不抢主要导航。',
      '用 LIGHT / DARK 等宽状态直接表达，不依赖图标猜测。',
      '在 Header 上作为高对比行动按钮，当前模式很醒目。',
      '只在页脚或辅助区出现，默认把注意力留给内容。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'S-07', group: 'shell', groupLabel: '共享 Shell / 导航', name: 'Footer', kind: 'footer',
    question: '联系方式、外部链接、更新时间和站点说明如何在页面结尾收束？',
    lenses: [
      'Footer 是最后一条编辑分隔线，联系方式沿轨道排列。',
      'Footer 以宽松的柔和区块结束，让用户慢下来。',
      'Footer 像站点索引，年份、版本和链接密集对齐。',
      'Footer 用一块小型信号面给出明确的联系行动。',
      'Footer 极简，只保留姓名、更新日期和一个下一步。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'S-08', group: 'shell', groupLabel: '共享 Shell / 导航', name: '面包屑与返回入口', kind: 'breadcrumb',
    question: 'Archive、详情页和未来嵌套页面之间怎样保持返回关系？',
    lenses: [
      '路径和返回箭头共用一条细轨道，层级一眼可读。',
      '返回入口成为内容上方的柔和提示，不打断标题。',
      '面包屑以等宽文件路径呈现，适合多层内容。',
      '返回是高对比行动面，避免访客在长页面里迷路。',
      '只保留一个自然的返回链接，不增加多余导航层。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'S-09', group: 'shell', groupLabel: '共享 Shell / 导航', name: '外部链接表现', kind: 'external',
    question: 'GitHub、在线 Demo、文档和社交链接如何区别于站内跳转？',
    lenses: [
      '链接类型在左侧字段中说明，箭头作为统一出口符号。',
      '外部链接使用柔和按钮，便于普通访客理解。',
      '网址、协议和更新时间以等宽信息展示，强调可核验性。',
      '主要 Demo 作为高对比行动，其余链接退到辅助层。',
      '不额外包装外部链接，用文字和一个出口箭头说明即可。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'S-10', group: 'shell', groupLabel: '共享 Shell / 导航', name: '页面状态 Shell', kind: 'pageState',
    question: '404、空页面、加载状态和错误提示如何共享同一套个人网站语法？',
    lenses: [
      '状态编号、解释和返回路径沿同一条编辑轨道排布。',
      '状态放进安静表面，优先让访客知道接下来能做什么。',
      '错误码和加载字段像系统日志，适合技术型档案。',
      '错误状态成为明确的信号面，直接给出主要返回行动。',
      '只写必要事实和链接，不用夸张插画填补空白。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'A-02', group: 'archive', groupLabel: 'Archive / 列表模式', name: '首页精选项目', kind: 'featured',
    question: '首页中的少量重点项目怎样与完整 Archive 保持关系？',
    lenses: [
      '精选项目像档案中的加粗条目，编号和进入 Archive 的路径同时保留。',
      '精选项目形成两块舒服的阅读表面，不把首页变成项目墙。',
      '精选项目使用密集索引，展示为什么它们排在前面。',
      '第一项目成为高对比信号块，直接引导访客进入详情。',
      '精选只保留标题、状态和一句事实，把空间留给真实内容。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'A-04', group: 'archive', groupLabel: 'Archive / 列表模式', name: '内容类型标签', kind: 'typeLabel',
    question: '项目、作品、实验、研究系统等内容类型怎样被快速区分？',
    lenses: [
      '类型是编号旁的细小字段，不与标题竞争。',
      '类型作为低对比圆角标签，方便普通访客扫读。',
      '类型用等宽大写，形成稳定的内容索引。',
      '当前类型用高对比色，帮助访客快速判断入口。',
      '只保留一两个必要类型词，避免分类本身变成负担。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'A-08', group: 'archive', groupLabel: 'Archive / 列表模式', name: '紧凑 / 展开列表行', kind: 'compact',
    question: '同一条内容在首页、Archive 和移动端怎样切换密度而不改变结构？',
    lenses: [
      '紧凑行显示索引，展开行增加摘要和行动，层级一致。',
      '默认行更宽松，展开只补充一块柔和上下文。',
      '紧凑模式像数据表，展开模式保留更多元数据字段。',
      '当前行直接扩展成信号块，行动状态非常明确。',
      '不做自动展开，保持一条自然的列表流和一个详情入口。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'A-09', group: 'archive', groupLabel: 'Archive / 列表模式', name: '筛选、分组与排序', kind: 'filter',
    question: '内容增多后，按类型、状态、年份或主题整理是否仍然像个人档案？',
    lenses: [
      '筛选器沿列表顶部轨道排列，结果保持档案行语法。',
      '筛选作为安静的工具条，默认不打断浏览。',
      '分组和排序字段显式展示，适合大量历史条目。',
      '当前筛选成为高对比信号，访客知道自己正在看什么。',
      '优先用自然的页面分组，不让复杂筛选抢走内容。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'A-10', group: 'archive', groupLabel: 'Archive / 列表模式', name: '空状态与加载更多', kind: 'empty',
    question: '没有结果、内容较少或项目数量增加时，页面如何诚实地回应？',
    lenses: [
      '空状态保留编号和返回路径，像档案中一个明确的缺口。',
      '空状态使用柔和提示，告诉访客下一步而不制造焦虑。',
      '加载状态显示查询条件和结果数，便于理解系统行为。',
      '没有结果时给出醒目的返回行动，但不伪造推荐内容。',
      '只说明事实：暂无条目，稍后再来或返回完整 Archive。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'D-03', group: 'detail', groupLabel: '详情 / 证据模式', name: '背景与问题', kind: 'context',
    question: '项目为什么开始、试图解决什么问题，如何在详情页尽快被理解？',
    lenses: [
      '问题作为详情页的第一条叙述轨道，背景与问题分栏。',
      '背景放在宽松表面中，允许更接近真实说话的段落。',
      '用 Problem / Context 字段拆成可扫描的事实。',
      '把核心问题放进高对比面，访客先知道这件事为何重要。',
      '用一段短文字直接说明动机，不为背景制造大 Hero。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'D-04', group: 'detail', groupLabel: '详情 / 证据模式', name: '我的职责与贡献', kind: 'contribution',
    question: '个人贡献、合作内容和 AI 协助内容如何被准确区分？',
    lenses: [
      '我的职责、合作边界和 AI 协助沿三条清晰轨道分开。',
      '每种贡献成为一张可读表面，减少面试官理解成本。',
      '贡献以角色字段、动作和产物紧凑记录，强调事实。',
      '我的判断与交付作为主信号，合作和 AI 作为辅助说明。',
      '只写实际承担的动作，不用模糊的“负责整体”覆盖细节。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'D-05', group: 'detail', groupLabel: '详情 / 证据模式', name: '过程与阶段', kind: 'process',
    question: '研究、设计、实现、验证和迭代怎样被写成一条可追踪的过程？',
    lenses: [
      '五个阶段沿横向轨道推进，每一步都有事实入口。',
      '阶段变成纵向阅读区块，适合长项目说明。',
      '每阶段以时间、动作和产物字段表示，便于扫描。',
      '当前阶段获得高对比强调，其余阶段提供上下文。',
      '阶段不做复杂时间线，只按真实发生顺序讲清楚。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'D-06', group: 'detail', groupLabel: '详情 / 证据模式', name: '决策与被放弃方案', kind: 'decisions',
    question: '关键选择、限制条件和被淘汰方案如何成为可信的项目材料？',
    lenses: [
      '每个决定沿“问题—选择—理由”轨道记录，放弃方案保留位置。',
      '决策以可折叠的安静条目出现，长页面中不喧宾夺主。',
      '选择、约束和结果变成紧凑字段，便于面试官复盘。',
      '最终判断成为信号面，被放弃方案以低对比方式说明。',
      '只记录真正改变结果的决定，不把所有思考都变成日志。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'D-07', group: 'detail', groupLabel: '详情 / 证据模式', name: '产物与交付链接', kind: 'delivery',
    question: 'Demo、代码、文档、下载文件和发布版本如何被有序交付？',
    lenses: [
      '每种产物是一条带类型和版本的交付轨道。',
      '链接成为三块轻量表面，普通访客能快速选择。',
      '交付项使用 URL、版本和状态字段，突出可核验性。',
      '主要 Demo 作为唯一高对比行动，其他材料辅助证明。',
      '用文字链接直接交付，不给每个出口添加独立卡片。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'D-09', group: 'detail', groupLabel: '详情 / 证据模式', name: '图片、截图与代码展示', kind: 'media',
    question: '单图、画廊、对比图、代码片段和 Demo 如何共存而不变成装饰墙？',
    lenses: [
      '媒体窗口沿主内容轨道排列，说明文字负责解释证据。',
      '截图成为舒服的阅读表面，代码和图片不互相挤压。',
      '图片、代码和版本用索引字段对齐，方便复查。',
      '关键截图扩大并成为视觉信号，其他媒体退到侧栏。',
      '只展示能证明事实的媒体，避免为了填满页面而放图。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'D-10', group: 'detail', groupLabel: '详情 / 证据模式', name: '更新历史与相关项目', kind: 'detailNav',
    question: '项目时间线、前后项目、上一篇 / 下一篇如何让访客继续走下去？',
    lenses: [
      '前后项目沿左右轨道连接，当前项目保持中间位置。',
      '关联内容作为页面结尾的柔和推荐，不制造信息压力。',
      '更新日期和版本成为主要导航索引，适合长期追加。',
      '下一步入口使用高对比行动，帮助访客继续浏览。',
      '只提供一个回到 Archive 的自然出口，关联内容保持克制。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'P-03', group: 'page', groupLabel: 'Home / Now / 页面模块', name: 'Selected Work 区块', kind: 'featured',
    question: '首页如何从完整 Archive 中挑选少量重点，同时不制造一份静态简历？',
    lenses: [
      '精选区块是 Archive 的一段加粗索引，保留编号和状态。',
      '精选项目作为安静的双栏阅读表面，适合持续更新。',
      '用排序、年份和类型字段解释为什么这些项目被选中。',
      '第一项成为高对比入口，其余项目组成支持证据。',
      '只展示两三项真实工作，并明确“查看全部 Archive”。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'P-05', group: 'page', groupLabel: 'Home / Now / 页面模块', name: 'Currently Reading', kind: 'reading',
    question: '当前阅读怎样与正在思考的问题发生关系，而不是假装有一个博客？',
    lenses: [
      '书名和问题沿编辑轨道并列，阅读成为当前工作的一部分。',
      '阅读条目使用柔和表面，让个人判断有自然空间。',
      '作者、进度、主题和问题以索引字段呈现。',
      '当前最重要的问题成为信号块，书籍只是证据入口。',
      '只放正在读的一两本和一句真实判断，不做书架装饰。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'P-06', group: 'page', groupLabel: 'Home / Now / 页面模块', name: 'About 简介区块', kind: 'profile',
    question: '个人背景、经历和长期方向怎样被简短介绍，又不与 Home 重复？',
    lenses: [
      'About 是一段可以回看的身份档案，Home 只保留当前入口。',
      '简介用宽松的文字表面呈现，适合多一点个人语气。',
      '背景、地点、方向和工作方式拆成紧凑字段。',
      '一句身份判断成为高对比记忆点，其他内容支撑它。',
      '只回答“我是谁、在做什么、如何联系”，不写空泛宣言。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'P-07', group: 'page', groupLabel: 'Home / Now / 页面模块', name: 'How I Work', kind: 'method',
    question: '研究、AI 协作、实现、验证和迭代怎样表达成可相信的工作方式？',
    lenses: [
      '方法步骤沿一条编辑轨道展开，每步都指向证据。',
      '方法成为四个舒服区块，不强调流程仪式感。',
      '输入、判断、实现和验证以字段化方式说明。',
      '人的判断和验收成为主信号，AI 只是协作工具。',
      '用四个动词讲清工作方式，不把它包装成万能方法论。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'P-08', group: 'page', groupLabel: 'Home / Now / 页面模块', name: 'Timeline / Trajectory', kind: 'timeline',
    question: '经历、学习路径和方向变化怎样被展示成一条真实轨迹？',
    lenses: [
      '年份在左、事实在右，像一条可回看的个人档案。',
      '轨迹采用宽松纵向段落，强调变化背后的语境。',
      '年份、动作和产物密集对齐，适合面试官快速扫描。',
      '当前阶段高亮，过去经历退到背景，方向更明确。',
      '只写真正改变方向的节点，不为了完整而罗列全部经历。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'P-09', group: 'page', groupLabel: 'Home / Now / 页面模块', name: 'Contact / Collaboration CTA', kind: 'contact',
    question: '联系方式、合作方向和行动入口如何明确，又不显得像销售落地页？',
    lenses: [
      '联系入口沿页面最后一条轨道排列，合作范围清楚。',
      '联系方式放进安静表面，让访客有足够上下文。',
      '邮箱、GitHub 和合作主题用等宽字段直接列出。',
      '一个明确的联系行动成为高对比结尾，其余信息辅助。',
      '只给真实可用的联系方式和一句合作说明，不写营销口号。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'P-10', group: 'page', groupLabel: 'Home / Now / 页面模块', name: '页面结尾与下一步入口', kind: 'closing',
    question: '当前页面结束后，返回、相关内容和下一行动应该如何自然出现？',
    lenses: [
      '结尾是一条向 Archive 延伸的编辑轨道，方向感明确。',
      '结尾留出更大呼吸，给访客安静选择下一步的空间。',
      '下一步、更新时间和相关条目用索引字段收束。',
      '主要下一步作为高对比行动，减少结束后的犹豫。',
      '只保留一个最合理的下一步，不把页面尾部变成导航墙。'
    ], status: '第二轮 Lab'
  },
  {
    id: 'X-01', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Notes 列表页', kind: 'notes',
    question: '未来文章、短笔记或思考形成记录后，索引页应如何接入全站？',
    lenses: [
      'Notes 复用 Archive 行，但增加主题和阅读入口。',
      '笔记以舒适的日期列表呈现，强调连续阅读。',
      '标题、标签、字数和更新时间字段化，适合规模增长。',
      '最近一条笔记成为信号入口，其余内容保持索引。',
      '先从少量真实笔记开始，不为不存在的内容搭空页面。'
    ], status: '未来候选'
  },
  {
    id: 'X-02', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Note 详情页', kind: 'noteDetail',
    question: '未来长文、短文和引用内容怎样共享一套可持续维护的阅读模板？',
    lenses: [
      '标题、来源和正文沿详情页编辑轨道展开。',
      '正文使用宽松的阅读表面，侧边保留目录和日期。',
      '引用、标签、版本和字数作为可扫描元数据。',
      '当前观点和返回 Notes 入口获得高对比强调。',
      '模板足够简单，让写作而不是版式成为持续更新的门槛。'
    ], status: '未来候选'
  },
  {
    id: 'X-03', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Reading / Library 页面', kind: 'library',
    question: '形成稳定阅读记录后，书籍、阅读判断和问题怎样成为可回看的资料库？',
    lenses: [
      '书籍像档案条目，状态和判断沿左侧索引排列。',
      '书架使用柔和表面，阅读感受比数量更重要。',
      '作者、主题、状态和日期成为主要筛选字段。',
      '正在读的书作为信号条目，其余书籍退到背景。',
      '不展示虚假的完整书单，只记录真正留下判断的书。'
    ], status: '未来候选'
  },
  {
    id: 'X-04', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Updates / Changelog 页面', kind: 'updates',
    question: '持续记录项目进展和版本更新时，更新页怎样避免变成流水账？',
    lenses: [
      '每次更新沿日期轨道记录，指向真实项目或证据。',
      '更新是一组容易连续阅读的柔和条目。',
      '版本、变更类型和影响范围作为索引字段。',
      '最近更新获得高对比信号，帮助访客看到网站仍然活着。',
      '只记录对访客有意义的变化，不记录所有内部操作。'
    ], status: '未来候选'
  },
  {
    id: 'X-05', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Resume / CV 页面', kind: 'resume',
    question: '面向面试官的经历、教育背景和项目摘要如何与个人网站保持同一语法？',
    lenses: [
      '简历是一份可扫描的纵向档案，项目链接回详情页。',
      '经历和教育使用舒服的分栏表面，降低信息压力。',
      '日期、角色和产物字段化，适合快速核对。',
      '当前目标和主要能力成为高对比首要信息。',
      '只展示真实经历和可验证项目，不堆砌通用技能词。'
    ], status: '未来候选'
  },
  {
    id: 'X-06', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Uses / Toolkit 页面', kind: 'uses',
    question: '工具、设备、工作环境和 AI 协作方式怎样被介绍而不变成软件清单？',
    lenses: [
      '工具按工作环节分栏，并说明它们在实际项目中的作用。',
      '每组工具成为柔和的使用记录，强调经验而不是品牌。',
      '工具、用途、替代方案和更新时间字段化。',
      '当前最关键的工具成为信号条目，其他工具作为背景。',
      '只写真正长期使用且能解释原因的工具。'
    ], status: '未来候选'
  },
  {
    id: 'X-07', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Lab / Experiments 页面', kind: 'lab',
    question: '小型实验、未完成作品和探索性项目如何被允许存在而不降低可信度？',
    lenses: [
      'Lab 像 Archive 的实验分区，状态和下一步清楚可见。',
      '实验以轻量卡片呈现，允许不完整但不隐藏限制。',
      '每个实验显示输入、假设、结果和状态字段。',
      '当前正在试的一个实验成为信号入口，其他内容降级。',
      '只展示有问题意识的实验，不把草稿堆成作品数量。'
    ], status: '未来候选'
  },
  {
    id: 'X-08', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'Search / Tag Index', kind: 'search',
    question: '内容规模变大后，搜索、标签和主题入口怎样继续像个人档案？',
    lenses: [
      '搜索结果沿 Archive 轨道排列，标签只作为辅助索引。',
      '搜索工具保持安静，结果用宽松条目承接。',
      '查询、结果数、类型和标签显式字段化。',
      '当前查询和主要结果成为高对比信号，减少迷失。',
      '优先靠清晰命名和分组解决查找，不急着上复杂搜索。'
    ], status: '未来候选'
  },
  {
    id: 'X-09', group: 'future', groupLabel: '后续页面 / 功能候选', name: 'RSS / 订阅入口', kind: 'rss',
    question: '形成稳定更新流后，RSS 或其他订阅方式怎样被自然地提供？',
    lenses: [
      '订阅入口像 Archive 的一个外部出口，位置清楚但不喧闹。',
      'RSS 放在柔和的联系区块，说明订阅能收到什么。',
      '地址、格式和最近更新以等宽字段展示。',
      '订阅作为高对比行动，面向真正想持续关注的人。',
      '只有当更新稳定时才提供，不制造不存在的内容承诺。'
    ], status: '未来候选'
  },
  {
    id: 'X-10', group: 'future', groupLabel: '后续页面 / 功能候选', name: '实时状态 / 数据面板', kind: 'dashboard',
    question: '实时数据、健身数据和个人 Dashboard 如果未来加入，怎样不改变网站的档案本质？',
    lenses: [
      '数据只作为少量事实索引，不把首页变成仪表盘。',
      '数据面板放在独立页面，使用柔和表面控制信息压力。',
      '更新时间、来源和数据范围必须和数值同时出现。',
      '当前一个状态指标可以作为信号，但不制造虚假绩效。',
      '暂不实现复杂数据，先确认真实用途和长期维护成本。'
    ], status: '暂不处理 / 仅作研究样例'
  }
];

const groupOrder = ['foundation', 'shell', 'archive', 'detail', 'page', 'future'];
const groupNames = {
  foundation: 'F / 全站基础',
  shell: 'S / Shell 与导航',
  archive: 'A / Archive 列表',
  detail: 'D / 详情与证据',
  page: 'P / Home、Now 与页面模块',
  future: 'X / 后续页面与功能'
};

function familyClass(family) {
  return 'preview-' + family.key;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function previewShell(component, family, content, extraClass) {
  void component;
  return '<div class="specimen ' + familyClass(family) + ' ' + (extraClass || '') + '">' +
    '<div class="specimen-inner"><div class="remaining-stage ' + familyClass(family) + ' ' + (extraClass || '') + '">' + content + '</div></div>' +
  '</div>';
}

function titleBlock(kicker, title, copy) {
  return '<div class="stage-block"><span class="stage-kicker">' + kicker + '</span><h4>' + title + '</h4><p>' + copy + '</p></div>';
}

function renderMono(family, component) {
  const rows = [
    ['UPDATED', '2026.09.14', 'active'],
    ['STATUS', 'BUILDING', 'now'],
    ['INDEX', '03 / 12', 'archive'],
    ['PATH', '/archive/interactive-study', 'detail']
  ];
  return previewShell(component, family,
    '<div class="mono-lead">' + titleBlock('FOUNDATION / MONO', '事实先于装饰。', '等宽字段应该帮助访客定位内容，而不是让所有文字都变成代码。') + '<span class="stage-meta">' + family.description + '</span></div>' +
    '<div class="mono-table">' + rows.map(function (row) {
      return '<div class="mono-row" data-action="select"><span>' + row[0] + '</span><code>' + row[1] + '</code><span class="stage-accent">' + row[2] + '</span></div>';
    }).join('') + '</div>');
}

function renderSpacing(family, component) {
  const scale = [['08', 'micro', '标签内边距'], ['16', 'row', '列表内间距'], ['32', 'section', '区块间距'], ['64', 'breath', '页面停顿']];
  return previewShell(component, family,
    '<div class="spacing-lead">' + titleBlock('FOUNDATION / RHYTHM', '让空白也有语法。', '每个间距都应该能解释自己在帮助阅读什么。') + '</div>' +
    '<div class="spacing-scale">' + scale.map(function (item) {
      return '<div class="spacing-row"><span class="stage-code">' + item[0] + ' PX</span><span class="measure"></span><span class="stage-label">' + item[1] + ' · ' + item[2] + '</span></div>';
    }).join('') + '</div>');
}

function renderMotion(family, component) {
  const states = [
    ['REST', '页面默认静止', 0.58],
    ['HOVER', '一条线或一个表面回应', 0.82],
    ['FOCUS', '键盘聚焦必须可见', 0.68],
    ['REDUCED', '关闭非必要进入动效', 0.38]
  ];
  return previewShell(component, family,
    '<div class="motion-lead">' + titleBlock('FOUNDATION / MOTION', '动效只说明状态。', '悬停、聚焦和进入页面的反馈都应当短、可预期，并在减少动效时仍然可用。') + '<span class="stage-meta">TRY HOVER ON THE BARS</span></div>' +
    '<div class="motion-track">' + states.map(function (state) {
      return '<div class="motion-state" tabindex="0" data-action="select"><span class="stage-label">' + state[0] + '</span><span><span class="motion-bar" style="transform:scaleX(' + state[2] + ')"></span><small>' + state[1] + '</small></span></div>';
    }).join('') + '</div>');
}

function renderBrand(family, component) {
  return previewShell(component, family,
    '<div class="brand-lockup">' +
      '<span class="stage-kicker">PERSONAL ARCHIVE / CHINA</span><div class="brand-wordmark">Maki<span class="stage-accent">/</span>羽轩</div><p>内容、项目和学习系统正在被整理成一个长期更新的工作档案。</p>' +
      '<a class="stage-button" href="#' + component.id + '">Open the archive ↗</a>' +
    '</div>' +
    '<div class="brand-note">' + titleBlock('IDENTITY / ENTRY', '名字先让人找到你。', '品牌区块不是虚构的 Logo，而是让姓名、当前工作和入口同时可读。') + '<span class="stage-meta">' + family.name.toUpperCase() + '</span></div>');
}

function renderNavState(family, component) {
  return previewShell(component, family,
    '<div class="nav-state-bar"><span class="stage-kicker">SITE NAV / STATE TEST</span><div class="nav-state-list"><a href="#' + component.id + '">Home</a><a class="is-current" href="#' + component.id + '">Archive</a><a href="#' + component.id + '">Now</a><a href="#' + component.id + '">About</a></div></div>' +
    '<div class="stage-rule"></div><div class="stage-meta">CURRENT = underline · HOVER = color · FOCUS = visible outline · VISITED = no misleading new meaning</div>');
}

function renderThemeEntry(family, component) {
  const entries = [
    ['HEADER', 'LIGHT', '路径旁并列'],
    ['UTILITY', 'DARK', '工具区收纳'],
    ['FOOTER', 'AUTO', '辅助入口']
  ];
  return previewShell(component, family,
    '<div class="theme-entry-stage">' + entries.map(function (entry, index) {
      return '<div class="theme-entry" data-action="select"><span class="stage-kicker">' + entry[0] + '</span><strong>' + entry[1] + '</strong><p>' + entry[2] + '</p><div class="theme-control"><span>' + (index === 0 ? 'LIGHT / DEFAULT' : 'CHANGE THEME') + '</span><span class="theme-knob"></span></div></div>';
    }).join('') + '</div>');
}

function renderFooter(family, component) {
  return previewShell(component, family,
    '<div class="footer-stage"><div class="footer-main"><strong>Maki / 羽轩</strong><span class="stage-meta">UPDATED 2026.09 · BUILT IN PUBLIC</span></div><div class="footer-links"><a href="#' + component.id + '">GitHub ↗</a><a href="#' + component.id + '">Email ↗</a><a href="#' + component.id + '">Back to top ↑</a></div><div class="stage-rule"></div><p>这个网站记录正在发生的工作，而不是一张永远不会更新的名片。</p></div>');
}

function renderBreadcrumb(family, component) {
  return previewShell(component, family,
    '<div class="breadcrumb-stage"><div class="breadcrumb-trail"><a href="#' + component.id + '">HOME</a><span>/</span><a href="#' + component.id + '">ARCHIVE</a><span>/</span><strong>INTERACTIVE STUDY</strong></div><div class="stage-rule"></div><a class="stage-button" href="#' + component.id + '">← Back to Archive</a><p>返回入口不应该依赖浏览器后退按钮；访客始终知道自己从哪里来。</p></div>');
}

function renderExternal(family, component) {
  const links = [
    ['DEMO', '在线预览', '可直接操作的页面', 'OPEN ↗'],
    ['SOURCE', 'GitHub', '源代码与提交记录', 'CODE ↗'],
    ['DOCS', '项目文档', '背景、决策与验收', 'READ ↗']
  ];
  return previewShell(component, family,
    '<div class="external-stage">' + links.map(function (link) {
      return '<div class="external-row" data-action="select"><span class="stage-code">' + link[0] + '</span><span><a href="#' + component.id + '">' + link[1] + '</a><small>' + link[2] + '</small></span><span class="stage-accent">' + link[3] + '</span></div>';
    }).join('') + '</div>');
}

function renderPageState(family, component) {
  const states = [
    ['404', '找不到这个入口', '返回 Archive'],
    ['EMPTY', '这里还没有内容', '回到 Home'],
    ['LOAD', '正在读取记录', '保持等待'],
    ['ERROR', '暂时无法读取', '重新尝试']
  ];
  return previewShell(component, family,
    '<div class="state-shell-stage">' + states.map(function (state, index) {
      return '<div class="state-card ' + (index === 0 && family.key === 'd' ? 'is-signal' : '') + '" data-action="select"><span class="stage-label">PAGE STATE</span><span class="state-mark">' + state[0] + '</span><p>' + state[1] + '</p><a href="#' + component.id + '">' + state[2] + ' →</a></div>';
    }).join('') + '</div>');
}

function renderFeatured(family, component) {
  return previewShell(component, family,
    '<div class="featured-main" data-action="select"><span class="stage-kicker">01 / FEATURED / ACTIVE</span><h4>Interactive Study</h4><p>把学习流程、阅读动作和验证结果做成可以持续使用的系统。</p><a class="stage-button" href="#' + component.id + '">View project ↗</a></div>' +
    '<div class="featured-side"><span class="stage-kicker">02 / SUPPORTING WORK</span><strong>English Media</strong><p>内容系统、表达和长期运营实验。</p><span class="stage-meta">3 ITEMS SELECTED / VIEW ALL ARCHIVE →</span></div>');
}

function renderTypeLabel(family, component) {
  const types = [['PROJECT', '持续构建'], ['WORK', '可交付作品'], ['SYSTEM', '可使用系统'], ['LAB', '探索实验']];
  return previewShell(component, family,
    '<div class="type-label-stage">' + types.map(function (type) {
      return '<div class="type-label" data-action="select"><strong>' + type[0] + '</strong><small>' + type[1] + '</small></div>';
    }).join('') + '</div>');
}

function renderCompact(family, component) {
  const rows = [
    ['01', 'Interactive Study', 'ACTIVE', '展开查看摘要与证据'],
    ['02', 'V028 四级六级作品', 'ARCHIVED', '保留为一行历史记录'],
    ['03', 'English Media', 'BUILDING', '下一次更新继续追加']
  ];
  return previewShell(component, family,
    '<div class="compact-stage">' + rows.map(function (row, index) {
      return '<div class="compact-row ' + (index === 0 ? 'is-expanded' : '') + '" data-action="select"><span class="stage-code">' + row[0] + '</span><span class="compact-copy"><strong>' + row[1] + '</strong><small>' + (index === 0 ? row[3] : '点击可以切换当前行') + '</small></span><span class="stage-tag">' + row[2] + '</span></div>';
    }).join('') + '</div>');
}

function renderFilter(family, component) {
  const filters = ['ALL 12', 'PROJECT 04', 'ACTIVE 03', '2026 05', 'SYSTEM 02'];
  return previewShell(component, family,
    '<div class="filter-lead">' + titleBlock('ARCHIVE / QUERY', '先让内容可找。', '筛选器只有在条目数量真的开始影响阅读时才值得出现。') + '</div>' +
    '<div class="filter-panel"><span class="stage-label">FILTER BY</span><div class="filter-controls">' + filters.map(function (filter, index) {
      return '<button class="filter-control ' + (index === 0 ? 'is-selected' : '') + '" type="button" data-action="select">' + filter + '</button>';
    }).join('') + '</div><span class="stage-meta">SHOWING 12 / SORTED BY LAST UPDATE</span></div>');
}

function renderEmpty(family, component) {
  return previewShell(component, family,
    '<div class="empty-stage"><div class="empty-mark">—</div><div class="stage-block"><span class="stage-kicker">ARCHIVE / NO RESULT</span><h4>这里暂时没有匹配内容。</h4><p>不编造推荐，不显示虚假的数字；可以清除筛选，或者回到完整的 Archive。</p><div><a class="stage-button" href="#' + component.id + '">Clear filters ↗</a></div></div></div>');
}

function renderContext(family, component) {
  return previewShell(component, family,
    '<div class="context-lead"><span class="stage-kicker">01 / CONTEXT</span><h4>为什么开始？</h4><span class="stage-meta">PROBLEM BEFORE SOLUTION</span></div>' +
    '<div class="context-copy"><span class="stage-label">BACKGROUND / PROBLEM</span><p>已有的学习流程分散在阅读、标注、复习和工具之间，真正的问题不是缺少一个页面，而是没有一条可以被持续使用和验证的路径。</p><div class="stage-rule"></div><span class="stage-meta">SOURCE · USER OBSERVATION · 2026</span></div>');
}

function renderContribution(family, component) {
  const cards = [
    ['MY ROLE', '定义问题、取舍范围、验收结果。', 'OWNER'],
    ['COLLABORATION', '与他人共享内容、反馈或专业输入。', 'SHARED'],
    ['AI ASSIST', '帮助研究、生成候选和处理重复工作。', 'TOOL']
  ];
  return previewShell(component, family,
    '<div class="contribution-stage">' + cards.map(function (card) {
      return '<div class="contribution-card" data-action="select"><span class="stage-kicker">' + card[2] + '</span><h4>' + card[0] + '</h4><p>' + card[1] + '</p><span class="stage-meta">BOUNDARY IS EXPLICIT</span></div>';
    }).join('') + '</div>');
}

function renderProcess(family, component) {
  const steps = [
    ['01', 'Research', '收集真实输入'],
    ['02', 'Decide', '说明取舍理由'],
    ['03', 'Build', '做出可使用版本'],
    ['04', 'Verify', '截图、测试、复查'],
    ['05', 'Iterate', '根据反馈再改']
  ];
  return previewShell(component, family,
    '<div class="process-stage">' + steps.map(function (step) {
      return '<div class="process-step" data-action="select"><span class="process-no">' + step[0] + '</span><h4>' + step[1] + '</h4><p>' + step[2] + '</p><span class="stage-meta">EVIDENCE →</span></div>';
    }).join('') + '</div>');
}

function renderDecisions(family, component) {
  const rows = [
    ['01', '选择真实内容压力测试', '占位图'],
    ['02', '保留轻量动效', '整页转场'],
    ['03', '用语义主题 token', '两套独立配色']
  ];
  return previewShell(component, family,
    '<div class="decision-log">' + rows.map(function (row) {
      return '<div class="decision-row" data-action="select"><span class="stage-code">' + row[0] + '</span><span><strong>' + row[1] + '</strong><small>理由与限制记录在详情页</small></span><del>' + row[2] + '</del></div>';
    }).join('') + '</div>' +
    '<div class="decision-note"><span class="stage-kicker">DECISION RULE</span><h4>保留能改变结果的决定。</h4><p>被放弃的方案不是失败清单，而是让别人理解当前结果为什么这样形成的上下文。</p></div>');
}

function renderDelivery(family, component) {
  const outputs = [
    ['↗', 'Live Demo', '能直接打开并操作的版本'],
    ['⌘', 'Source', '代码、提交和实现边界'],
    ['↳', 'Docs', '背景、过程和验收记录']
  ];
  return previewShell(component, family,
    '<div class="delivery-stage">' + outputs.map(function (output) {
      return '<div class="delivery-card" data-action="select"><span class="delivery-icon">' + output[0] + '</span><div><h4>' + output[1] + '</h4><p>' + output[2] + '</p></div><a href="#' + component.id + '">Open output →</a></div>';
    }).join('') + '</div>');
}

function renderMedia(family, component) {
  return previewShell(component, family,
    '<div class="media-main"><span class="stage-kicker">01 / SCREENSHOT / VERIFIED</span><div class="media-window"><div class="window-bar"><i></i><i></i><i></i></div><div class="media-lines"><i></i><i></i><i></i></div><span class="stage-meta">REAL PAGE · 1440 × 900</span></div><p>截图应该说明界面在什么状态、什么尺寸和什么版本下被观察。</p></div>' +
    '<div class="media-side"><span class="stage-kicker">02 / SOURCE / CODE</span><div class="media-window"><span class="stage-code">component.astro</span><div class="media-lines"><i></i><i></i><i></i></div></div><a href="#' + component.id + '">Compare evidence ↗</a></div>');
}

function renderDetailNav(family, component) {
  return previewShell(component, family,
    '<div class="detail-nav-card"><span class="stage-kicker">PREVIOUS</span><h4>V028 四级六级作品</h4><a href="#' + component.id + '">← Open</a></div>' +
    '<div class="detail-nav-card is-current"><span class="stage-kicker">CURRENT / 03</span><h4>Interactive Study</h4><span class="stage-meta">UPDATED 2026.09</span></div>' +
    '<div class="detail-nav-card"><span class="stage-kicker">NEXT</span><h4>English Media</h4><a href="#' + component.id + '">Open →</a></div>');
}

function renderReading(family, component) {
  return previewShell(component, family,
    '<div class="reading-book"><span class="stage-kicker">CURRENTLY READING / 01</span><h4>人类简史 / Sapiens</h4><p>读到这里时，我在想：一个系统怎样让长期积累变得可见？</p><span class="stage-meta">PAGE 214 · NOTES 07 · READING NOW</span></div>' +
    '<div class="reading-question"><span class="stage-kicker">QUESTION LEFT</span><h4>阅读不是书单。</h4><p>只展示正在改变我判断的问题，未来可以连接到 Notes 或项目详情。</p><a href="#' + component.id + '">See related work →</a></div>');
}

function renderProfile(family, component) {
  return previewShell(component, family,
    '<div class="profile-mark">M / 羽</div>' +
    '<div class="profile-copy"><span class="stage-kicker">ABOUT / SHORT VERSION</span><h4>我在学习如何把问题变成可以使用、可以验证、可以继续更新的东西。</h4><p>这里放背景、经历和长期方向；Home 负责告诉你现在正在做什么，About 负责让你理解这些事情从哪里来。</p><a href="#' + component.id + '">Read the longer profile →</a></div>');
}

function renderMethod(family, component) {
  const steps = [
    ['01', 'Observe', '先看真实输入'],
    ['02', 'Decide', '人做判断与取舍'],
    ['03', 'Build', 'AI 协助实现'],
    ['04', 'Verify', '用结果接受检查']
  ];
  return previewShell(component, family,
    '<div class="method-stage">' + steps.map(function (step) {
      return '<div class="method-step" data-action="select"><span class="method-symbol">' + step[0] + '</span><h4>' + step[1] + '</h4><p>' + step[2] + '</p><span class="stage-meta">NO MAGIC PROMISES</span></div>';
    }).join('') + '</div>');
}

function renderTimeline(family, component) {
  const years = ['2024', '2025', '2026'];
  const events = [
    ['开始整理学习和项目记忆', '把零散经验变成可回看的材料。'],
    ['做出可以被别人使用的系统', '从作品展示转向真实功能和证据。'],
    ['构建 Working Archive', '让当前工作和未来更新共享一个结构。']
  ];
  return previewShell(component, family,
    '<div class="timeline-stage"><div class="timeline-years">' + years.map(function (year) { return '<span>' + year + '</span>'; }).join('') + '</div><div class="timeline-events">' + events.map(function (event) { return '<div class="timeline-event"><strong>' + event[0] + '</strong><p>' + event[1] + '</p></div>'; }).join('') + '</div></div>');
}

function renderContact(family, component) {
  return previewShell(component, family,
    '<div class="contact-copy"><span class="stage-kicker">CONTACT / COLLABORATION</span><h4>如果你对正在发生的工作感兴趣，可以直接联系我。</h4><p>适合具体项目、研究、内容系统和 AI 协作方式的交流。先说你想讨论什么。</p><a class="stage-button" href="#' + component.id + '">Send a clear message ↗</a></div>' +
    '<div class="contact-links"><a class="contact-link" href="#' + component.id + '"><span>Email</span><span>↗</span></a><a class="contact-link" href="#' + component.id + '"><span>GitHub</span><span>↗</span></a><a class="contact-link" href="#' + component.id + '"><span>Other links</span><span>↗</span></a></div>');
}

function renderClosing(family, component) {
  return previewShell(component, family,
    '<div class="closing-copy"><span class="stage-kicker">END OF PAGE / NEXT ROUTE</span><h4>继续看正在发生的工作。</h4><p>一个页面只给出最合理的下一步：回到 Archive，或者打开一个相关项目。</p></div>' +
    '<div class="closing-next"><span class="stage-meta">NEXT / ARCHIVE</span><a class="stage-button" href="#' + component.id + '">View all projects →</a></div>');
}

function renderNotes(family, component) {
  const notes = [
    ['09.14', '为什么要做 Working Archive', 'DESIGN'],
    ['09.08', 'AI 协作中的判断边界', 'METHOD'],
    ['08.26', '阅读如何留下问题', 'READING']
  ];
  return previewShell(component, family,
    '<div class="notes-list">' + notes.map(function (note) {
      return '<div class="note-row" data-action="select"><span class="stage-date">' + note[0] + '</span><span><strong>' + note[1] + '</strong><small>短笔记 / 未来可展开</small></span><span class="stage-tag">' + note[2] + '</span></div>';
    }).join('') + '</div><div class="notes-aside">' + titleBlock('NOTES / FUTURE', '先积累，再发布。', 'Notes 页面只有在真实写作开始形成时才进入生产。') + '<span class="stage-meta">3 ENTRIES / INDEX READY</span></div>');
}

function renderNoteDetail(family, component) {
  return previewShell(component, family,
    '<div class="note-prose"><span class="stage-kicker">NOTE / 2026.09.14 / DESIGN</span><h4>一个页面怎样允许自己继续变化？</h4><p>如果内容会持续增加，页面不应该只为今天的三条记录设计。真正要先确定的是：新增一条记录时，作者是否还需要重新发明一套排版。</p><p class="quote-line">记录不是为了证明我一直很忙，而是让下一次判断有可以回看的上下文。</p><a href="#' + component.id + '">Back to Notes ↗</a></div>' +
    '<div class="note-outline"><span class="stage-label">ON THIS PAGE</span><span>01 / Problem</span><span>02 / Decision</span><span>03 / Next</span><span class="stage-meta">READING TIME · 4 MIN</span></div>');
}

function renderLibrary(family, component) {
  const books = [
    ['01', 'Sapiens', 'READING'],
    ['02', 'The Design of Everyday Things', 'TO READ'],
    ['03', 'Understanding Media', 'RETURN']
  ];
  return previewShell(component, family,
    '<div class="library-shelf">' + books.map(function (book) {
      return '<div class="book-spine" data-action="select"><span class="stage-code">' + book[0] + '</span><strong>' + book[1] + '</strong><span class="stage-tag">' + book[2] + '</span></div>';
    }).join('') + '</div><div class="library-notes">' + titleBlock('READING / LIBRARY', '书不是数量。', '这里记录留下过判断的问题，以及它们后来去了哪个项目。') + '<a class="stage-button" href="#' + component.id + '">See reading notes →</a></div>');
}

function renderUpdates(family, component) {
  const updates = [
    ['09.14', 'Component Lab expanded', '+39 dimensions'],
    ['09.12', 'Dark theme mapped', 'tokens only'],
    ['09.07', 'Working Archive selected', 'direction fixed']
  ];
  return previewShell(component, family,
    '<div class="updates-stage"><div class="timeline-years"><span>CHANGELOG</span><span>RECENT</span><span>HISTORY</span></div><div>' + updates.map(function (update) {
      return '<div class="update-row" data-action="select"><span class="stage-date">' + update[0] + '</span><span><strong>' + update[1] + '</strong><small>影响：' + update[2] + '</small></span><span class="stage-accent">↗</span></div>';
    }).join('') + '</div></div>');
}

function renderResume(family, component) {
  return previewShell(component, family,
    '<div class="resume-main"><span class="stage-kicker">RESUME / SHORT VERSION</span><h4>Builder / Researcher / Content Systems</h4><p>把问题、内容和可使用的系统连接起来；AI 用来扩大探索，人负责判断和验收。</p><a class="stage-button" href="#' + component.id + '">Download CV ↗</a></div>' +
    '<div class="resume-facts"><div class="resume-fact"><span class="stage-label">EDUCATION</span><strong>International Politics</strong></div><div class="resume-fact"><span class="stage-label">FOCUS</span><strong>AI-assisted products</strong></div><div class="resume-fact"><span class="stage-label">EVIDENCE</span><strong>Projects → details</strong></div></div>');
}

function renderUses(family, component) {
  const columns = [
    ['BUILD', ['Astro', 'VS Code', 'Git']],
    ['READ', ['BOOX', 'Markdown', 'RSS']],
    ['THINK', ['AI agents', 'Browser QA', 'Decision logs']]
  ];
  return previewShell(component, family,
    '<div class="uses-stage">' + columns.map(function (column) {
      return '<div class="use-column"><span class="stage-kicker">' + column[0] + '</span>' + column[1].map(function (item, index) { return '<div class="use-row"><span>' + item + '</span><span class="stage-meta">0' + (index + 1) + '</span></div>'; }).join('') + '<p>写清楚使用原因，而不是列出所有软件。</p></div>';
    }).join('') + '</div>');
}

function renderLab(family, component) {
  return previewShell(component, family,
    '<div class="lab-project"><span class="stage-kicker">LAB / EXPERIMENT / OPEN</span><h4>Component Lab</h4><p>这里放尚未进入生产的视觉、交互和内容实验。实验必须有问题、有范围，也要知道何时停止。</p><a class="stage-button" href="#' + component.id + '">Open experiment ↗</a></div>' +
    '<div class="lab-list"><span><b>STATUS</b><em>OPEN</em></span><span><b>VARIANTS</b><em>05</em></span><span><b>RESULT</b><em>REVIEW</em></span><span><b>NEXT</b><em>DECIDE</em></span></div>');
}

function renderSearch(family, component) {
  const results = [
    ['01', 'Interactive Study', 'PROJECT / ACTIVE'],
    ['02', 'AI 协作中的判断边界', 'NOTE / 2026'],
    ['03', 'Working Archive', 'DESIGN / SYSTEM']
  ];
  return previewShell(component, family,
    '<div class="search-box"><span>⌕</span><strong>working</strong><span class="stage-meta">3 RESULTS</span></div><div class="search-results">' + results.map(function (result) {
      return '<div class="search-result" data-action="select"><span class="stage-code">' + result[0] + '</span><span><strong>' + result[1] + '</strong><small>' + result[2] + '</small></span><a href="#' + component.id + '">↗</a></div>';
    }).join('') + '</div>');
}

function renderRss(family, component) {
  const options = [['FEED', 'RSS 2.0'], ['UPDATED', '2026.09.14'], ['ENTRIES', '12 / growing']];
  return previewShell(component, family,
    '<div class="rss-mark">RSS</div><div><div class="rss-options">' + options.map(function (option) { return '<div class="rss-option"><span>' + option[0] + '</span><strong>' + option[1] + '</strong></div>'; }).join('') + '</div><a class="stage-button" href="#' + component.id + '">Subscribe to updates ↗</a></div>');
}

function renderDashboard(family, component) {
  const metrics = [['ACTIVE', '03'], ['READING', '01'], ['UPDATED', '09'], ['EVIDENCE', '12']];
  return previewShell(component, family,
    '<div class="dashboard-warning"><span class="stage-kicker">FUTURE ONLY / X-10</span><h4>数据必须有来源。</h4><p>实时状态、健身数据和个人 Dashboard 不能为了“看起来活着”而加入。先验证用途、隐私和维护成本。</p></div><div class="dashboard-grid">' + metrics.map(function (metric) { return '<div class="metric-box"><span class="stage-label">' + metric[0] + '</span><strong>' + metric[1] + '</strong><span class="stage-meta">SOURCE / LAST CHECK</span></div>'; }).join('') + '</div>');
}

function renderPreview(component, family) {
  switch (component.kind) {
    case 'mono': return renderMono(family, component);
    case 'spacing': return renderSpacing(family, component);
    case 'motion': return renderMotion(family, component);
    case 'brand': return renderBrand(family, component);
    case 'navState': return renderNavState(family, component);
    case 'themeEntry': return renderThemeEntry(family, component);
    case 'footer': return renderFooter(family, component);
    case 'breadcrumb': return renderBreadcrumb(family, component);
    case 'external': return renderExternal(family, component);
    case 'pageState': return renderPageState(family, component);
    case 'featured': return renderFeatured(family, component);
    case 'typeLabel': return renderTypeLabel(family, component);
    case 'compact': return renderCompact(family, component);
    case 'filter': return renderFilter(family, component);
    case 'empty': return renderEmpty(family, component);
    case 'context': return renderContext(family, component);
    case 'contribution': return renderContribution(family, component);
    case 'process': return renderProcess(family, component);
    case 'decisions': return renderDecisions(family, component);
    case 'delivery': return renderDelivery(family, component);
    case 'media': return renderMedia(family, component);
    case 'detailNav': return renderDetailNav(family, component);
    case 'reading': return renderReading(family, component);
    case 'profile': return renderProfile(family, component);
    case 'method': return renderMethod(family, component);
    case 'timeline': return renderTimeline(family, component);
    case 'contact': return renderContact(family, component);
    case 'closing': return renderClosing(family, component);
    case 'notes': return renderNotes(family, component);
    case 'noteDetail': return renderNoteDetail(family, component);
    case 'library': return renderLibrary(family, component);
    case 'updates': return renderUpdates(family, component);
    case 'resume': return renderResume(family, component);
    case 'uses': return renderUses(family, component);
    case 'lab': return renderLab(family, component);
    case 'search': return renderSearch(family, component);
    case 'rss': return renderRss(family, component);
    case 'dashboard': return renderDashboard(family, component);
    default: return previewShell(component, family, '<div class="empty-result">No specimen.</div>');
  }
}

function renderVariant(component, family, index) {
  const checks = ['default', 'hover', 'focus', 'mobile'];
  const lens = component.lenses[index] || family.description;
  return '<article class="variant-card" id="' + component.id + '-' + family.code + '">' +
    '<header class="variant-heading"><div class="variant-heading-main"><span class="variant-code">' + component.id + ' / ' + family.code + '</span><div><h3 class="variant-title">' + family.name + '</h3><p class="variant-description">' + lens + '</p></div></div><div class="variant-tags">' + family.tags.map(function (tag) { return '<span>' + tag + '</span>'; }).join('') + '</div></header>' +
    renderPreview(component, family, index) +
    '<div class="variant-checks">' + checks.map(function (check) { return '<span>' + check + '</span>'; }).join('') + '<span>record choice</span></div></article>';
}

function renderSection(component) {
  const searchText = (component.id + ' ' + component.name + ' ' + component.groupLabel + ' ' + component.question).toLowerCase();
  return '<section class="component-section" id="' + component.id + '" data-group="' + component.group + '" data-search="' + escapeHtml(searchText) + '"><header class="section-heading"><span class="section-index">' + component.id + '</span><div><h2>' + component.name + '</h2><p class="section-question">' + component.question + '</p></div><div class="section-side"><span class="section-count">05 VARIANTS</span><button class="copy-link js-copy-section" type="button" data-id="' + component.id + '">COPY LINK</button></div></header><div class="variant-stack">' + families.map(function (family, index) { return renderVariant(component, family, index); }).join('') + '</div></section>';
}

function renderNavigation() {
  let html = '';
  groupOrder.forEach(function (group) {
    html += '<div class="nav-group-label">' + groupNames[group] + '</div>';
    components.filter(function (component) { return component.group === group; }).forEach(function (component) {
      html += '<a href="#' + component.id + '"><span class="nav-id">' + component.id + '</span><span class="nav-name">' + component.name + '</span></a>';
    });
  });
  document.querySelector('#component-nav').innerHTML = html;
}

function renderAll() {
  document.querySelector('#lab-sections').innerHTML = components.map(renderSection).join('');
  renderNavigation();
  updateStats();
}

function updateStats() {
  const visible = Array.from(document.querySelectorAll('.component-section')).filter(function (section) {
    return !section.classList.contains('is-hidden');
  }).length;
  document.querySelector('#lab-stats').innerHTML = '<span>SHOWING <strong>' + visible + ' / ' + components.length + '</strong> COMPONENTS</span><span><strong>' + (visible * 5) + '</strong> FULL-WIDTH VARIANTS</span><span>ALL 5 FAMILIES</span>';
}

function applyFilters() {
  const query = document.querySelector('#lab-search').value.trim().toLowerCase();
  const filter = document.querySelector('.filter-button.is-active').dataset.filter;
  document.querySelectorAll('.component-section').forEach(function (section) {
    const matchesQuery = !query || section.dataset.search.includes(query);
    const matchesFilter = filter === 'all' || section.dataset.group === filter;
    section.classList.toggle('is-hidden', !(matchesQuery && matchesFilter));
  });
  updateStats();
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('component-lab-theme', next);
}

function copySectionLink(button) {
  const id = button.dataset.id;
  const url = window.location.origin + window.location.pathname + '#' + id;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url);
  }
  const oldText = button.textContent;
  button.textContent = 'COPIED';
  setTimeout(function () { button.textContent = oldText; }, 1000);
}

function bindEvents() {
  const savedTheme = localStorage.getItem('component-lab-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.dataset.theme = savedTheme;
  }

  document.querySelector('.js-theme-toggle').addEventListener('click', toggleTheme);
  document.querySelector('#lab-search').addEventListener('input', applyFilters);

  document.querySelectorAll('.filter-button').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.filter-button').forEach(function (item) { item.classList.remove('is-active'); });
      button.classList.add('is-active');
      applyFilters();
    });
  });

  document.addEventListener('click', function (event) {
    const selectable = event.target.closest('[data-action="select"]');
    if (selectable) {
      selectable.classList.toggle('is-selected');
    }

    const copyButton = event.target.closest('.js-copy-section');
    if (copyButton) {
      copySectionLink(copyButton);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.target.matches('[data-action="select"]')) {
      event.target.classList.toggle('is-selected');
    }
  });
}

renderAll();
bindEvents();
