# Header Blur Review v0.1

## 当前状态

前四项 DS-1 视觉判断已经明确：

| 项目 | 判断 |
| --- | --- |
| Home 标题力度 | 保留当前 `6rem` display 最大字号 |
| Quiet Editorial 字体 | 保留独立 display 字体 |
| Open Field 密度 | 保留 `64px` section gap、`24px` grid gap、`72px` row 候选 |
| Soft Surface 形状 | 保留 `14px` 圆角和轻阴影 |
| Header blur | 需要候选对比，尚未选择 |

## 直接打开

[打开 Header Blur 对比板](../../../output/foundation-preview-v0.1/header-compare.html)

请在每个小页面内部滚动，观察内容从 Header 下方经过时：

- 导航边界是否仍然清楚；
- Header 是否抢走内容注意力；
- 页面是否开始产生玻璃拟态或商业模板感；
- 档案索引的稳定性和长期维护感是否保留。

## 候选

| 选项 | 参数 | 倾向 |
| --- | --- | --- |
| A · Solid Index | 实色 `#ffffff`，无 blur | 边界最清楚、最稳定、最像档案索引 |
| B · Soft Blur | `rgba(255,255,255,.72)` + `blur(24px)` + `saturate(1.3)` | 层次明显、视觉更轻，但玻璃感风险最高 |
| C · Quiet Blur | `rgba(255,255,255,.88)` + `blur(12px)` | 保留少量滚动层次，风险比 B 低 |

## 回复格式

```text
Header：A / B / C / 桌面与移动不同
自由反馈：
```

在收到这个选择前，Header blur 不进入生产 Header，也不影响已经确认的四项 Foundation 参数。
