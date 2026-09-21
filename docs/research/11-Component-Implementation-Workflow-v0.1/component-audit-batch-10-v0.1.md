# Component Audit Batch 10 v0.1

- 日期：2026-09-19
- 状态：P0 主链路跨页回归通过
- 本轮范围：Home → Archive → 一个真实 Archive Detail → 返回 Archive；同时验证 Home 代表项目入口直达同一详情页
- 明确不包含：全部 Archive Detail 状态矩阵、Footer / Focus / reduced-motion 联调和 P1 页面
- 下一项：Archive Detail 的真实内容与状态回归

## 1. 本轮依据

- Component Production Acceptance Queue v0.2：Page Shell、Header、Mobile Navigation、Display Title 已通过后，进入真实主链路回归；
- Component Contract v0.2：Home、Archive 和 Archive Detail 之间共享主轨道、标题轨道和 Header 当前态规则；
- 真实内容边界：只使用当前 `src/data/archive.ts` 与页面已有公开条目，不引入 Lab 示例数据。

## 2. 桌面主链路（1440px）

- Home：4 个主要内容区存在；2 条 Current Workbench 真实条目存在；Selected Work 指向 `/archive/maki-english/`；联系入口分别指向 `/contact/` 和真实 mailto；当前导航只有 Home；
- Header → Archive：通过真实导航进入 `/archive/`，Archive 当前态唯一；
- Archive：4 条真实 ArchiveRow 均有标题详情入口和“查看记录”入口；页面末尾 `NEXT / 当前阶段` 指向 `/now/`；
- Archive → Detail：通过第一条真实条目进入 `/archive/maki-english/`；详情标题为 `Maki English`，Meta 包含时间、角色、公开范围，正文包含我的贡献、结果、公开边界和可核验的公开入口；
- Detail 当前态：Header 只有 Archive 获得 `aria-current=page`，详情页返回链接指向 `/archive/`；
- Detail → Archive：通过“← 返回档案库”返回后，4 条列表、第一条标题、`/now/` 下一步入口和 Archive 当前态均恢复。

## 3. 移动主链路（390 × 844）

- Archive 第一条真实条目可进入详情；
- 详情页主轨道为 358px，内部详情内容为 326px；Meta 三个字段自然纵向堆叠；
- 详情标题、摘要、公开边界和证据入口均可读，没有被固定桌面列宽压缩；
- 详情页返回后恢复 Archive 列表；
- Home 代表项目入口在移动端也直达同一详情页；
- 相关页面 `clientWidth = scrollWidth = 390px`，没有横向溢出。

## 4. Gate 结论

本轮没有发现跨页链接断裂、当前导航错误、真实内容缺失、详情字段丢失或轨道不一致问题。该跨页回归标记为 `passed`。

下一步单独处理 Archive Detail 的真实内容与状态矩阵，不在本轮扩大到 Footer 或 P1 页面。

## 5. 验证结果

- 浏览器控制台：0 errors、0 warnings；
- 本轮未修改生产代码；沿用本轮开始前已通过的 `npm.cmd run build` 结果：11 个静态页面，Astro 0 errors、0 warnings，2 个既有 Lab hints。
