# About / Contact Page UI v0.1

状态：当前有效 / P0 已确认 / 首轮生产实现已完成 / 等待本地视觉验收

本目录记录 About 与 Contact 两个旧页面从遗留实现迁移到当前 Design System 的工作流、只读代码审计和后续视觉验收边界。

## 当前入口

- [页面 UI 工作流](./about-contact-page-ui-workflow-v0.1.md)：本轮执行顺序、决策边界和验收闸门。
- [旧页面 UI 审计](./about-contact-legacy-ui-audit-v0.1.md)：当前代码、内容、资源和待决策问题。
- [P0 决策记录](./about-contact-p0-decision-v0.1.md)：已确认的 About / Contact 内容结构与左栏删除结果。

## 当前状态

- Home、Archive、Now：作为本轮视觉基线，暂不因 About / Contact 的迁移而改动。
- About、Contact：已完成第一轮只读代码审计和首轮生产 UI 实现。
- P0-01 About 连续文章、P0-02 Contact 三组入口、P0-03 列表缩略图与删除左栏均已确认并回写。
- About / Contact 的 Hero 文案、大小写和副标题已按确认版本回写。
- About 当前使用一篇临时文章，后续可直接替换正文，不影响页面结构。

## 下一步

先在本地查看 About 正文宽度、Contact 三组列表密度和移动端顺序；如无新的视觉反馈，再进入下一轮细节验收。
