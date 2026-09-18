# 13-Design System Foundation v0.1

## 这组资料是做什么的

这组资料把 Design Baseline 与 Component Lab 之间缺失的基础层补齐。

它不负责重新选择 Working Archive 方向，也不直接替代 Component Contract；它负责先规定一套有限、可复用、可验收的颜色、字体、字号、字重、行高、间距、容器、圆角、边框、层次、状态和响应式变量，之后 Component Lab 只能在这套系统内探索组件结构。

## 当前状态

**当前有效 / Foundation v0.1 视觉选择已完成 / 已完成首轮生产 CSS 迁移 / 待用户最终视觉接受。**

- P0 变量：进入 Component Lab 前必须有候选参数和验收规则；
- P1 变量：进入第一条真实 Astro 链路前必须有候选参数和验收规则；
- P2 变量：暂不提前锁死，等真实页面和内容证明需要后再决定；
- 具体组合已由用户确认；生产迁移证据见 [生产迁移交接](./foundation-production-migration-review-v0.1.md)。
- 未完成的状态色、暗色主题、图标和复杂动效仍保持开放，不由本轮自行锁死。

## 输入来源

- [设计原则入口](../../../refactoring-ui-zh/_agent-kb/00-entrypoint.md)
- [Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)
- [Component Contract v0.1](../08-Component-Contract-v0.1/component-contract-v0.1.md)
- [组件级实施工作流](../11-Component-Implementation-Workflow-v0.1/README.md)
- 当前生产样式：src/styles/global.css
- 当前真实内容：src/site-content/、src/data/、public/assets/

## 当前下一步

1. 用户查看生产迁移交接中的四张截图，并反馈整体视觉接受或具体位置；
2. 若接受，回写 Component Contract v0.2；
3. 之后按改一个、看一个、反馈一个进入组件级生产验收；
4. 若不接受，只修改被指出的 Foundation 参数或具体组件，不重新发散全部候选。
