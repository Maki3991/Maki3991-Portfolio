export type LinkStatus = "ready" | "placeholder";

export type ProfileLink = {
  label: string;
  href: string;
  status: LinkStatus;
  note?: string;
};

export type Stat = {
  value: string;
  label: string;
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  results: string[];
  responsibilities: string[];
  reflection: string;
  next: string;
};

export type Work = {
  title: string;
  category: string;
  platform: string;
  date: string;
  metrics: string[];
  url: string;
  status: LinkStatus;
  summary: string;
  reflection: string;
};

export const profile = {
  name: "Maki 羽轩",
  headline: "英语内容创作者 / 内容运营实践者 / 国际政治本科生",
  intro:
    "我关注英语学习、内容表达、自媒体运营、教育产品和 AI 辅助创作，正在把自己的内容、项目和学习系统整理成一个长期可验证的作品集。",
  location: "中国",
  email: "待补充邮箱",
  seeking: "内容运营、新媒体运营、英语教育产品与 AI 辅助创作相关机会",
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "作品", href: "/works/" },
  { label: "项目", href: "/projects/" },
  { label: "关于", href: "/about/" },
  { label: "联系", href: "/contact/" },
];

export const stats: Stat[] = [
  { value: "2 万+", label: "全网粉丝", note: "英语学习内容账号累计" },
  { value: "829 万+", label: "累计播放 / 观看", note: "抖音 + 小红书" },
  { value: "53 万+", label: "累计互动", note: "评论、分享、收藏等综合互动" },
  { value: "35.5 万+", label: "累计点赞", note: "代表内容获得的真实反馈" },
  { value: "10.3 万+", label: "累计收藏", note: "方法类内容的长期价值信号" },
  { value: "5.9 万+", label: "累计分享", note: "内容共鸣和传播意愿" },
  { value: "491 万+", label: "单条最高播放", note: "抖音代表作品" },
  { value: "12.5 万+", label: "抖音主页访问", note: "内容带来的账号兴趣" },
  { value: "15 条", label: "10 万+ 播放视频", note: "持续产出能力证据" },
  { value: "30 条", label: "1 万+ 播放视频", note: "稳定内容表现" },
];

export const projects: Project[] = [
  {
    slug: "english-media",
    title: "Maki 羽轩英语自媒体",
    eyebrow: "内容创作与账号运营",
    summary:
      "独立运营英语学习类自媒体账号，覆盖抖音、小红书、视频号、B 站等平台。",
    role: "负责选题、脚本、拍摄、剪辑、发布、复盘和私信沟通。",
    results: ["累计播放 / 观看 829 万+", "累计互动 53 万+", "单条最高播放 491 万+"],
    responsibilities: [
      "围绕四六级、英语听力、阅读输入、背单词和学习认知做内容策划。",
      "复盘不同开头、结构和情绪入口对传播表现的影响。",
      "把评论区和私信中的问题转化为下一轮内容选题。",
    ],
    reflection:
      "英语学习内容不一定从知识点开始，也可以从学习者被压抑的共同感受进入，再提供更清楚的替代路径。",
    next: "继续沉淀爆款复盘、平台数据截图和可复用的选题方法。",
  },
  {
    slug: "lpt-delivery",
    title: "LPT 英语产品运营与交付",
    eyebrow: "教育产品与社群服务",
    summary:
      "参与英语学习社群和引流款产品交付，重点是直播表达、用户理解和服务链路参与。",
    role: "参与用户承接、社群服务、售后沟通，并固定承担每月 4 次私域英语直播。",
    results: ["每月 4 次私域直播", "主题覆盖语法、精读、学习方法", "当前处于讲师培养阶段"],
    responsibilities: [
      "准备直播主题和讲解结构，让用户能听懂、能跟上、能继续练。",
      "参与社群答疑与用户陪伴，理解学习者的真实卡点。",
      "在产品交付中观察内容、服务和信任之间的关系。",
    ],
    reflection:
      "这段经历让我意识到，英语教育产品不只是内容输出，也包含用户承接、节奏设计和持续反馈。",
    next: "补充可公开展示的直播主题、交付记录和复盘片段。",
  },
  {
    slug: "portfolio-system",
    title: "个人作品集网站 / AI 辅助内容系统",
    eyebrow: "长期可信度主页",
    summary:
      "用 AI 辅助搭建长期个人作品集，用于展示作品、项目、数据截图、复盘文章和联系方式。",
    role: "负责整理内容素材、定义网站定位，并持续维护作品和复盘数据。",
    results: ["建立个人可信度主页", "形成数据驱动的作品档案", "为简历和实习申请提供可验证入口"],
    responsibilities: [
      "把分散在平台里的作品、数据和复盘整理成结构化资料。",
      "用静态数据文件维护项目、作品、链接和证明材料。",
      "逐步补充截图、文章和外部账号链接。",
    ],
    reflection:
      "作品集不是把自己包装得更厉害，而是把已经做过的事情清楚、可信、可验证地放出来。",
    next: "补齐真实作品链接、二维码、简历 PDF 和数据截图。",
  },
];

