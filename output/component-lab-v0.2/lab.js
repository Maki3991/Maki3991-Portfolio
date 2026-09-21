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
    id: 'F-01',
    group: 'foundation',
    groupLabel: '全站视觉基础',
    name: '语义颜色角色',
    kind: 'palette',
    question: '背景、正文、弱文本、边框和强调色如何建立 Working Archive 的第一印象？',
    lenses: [
      '蓝色作为索引线和行动色，层级由边框完成。',
      '青蓝强调与柔和表面并置，降低长时间阅读疲劳。',
      '冷灰底配高密度蓝色索引，像一套可查询的工作目录。',
      '大面积信号蓝负责记忆点，正文留在高对比中性面上。',
      '尽量减少色块，只留下必要的链接、编号和状态颜色。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'F-02',
    group: 'foundation',
    groupLabel: '全站视觉基础',
    name: '亮色 / 暗色主题映射',
    kind: 'theme',
    question: '暗色模式如何保持同一套信息架构，而不是变成另一种网站？',
    lenses: [
      '浅蓝纸面与深蓝夜间表面，强调色保持同一条索引线。',
      '亮色靠表面层级，暗色靠边框和文字重量维持结构。',
      '密集索引主题在暗色中保留等宽元数据和细线。',
      '高对比蓝色成为两套主题的共同信号，不改变内容顺序。',
      '开放留白在暗色中变成安静的深色场，图片和文本优先。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'F-03',
    group: 'foundation',
    groupLabel: '全站视觉基础',
    name: '字体层级',
    kind: 'type',
    question: '标题、摘要、元信息和正文如何产生层级，而不依赖常见的衬线体 AI 模板感？',
    lenses: [
      '宽大的无衬线标题配窄元信息，形成编辑目录的纵向节奏。',
      '标题更克制，靠行距和表面留白表达安静的阅读感。',
      '等宽字体参与主要层级，页面更像一份持续增长的系统索引。',
      '标题使用高对比重量，强调当前页面和行动入口。',
      '标题不占据太多面积，让项目事实和正文成为主角。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'F-04',
    group: 'foundation',
    groupLabel: '全站视觉基础',
    name: '中英文混排',
    kind: 'bilingual',
    question: '中文身份、英文项目名、路径和状态如何放在同一套排印规则里？',
    lenses: [
      '中文承担叙述，英文和编号承担索引，二者用位置区分。',
      '中文和英文都保持较宽行距，适合项目摘要和说明文字。',
      '英文元数据使用等宽字体，中文标题保持紧凑和直接。',
      '英文成为视觉信号，中文承担解释，适合双语页面入口。',
      '中英文并列但不互相抢层级，适合长期维护的内容模板。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'F-06',
    group: 'foundation',
    groupLabel: '全站视觉基础',
    name: '内容容器与最大宽度',
    kind: 'container',
    question: '页面究竟应该像一个有边界的档案柜，还是一片可呼吸的开放工作面？',
    lenses: [
      '固定内容轨道和左侧索引，适合快速定位。',
      '宽阔中心栏配柔和表面，适合连续阅读。',
      '窄边界与高密度内容并置，适合项目数量增多。',
      '主内容与强调栏切开，首屏更有方向感。',
      '尽量去掉容器感，让文字和线条自然占据页面。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'F-07',
    group: 'foundation',
    groupLabel: '全站视觉基础',
    name: '网格与栏位',
    kind: 'grid',
    question: 'Home、Archive 和详情页是否共享同一套栏位逻辑？',
    lenses: [
      '左侧固定索引，右侧内容展开，关系一眼可见。',
      '多栏卡片保持相同宽度，强调平静和可预测。',
      '不对称网格给主项目更大面积，其他内容作为索引。',
      '高对比主块与小块信息形成清晰的信号分区。',
      '简单的两栏和单栏切换，让内容而不是布局成为重点。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'F-09',
    group: 'foundation',
    groupLabel: '全站视觉基础',
    name: '分隔线与边框',
    kind: 'divider',
    question: '如何用线、间距和轻微变化建立章节秩序，而不是堆卡片？',
    lenses: [
      '单线、编号和右侧标题构成稳定的编辑章节。',
      '粗线和圆角表面让章节更柔和、更像工作台。',
      '虚线和等宽编号强化系统索引感。',
      '分隔线成为可以点击和聚焦的信号条。',
      '线条从内容中自然长出，不单独制造容器。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'S-01',
    group: 'shell',
    groupLabel: '共享 Shell / 导航',
    name: '桌面端 Header',
    kind: 'header',
    question: '导航如何足够清楚，却不让个人网站变成一个通用 SaaS 顶栏？',
    lenses: [
      '品牌、路径和导航被一条线串起来，当前页有明确位置。',
      '圆润的整体导航壳体，降低工具感，保持轻量。',
      '加粗边框和等宽文本，像一条可扫描的站点目录。',
      '整条 Header 变成视觉信号面，适合强调当前状态。',
      '去掉多余容器，只保留名称、链接和一条底线。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'S-04',
    group: 'shell',
    groupLabel: '共享 Shell / 导航',
    name: '移动端导航',
    kind: 'mobile',
    question: '移动端菜单如何直接、可发现、可关闭，并且不依赖复杂转场？',
    lenses: [
      '菜单从 Header 下方展开，保留当前路径和返回关系。',
      '圆角面板从右侧出现，适合拇指操作和轻量浏览。',
      '全宽高密度索引，打开后能快速扫描所有入口。',
      '高对比面板直接覆盖内容，强调“现在正在导航”。',
      '菜单只是内容流中的一块，不制造独立的沉浸式场景。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'S-06',
    group: 'shell',
    groupLabel: '共享 Shell / 导航',
    name: '页面标题与路径信息',
    kind: 'pageTitle',
    question: '页面标题、编号、更新时间和层级关系如何在首屏同时可读？',
    lenses: [
      '路径竖排，标题占主位，更新时间负责右侧锚点。',
      '标题在平滑表面中出现，元信息作为轻量辅助。',
      '路径先于标题，像打开一个可查询的目录文件。',
      '标题落在高对比信号面上，页面类型一眼可辨。',
      '标题尽量靠近内容，不额外制造一个巨大 Hero。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'A-01',
    group: 'archive',
    groupLabel: 'Archive / 列表模式',
    name: 'Archive 项目列表行',
    kind: 'archive',
    question: '项目、作品、实验和未来阅读记录能否共用一种长期追加的列表结构？',
    lenses: [
      '编号、标题和状态沿一条轨道排列，适合快速回看。',
      '去掉编号，把标题和摘要放进舒适的双栏阅读表面。',
      '列表更像数据索引，等宽元信息和密集行距支持大量内容。',
      '每一行像一个可点击的信号块，适合突出进行中的项目。',
      '线条和留白负责组织内容，不让每个条目变成一张卡片。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'A-03',
    group: 'archive',
    groupLabel: 'Archive / 列表模式',
    name: '状态标签',
    kind: 'status',
    question: '进行中、完成、暂停和归档如何被快速读懂，而不是变成标签堆？',
    lenses: [
      '状态是细小的蓝色索引胶囊，和编号处于同一层。',
      '状态作为柔和表面上的小型圆角标记，存在感较低。',
      '状态用等宽大写和虚线边界，适合系统性归档。',
      '进行中状态获得高对比填充，其他状态退到背景。',
      '状态只保留必要文字和一条线，不增加额外装饰。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'A-05',
    group: 'archive',
    groupLabel: 'Archive / 列表模式',
    name: '更新时间元数据',
    kind: 'date',
    question: '更新日期应该像档案时间戳、阅读提示，还是当前状态信号？',
    lenses: [
      '日期靠右对齐，作为每一行的稳定结束点。',
      '日期和说明放在柔和的上下文中，不打断标题阅读。',
      '日期用等宽格式和年份分组，方便未来筛选。',
      '最近更新被提升为蓝色信号，提醒访客查看变化。',
      '日期变成轻量旁注，只在需要时出现。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'A-06',
    group: 'archive',
    groupLabel: 'Archive / 列表模式',
    name: '编号与索引轨道',
    kind: 'index',
    question: '编号是单纯装饰，还是能帮助访客理解项目顺序和内容规模？',
    lenses: [
      '编号成为左侧阅读轨道，和竖线一起提供方向感。',
      '编号弱化为小型元数据，不抢项目标题。',
      '编号是主视觉，像一套可扩展的档案索引系统。',
      '编号放进高对比色块，成为每一条内容的起点。',
      '编号只做轻量边注，让内容保持开放。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'A-07',
    group: 'archive',
    groupLabel: 'Archive / 列表模式',
    name: '列表行 Hover / Active',
    kind: 'hover',
    question: '交互反馈如何让访客知道“这一行可进入”，又不靠复杂动效制造噪音？',
    lenses: [
      '悬停时整行向内收进轨道，蓝色线条指向入口。',
      '悬停时表面轻轻抬起，适合柔和、低压力的浏览。',
      '悬停时等宽索引反转，像终端中选中了一个条目。',
      '悬停时整行变成信号色，当前行动非常明确。',
      '悬停只改变线和文字颜色，内容保持稳定。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'D-01',
    group: 'detail',
    groupLabel: '详情 / 证据模式',
    name: '详情页 Hero',
    kind: 'itemHero',
    question: '详情页第一屏如何建立上下文，而不是用空泛宣传语占据空间？',
    lenses: [
      '项目标题和右侧状态栏直接建立档案上下文。',
      '标题落在柔和表面中，适合长时间阅读和细节展开。',
      '元信息先出现，项目标题像一个被打开的索引条目。',
      '项目标题进入高对比面，适合重要项目和明确行动。',
      'Hero 缩短为标题、摘要和一条边界，让内容尽快开始。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'D-02',
    group: 'detail',
    groupLabel: '详情 / 证据模式',
    name: '项目事实与元数据',
    kind: 'facts',
    question: '时间、角色、类型、技术和状态如何被读者快速扫描？',
    lenses: [
      '事实卡片有左侧强调线，像一组档案字段。',
      '事实放进圆角表面，适合轻量浏览和分块理解。',
      '事实全部对齐成紧凑索引，适合项目数量增多。',
      '重要事实使用高对比块，帮助面试官迅速抓重点。',
      '事实变成开放的行列表，不制造额外卡片边界。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'D-08',
    group: 'detail',
    groupLabel: '详情 / 证据模式',
    name: 'Evidence / 验证信息',
    kind: 'evidence',
    question: '链接、截图、代码、文档和测试结果如何组成可信而不喧宾夺主的证据层？',
    lenses: [
      '左侧先说明证据标准，右侧逐项列出可核验材料。',
      '证据变成三个可浏览的柔和小卡片，适合快速检查。',
      '证据以无卡片索引呈现，突出来源类型和更新时间。',
      '证据区域成为一个清晰信号面，适合重点项目。',
      '证据和正文保持同一条开放边界，最少装饰、最多事实。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'P-01',
    group: 'page',
    groupLabel: 'Home / Now / 页面模块',
    name: 'Home Hero',
    kind: 'homeHero',
    question: '首页如何让访客快速理解 Maki 正在做什么，而不是先看一段模板化自我介绍？',
    lenses: [
      '大标题、身份标签和右侧当前状态形成入口。',
      '标题与简介放在舒服的表面中，强调可亲近和可读。',
      '首页像一张索引封面，编号和项目入口同时出现。',
      '首页用高对比面建立记忆点，行动按钮清楚但不喧闹。',
      '首页尽快把视线交给真实项目，Hero 只保留必要信息。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'P-02',
    group: 'page',
    groupLabel: 'Home / Now / 页面模块',
    name: 'Current Focus',
    kind: 'focus',
    question: '当前重点如何既能体现持续更新，又不像一个没有证据的个人 Dashboard？',
    lenses: [
      '三个重点沿索引轨道排列，状态明确但不显示虚假数字。',
      '重点作为柔和表面中的三个安静条目，适合定期更新。',
      '重点采用密集系统列表，方便未来追加和调整。',
      '第一重点使用高对比状态，其余内容退到辅助层。',
      '重点以开放行列表出现，重心放在一句具体的下一步。'
    ],
    status: '第一轮 Lab 优先'
  },
  {
    id: 'P-04',
    group: 'page',
    groupLabel: 'Home / Now / 页面模块',
    name: 'Now 页面结构',
    kind: 'now',
    question: 'Now 如何表达当前阶段、注意力和暂时不做什么，而不是重复 Projects 页面？',
    lenses: [
      '左侧阶段标题，右侧重点和最后更新时间形成清楚的公开声明。',
      'Now 像一张安静的个人工作台，重点以柔和区块展开。',
      'Now 采用高密度索引，适合季度更新和保留明确事实。',
      'Now 用信号色突出“现在”，让优先级和开放合作更明确。',
      'Now 缩短为一组开放文字和链接，不额外制造复杂页面。'
    ],
    status: '第一轮 Lab 优先'
  }
];

const projects = [
  { code: '01', title: '英语自媒体 / English Media', summary: '内容系统、表达和长期运营实验', type: 'PROJECT', status: 'ACTIVE', date: '2026' },
  { code: '02', title: 'V028 四级六级作品', summary: '可交付的内容与设计作品', type: 'WORK', status: 'ARCHIVED', date: '2025' },
  { code: '03', title: 'Interactive Study', summary: '把学习流程做成可以使用的系统', type: 'SYSTEM', status: 'BUILDING', date: 'NOW' }
];

const groupOrder = ['foundation', 'shell', 'archive', 'detail', 'page'];
const groupNames = {
  foundation: 'F / 全站基础',
  shell: 'S / Shell 与导航',
  archive: 'A / Archive 列表',
  detail: 'D / 详情与证据',
  page: 'P / Home、Now 与页面模块'
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
    '<div class="specimen-inner">' + content + '</div>' +
  '</div>';
}

function renderPalette(family, component) {
  const labels = ['background', 'surface', 'text', 'muted', 'line', 'accent'];
  return previewShell(component, family,
    '<div class="swatch-board">' +
      '<div class="swatch-copy">' +
        '<div class="spec-label">SEMANTIC TOKEN SET</div>' +
        '<h3>' + family.name + '</h3>' +
        '<p>' + family.description + '</p>' +
        '<a class="preview-button secondary" href="#' + component.id + '">Review roles ↗</a>' +
      '</div>' +
      '<div class="swatches">' +
        labels.map(function (label) { return '<div class="swatch">' + label + '</div>'; }).join('') +
      '</div>' +
    '</div>');
}

function renderTheme(family, component) {
  return previewShell(component, family,
    '<div class="theme-pair">' +
      '<div class="theme-board light">' +
        '<div class="spec-label">LIGHT / DEFAULT</div>' +
        '<h3>工作正在发生。</h3>' +
        '<p>结构、线条、链接和弱文本在明亮环境中的层级。</p>' +
        '<div class="mini-rule"></div>' +
        '<a class="preview-button" href="#' + component.id + '">Open archive</a>' +
      '</div>' +
      '<div class="theme-board dark">' +
        '<div class="spec-label">DARK / SECONDARY</div>' +
        '<h3>工作仍然可见。</h3>' +
        '<p>主题改变表面和对比度，不改变内容关系。</p>' +
        '<div class="mini-rule"></div>' +
        '<a class="preview-button" href="#' + component.id + '">Open archive</a>' +
      '</div>' +
    '</div>');
}

function renderType(family, component) {
  return previewShell(component, family,
    '<div class="type-stage">' +
      '<div class="type-aside">' +
        '<div class="spec-label">TYPE HIERARCHY</div>' +
        '<strong>Display / Lead / Meta</strong>' +
        '<div class="mini-rule"></div>' +
        '<span class="preview-meta">A readable archive needs more than one voice.</span>' +
      '</div>' +
      '<div class="type-main">' +
        '<h3><span>PERSONAL ARCHIVE / CHINA</span>Maki / 羽轩</h3>' +
        '<p>把内容、项目和学习系统整理成一个长期可验证的工作档案。</p>' +
        '<span class="preview-meta">CURRENT FOCUS · BUILDING A SYSTEM THAT CAN GROW</span>' +
      '</div>' +
    '</div>');
}

function renderBilingual(family, component) {
  return previewShell(component, family,
    '<div class="bilingual-stage">' +
      '<div>' +
        '<h3><small>PERSONAL ARCHIVE</small>个人档案</h3>' +
        '<p>中文负责语境和真实身份，英文负责索引和跨语境入口。</p>' +
      '</div>' +
      '<div>' +
        '<h3><small>WORKING ARCHIVE</small>持续工作</h3>' +
        '<p>英文项目名、路径和状态不需要与中文正文抢夺同一层级。</p>' +
      '</div>' +
    '</div>');
}

function renderContainer(family, component) {
  return previewShell(component, family,
    '<div class="frame-stage">' +
      '<div class="frame-content">' +
        '<div class="frame-top"><span class="preview-kicker">HOME / ARCHIVE</span><span class="preview-meta">MAX-WIDTH ' + family.code + '</span></div>' +
        '<div class="frame-columns">' +
          '<div class="frame-rail"></div>' +
          '<div class="frame-blocks"><i></i><i></i><i></i><i></i></div>' +
        '</div>' +
      '</div>' +
    '</div>');
}

function renderGrid(family, component) {
  return previewShell(component, family,
    '<div class="grid-layout-stage">' +
      '<div class="grid-tile">PRIMARY<br />CONTENT RAIL</div>' +
      '<div class="grid-tile">02 / META</div>' +
      '<div class="grid-tile">03 / NEXT</div>' +
      '<div class="grid-tile">04 / EVIDENCE</div>' +
      '<div class="grid-tile">05 / LINK</div>' +
    '</div>');
}

function renderDivider(family, component) {
  const rows = ['Identity', 'Selected work', 'Current focus'];
  return previewShell(component, family,
    '<div class="divider-stage">' +
      rows.map(function (row, index) {
        return '<div class="divider-row"><span class="divider-no">0' + (index + 1) + '</span><div class="divider-line"></div><strong>' + row + '</strong></div>';
      }).join('') +
    '</div>');
}

function renderHeader(family, component) {
  return previewShell(component, family,
    '<div class="specimen-header">' +
      '<span class="header-logo">MAKI / 羽轩</span>' +
      '<nav class="header-nav" aria-label="方案导航">' +
        '<a href="#' + component.id + '">Home</a><a href="#' + component.id + '">Archive</a><a href="#' + component.id + '">Now</a><a href="#' + component.id + '">About</a>' +
      '</nav>' +
    '</div>' +
    '<div class="mini-rule"></div>' +
    '<span class="preview-meta">Hover a navigation item to inspect its active language.</span>');
}

function renderMobile(family, component) {
  return previewShell(component, family,
    '<div class="mobile-stage">' +
      '<div class="phone-frame">' +
        '<div class="phone-bar"><span>MAKI / LAB</span><button class="menu-trigger js-menu-toggle" type="button" aria-expanded="false">MENU +</button></div>' +
        '<div class="phone-content"><span class="preview-kicker">CURRENT FOCUS</span><strong>Working<br />Archive</strong><i></i><i></i></div>' +
        '<div class="phone-menu"><a href="#' + component.id + '">01 / Home</a><a href="#' + component.id + '">02 / Archive</a><a href="#' + component.id + '">03 / Now</a><a href="#' + component.id + '">04 / About</a></div>' +
      '</div>' +
      '<div class="mobile-notes"><div class="spec-label">INTERACTION TEST</div><h3>先打开，再关闭。</h3><p>点击 MENU，检查菜单是否可发现、是否有明确的关闭路径，以及内容是否仍然可以理解。</p><span class="preview-meta">TOUCH TARGET · FOCUS · ESCAPE PATH</span></div>' +
    '</div>');
}

function renderPageTitle(family, component) {
  return previewShell(component, family,
    '<div class="page-title-stage">' +
      '<span class="path">HOME / ARCHIVE / 01</span>' +
      '<h3>Selected<br />Work</h3>' +
      '<div class="page-meta"><span>UPDATED</span><strong>2026.09</strong><span>3 ENTRIES</span></div>' +
    '</div>');
}

function renderArchive(family, component) {
  return previewShell(component, family,
    '<div class="archive-stage">' +
      projects.map(function (project) {
        return '<div class="archive-row" role="button" tabindex="0" data-action="select-row">' +
          '<span class="row-index">' + project.code + '</span>' +
          '<span><strong class="row-title">' + project.title + '</strong><small class="row-summary">' + project.summary + '</small></span>' +
          '<span class="row-tail"><span class="row-status">' + project.status + '</span><span class="row-meta">' + project.date + ' · ' + project.type + '</span></span>' +
        '</div>';
      }).join('') +
    '</div>');
}

function renderStatus(family, component) {
  const statuses = [
    ['ACTIVE', '正在推进'],
    ['SHIPPED', '已完成'],
    ['PAUSED', '暂时停下']
  ];
  return previewShell(component, family,
    '<div class="status-stage">' +
      '<div class="status-copy"><div class="spec-label">STATUS LANGUAGE</div><h3>状态要说明事实，不制造气氛。</h3><p>标签只回答项目现在处于什么状态，不假装提供没有来源的成绩。</p></div>' +
      '<div class="status-list">' +
        statuses.map(function (status) {
          return '<div class="status-item"><span>' + status[1] + '</span><span class="status-chip">' + status[0] + '</span></div>';
        }).join('') +
      '</div>' +
    '</div>');
}

function renderDate(family, component) {
  const dates = [
    ['2026.09', 'Working Archive', '现在正在更新'],
    ['2025 →', 'V028', '作品归档'],
    ['NEXT', 'English Media', '持续推进']
  ];
  return previewShell(component, family,
    '<div class="date-stage">' +
      '<div class="date-copy"><div class="spec-label">TIME / UPDATE</div><h3>时间是入口，不是装饰。</h3><p>让访问者知道内容何时发生变化，也知道它是否仍然活着。</p></div>' +
      '<div class="date-list">' +
        dates.map(function (date) {
          return '<div class="date-item"><span class="date-mark">' + date[0] + '</span><span class="date-copy"><strong>' + date[1] + '</strong><small>' + date[2] + '</small></span></div>';
        }).join('') +
      '</div>' +
    '</div>');
}

function renderIndex(family, component) {
  const facts = [
    ['WORK MODE', '<strong>3</strong> active'],
    ['LAST UPDATE', '<strong>09</strong> / 2026'],
    ['EVIDENCE', '<strong>12</strong> linked'],
    ['NEXT GATE', '<strong>01</strong> detail']
  ];
  return previewShell(component, family,
    '<div class="index-stage">' +
      '<div class="index-copy"><div class="spec-label">INDEX RAIL</div><h3>编号帮助理解规模。</h3><p>它不是装饰性的序号，而是让访客在不同页面里保持方向感。</p></div>' +
      '<div class="index-list">' +
        facts.map(function (fact) {
          return '<div class="index-item"><span>' + fact[0] + '</span><span class="index-value">' + fact[1] + '</span></div>';
        }).join('') +
      '</div>' +
    '</div>');
}

function renderHover(family, component) {
  return previewShell(component, family,
    '<div class="archive-stage">' +
      '<div class="archive-row" role="button" tabindex="0" data-action="select-row"><span class="row-index">01</span><span><strong class="row-title">Hover this row</strong><small class="row-summary">颜色、背景、线条和位置变化都应该有理由。</small></span><span class="row-tail"><span class="row-status">TRY</span><span class="row-meta">↗</span></span></div>' +
      '<div class="archive-row" role="button" tabindex="0" data-action="select-row"><span class="row-index">02</span><span><strong class="row-title">Focus with keyboard</strong><small class="row-summary">点击或按 Tab，检查聚焦是否足够明显。</small></span><span class="row-tail"><span class="row-status">FOCUS</span><span class="row-meta">↗</span></span></div>' +
      '<div class="archive-row is-selected" role="button" tabindex="0" data-action="select-row"><span class="row-index">03</span><span><strong class="row-title">Selected state</strong><small class="row-summary">选中状态不应该改变内容含义，只提供位置。</small></span><span class="row-tail"><span class="row-status">ACTIVE</span><span class="row-meta">↗</span></span></div>' +
    '</div>');
}

function renderItemHero(family, component) {
  return previewShell(component, family,
    '<div class="item-hero-stage">' +
      '<div><div class="spec-label">PROJECT / SYSTEM / ACTIVE</div><h3>Interactive<br />Study</h3><p class="preview-copy">把学习流程、阅读动作和验证结果做成可以持续使用的系统。</p></div>' +
      '<div class="hero-side"><span>UPDATED</span><strong>2026.09</strong><span>ROLE</span><strong>Builder / Researcher</strong><a class="preview-button secondary" href="#' + component.id + '">Open detail ↗</a></div>' +
    '</div>');
}

function renderFacts(family, component) {
  const facts = [
    ['ROLE', 'Research + Build'],
    ['STATUS', 'Active'],
    ['PERIOD', '2026 — now'],
    ['OUTPUT', 'Web system']
  ];
  return previewShell(component, family,
    '<div class="facts-stage">' +
      facts.map(function (fact) {
        return '<div class="fact-card"><span>' + fact[0] + '</span><strong>' + fact[1] + '</strong></div>';
      }).join('') +
    '</div>');
}

function renderEvidence(family, component) {
  const evidence = [
    ['01', 'Online preview', '可直接访问的页面', 'LINK'],
    ['02', 'Source / docs', '代码、文档或决策记录', 'SOURCE'],
    ['03', 'Verification', '测试、截图或验收说明', 'PROOF']
  ];
  return previewShell(component, family,
    '<div class="evidence-stage">' +
      '<div class="evidence-lead"><div class="spec-label">EVIDENCE / NOT DECORATION</div><h3>让别人知道这件事真的发生过。</h3><p>Evidence 可以是链接、截图、代码、文档、版本和验收记录，不要求全部变成图片。</p></div>' +
      '<div class="evidence-list">' +
        evidence.map(function (item) {
          return '<div class="evidence-item"><span class="evidence-icon">' + item[0] + '</span><span><strong>' + item[1] + '</strong><small>' + item[2] + '</small></span><span class="evidence-kind">' + item[3] + ' ↗</span></div>';
        }).join('') +
      '</div>' +
    '</div>');
}

function renderHomeHero(family, component) {
  return previewShell(component, family,
    '<div class="home-hero-stage">' +
      '<div><div class="spec-label">PERSONAL ARCHIVE / CHINA</div><h3>Maki /<span>羽轩</span></h3><p class="preview-copy">内容、项目和学习系统正在被整理成一套可以长期更新的工作档案。</p><div class="hero-links"><a class="preview-button" href="#' + component.id + '">View archive</a><a class="preview-button secondary" href="#' + component.id + '">Now ↗</a></div></div>' +
      '<div class="home-hero-aside"><p>当前重点不是展示一个完成的形象，而是让访客看见正在发生的工作。</p><div class="hero-links"><span class="preview-meta">3 ACTIVE THREADS</span></div></div>' +
    '</div>');
}

function renderFocus(family, component) {
  const focus = [
    ['01', '重建个人网站', '确定可长期维护的内容与 UI 系统', 'NOW'],
    ['02', '学习系统', '把阅读动作和验证流程做成工具', 'BUILD'],
    ['03', '内容实践', '让研究、表达和作品互相留下证据', 'NEXT']
  ];
  return previewShell(component, family,
    '<div class="focus-stage">' +
      '<div><div class="spec-label">CURRENT FOCUS</div><h3>现在最值得继续的三件事。</h3><p>不做虚假的进度条，只展示正在投入注意力的方向和下一步。</p></div>' +
      '<div class="focus-list">' +
        focus.map(function (item) {
          return '<div class="focus-row"><span class="focus-no">' + item[0] + '</span><span><strong>' + item[1] + '</strong><small>' + item[2] + '</small></span><span class="focus-state">' + item[3] + '</span></div>';
        }).join('') +
      '</div>' +
    '</div>');
}

function renderNow(family, component) {
  const nowItems = [
    ['FOCUS', '构建 Working Archive', '先把一条真实链路做稳定，再扩展更多内容。'],
    ['READING', '持续读书和整理问题', '阅读先作为 Current Reading 模块出现，不制造空的博客。'],
    ['OPEN', '真实的交流与合作', '对具体项目、研究和 AI 协作方式保持开放。']
  ];
  return previewShell(component, family,
    '<div class="now-stage">' +
      '<div class="now-heading"><div><div class="spec-label">LAST UPDATED / 2026.09</div><h3>What I am doing now.</h3></div><p>Now 不是 Projects 的状态筛选，而是当前阶段的公开概括。</p></div>' +
      '<div class="now-board">' +
        nowItems.map(function (item) {
          return '<div class="now-item"><span>' + item[0] + '</span><strong>' + item[1] + '</strong><p>' + item[2] + '</p></div>';
        }).join('') +
      '</div>' +
    '</div>');
}

function renderPreview(component, family, index) {
  void index;
  switch (component.kind) {
    case 'palette': return renderPalette(family, component);
    case 'theme': return renderTheme(family, component);
    case 'type': return renderType(family, component);
    case 'bilingual': return renderBilingual(family, component);
    case 'container': return renderContainer(family, component);
    case 'grid': return renderGrid(family, component);
    case 'divider': return renderDivider(family, component);
    case 'header': return renderHeader(family, component);
    case 'mobile': return renderMobile(family, component);
    case 'pageTitle': return renderPageTitle(family, component);
    case 'archive': return renderArchive(family, component);
    case 'status': return renderStatus(family, component);
    case 'date': return renderDate(family, component);
    case 'index': return renderIndex(family, component);
    case 'hover': return renderHover(family, component);
    case 'itemHero': return renderItemHero(family, component);
    case 'facts': return renderFacts(family, component);
    case 'evidence': return renderEvidence(family, component);
    case 'homeHero': return renderHomeHero(family, component);
    case 'focus': return renderFocus(family, component);
    case 'now': return renderNow(family, component);
    default: return previewShell(component, family, '<div class="empty-result">No specimen.</div>');
  }
}

function renderVariant(component, family, index) {
  const checks = ['default', 'hover', 'focus', 'mobile'];
  const lens = component.lenses[index] || family.description;
  return '<article class="variant-card" id="' + component.id + '-' + family.code + '">' +
    '<header class="variant-heading">' +
      '<div class="variant-heading-main">' +
        '<span class="variant-code">' + component.id + ' / ' + family.code + '</span>' +
        '<div><h3 class="variant-title">' + family.name + '</h3><p class="variant-description">' + lens + '</p></div>' +
      '</div>' +
      '<div class="variant-tags">' + family.tags.map(function (tag) { return '<span>' + tag + '</span>'; }).join('') + '</div>' +
    '</header>' +
    renderPreview(component, family, index) +
    '<div class="variant-checks">' + checks.map(function (check) { return '<span>' + check + '</span>'; }).join('') + '<span>record choice</span></div>' +
  '</article>';
}

function renderSection(component) {
  return '<section class="component-section" id="' + component.id + '" data-group="' + component.group + '" data-search="' + (component.id + ' ' + component.name + ' ' + component.groupLabel + ' ' + component.question).toLowerCase() + '">' +
    '<header class="section-heading">' +
      '<span class="section-index">' + component.id + '</span>' +
      '<div><h2>' + component.name + '</h2><p class="section-question">' + component.question + '</p></div>' +
      '<div class="section-side"><span class="section-count">05 VARIANTS</span><button class="copy-link js-copy-section" type="button" data-id="' + component.id + '">COPY LINK</button></div>' +
    '</header>' +
    '<div class="variant-stack">' + families.map(function (family, index) { return renderVariant(component, family, index); }).join('') + '</div>' +
  '</section>';
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
  document.querySelector('#lab-stats').innerHTML =
    '<span>SHOWING <strong>' + visible + ' / ' + components.length + '</strong> COMPONENTS</span>' +
    '<span><strong>' + (visible * 5) + '</strong> FULL-WIDTH VARIANTS</span>';
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
    const menuButton = event.target.closest('.js-menu-toggle');
    if (menuButton) {
      const frame = menuButton.closest('.phone-frame');
      const menu = frame.querySelector('.phone-menu');
      const open = menu.classList.toggle('is-open');
      menuButton.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'CLOSE ×' : 'MENU +';
    }

    const row = event.target.closest('[data-action="select-row"]');
    if (row) {
      row.classList.toggle('is-selected');
    }

    const copyButton = event.target.closest('.js-copy-section');
    if (copyButton) {
      copySectionLink(copyButton);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.target.matches('[data-action="select-row"]')) {
      event.target.classList.toggle('is-selected');
    }
    if (event.key === 'Escape') {
      document.querySelectorAll('.phone-menu.is-open').forEach(function (menu) {
        const button = menu.closest('.phone-frame').querySelector('.js-menu-toggle');
        menu.classList.remove('is-open');
        button.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'MENU +';
      });
    }
  });
}

renderAll();
bindEvents();
