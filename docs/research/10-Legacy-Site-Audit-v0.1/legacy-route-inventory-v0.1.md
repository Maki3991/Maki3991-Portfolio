# Legacy Route Inventory v0.1

状态：当前有效 / Home 首轮完成，其余页面待运行时审计  
范围：旧网站路由、共同布局和 Home 依赖。

## 路由清单

| 路由 | 源文件 | 当前标题 | 当前证据 | 新版暂定去向 |
| --- | --- | --- | --- | --- |
| / | src/pages/index.astro | Maki 羽轩 | 已完成运行时审计 | Home |
| /works/ | src/pages/works.astro | 作品 | 已从 Home 跳转确认，页面本体待审计 | Archive |
| /projects/ | src/pages/projects.astro | 项目 | 已从 Home 跳转确认，页面本体待审计 | Archive |
| /about/ | src/pages/about.astro | 关于 | 源码存在，运行时待审计 | About |
| /contact/ | src/pages/contact.astro | 联系 | 已从 Home 跳转确认，页面本体待审计 | Contact 或共享入口 |

## 共同布局

- src/layouts/BaseLayout.astro 提供 HTML、语言、description、title、SiteHeader、main 和 SiteFooter；
- src/components/SiteHeader.astro 从 src/data/site.ts 读取 navItems；
- src/components/SiteFooter.astro 显示长期作品集和持续更新说明；
- src/styles/global.css 提供全站颜色、字体、按钮、卡片、响应式规则和二维码弹窗样式。

## Home 数据来源

- 个人身份：src/site-content/settings/profile.json；
- 数据指标：src/site-content/settings/stats.json；
- 首页精选作品顺序：src/site-content/settings/featured-work-slugs.json；
- 项目集合：src/site-content/projects/；
- 作品集合：src/site-content/works/；
- 数据聚合：src/data/site.ts。

## 当前发现

旧网站的 Projects 和 Works 是两个顶层入口，Home 同时展示项目卡和作品卡。这与新版统一 Archive 的方向存在结构重叠，需要在后续 Projects / Works 审计中确认迁移方式。

