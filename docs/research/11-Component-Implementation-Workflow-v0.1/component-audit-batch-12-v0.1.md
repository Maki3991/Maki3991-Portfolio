# Component Audit Batch 12 v0.1

- 日期：2026-09-19
- 状态：P0 Home / Archive 剩余组件与共享联调通过
- 本轮范围：Home Hero、Live Index、Current Workbench、Selected Work、Home Contact；Archive Page Shell、Archive List / Row、Archive Row Interaction、Archive Footnote / Next；Shared Footer、Focus / Keyboard、Reduced Motion、Responsive / Overflow
- 明确不包含：Archive Detail 已在 Batch 11 通过；P1 页面；ProjectCard、StatGrid、旧版 WorkCard、旧版 SectionIntro
- 下一项：进入 P1-01 Now Page 的视觉与真实内容验收

## 1. 本轮依据

- `Component Production Acceptance Queue v0.2`：P0 主链路中 05–14 与共享基础对象仍需真实内容回归；
- `Component Contract v0.2`：1120px 主轨道、14px raised surface、开放列表、2px / 4px Focus、移动端自然单列；
- 真实内容边界：只使用当前 Home 数据、4 条 Archive 记录和已有真实图片，不引入 Lab 示例数据。

## 2. Home 组件回归

### 桌面 1440px

- Home 主轨道为 `x=160 / width=1120`，页面无横向溢出；
- Hero 使用双栏结构，头像图片加载成功（`naturalWidth=3120`、`naturalHeight=4160`），alt 为“Maki 羽轩头像”；
- Hero 的两个主要入口分别指向 `/archive/maki-english/` 和 `/contact/`，实际触控高度约 48px；
- Live Index 渲染 5 个真实字段：CURRENTLY、FOCUS、BASED、OPEN TO、UPDATED；
- Current Workbench 渲染 2 条真实记录，每条保留编号、类型、标题、原因和状态；
- Selected Work 使用真实 `Maki English` Archive 数据，入口指向 `/archive/maki-english/`，raised surface 使用 `radius-md` 与 `shadow-soft`；
- Home Contact 渲染微信和邮箱两个真实入口，邮箱为真实 `mailto:` 链接。

### 移动 390px

- Home 主轨道为 `x=16 / width=358`，`clientWidth = scrollWidth = 390`；
- Hero、头像 / 状态、Live Index、Workbench、Selected Work 和 Contact 均自然收为单列；
- Live Index 五行字段保持对齐并允许内容换行；Workbench 两条记录的原因与状态没有挤出容器；
- Selected Work 卡片保持 `14px` 圆角和 `shadow-soft`，Contact 两张卡片纵向排列；
- Home 的标题、长中文内容和真实入口均可读，没有发现需要改变内容或结构的缺陷。

## 3. Archive 组件回归

### Page Shell / Hero

- 桌面 Hero 主轨道为 `1120px`，左侧标题说明与右侧 `ITEMS / PUBLIC / ANONYMIZED` 索引保持双栏；
- 移动端统计索引改为顶部线 + 单列字段，390px 无横向溢出；
- Archive 列表前的 section 节奏与当前已接受的 Q2 标题轨道一致。

### List / Row / Status

- 4 条真实 `ArchiveRow` 均有编号、类型、时间、状态、标题、摘要和详情入口；
- 桌面列表使用开放式横线结构，行网格为编号 / 主内容 / 事实入口；移动端转为编号 / 主内容并将入口下移；
- `已归档` 状态保留文字 + 底线表达，不增加胶囊或填充徽章；
- 最长的 `AdventureX 2026 / ReadAge` 在 390px 下自然换行，未产生横向溢出；
- Archive → Now 的 `NEXT / 当前阶段` 入口存在，当前保留无额外横线的页面结尾决定。

### Row Interaction

- 行 hover 不改变行背景、尺寸或位置，不造成布局跳动；
- 标题和“查看记录”链接 hover / focus 使用 `--color-accent`，现在具有真实可见反馈；
- 第一条标题链接通过真实 Tab 获得 `2px solid`、`4px` offset 的 Focus；
- 4 条记录的标题与侧栏入口都指向各自真实详情路由。

## 4. Shared Footer / Focus / Reduced Motion / Responsive

- Footer 在 Home、Archive、Archive Detail、Now、About、Contact 保持同一 1120px 桌面轨道；390px 下改为单列，内容和顶部细线均正常；
- 全局 `:where(a, button):focus-visible` 补齐此前没有专属 Focus 规则的普通链接，实际 Focus 为 `2px solid #217895`、`4px` offset；
- `prefers-reduced-motion: reduce` 下 `scroll-behavior` 实际为 `auto`，清除模拟后恢复正常行为；
- Home、Archive 与四条真实 Archive Detail 均在 1440px / 390px 下无横向溢出；
- Archive Detail 的公开、匿名公开、空证据和待公开证据过滤已由 Batch 11 覆盖，本轮不重复修改。

## 5. 本轮生产代码调整

本轮仅补一处审计发现：`archive-implementation.css` 中 Archive 标题 / 入口链接的 hover 与默认文字色相同，导致无可见反馈；已改为 `var(--archive-accent)`。没有改变列表线条、行高、列宽或页面内容。

此前同一 P0 联调阶段已完成并在本轮复核：

- Mobile MENU 入口统一为 `var(--size-target-min)`，实际高度 44px；
- 全局普通链接和按钮 Focus 使用 Foundation token；
- reduced-motion 下关闭平滑滚动。

## 6. Gate 结论

P0 的 Home / Archive 剩余组件和共享联调标记为 `implemented / Gate passed`。本轮没有发现需要用户重新选择的跨页设计取舍，也没有把被排除的旧组件重新纳入审计。

验证结果：

- `npm.cmd run build`：11 个静态页面生成；Astro `0 errors`、`0 warnings`、2 个既有 Lab hints；
- 本地浏览器：Archive 页面最终控制台 `0 errors`、`0 warnings`；
- 生产代码未引入新的内容占位、虚假指标或 Lab 数据。

下一步进入 P1-01 `Now Page`；P1 仍按组件逐项审计，不提前处理旧版 WorkCard、SectionIntro 或未接入主页面的 ProjectCard、StatGrid。
