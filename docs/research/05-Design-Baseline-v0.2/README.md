# 05-Design-Baseline-v0.2

## 这组资料是做什么的

这是参考网站研究和 Home / Hero 方向实验完成后的当前设计基线，供后续 agent 在没有本轮对话上下文时直接进入 Astro 实现。

它不是最终视觉稿，也不要求一次锁死所有页面、字体和颜色；它是一份“风格与实现边界合同”：说明已经选定的方向、可复用的页面语法、必须避免的表现、主题策略和验收闸门。

## 输入来源

- [Design Baseline v0.1](../04-Design-Baseline-v0.1/design-baseline-v0.1-reference-audit.md)：参考网站深度拆解和初始约束。
- [Home / Hero 融合实验](../03-参考网站筛选与方向/home-hero-fusion-lab-v0.1.md)：三个融合方向的比较和选择依据。
- [Dark Working Archive 预览说明](../03-参考网站筛选与方向/dark-working-archive-v0.1.md)：暗色主题的结构与风险。
- [个人网站重建 AI 工作流摘要](../01-直播工作流/个人网站重建_AI工作流直播摘要.md)：先局部落地、逐项验收、再扩展的工作方法。
- 当前真实内容：`src/site-content/`、`src/data/`、`public/assets/`。

## 当前状态

**当前有效 / 待进入 Astro 第一条真实链路实现。**

已经确定：Working Archive 为主方向；亮色为默认开发对象；暗色为同一设计系统的第二主题；内容优先、索引优先、真实证据优先。

仍未锁死：最终字体、最终色值、主题切换的具体交互、Projects 与 Works 的最终合并方式、全部未来栏目和完整路由。

## 后续 agent 的阅读顺序

1. 先读 [design-baseline-v0.2-working-archive.md](./design-baseline-v0.2-working-archive.md) 的第 0 节和第 1 节；
2. 打开亮色 [Working Archive 原型](../../../output/design-direction-fusion-lab/direction.html?d=2#top) 和暗色 [Working Archive 原型](../../../output/design-direction-fusion-lab/dark-working-archive.html#top)；
3. 再检查当前 `src/`、内容真源和 Git 状态；
4. 只实现本基线第 10 节规定的第一条真实链路，不直接全站重写。

## 下一道闸门

对当前 Astro 项目做只读审计，列出 Home、SiteHeader、全局样式、Projects / Works 数据读取和可复用组件的迁移边界；确认后实现亮色 Working Archive 第一条真实链路。暗色主题在亮色链路验收后接入，但必须在扩展全站页面前完成。
