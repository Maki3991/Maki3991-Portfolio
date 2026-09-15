# Component Lab：剩余 39 × 5

状态：当前有效，待用户逐项选择

更新时间：2026-09-14

## 1. 本版是什么

v0.2 已经把 60 项候选中的 21 个高影响设计维度做成了 21 × 5 Lab。本版不覆盖 v0.2，而是继续把清单中尚未进入 Lab 的 39 项各做 5 个完整方案，共 195 个方案。

本版仍然是研究原型，不是生产站点代码。未来页面和功能即使已经有视觉样例，也不代表现在要上线。

## 2. 39 个组件范围

### F / 全站视觉基础

- F-05 等宽字体元数据
- F-08 间距节奏
- F-10 形状、图像与基础动效

### S / 共享 Shell、导航与页面结构

- S-02 品牌 / 姓名区块
- S-03 导航当前状态
- S-05 主题切换入口
- S-07 Footer
- S-08 面包屑与返回入口
- S-09 外部链接表现
- S-10 页面状态 Shell

### A / Archive 与列表模式

- A-02 首页精选项目
- A-04 内容类型标签
- A-08 紧凑 / 展开列表行
- A-09 筛选、分组与排序
- A-10 空状态与加载更多

### D / 项目详情与证据模式

- D-03 背景与问题
- D-04 我的职责与贡献
- D-05 过程与阶段
- D-06 决策与被放弃方案
- D-07 产物与交付链接
- D-09 图片、截图与代码展示
- D-10 更新历史与相关项目

### P / Home、Now、About 与共享内容模块

- P-03 Selected Work 区块
- P-05 Currently Reading
- P-06 About 简介区块
- P-07 How I Work
- P-08 Timeline / Trajectory
- P-09 Contact / Collaboration CTA
- P-10 页面结尾与下一步入口

### X / 后续页面与功能候选

- X-01 Notes 列表页
- X-02 Note 详情页
- X-03 Reading / Library 页面
- X-04 Updates / Changelog 页面
- X-05 Resume / CV 页面
- X-06 Uses / Toolkit 页面
- X-07 Lab / Experiments 页面
- X-08 Search / Tag Index
- X-09 RSS / 订阅入口
- X-10 实时状态 / 数据面板

## 3. 五个比较视角

每个组件都使用同一组比较视角，方便判断是结构更好，还是仅仅颜色不同：

1. Editorial Rail：编号、左侧轨道和编辑式秩序；
2. Quiet Grid：柔和表面、留白和安静网格；
3. Dense Index：等宽元数据、高密度和系统索引；
4. Split Signal：高对比强调面、状态和行动信号；
5. Open Field：减少容器，让内容在开放留白中建立关系。

这些是每个组件的视觉假设，不是要求最终选择五套全站主题。可以从不同方案中分别保留结构、密度、信息层级或交互规则，再进行融合。

## 4. Lab 入口

- [剩余组件 Lab 39 × 5](../../../output/component-lab-remaining-v0.1/index.html)
- [前一版 Component Lab 21 × 5](../../../output/component-lab-v0.2/index.html)
- [60 项候选清单](../06-Site-Architecture-v0.1/component-design-dimension-inventory-v0.1.md)
- [Design Baseline v0.2](../05-Design-Baseline-v0.2/design-baseline-v0.2-working-archive.md)

## 5. 页面提供的能力

- 组件目录和锚点跳转；
- 搜索组件；
- 按基础、Shell、Archive、详情、页面和后续候选分组筛选；
- Light / Dark 主题切换；
- 方案卡的点击 / 键盘选中反馈；
- 每个组件复制锚点链接；
- 每个组件五个方案纵向完整展示，不压缩成五列窄卡片。

## 6. 验收证据

- 浏览器实际渲染：39 个组件区块、195 个方案卡片；
- 每个组件的方案数量均为 5，没有 No specimen 占位；
- 桌面 1440px 视口：body.scrollWidth = 1425，没有超出视口；
- 移动 390px 视口：body.scrollWidth = 375，方案卡保持单列；
- 移动端逐卡检查：195 张方案卡均无横向溢出；
- 搜索 X-10 显示 1 个组件、5 个方案；
- “后续”筛选显示 10 个组件；
- Light / Dark、点击选中和复制锚点已验证；
- 浏览器错误日志：0 errors、0 warnings；
- [桌面首屏截图](../../../output/playwright/component-lab-remaining/desktop-top.png)
- [移动首屏截图](../../../output/playwright/component-lab-remaining/mobile-top.png)
- [详情过程组件截图](../../../output/playwright/component-lab-remaining/d05-process-desktop.png)

## 7. 选择边界

X-10 的样例明确标为“未来 / 仅作研究”，不应因为它有方案就进入第一版。S-05、A-09、A-10 以及 X 组的其他项目也需要先结合真实页面内容和维护成本决定是否实现。

下一步仍然是用户逐项观察、选择、评论或要求融合；选择结果应写入 Component Contract，再进入第一条亮色 Astro 真实链路。
