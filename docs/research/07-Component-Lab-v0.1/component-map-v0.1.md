# Component Map v0.1

状态：当前有效，待用户选择

更新时间：2026-09-14

## 判断规则

这里的“组件”分为两种：

1. 代码复用单元：可以拆得更细；
2. Lab 实验单元：用户能够感受到、比较和选择的完整界面单元。

不是每一个小标签、间距或 HTML 容器都需要单独做五套视觉方案。

## 全站基础

| Lab ID | 实验单元 | 可拆分代码组件 | 复用页面 | 当前问题 | 状态 |
|---|---|---|---|---|---|
| C01 | PageShell / ContentRail | PageShell、ContentRail、SectionSpacing | 所有页面 | 页面宽度、左右边距、内容密度如何平衡档案感和可读性 | 待选择 |
| C02 | SiteHeader / DesktopNav | Wordmark、DesktopNav、NavItem、ActiveNav | 所有页面 | 导航如何保持轻量，同时让当前页面清楚 | 待选择 |
| C03 | MobileMenu | MenuTrigger、MenuPanel、MenuItem、CloseState | 所有页面 | 移动端展开方式是否直接、可发现、可关闭 | 待选择 |
| C04 | SectionHeader / Divider | SectionNumber、SectionKicker、SectionTitle、SectionMeta、Divider | Home、Archive、详情页、Now | 如何建立章节秩序，而不制造装饰性噪音 | 待选择 |

## Working Archive 语法

| Lab ID | 实验单元 | 可拆分代码组件 | 复用页面 | 当前问题 | 状态 |
|---|---|---|---|---|---|
| C05 | ArchiveList + ArchiveRow | ArchiveList、RowIndex、RowType、RowTitle、RowSummary、RowMeta、RowStatus、RowAction | Archive、Home、Notes、Reading、Lab | 项目、作品、阅读记录能否共用同一种长期追加的行结构 | 待选择 |
| C06 | MetaLine + Type / Status / Date | MetaLine、TypeLabel、StatusBadge、DateLabel | ArchiveRow、ItemHeader、LiveIndex | 元信息如何被快速扫描，又不变成标签堆 | 待选择 |
| C07 | LiveIndex | IndexList、IndexRow、IndexLabel、IndexValue、IndexLink、IndexSignal | Home、Now、About | 如何展示个人事实而不像企业 Dashboard | 待选择 |

## 详情和证据

| Lab ID | 实验单元 | 可拆分代码组件 | 复用页面 | 当前问题 | 状态 |
|---|---|---|---|---|---|
| C08 | ItemHeader + BackLink | Breadcrumb、BackLink、ItemType、ItemStatus、ItemDate、ItemTitle、ItemSummary、ItemActions | 项目、作品、实验、阅读详情 | 详情页如何在第一屏建立上下文，而不使用空泛宣传语 | 待选择 |
| C09 | EvidenceBlock | EvidenceHeader、EvidenceItem、EvidenceType、EvidenceLink、EvidenceMedia、VerificationNote | 项目和作品详情 | 链接、截图、代码、文档和测试结果如何在同一规则下呈现 | 待选择 |
| C10 | DetailNavigation | BackToArchive、PreviousItem、NextItem、RelatedItems | 所有详情页 | 长页面和多个条目之间如何保持方向感 | 待选择 |

## 操作和主题

| Lab ID | 实验单元 | 可拆分代码组件 | 复用页面 | 当前问题 | 状态 |
|---|---|---|---|---|---|
| C11 | TextLink + Button | InternalLink、ExternalLink、IconLink、PrimaryButton、SecondaryButton、QuietButton | 所有页面 | 主要行动、普通链接和外部链接如何区分 | 待选择 |
| C12 | ThemeToggle + Theme States | ToggleButton、ThemeIcon、LightState、DarkState、FocusState | 所有页面 | 亮暗主题如何只改变语义 token，不改变信息架构 | 待选择 |

## 直接实现、不单独发散

| 组件 | 原因 |
|---|---|
| Footer | 结构简单，直接服从 Baseline |
| BackToTop | 功能性小组件，不需要审美发散 |
| Focus / Reduced Motion | 可访问性行为规则，不是视觉方向选择 |
| CurrentFocus / NowBlock | 页面组合，先验证真实内容 |
| NoteRow / ReadingRow | 复用 C05，不另起一套列表视觉 |
| ContactBlock | 先作为区块验证，不设为全站基础组件 |

## Lab → 生产的闸门

只有满足以下条件，组件才可以进入生产实现：

1. Maki 已经选择或明确暂不选择；
2. 方案在桌面和移动视口都看过；
3. 交互状态已检查；
4. 使用过真实内容，而不是只有占位文本；
5. 记录了组件契约和影响范围；
6. 确认不会把未选择的实验 CSS 带入生产站点。

