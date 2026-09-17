# Component Audit Batch 01 v0.1

更新时间：2026-09-17

状态：进行中 / 等待用户确认 Header 决策

## 目的

本批次将多个组件集中执行组件级工作流的第 1–4 步，统一输出第 5 步需要 Maki 判断的问题。确认后仍然按照“一次只修改一个组件”的方式实施和验收。

本批次暂不修改生产代码。

## 批次范围

| 组件 | Contract 对应项 | 当前状态 |
|---|---|---|
| Header / Navigation | S-01、S-03、S-04 | 第 1–4 步已完成；等待第 5 步确认 |
| Archive Page Shell / Section Rhythm | F-06、F-07、F-08、F-09 | 待审计 |
| Archive Entry / List Row | A-01 Archive 项目列表行 | 待审计 |
| Archive List Row Hover / Active | A-07 列表行 Hover / Active | 本次新增；待审计 |

## Header / Navigation：第 5 步需要判断的内容

### 1. 移动端菜单是否全站统一

- A：所有页面统一使用 `MENU` 折叠菜单。推荐。符合 S-04 Quiet Grid，也能避免 Home 与其他页面出现两套移动导航行为。
- B：保留当前状态，只有 Home 使用 `MENU`，其他页面直接显示导航。

### 2. 桌面端 Header 是否全站统一为 Working Archive 风格

- A：所有页面采用当前 Home 的冷灰背景、等宽文字导航、扁平链接和蓝色当前页下划线。推荐。
- B：保留各页面目前不同的 Header 样式，只修复交互和无障碍问题。

### 3. 当前主导航是否继续保持四项

- A：保持 `Home / Archive / About / Contact`。推荐。
- B：现在加入 `Now`。
- C：现在加入 `Projects / Works`。

默认建议暂不新增没有稳定内容和路由的入口。

### 4. 当前页状态采用哪种视觉强度

- A：保留蓝色下划线，补充 `aria-current="page"` 和清晰的键盘 Focus。推荐。
- B：增加更明显的编号或左侧 rail 标记。

### 5. 移动菜单采用哪些关闭方式

- A：支持菜单按钮、Escape、点击外部和窗口尺寸变化后自动关闭。推荐。
- B：只保留菜单按钮关闭。

## 不在本批次决策的内容

- 暗色模式和主题切换入口；
- Now 页面是否正式加入主导航；
- Archive Detail 的完整页面结构；
- Footer；
- 重新改变 Working Archive 总体方向。

## 后续执行顺序

1. 完成 Archive Page Shell / Section Rhythm 的第 1–4 步；
2. 完成 A-01 Archive 项目列表行的第 1–4 步；
3. 完成 A-07 列表行 Hover / Active 的第 1–4 步；
4. 在本文件中补齐后三个组件各自的第 5 步问题；
5. 等 Maki 一次性确认本批决策；
6. 按组件逐个修改、构建和浏览器验收。

## 相关依据

- [组件级实施工作流](./README.md)
- [Component Contract v0.1](../08-Component-Contract-v0.1/component-contract-v0.1.md)
- [Working Archive Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)
