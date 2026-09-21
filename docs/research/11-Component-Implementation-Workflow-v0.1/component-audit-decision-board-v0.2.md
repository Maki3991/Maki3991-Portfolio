# Component Audit Decision Board v0.2

状态：Q1–Q4 均已选择 A / 已实施 / 本地视觉验收通过 / 进入 P0 组件 Gate

日期：2026-09-18

关联队列：[Component Production Acceptance Queue v0.2](./component-production-acceptance-queue-v0.2.md)

已记录选择：Q1 A、Q2 A、Q3 A、Q4 A。

## 0. 这份文档怎么反馈

这里只列需要改变视觉结果或跨页规则的判断，不要求你阅读代码，也不要求你批准技术实现。

你可以直接回复：

```text
Q1 A，Q2 A，Q3 A，Q4 A。
自由反馈：……
```

也可以写“保留当前”“Q1 不确定，先看两个版本”，或者直接描述你看到的视觉感觉。自由反馈优先于选项。

## 1. 已完成的审计证据

- `npm.cmd run build` 通过：11 个静态页面生成，Astro 检查 0 errors、0 warnings、2 个与 Lab 示例脚本有关的 hints。
- 11 条路由在桌面视口和约 390px 移动视口均无横向溢出；每页只有一个 `main` 和一个 `h1`。
- 11 条路由浏览器控制台均为 0 errors、0 warnings。
- 移动导航的打开、关闭、`Escape` 和焦点回收已通过。
- Contact 二维码弹窗的打开、关闭、`Escape` 和焦点回收已通过。
- 按四项 A 方案实施后，Home/Archive 移动端实际为 390px 文档宽度和 64px 标题顶部间距；Archive desktop 当前态为透明背景加底部 inset 线。
- Archive Detail desktop 实际为 1120px 最大宽度，Meta 上边框为 none、字段竖线仍为 1px；About Hero 底线实际为 none，desktop 标题顶部间距为 96px。
- Maki 本地部署浏览反馈：当前跨页规则无问题。

这说明当前代码的结构和基本行为可以进入组件级视觉收敛；它不等于所有页面已经完成最终视觉验收。

## 2. 已经锁定，不在本轮重新提问

- Foundation 的颜色、字体、字号、字重、间距、圆角、阴影和焦点 token 继续作为唯一基础来源。
- 关闭式 surface 使用统一的 14px 圆角和 soft shadow；开放式列表行不套圆角容器；pill 只用于确有语义的状态。
- Home 当前页导航保持透明背景、直角和底部 inset 当前线。
- Home 中此前确认删除的多余横线，以及 Archive 的 `NEXT / NOW` 上方横线，继续保持删除。
- Archive Detail desktop 的 Meta 采用此前确认的方案：保留字段之间的竖线，不重新引入上下包裹横线。

## 3. 代码审计发现

### 3.1 Page Shell 的轨道（实施前发现，现已处理）

实施前代码同时存在 1120px 全站轨道、980px page hero/content 轨道和 Archive Detail 的 1240px 轨道；现已按 Q1 A 统一为 1120px 主轨道与 980px 可读内容轨道。

### 3.2 Display Title 的顶部留白（实施前发现，现已处理）

实施前 `display-title.css` 为主要页面叠加 132px / 72px 的顶部规则，现已按 Q2 A 收敛为桌面 96px、移动端 64px 的 token 轨道。

### 3.3 Archive 的当前导航态（实施前发现，现已处理）

实施前 Header 的已锁定规则与 `archive.css` 的 `accent-soft` 当前背景存在冲突；现已按 Q4 A 移除 Archive 的独立当前底色。

### 3.4 横线密度（实施前发现，现已处理）

Home 和 Archive 中已按你的反馈删掉指定横线；现已按 Q3 A 移除 About、Contact 次级页面的悬空 Hero 底线，同时保留列表和确有结构作用的边界线。

### 3.5 其余问题可以由 Agent 直接处理

重复的 token 等价值、过时注释、明确的 CSS 归属和无语义的硬编码值，属于实现清理，不需要你逐项批准。Agent 会继续在组件级验收中处理，并用 build 与本地回归验证。

## 4. 已选择并实施的跨页规则

本节保留选择题形式和自由反馈入口，作为决策 provenance；四项均已按方案 A 写入生产代码。

### Q1. Page Shell 与 Archive Detail 的宽度

- **已选择 A｜统一主轨道**：全站页面轨道使用 1120px，阅读内容使用 980px；Archive Detail 也回到 1120px，不保留 1240px 特例。

### Q2. Display Title 的顶部节奏

- **已选择 A｜统一标题轨道**：主要页面使用同一套顶部留白，桌面 96px、移动端 64px；页面自己的特殊节奏只保留在确有内容理由的地方。

### Q3. 横线与区块边界密度

- **已选择 A｜只保留语义边界**：保留列表分隔、确实承担结构作用的 section 边界；删除次级页面中单独悬空的 Hero 底线和装饰性重复线。

### Q4. Archive 页面导航当前态

- **已选择 A｜全站统一底部当前线**：所有页面的当前项都透明、直角，只保留底部 inset 当前线；移除 Archive 的 `accent-soft` 当前背景。

## 5. 暂不阻塞本轮的后续决定

这些项目已经完成代码清点或基本行为检查，但属于 P1，不需要和当前 P0 主链路一起回答：

- Now、About、Contact 的独立页面是否继续作为一级路由；
- Projects / Works 是否并入 Archive，或保留为旧路由；
- Contact 中二维码文字链接是否也改为打开统一 Dialog，而不是直接打开原图；
- P1 页面是否需要独立的内容字段和空状态设计。

Q1–Q4 已完成；如果你希望顺便决定 P1，也可以直接在自由反馈中写。

## 6. 回写规则

收到新的视觉反馈后，Agent 会：

1. 把新的视觉反馈回写到 Component Contract v0.2 和本队列；
2. 只修改受该选择影响的组件；
3. 运行 `npm.cmd run build`，并做桌面/移动端与控制台回归；
4. 把仍需你看视觉结果的组件留在队列中，继续按“改一个、看一个、反馈一个”推进。
