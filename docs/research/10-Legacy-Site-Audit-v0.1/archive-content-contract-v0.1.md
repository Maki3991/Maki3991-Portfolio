# Archive Content Contract v0.1

状态：当前有效的内容层契约草案  
用途：让后续 Agent 在没有本轮对话上下文时，也能按同一规则创建和维护 Archive 条目。  
范围：内容字段、证据边界、公开状态和条目关系。  
不包含：最终视觉、页面布局、颜色、动画和生产路由。

## 1. Archive 的基本单位

Archive 不是单纯的“项目卡片列表”，而是由不同类型条目组成的长期记录：

- project：持续一段时间、包含工作过程和结果的项目；
- experience：实习、工作或合作经历；
- hackathon：有明确活动周期、团队和现场版本边界的项目；
- creation：音乐、视频、独立创作等作品；
- work：属于某个项目或经历的单件作品、案例或交付物。

第一版只需要实现 project、experience、hackathon 和 work 的内容能力。creation 可以先作为第二批扩展类型保留。

## 2. 每个一级 Archive 条目的必备字段

| 字段 | 必填 | 含义 |
| --- | --- | --- |
| id | 是 | 稳定的机器可读标识，不因标题改写 |
| title | 是 | 当前对外标题；匿名条目不能泄露原公司或合作方 |
| type | 是 | project、experience、hackathon 或 creation |
| status | 是 | active、completed、archived、paused、draft |
| visibility | 是 | public、public-anonymized、private |
| period | 是 | 开始、结束或持续更新时间 |
| summary | 是 | 一句话事实摘要，不是夸张宣传语 |
| role | 是 | Maki 实际承担的角色 |
| contributions | 是 | Maki 实际完成的工作 |
| outcomes | 是 | 可以被证据支持的结果 |
| evidence | 可以为空 | 支撑具体主张的链接、截图或文件 |
| relatedWorks | 可以为空 | 该条目下的作品、案例或交付记录 |
| limitations | 是 | 当前不能证明、不能夸大的部分 |
| sources | 是 | 事实来源和证据出处 |

### 为什么 limitations 也是必填

个人网站不只展示结果，还要展示判断边界。没有 limitations，Agent 很容易把“做过 Demo”写成“产品验证成功”，把“发布内容”写成“带来增长”，把“参与工作”写成“负责整个业务”。

## 3. Work 子条目的字段

| 字段 | 必填 | 含义 |
| --- | --- | --- |
| id | 是 | 稳定标识 |
| parentId | 是 | 所属项目或经历 |
| title | 是 | 作品标题 |
| kind | 是 | video、post、blog、live、case、asset 或 other |
| platform | 可以为空 | 抖音、 小红书、GitHub、线下活动等 |
| date | 可以为空 | 发布或发生时间 |
| summary | 是 | 作品做了什么 |
| metrics | 可以为空 | 只有来源和口径清楚时才填写 |
| url | 可以为空 | 稳定公开链接；没有就不伪造 |
| evidence | 可以为空 | 截图、文件或仓库 |
| visibility | 是 | public、public-anonymized 或 private |
| limitations | 是 | 不能由该作品证明的事情 |

单件作品默认属于一个父条目。它不应该自动升级成 Home 的一级项目。

## 4. Evidence 证据契约

每一条证据必须回答四个问题：

1. 它支持哪一个具体主张；
2. 它来自哪里；
3. 访客是否可以公开访问；
4. 它有没有时间、平台或版本边界。

允许的证据类型：

- public-link：公开网页、GitHub、官方 Gallery；
- local-file：本地 PDF、图片、视频，部署前需要决定是否复制到网站资源；
- screenshot：数据截图或界面截图；
- source-record：本地记忆库、旧版内容文件或工作记录，仅供 Agent 核对；
- user-confirmation：Maki 在当前决策中直接确认的事实。

证据规则：

- 不把签名参数、临时分享参数或内部链接直接复制到公开页面；
- 内部截图必须先脱敏；
- 证据只能支持它实际覆盖的主张；
- 不能用赛后代码证明活动现场版本；
- 不能用“作品发布”证明播放、注册、付费或收入结果；
- 不确定的事实保留为 pending，不由 Agent 补齐。

## 5. Visibility 公开状态

### public

可以公开展示名称、贡献、结果和稳定证据。

当前实例：

- Maki English；
- AdventureX 2026 / ReadAge。

### public-anonymized

可以公开展示经历和能力，但必须隐藏公司、合作方、用户、内部数据或可识别链接。

当前实例：

- 英语产品与社群交付；
- AI 产品海外内容运营实习。

### private

只保留在本地资料或研究记录中，不进入公开 Archive。

当前实例：

- Audibooker。

## 6. 四个首批条目的契约映射

| 条目 | type | visibility | relatedWorks | 首要证据 |
| --- | --- | --- | --- | --- |
| Maki English | project | public | 11 条代表视频、爆款开头复盘 | 公开账号、作品链接、数据截图 |
| 英语产品与社群交付 | project / experience | public-anonymized | 直播交付记录 | 匿名讲义、主题列表、脱敏复盘 |
| AI 产品海外内容运营实习 | experience | public-anonymized | 案例视频、FAQ、Blog、海报 | 脱敏工作样本；内部来源只供核对 |
| AdventureX 2026 / ReadAge | hackathon | public | Flyer、展示视频、CEFR 测试、Landing Page | GitHub、官方 Gallery、Demo、本地物料 |

## 7. 当前不应进入契约的内容

- Home 的最终 Hero 文案；
- Archive 卡片的最终视觉；
- 搜索、筛选、分页和复杂动效；
- 没有口径的总播放量；
- LPT 的具体学员人数和营收；
- Autocoder 的公司内部经营数据；
- AdventureX 赛后代码新增但现场未确认的功能；
- Audibooker 的公开详情。

## 8. 新增条目的验收闸门

一个条目只有同时满足以下条件，才可以进入公开 Archive：

1. title 不泄露不应公开的身份信息；
2. type、period、role 和 contributions 已明确；
3. 每个重要 outcome 都有对应证据，或明确标记为自述；
4. 没有把参与写成独立负责；
5. 没有把 Demo 写成用户验证成功；
6. 没有把发布写成增长或商业结果；
7. 外部链接不含临时签名参数；
8. 截图和文件已经确认可以公开；
9. limitations 已填写；
10. 页面新增条目不需要改动 Archive 的整体布局代码。

## 9. 后续实现顺序

1. 按本契约把四个条目拆成正式内容文件；
2. 先实现 Archive 总览的最小字段；
3. 再实现 project、experience 和 hackathon 的详情变体；
4. 最后挂接 Work 子条目和证据；
5. 用真实内容检查桌面、移动、链接、空状态和新增条目流程；
6. 再决定是否需要筛选和搜索。

这个契约是内容层的稳定边界，不限制新版 Working Archive 的具体视觉表达。
