# Header Blur Comparison Validation v0.1

## 验证对象

[Header Blur Comparison](../../../output/foundation-preview-v0.1/header-compare.html)

## 已验证

- A / Solid Index、B / Soft Blur、C / Quiet Blur 三个候选都实际渲染。
- 三个小页面都具备可滚动内容，`scrollHeight = 730px`，视口高度 `410px`，可以观察内容经过 Header 时的边界。
- A 的计算样式为：`background: rgb(255, 255, 255)`、`backdrop-filter: none`。
- B 的计算样式为：`background: rgba(255, 255, 255, 0.72)`、`backdrop-filter: blur(24px) saturate(1.3)`。
- C 的计算样式为：`background: rgba(255, 255, 255, 0.88)`、`backdrop-filter: blur(12px)`。
- 390px 宽度下三列变为单列，页面没有水平溢出。
- 没有页面脚本错误；唯一控制台提示是预览目录没有 `favicon.ico`。

## 截图

- [桌面对比](../../../output/playwright/header-compare/desktop.png)
- [移动端对比](../../../output/playwright/header-compare/mobile.png)

## 当前结论

技术和候选构造已经完成，但 A / B / C 的气质差异仍然属于用户视觉判断，不能由代码或对比度计算代替。Header blur 仍不进入生产 CSS，等待用户选择后再写入 Header component token。
