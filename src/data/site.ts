export type LinkStatus = "ready" | "placeholder";

export type ProfileLink = {
  label: string;
  href: string;
  status: LinkStatus;
  note?: string;
  image?: string;
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
  cover?: string;
  coverMode?: "cover" | "contain";
  metrics: string[];
  url: string;
  status: LinkStatus;
  summary: string;
  reflection: string;
};

export type Proof = {
  title: string;
  image: string;
  note: string;
};

export const profile = {
  name: "Maki 羽轩",
  headline: "英语内容创作者 / 内容运营实践者 / 国际政治本科生",
  intro:
    "我关注英语学习、内容表达、自媒体运营、教育产品和 AI 辅助创作，正在把自己的内容、项目和学习系统整理成一个长期可验证的作品集。",
  location: "中国",
  email: "maki1344933709@gmail.com",
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
    title: "LPT 英语产品运营",
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
    title: "AI 辅助个人作品集",
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
  "音乐作品",
];

export const works: Work[] = [
  {
    title: "四级六级听力吐槽与学习路径内容",
    category: "英语自媒体",
    platform: "抖音",
    date: "2025-07-28",
    cover: "/assets/covers/V028.jpg",
    metrics: ["播放 491.2 万", "点赞 22.4 万", "评论 1.1 万", "收藏 1.8 万", "分享 4.4 万"],
    url: "https://v.douyin.com/xe4D6L5DczE/",
    status: "ready",
    summary: "用强情绪入口切入四六级听力问题，再提供更具体的替代路径。",
    reflection:
      "这类内容说明，学习方法内容可以先承认真实痛感，再给出可执行的改变方向。",
  },
  {
    title: "一个大二文科生思考：张雪峰“文科大有前途”",
    category: "英语自媒体",
    platform: "抖音",
    date: "2025-10-25",
    cover: "/assets/covers/V056.jpg",
    metrics: ["播放 34.7 万", "点赞 7006", "评论 213", "收藏 1840", "分享 939"],
    url: "https://v.douyin.com/kpsb-W_8EUQ/",
    status: "ready",
    summary: "从文科生视角回应专业选择、就业焦虑和个人路径判断。",
    reflection: "这条内容说明，个人经历和公共议题结合时，更容易触发讨论和转发。",
  },
  {
    title: "做阅读题的思维，转化成沉浸式输入思维",
    category: "英语自媒体",
    platform: "抖音",
    date: "2025-08-29",
    cover: "/assets/covers/V042.jpg",
    metrics: ["播放 33.5 万", "点赞 1.9 万", "评论 132", "收藏 9479", "分享 1277"],
    url: "https://v.douyin.com/djlG0c8RThY/",
    status: "ready",
    summary: "把应试阅读经验转化为可理解输入的学习路径。",
    reflection: "英语学习内容需要把抽象方法翻译成学习者已经熟悉的场景。",
  },
  {
    title: "高中英语怎么突围？教你一招不常规的方法",
    category: "英语自媒体",
    platform: "抖音",
    date: "2025-06-10",
    cover: "/assets/covers/V013.jpg",
    metrics: ["播放 26.7 万", "点赞 5973", "评论 325", "收藏 4768", "分享 1615"],
    url: "https://v.douyin.com/HQsAyTy58Gw/",
    status: "ready",
    summary: "面向高中英语学习者，提供区别于纯刷题路线的输入方法。",
    reflection: "越是常见的问题，越需要给出足够具体、但不装神秘的方法。",
  },
  {
    title: "高二读了 9 本原著，然后就再也没有上过英语课了",
    category: "英语自媒体",
    platform: "抖音",
    date: "2025-07-11",
    cover: "/assets/covers/V018.jpg",
    metrics: ["播放 16.5 万", "点赞 1.1 万", "评论 136", "收藏 6502", "分享 1380"],
    url: "https://v.douyin.com/b6HcvF6lsbc/",
    status: "ready",
    summary: "用个人经历解释英语习得路线和大量输入的长期效果。",
    reflection: "个人故事不是为了炫耀结果，而是用来证明一条学习路径真实发生过。",
  },
  {
    title: "多多记录自己，真的可以改命！",
    category: "英语自媒体",
    platform: "抖音",
    date: "2025-09-22",
    cover: "/assets/covers/V051.jpg",
    metrics: ["播放 14.1 万", "点赞 6085", "评论 49", "收藏 4150", "分享 538"],
    url: "https://v.douyin.com/l6G583EKnQQ/",
    status: "ready",
    summary: "把记录自己从鸡汤表达拆成更具体的实践方法。",
    reflection: "非英语主题也能服务于长期个人表达，关键是把感受讲成可执行路径。",
  },
  {
    title: "一个有点暴力但有效的，用英语试卷大量输入的方法！",
    category: "英语自媒体",
    platform: "抖音",
    date: "2025-09-18",
    cover: "/assets/covers/V047.jpg",
    metrics: ["播放 17.7 万", "点赞 5402", "评论 142", "收藏 5820", "分享 1327"],
    url: "https://v.douyin.com/kLy6Ta1-sGw/",
    status: "ready",
    summary: "把试卷材料转化为大量输入素材，连接应试和习得两种路线。",
    reflection: "好的学习建议需要尊重用户当前环境，而不是强行要求他们换一套系统。",
  },
  {
    title: "40 天 四六级 如何阅读满分 一把过？",
    category: "英语自媒体",
    platform: "小红书",
    date: "2026-05-01",
    cover: "/assets/covers/V091.jpg",
    metrics: ["观看 5.8 万", "点赞 5177", "评论 17", "收藏 4885", "分享 294"],
    url: "https://www.xiaohongshu.com/explore/69f4ad9100000000360317e7?xsec_token=ABgwnY42Ixrhh8w_UpYs696sRagXGxlLaxOPJ1ASaHLlU=&xsec_source=pc_user",
    status: "ready",
    summary: "围绕四六级阅读提分，整理短周期备考中的方法和优先级。",
    reflection: "小红书用户更重视可收藏、可照着做的内容结构。",
  },
  {
    title: "词汇量越低的人，越喜欢精读",
    category: "英语自媒体",
    platform: "小红书",
    date: "2026-04-23",
    cover: "/assets/covers/V089.jpg",
    metrics: ["观看 8247", "点赞 613", "评论 54", "收藏 489", "分享 29"],
    url: "https://www.xiaohongshu.com/explore/69e97cdc000000001a02f871?xsec_token=AB1OTDAoD5pvP2A1TXkYRvFpn9BJ3VIMGl1tuQJXZ_H4I=&xsec_source=pc_user",
    status: "ready",
    summary: "用反直觉表达切入词汇量和精读之间的关系。",
    reflection: "观点型标题能带来讨论，但正文必须给出清楚的解释和边界。",
  },
  {
    title: "如何破圈应试英语教育？",
    category: "英语自媒体",
    platform: "小红书",
    date: "2026-03-14",
    cover: "/assets/covers/V077.jpg",
    metrics: ["观看 7125", "点赞 342", "评论 11", "收藏 550", "分享 24"],
    url: "https://www.xiaohongshu.com/explore/69b4d1d8000000002200d86f?xsec_token=AB0V_7f7cz4qbp5yzYUDgL70EGoVByLuB30k3-6bP47No=&xsec_source=pc_user",
    status: "ready",
    summary: "讨论应试英语教育之外，学习者如何建立更长期的输入系统。",
    reflection: "平台内容可以从具体成绩问题，延伸到更深层的学习路线判断。",
  },
  {
    title: "二刷六级，阅读满分有感",
    category: "英语自媒体",
    platform: "小红书",
    date: "2026-03-01",
    cover: "/assets/covers/V072.jpg",
    metrics: ["观看 5.1 万", "点赞 3316", "评论 20", "收藏 3233", "分享 131"],
    url: "https://www.xiaohongshu.com/explore/69a3a4670000000026033242?xsec_token=ABlVs1PmUsQdWrEvziI31Fsz25hPMvu8-DUoi1GsHi68Q=&xsec_source=pc_user",
    status: "ready",
    summary: "用考试结果作为入口，复盘阅读能力和长期输入之间的关系。",
    reflection: "成绩背书适合放在开头，但真正建立信任的是后面的过程解释。",
  },
  {
    title: "抖音爆款开头复盘",
    category: "内容运营与爆款复盘",
    platform: "复盘文档",
    date: "持续更新",
    metrics: ["关联账号数据 829 万+ 播放 / 观看", "单条最高播放 491 万+"],
    url: "/assets/proofs/douyin-data.png",
    status: "ready",
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
    title: "Things They Left Behind",
    category: "音乐作品",
    platform: "网易云音乐",
    date: "2026-03-05",
    cover: "/assets/music/things-they-left-behind.jpeg",
    coverMode: "contain",
    metrics: ["个人 EP", "网易云音乐人 Maki3991"],
    url: "http://music.163.com/album/363693628/?userid=2005170426",
    status: "ready",
    summary: "个人音乐 EP，用于展示英语内容和运营之外的长期创作面。",
    reflection: "音乐作品让作品集更接近真实的人，而不是只有求职材料。",
  },
];

