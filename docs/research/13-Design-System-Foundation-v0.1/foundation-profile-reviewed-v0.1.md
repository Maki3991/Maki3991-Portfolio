# Foundation Profile v0.1 · DS-1 Review Applied

## 状态

**当前有效 / 四项视觉参数已确认 / Header blur 待单独选择。**

这份文件是对 [Foundation Profile v0.1](./foundation-profile-selected-v0.1.md) 和 [Token Decision Matrix v0.1](./foundation-token-matrix-v0.1.md) 的用户判断补充。原文件保留为历史决策过程，不静默覆盖。

## 1. 已确认的视觉参数

| 变量 | 用户判断 | 当前处理 |
| --- | --- | --- |
| Home display 最大字号 | 保留 | `--font-size-display: clamp(3.25rem, 8vw, 6rem)` 可以进入真实实现候选 |
| Typography B | 保留独立 display | 继续使用 `--font-family-display`，不与 body 合并 |
| Density A | 保留 | `64px` section gap、`24px` grid gap、`72px` row 候选继续保留 |
| Shape B | 保留 | `14px` radius 和 `shadow-soft` 继续保留 |

这四项不再作为用户视觉开放项；后续只允许在真实实现中修正可验证的技术问题，例如字体不可用、标题溢出或控件不可访问。

## 2. 尚未确认的 Header blur

用户明确要求候选对比，尚未在 A / B / C 中选择。对比板位于：

[Header Blur Review v0.1](./header-blur-review-v0.1.md)

在此选择完成前：

- 生产 Header 不迁移 blur；
- Foundation token 不增加最终 `backdrop-filter` 规则；
- 其他四项参数可以继续进入真实 Astro 组件实现准备。

## 3. 当前可继续执行的工作

Agent 可以继续完成：

- 为已确认的四项参数准备生产迁移 patch，但暂不应用；
- 把 token 逐项映射到 Header、Home、ArchiveRow、Detail 的组件契约；
- 补齐 focus、selected、disabled、empty、error 状态的隔离 fixture；
- 运行真实 Astro 链路的 build、移动端、焦点和控制台验收。

仍需用户判断：

- Header：A 实色、B 强 blur、C 克制 blur，或用户自定义混合方案。
