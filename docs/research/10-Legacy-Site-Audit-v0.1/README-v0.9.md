# Legacy Site Audit v0.9 — 当前索引

更新时间：2026-09-16

## 这是什么文件夹

`10-Legacy-Site-Audit-v0.1` 负责处理旧网站留下来的内容、经历、证据和迁移决策。

它不是设计库，也不是新版页面的视觉规范。新版视觉实现应优先参考：

- Design Baseline v0.2：全站视觉原则；
- Component Contract v0.1：组件规则和已选样式；
- 页面实施审计文档：把全局规则落实到某一个页面。

当前页面实施循环记录在：

- [Page Implementation Workflow v0.1](../11-Page-Implementation-Workflow-v0.1/README.md)

## 当前有效文档

以下文档是目前需要优先参考的资料：

| 文档 | 用途 |
| --- | --- |
| [legacy-archive-decision-digest-v0.1.md](./legacy-archive-decision-digest-v0.1.md) | 用户确认过的旧站与 Archive 决策摘要 |
| [legacy-audit-current-decisions-v0.3.md](./legacy-audit-current-decisions-v0.3.md) | 当前旧站审计结论和保留/隐藏/改写判断 |
| [legacy-archive-migration-matrix-v0.1.md](./legacy-archive-migration-matrix-v0.1.md) | 旧内容到新版 Archive 的迁移关系 |
| [archive-content-records-v0.2-date-correction.md](./archive-content-records-v0.2-date-correction.md) | Archive 首批内容的日期修正版 |
| [archive-content-contract-v0.1.md](./archive-content-contract-v0.1.md) | Archive Markdown 数据字段和公开边界 |
| [README-v0.8.md](./README-v0.8.md) | Archive 技术原型和最近一次实现状态 |

如果不同文档发生冲突，优先级如下：

1. 用户后来明确确认的决定；
2. 带有最新版本号的当前决策文档；
3. Archive 日期修正版和内容契约；
4. 旧版审计和历史过程记录。

## 辅助资料

这些文档用于理解推理过程，但不需要每次重新通读：

- [legacy-projects-works-audit-v0.1.md](./legacy-projects-works-audit-v0.1.md)：旧 Projects/Works 内容审计；
- [legacy-projects-works-interaction-audit-v0.1.md](./legacy-projects-works-interaction-audit-v0.1.md)：旧 Projects/Works 交互审计；
- [archive-content-records-v0.1.md](./archive-content-records-v0.1.md)：日期修正前的 Archive 内容草稿。

## 历史快照

`README.md` 和 `README-v0.2.md` 至 `README-v0.7.md` 是不同阶段的记录。它们保留用于追溯，不应与本文件、`README-v0.8.md` 一起被当作同时生效的指令。

新 Agent 不需要全部阅读这些历史快照。默认先读本文件，再按当前任务打开对应的有效文档。

## 当前事实状态

- 旧站内容审计和首批 Archive 内容决策已经基本完成；
- Archive 已经有数据读取类型、四条内容记录和 `/archive/` 技术原型；
- 该技术原型尚未完成页面级设计审计，也没有经过最终视觉确认；
- Archive 不继续扩展代码，直到完成页面实施审计和用户确认；
- 下一轮正式页面实施建议从 Home 开始；
- Archive 后续需要重新经过同一套页面实施循环，而不是直接沿用技术原型作为最终设计。

## 对用户的最小阅读入口

用户只需要优先看：

1. 本索引；
2. `legacy-archive-decision-digest-v0.1.md`；
3. 当前页面实施审计文档；
4. AI 在确认前列出的具体问题。

其余文件由 Agent 在需要追溯证据或来源时读取。
