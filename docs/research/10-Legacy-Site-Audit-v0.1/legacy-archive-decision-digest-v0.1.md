# Legacy Archive Decision Digest v0.1

状态：待确认事实和公开边界  
这是本轮最值得先读的一份文档。详细审计不需要现在通读。

## 一句话结论

旧版 Projects 和 Works 都有可用内容，但它们是两套平行系统：Projects 展开 3 个完整经历，Works 展开 14 个小作品。新版应把它们合并成一个可长期增长的 Archive，并让具体作品成为项目详情中的证据和组成部分。

## 本轮已经完成

- 读取旧版 Projects 和 Works 源码；
- 读取 3 个项目内容文件和 14 个作品内容文件；
- 用真实浏览器检查桌面和移动渲染；
- 验证项目锚点；
- 验证 Works 原生分类折叠；
- 检查图片加载和移动端横向溢出；
- 输出迁移矩阵；
- 没有修改生产代码。

## 当前建议的首批 Archive

默认先整理以下 4 个候选：

1. Maki English 自媒体；
2. LPT 英语产品与社群交付；
3. AutoCoder 实习；
4. AdventureX 黑客松。

这 4 个不是要求现在立刻公开上线，而是首批内容整理对象。先把事实写清楚，再决定具体呈现。

## 已确认的排除项

- Audibooker 不进入新版 Home；
- Audibooker 不在首批 Archive 公开；
- Audibooker 暂不制作详情页；
- v028、v091、v056 等视频不在 Home 单独展示；
- 视频归入 Maki English 项目详情；
- Home 不保留旧版 10 项数据墙；
- Portfolio 副标题删除。

## 你现在不需要做的决定

- 不需要决定 Archive 最终视觉；
- 不需要决定筛选器和搜索；
- 不需要把所有项目文字写完；
- 不需要决定所有条目的最终 type；
- 不需要重新阅读直播长稿；
- 不需要继续回答已经确认过的 Home 问题。

## 现在只需要确认 4 件事

### 1. 首批候选

下面四项是否都作为第一批内容整理对象？

- Maki English 自媒体；
- LPT 英语产品与社群交付；
- AutoCoder 实习；
- AdventureX 黑客松。

如果其中某项暂时不想公开，请标记为“先整理、暂不公开”。

> 确认全部公开
### 2. 音乐 EP

Things They Left Behind 

- 先列为第二批长期创作条目

### 3. 事实材料

#### Maki English 自媒体

- 时间：2025年5月~2026年5月
- 你的角色：账号主理负责人
- 你实际完成的工作：
	- 整理自己过去的零散英语学习经验
	- 负责选题、脚本、拍摄、剪辑、发布与数据复盘
	- 制作约90期视频，其中爆款约20+
- 可以公开的结果：
	- 国内抖音、小红书、B站、视频号 “羽轩Maki” 公开账号
- 证据链接
	- 抖音主页：[抖音主页](https://v.douyin.com/CBc6conCqFk/)
	- 小红书主页：[小红书主页](https://www.xiaohongshu.com/user/profile/602a6c230000000001009527?xsec_token=YBqg7Wg_x5DJMdRsF6foCq44DuYhcBr6c2RuZbRk6j2B0=&xsec_source=app_share&&apptime=1777881646&shareRedId=ODY0QTlINjw2NzUyOTgwNjY0OTc9OjhA&share_id=642ddfde5194449584aa0e87ea5d5217&xhsshare=CopyLink)
- 当前状态：已归档
- 是否需要匿名化：不用
#### LPT 英语产品与社群交付

- 时间：2025年11月~2026年5月
- 你的角色：
	- market & sales，利用自媒体账号为产品获客
	- 引流款产品负责每月四次直播
- 你实际完成的工作
	- 策划语法公开课
	- 公域引流到私域约50+人
- 当前状态：已归档
- 是否需要匿名化：是
#### AutoCoder 实习

- 时间：2026年7月~2026年9月
- 你的角色：北京智能生成公司产品部门海外自媒体内容运营实习生
- 你实际完成的工作/可以公开的结果/证据链接或截图：直接参考记忆库
- 当前状态：已归档
- 是否需要匿名化：是
#### AdventureX 黑客松

- 时间：2026年7月22日~2026年7月26日1
- 你的角色：参赛选手
- 你实际完成的工作
	- 设计Landing Page
	- 展示物料视频制作
	- 编写CEFR阅读等级测试、编写用户数据LocalStorage存储，和部分UI微调
- 可以公开的结果
	- [github 链接](https://github.com/szyuing/readage)
	- [flyer pdf](D:\Softwares\Programming Projects\_archived\AdventureX\ReadAge Flyer_2.pdf)
	- [小红书展示视频](https://www.xiaohongshu.com/explore/6a64b9ba000000000100ece4?xsec_token=ABJidI7_pdkR1xaLwH4IvPt_HFvIfIuBXuEWH7eBbOois=&xsec_source=pc_user)
	- [advx gallery 页面](https://gallery.adventure-x.cn/browse?event=advx-2026&q=readage)
- 当前状态：已归档
- 是否需要匿名化：否

### 4. LPT 和合作内容的公开边界

以下内容不公开：

- 具体社群学员人数、营收数据
## 下一步

你确认上述边界后，下一步由 Agent 建立新版 Archive 的内容记录草案，先不做复杂 UI。内容记录稳定后，再设计 Archive 总览和详情页的最小模板。

详细材料：

- [Projects 和 Works 详细审计](./legacy-projects-works-audit-v0.1.md)
- [Projects 和 Works 交互审计](./legacy-projects-works-interaction-audit-v0.1.md)
- [Archive 迁移矩阵](./legacy-archive-migration-matrix-v0.1.md)
- [当前有效决定](./legacy-audit-current-decisions-v0.3.md)

本摘要与 [Legacy Site Audit Plan v0.1](./legacy-site-audit-plan-v0.1.md) 衔接；本轮的实际完成状态以本摘要和上述新审计文档为准。