export const links: ProfileLink[] = [
  { label: "邮箱", href: "mailto:maki1344933709@gmail.com", status: "ready", note: "maki1344933709@gmail.com" },
  { label: "微信二维码", href: "/assets/contact/wechat.jpg", status: "ready", note: "扫码添加微信", image: "/assets/contact/wechat.jpg" },
  { label: "抖音主页", href: "https://v.douyin.com/CBc6conCqFk/", status: "ready", note: "Maki 羽轩英语自媒体", image: "/assets/contact/douyin-qr.png" },
  { label: "小红书主页", href: "https://www.xiaohongshu.com/user/profile/602a6c230000000001009527?xsec_token=YBqg7Wg_x5DJMdRsF6foCq44DuYhcBr6c2RuZbRk6j2B0=&xsec_source=app_share&&apptime=1777881646&shareRedId=ODY0QTlINjw2NzUyOTgwNjY0OTc9OjhA&share_id=642ddfde5194449584aa0e87ea5d5217&xhsshare=CopyLink", status: "ready", note: "英语学习内容账号", image: "/assets/contact/xiaohongshu-qr.jpg" },
  { label: "视频号", href: "/assets/contact/shipinhao-qr.jpg", status: "ready", note: "扫码查看视频号", image: "/assets/contact/shipinhao-qr.jpg" },
  { label: "网易云音乐", href: "http://music.163.com/artist?id=33795229&userid=2005170426", status: "ready", note: "音乐人 Maki3991", image: "/assets/contact/netease-qr.jpg" },
  { label: "GitHub", href: "https://github.com/Maki3991", status: "ready", note: "Maki3991" },
  { label: "自媒体简历 PDF", href: "/assets/files/self-media-v2.pdf", status: "ready", note: "可下载查看" },
];

export const proofs: Proof[] = [
  {
    title: "抖音账号数据截图",
    image: "/assets/proofs/douyin-data.png",
    note: "用于证明抖音代表作品和账号整体表现。",
  },
  {
    title: "小红书账号数据截图",
    image: "/assets/proofs/xiaohongshu-data.png",
    note: "用于证明小红书代表作品和账号整体表现。",
  },
];
