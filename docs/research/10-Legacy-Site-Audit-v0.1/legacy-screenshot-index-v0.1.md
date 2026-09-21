# Legacy Screenshot Index v0.1

状态：当前有效 / Home 首轮完成  
截图目录：output/playwright/

## Home 截图

| 文件 | 视口 | 内容 | 证据用途 |
| --- | --- | --- | --- |
| output/playwright/legacy-home-desktop.png | 1440 × 1000 | Home 完整页面 | 桌面端区块顺序、页面长度、布局 |
| output/playwright/legacy-home-mobile.png | 390 × 844 | Home 完整页面 | 移动端区块顺序、响应式布局、页面长度 |

## 运行时尺寸

| 视口 | document scrollWidth | body scrollWidth | scrollHeight | 判断 |
| --- | ---: | ---: | ---: | --- |
| 1440 × 1000 | 1425 | 1425 | 2665 | 未发现横向溢出 |
| 390 × 844 | 375 | 375 | 6447 | 未发现横向溢出 |

宽度比视口少 15px，符合浏览器滚动条占用空间的表现；本轮没有观察到额外横向溢出。

## 其他证据

- Playwright 页面快照：.playwright-cli/ 目录中对应 2026-09-15 本轮运行记录；
- 控制台日志：.playwright-cli/console-2026-09-15T11-52-12-044Z.log；
- 控制台发现：/favicon.ico 返回 404；
- 该 404 不阻塞页面内容，但应在实现前修复。

## 证据边界

截图和快照证明的是本地运行时看到的页面，不证明数据本身真实或仍然有效。数据真实性、时间范围和公开边界需要 Maki 后续确认。

