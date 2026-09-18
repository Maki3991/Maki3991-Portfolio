# Foundation Production Migration Plan v0.1

## 当前状态

**Foundation 视觉选择已完成 / 首轮生产 CSS 迁移已完成 / 等待最终视觉接受。**

用户已经确认：

- Palette A · Cold Index；
- Typography B · Quiet Editorial；
- Density A · Open Field；
- Shape B · Soft Surface；
- Header C · Quiet Blur。

本文件把这些决定转换成生产迁移边界，防止一次性把 Lab、Foundation 和旧页面 CSS 混在一起。

## 1. 当前基线证据

`npm.cmd run build` 已通过：

- Astro check：0 errors、0 warnings、2 hints；
- 静态页面：11 个 route 构建完成；
- 2 个 hints 来自既有 `output/design-direction-lab/lab.js` 的 deprecated `name` 属性，与本次 Foundation 不相关。

当前 `src/` 已完成本轮 Foundation 的首轮生产迁移；详细证据见 [生产迁移交接](./foundation-production-migration-review-v0.1.md)。

## 2. 迁移顺序

### Phase 1：共享 token 层

目标文件：

- `src/styles/global.css`

动作：

- 将 Palette A 的 semantic token 放在共享 root；
- 保留短期兼容别名 `--bg`、`--surface`、`--text`、`--muted`、`--line`、`--accent`，避免一次性破坏旧页面；
- 把 `--muted` 从旧 `#68808d` 迁移到 `#556b75`；
- 将 `--warm` 标记为移除对象，不再作为新组件 API；
- 将共享 shadow 改为 `shadow-soft`，普通列表默认使用 `none`；
- 补充 `focus-width`、`focus-offset`、reduced-motion 和触控目标 token。

### Phase 2：全局排印和 Header

目标文件：

- `src/styles/global.css`
- `src/styles/header.css`
- `src/styles/display-title.css`
- `src/styles/home.css` 中的 Header override

动作：

- 清理共享 `h1`、`h2`、`h3` 的旧暖色 serif 规则；
- display 使用 Typography B 的独立 sans fallback；
- display 最大字号从旧的 `8rem` 上限收敛到 `6rem`；
- Header 采用 C：`rgba(255,255,255,.88)` + `blur(12px)`；
- 删除 page-specific `backdrop-filter: none` 覆盖；
- Header focus 统一为 `2px / 4px`。

### Phase 3：Home / Archive / Detail 语义映射

目标文件：

- `src/styles/home.css`
- `src/styles/archive.css`
- `src/styles/archive-implementation.css`
- `src/styles/archive-detail.css`
- `src/styles/secondary-pages.css`
- `src/styles/now.css`

动作：

- 页面局部变量映射到共享 semantic token；
- 保留组件 Contract 已选的结构，不将 Foundation Density A 误写成新的组件结构；
- ArchiveRow 继续使用开放细线列表，不添加默认阴影；
- Selected Work / Detail raised surface 才使用 `radius-md` 和 `shadow-soft`；
- 删除重复的 `#68808d` 普通正文用法与旧主题色覆盖；
- 将孤立字号和间距逐步收敛到 Foundation scale，单次局部例外记录为 component token。

## 3. 不在这次迁移里做

- 暗色主题；
- 搜索、筛选、实时数据和未来页面；
- 重新选择 Component Lab 结构；
- 为 status colors 提前制造完整色板；
- 把所有页面重写成同一种卡片布局；
- 为了清理 raw value 而改变事实内容或文案。

## 4. 每个 Phase 的验收

每个 Phase 完成后都必须检查：

- `npm.cmd run build`；
- Home、Archive、Archive Detail 的桌面截图；
- `390 × 844` 移动截图；
- 键盘 focus；
- Header 菜单、返回入口和外部链接；
- 长标题、中文英文混排、长摘要、缺图 / 缺证据状态；
- 控制台错误和水平溢出；
- Git diff 只包含当前迁移范围。

## 5. 当前停止点

视觉方向已经不需要继续发散；当前停止在用户最终视觉接受闸门。下一步应先查看 [生产迁移交接](./foundation-production-migration-review-v0.1.md) 中的四张截图，再决定是否回写 Component Contract v0.2。

如果某个真实页面在迁移后不成立，先判断是 token 数值、组件实现、响应式还是内容问题，再局部修正；不要直接回退到旧暖色 serif 系统，也不要重新打开已经确认的四类 Foundation 方向。
