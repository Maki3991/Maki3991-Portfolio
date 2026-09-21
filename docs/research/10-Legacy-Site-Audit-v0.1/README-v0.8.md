# Legacy Site Audit v0.8

状态：当前有效  
说明：Archive 数据读取类型和最小总览页已经实现，详情页和共享导航迁移仍未完成。

## 已实现

- [Archive 数据类型](../../../src/data/archive.ts)
- [Archive 行组件](../../../src/components/ArchiveRow.astro)
- [Archive 总览页](../../../src/pages/archive.astro)
- [Archive 页面样式](../../../src/styles/archive.css)
- 路由：/archive/

## 已验证

- 四个正式 Archive 内容文件都被正确读取；
- 页面显示 4 条记录；
- 页面统计显示 4 items、2 public、2 anonymized；
- 390 px 移动视口没有横向溢出；
- Astro production build 通过；
- 新页面没有新增 JavaScript 错误。

## 尚未完成

- 共享 Header 仍然使用旧版 Works / Projects 导航；
- 共享 Header 仍然显示旧版 Portfolio 副标题；
- Archive 条目暂时不是详情链接；
- 项目证据和相关作品尚未在详情页展开；
- /favicon.ico 仍然返回 404。

这些未完成项不影响当前内容读取，但在详情页实现前需要处理共享 Header 和 Archive 详情入口。

## 下一步

先迁移共享 Header：将旧的 Works / Projects 入口替换为 Archive，并移除 Portfolio 副标题；然后建立 /archive/[slug] 的详情页最小变体。
