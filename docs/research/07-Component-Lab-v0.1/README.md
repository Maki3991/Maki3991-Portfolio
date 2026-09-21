# Component Lab v0.1

状态：当前有效

更新时间：2026-09-14

## 调研目的

将已经确定的 Working Archive 视觉方向，转化为一组可复用、可比较、可验收的全站组件决策。

本轮 Lab 不是生产站点，也不是一次性重构全站，而是为第一条真实 Astro 链路：

共享 Header / 导航 → Home / Working Archive → Archive 列表 → 一个真实 Archive Item Detail

提供组件结构、视觉选项和验收依据。

## 输入来源

- [Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)：当前视觉与实现边界；
- [Site Map v0.1](../06-Site-Architecture-v0.1/site-map-v0.1.md)：页面职责和内容关系；
- [亮色 Working Archive 原型](../../../output/design-direction-fusion-lab/direction.html)：主要亮色方向；
- [暗色 Working Archive 原型](../../../output/design-direction-fusion-lab/dark-working-archive.html)：暗色主题参考；
- [Home / Hero 融合实验](../03-参考网站筛选与方向/home-hero-fusion-lab-v0.1.md)：方向选择依据；
- [用户筛选的参考网站](../../web-list.md)：组件级参考来源；
- src/site-content/ 和 public/assets/：真实内容与素材，用于压力测试组件。

直播逐字稿和方法论摘要只作为流程依据，不是本轮每个组件的直接视觉输入。

## 本轮目标

1. 区分全站基础组件、Working Archive 组件和页面组合；
2. 为高影响组件提供有限的视觉/交互变体；
3. 使用真实项目内容检查长标题、中文英文混排、证据链接和空状态；
4. 让 Maki 逐项选择、评论和淘汰；
5. 将选择结果沉淀为后续 Agent 可以直接执行的组件契约。

## Lab 实验单元

| 编号 | 实验单元 | 层级 | 变体策略 |
|---|---|---|---|
| 01 | PageShell / ContentRail | 全站基础 | 2 个布局密度方案 |
| 02 | SiteHeader / DesktopNav | 全站基础 | 3 个结构方案 |
| 03 | MobileMenu | 全站基础 | 3 个打开方式方案 |
| 04 | SectionHeader / Divider | 全站基础 | 2 个章节语法方案 |
| 05 | ArchiveList + ArchiveRow | Archive 语法 | 3 个列表行方案 |
| 06 | MetaLine + Type / Status / Date | Archive 语法 | 2 个元信息方案 |
| 07 | LiveIndex | Archive 语法 | 3 个事实索引方案 |
| 08 | ItemHeader + BackLink | 详情结构 | 3 个详情页头部方案 |
| 09 | EvidenceBlock | 详情结构 | 3 个证据组合方案 |
| 10 | DetailNavigation | 详情结构 | 2 个详情页导航方案 |
| 11 | TextLink + Button | 操作基础 | 2 个行动层级方案 |
| 12 | ThemeToggle + Theme States | 主题行为 | 2 个切换/状态方案 |

## 不在本轮 Lab 中单独发散

- Home Hero：方向实验已经完成，本轮只复用 Working Archive 选择结果；
- CurrentFocus、Now、Contact、About：作为页面组合验证；
- NoteRow、ReadingRow：优先复用 ArchiveRow；
- Footer、BackToTop、Focus State、Reduced Motion：按基线直接实现；
- Search、RSS、Command Palette、实时数据和个人 Dashboard：暂不进入第一版。

## 变体和验收要求

每个实验单元至少要能检查：

- 默认状态；
- hover；
- keyboard focus；
- click 或展开行为；
- 桌面布局；
- 移动端布局；
- 长标题和较长说明；
- 没有图片或证据时的状态；
- 亮色与暗色语义是否一致。

高不确定性单元可以有 3 个变体，基础单元最多 2 个，不为了凑数量制作无意义方案。

每个单元需要记录：

- 变体编号；
- 方案意图；
- 参考来源；
- Maki 的选择；
- Maki 的评论；
- 选择后保留的规则；
- 实现验收条件。

## 当前 Lab 入口

- [Component Lab v0.1](../../../output/component-lab-v0.1/index.html)
- [Component Lab v0.2：21 × 5](../../../output/component-lab-v0.2/index.html)
- [v0.2 说明](./component-lab-v0.2-21x5.md)
- [v0.2 21 个组件选择表](./component-selection-decisions-v0.2-21x5.md)
- [剩余组件 Lab：39 × 5](../../../output/component-lab-remaining-v0.1/index.html)
- [39 × 5 说明](./component-lab-remaining-39x5.md)
- [Component Map v0.1](./component-map-v0.1.md)

## 下一步

先在 Lab 中逐项选择和评论，不直接修改生产 src/。选择完成后，更新 Component Map 和组件契约，再进行只读源码审计，最后才进入亮色第一条真实 Astro 链路。

