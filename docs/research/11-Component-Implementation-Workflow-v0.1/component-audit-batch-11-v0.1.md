# Component Audit Batch 11 v0.1

- 日期：2026-09-19
- 状态：P0 Archive Detail 真实内容与状态回归通过
- 本轮范围：4 条真实详情记录的公开状态、Meta、正文、公开边界、证据过滤、空证据状态、顶部返回和底部返回
- 明确不包含：全站 Footer / Focus / reduced-motion 联调、Archive Row hover 状态和 P1 页面
- 下一项：Shared Footer、Focus、Responsive 和 reduced-motion 联调

## 1. 本轮依据

- `src/pages/archive/[slug].astro` 的 `getStaticPaths` 只生成 `public` 与 `public-anonymized` 条目；
- 证据只展示 `public` 与 `public-anonymized`，`pending`、`private` 和 `public-pending-copy` 不进入公开证据列表；
- 详情页必须保留时间、角色、公开范围、贡献、结果、公开边界和返回 Archive 入口；
- 详情页桌面使用 1120px 主轨道，移动端使用 16px gutter 与单列字段堆叠。

## 2. 四条真实记录结果

| 记录 | 公开状态 | 贡献 / 结果 | 可见证据 | 空状态 | 结果 |
|---|---|---:|---:|---|---|
| Maki English | 公开 | 4 / 2 | 3 | 否 | 通过 |
| 英语产品与社群交付 | 匿名公开 | 5 / 3 | 1 | 否 | 通过 |
| AI 产品海外内容运营实习 | 匿名公开 | 6 / 2 | 0 | 是，显示“公开证据正在整理。” | 通过 |
| AdventureX 2026 / ReadAge | 公开 | 7 / 3 | 3 | 否 | 通过 |

四条记录的 kicker、时间、角色和公开范围均与真实内容文件一致；所有详情页 Header 当前态均唯一指向 Archive。

## 3. 桌面与移动回归

### 桌面 1440px

- 4 个详情路由均成功生成并可访问；
- 主轨道均为 1120px，无横向溢出；
- Maki English 与 ReadAge 的公开证据列表正常展示；
- 匿名公开条目正确过滤待公开、私有和未复制证据；
- AI 实习条目正确显示空证据提示，而不是伪造占位证据；
- 顶部“返回档案库”和底部详情导航均指向 `/archive/`。

### 移动 390 × 844

- 四条记录的详情 Header、Meta、正文、Aside 和证据区均自然纵向排列；
- Meta 三个字段均改为单列，长角色和长标题可以换行；
- Maki English、英语产品与社群交付、AI 实习、ReadAge 的详情页均 `clientWidth = scrollWidth = 390px`；
- Archive 当前态和返回入口在移动详情页保持不变。

## 4. Gate 结论

Archive Detail 的真实内容与状态回归标记为 `implemented / Gate passed`。本轮没有发现需要修改生产代码或提交内容取舍的问题。

## 5. 验证结果

- 浏览器控制台：0 errors、0 warnings；
- 代表状态截图：[公开详情 desktop](../../../output/playwright/archive-detail-public-desktop-final.png)、[空证据详情 mobile](../../../output/playwright/archive-detail-empty-mobile-final.png)；
- 本轮未修改生产代码；生产构建将在本轮文档回写后再次执行。
