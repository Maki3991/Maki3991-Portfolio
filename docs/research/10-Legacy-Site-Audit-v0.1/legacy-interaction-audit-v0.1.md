# Legacy Home Interaction Audit v0.1

状态：当前有效 / Home 首轮完成  
审计对象：旧网站 Home，路由 /

## 已验证的内部跳转

| 交互 | 结果 | 证据等级 |
| --- | --- | --- |
| Hero 的“查看代表作品” | 到达 /works/ | INTERACTION |
| Hero 的“查看项目经历” | 到达 /projects/ | INTERACTION |
| Hero 的“联系我” | 到达 /contact/ | INTERACTION |
| LPT 项目的“查看详情” | 到达 /projects/#lpt-delivery | INTERACTION |
| LPT 锚点目标 | document.getElementById("lpt-delivery") 存在，目标元素为 SECTION | INTERACTION |
| Header 导航 | 快照确认存在首页、作品、项目、关于、联系五个链接 | RUNTIME；逐项点击待后续页面审计 |

## 代码层面的链接行为

- ProjectCard 对所有项目生成 /projects/#项目 slug；
- WorkCard 对 ready 状态作品显示“查看作品”；
- 外部作品链接使用新窗口和 noreferrer；
- 作品链接是否仍有效，本轮没有离开本地审计范围逐个访问；
- 当前 Home 没有主题切换控件；
- 当前 Home 没有实际 button 元素，二维码弹窗逻辑位于 contact.astro，不属于 Home。

## 响应式和运行时

- 桌面视口 1440 × 1000：scrollWidth 1425，未发现横向溢出；
- 移动视口 390 × 844：scrollWidth 375，未发现横向溢出；
- 移动端仍显示完整导航链接，没有发现独立菜单；
- Home 桌面页面高度约 2665px，移动页面高度约 6447px；
- 控制台有一条 favicon 404：/favicon.ico；
- 未发现页面 JavaScript 错误或警告级消息。

## 待后续检查

- Projects 和 Works 页面自身的详情链接；
- Contact 页面二维码弹窗；
- Works 页面的 details 展开；
- 移动端键盘焦点和实际触摸体验；
- 外部平台链接的当前有效性；
- 所有页面的 active 导航状态。

