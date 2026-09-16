# Legacy Site Audit v0.7

状态：当前有效  
说明：四个首批 Archive 条目已经拆成正式内容文件，并通过 Astro production build。

## 正式内容文件

- [Maki English](../../../src/site-content/archive/01-maki-english.md)
- [英语产品与社群交付](../../../src/site-content/archive/02-lpt-delivery.md)
- [AI 产品海外内容运营实习](../../../src/site-content/archive/03-ai-product-content-internship.md)
- [AdventureX 2026 / ReadAge](../../../src/site-content/archive/04-adventurex-readage.md)

## 当前规则

- 日期以 [日期修正覆盖](./archive-content-records-v0.2-date-correction.md) 为准；
- 字段和证据边界以 [Archive Content Contract v0.1](./archive-content-contract-v0.1.md) 为准；
- 四个文件目前只是内容层，旧版页面尚未读取它们；
- Audibooker 和音乐 EP 不在本轮正式内容文件中。

## 验收

- 四个 Markdown 文件已写入 src/site-content/archive/；
- JSON frontmatter 已被 Astro 正常解析；
- npm run build：通过；
- Astro 检查没有错误，只有 output/design-direction-lab/lab.js 中已有的 2 个提示；
- 尚未修改生产页面 UI。

## 下一步

为 Archive 页面建立读取这些条目的数据类型和最小总览，然后再实现详情页变体。