export const workCategories = [
  "英语自媒体",
  "内容运营与爆款复盘",
  "英语直播与产品交付",
  "写作与研究",
  "AI 工具 / Coding 小项目",
  "音乐作品",
];

export const works: Work[] = [
  {
    title: "四级六级听力吐槽与学习路径内容",
    category: "英语自媒体",
    platform: "抖音",
    date: "待补充",
    metrics: ["最高播放 491 万+", "高分享", "高评论"],
    url: "#",
    status: "placeholder",
    summary: "用强情绪入口切入四六级听力问题，再提供更具体的替代路径。",
    reflection:
      "这类内容说明，学习方法内容可以先承认真实痛感，再给出可执行的改变方向。",
  },
  {
    title: "英语学习方法类小红书代表内容",
    category: "英语自媒体",
    platform: "小红书",
    date: "待补充",
    metrics: ["播放 / 观看待补充", "收藏待补充", "分享待补充"],
    url: "#",
    status: "placeholder",
    summary: "面向英语学习者整理更清楚的学习路径和误区拆解。",
    reflection: "小红书更适合沉淀方法、清单和可收藏内容，后续需要补齐代表链接。",
  },
  {
    title: "抖音爆款开头复盘",
    category: "内容运营与爆款复盘",
    platform: "复盘文档",
    date: "待补充",
    metrics: ["关联账号数据 829 万+ 播放 / 观看"],
    url: "#",
    status: "placeholder",
    summary: "分析爆款内容如何从共同情绪、错误路线和结果背书进入。",
    reflection: "复盘的重点不是证明运气好，而是找到下一次可重复验证的结构。",
  },
  {
    title: "LPT 私域英语直播交付",
    category: "英语直播与产品交付",
    platform: "私域社群",
    date: "每月固定",
    metrics: ["每月 4 次直播", "语法 / 精读 / 学习方法"],
    url: "#",
    status: "placeholder",
    summary: "围绕英语学习主题进行直播讲解和社群交付。",
    reflection: "直播交付要求把知识讲清楚，也要求理解用户当下真正卡在哪里。",
  },
  {
    title: "个人作品集网站初版",
    category: "AI 工具 / Coding 小项目",
    platform: "Web",
    date: "2026",
    metrics: ["静态网站", "数据驱动", "长期维护"],
    url: "/",
    status: "ready",
    summary: "用 AI 辅助搭建个人可信度主页，集中展示项目、作品和联系方式。",
    reflection: "先搭出长期结构，再逐步补充证据，是比一次性追求完美更实际的路径。",
  },
  {
    title: "写作、研究与音乐作品",
    category: "写作与研究",
    platform: "待补充",
    date: "未来更新",
    metrics: ["文章待补充", "音乐链接待补充"],
    url: "#",
    status: "placeholder",
    summary: "未来加入课程笔记、政治学写作、读书笔记和音乐创作说明。",
    reflection: "这一部分用于展示长期学习和表达，不急着填满，但要保留结构。",
  },
];

export const links: ProfileLink[] = [
  { label: "邮箱", href: "mailto:placeholder@example.com", status: "placeholder", note: "待补充真实邮箱" },
  { label: "微信二维码", href: "#", status: "placeholder", note: "待上传二维码图片" },
  { label: "抖音主页", href: "#", status: "placeholder", note: "待补充主页链接" },
  { label: "小红书主页", href: "#", status: "placeholder", note: "待补充主页链接" },
  { label: "B 站主页", href: "#", status: "placeholder", note: "待补充主页链接" },
  { label: "视频号", href: "#", status: "placeholder", note: "待补充入口" },
  { label: "GitHub", href: "#", status: "placeholder", note: "未来补充" },
  { label: "简历 PDF", href: "#", status: "placeholder", note: "待上传 PDF" },
];
