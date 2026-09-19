# Now Article UI v0.1

状态：P1 决策已记录 / P1-02 正在试用 980px

本目录用于处理 Now 页面从“Markdown 已接入”到“文章展示 UI 完成”的设计与验收。

## 本轮范围

- 复用已接受的 Design System Foundation。
- 为真实 Markdown 文章确定页面级布局、排版和阅读节奏。
- 保持 Now 的公开规则：网站只显示日期最新的一篇，旧版本可以保留在本地或 Git 历史中。
- 用当前测试稿作为第一份真实验收内容。

## 文档入口

- [Now Article UI 工作流](./now-article-ui-workflow-v0.1.md)
- [Now Article UI 变量决策清单](./now-article-ui-variable-decision-list-v0.1.md)

## 权威关系

1. [设计原则入口](../../../../refactoring-ui-zh/_agent-kb/00-entrypoint.md)：规定任务级知识加载、设计决策、真实渲染验收和偏离记录。
2. [Design System Foundation v0.1](../13-Design-System-Foundation-v0.1/foundation-decision-v0.1.md)：规定全局视觉基础。
3. [Component Contract v0.2](../08-Component-Contract-v0.1/component-contract-v0.2.md)：规定生产 CSS、真实内容和组件级验收关系。
4. [Component Production Acceptance Queue v0.2](../11-Component-Implementation-Workflow-v0.1/component-production-acceptance-queue-v0.2.md)：将 Now Page 列为 P1-01。

本目录的规则只在 Now 文章页面范围内新增约束。除非明确发现全站共性问题，不重新选择 Foundation，也不把页面级样式升级为全局 token。

## 当前下一步

P1-01、P1-03、P1-04、P1-05 已完成决定并已同步到生产样式；P1-02 现在试用 980px 可读内容轨道。若仍然觉得偏宽，可以继续收窄；如果希望正文重新铺满主轨道，也可以直接恢复到 1120px。
