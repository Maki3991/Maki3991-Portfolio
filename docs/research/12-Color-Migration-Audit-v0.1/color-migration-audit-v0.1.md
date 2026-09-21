# Color Migration Audit v0.1

状态：当前有效 / 亮色迁移完成 / 旧页面与暗色暂缓
更新时间：2026-09-17

## 1. 本轮结论

你在 Component Lab 中选择的是 `F-01 / B — Quiet Grid`。Lab 的硬性代码显示，B 方案的主要 accent 是：

```text
accent       #217895
accent-soft  #e1f0f3
text         #1d3341
muted        #68808d
line         #d8e2e5
background   #f7f9fb
surface      #ffffff
```

此前生产代码使用 `#315cdc` 作为主要 accent，因此确实发生了“Lab 选择”和“生产实现”不一致。

## 2. 已直接完成的部分

以下内容不需要重新决策，已经迁移：

- 全局主要 accent：`#315c54` / `#315cdc` → `#217895`；
- Home、Header、Archive、Archive Detail、Now 的主要 accent；
- Hover / Active / Focus 的配套强调色统一为 `#1d3341`；
- accent-soft 状态统一为 `#e1f0f3`；
- 首页状态线、Focus 外框、标签底色和 Selected Work 反色文字中的旧蓝/旧绿色残留；
- Design Baseline 和 Component Contract 中记录的 Light accent。

## 3. 当前验证

- `npm.cmd run build`：通过，11 个页面生成成功；
- Astro：0 errors、0 warnings；保留 2 个来自旧 Lab 脚本的 deprecation hints；
- 生产样式中没有发现旧的主要 accent token；
- Home 实际计算的 accent：`#217895`；
- Archive Detail 实际计算的 accent：`#217895`；
- Archive、Now、About、Contact 实际计算的亮色背景均为 `rgb(247, 249, 251)`；
- About、Contact 实际继承的语义 token 为 B 方案的背景、表面、正文、弱文本、细线和 accent；
- Home 和 Archive Detail 横向溢出：0；
- Archive、Now、About、Contact 横向溢出：0；
- 两个页面控制台：无错误；
- 浏览器截图：
  - [Home / B palette](../../output/playwright/palette-b-home-final.png)
  - [Archive Detail / B palette](../../output/playwright/palette-b-detail-final.png)
  - [Now / B palette](../../output/playwright/palette-b-now-final.png)
  - [Contact / B palette](../../output/playwright/palette-b-contact-final.png)

## 4. 有意保留的颜色边界

主链路已经完成完整 B 亮色迁移。以下颜色仍保留，是因为它们属于你选择暂缓的旧页面或未来主题：

| 范围 | 保留颜色 | 原因 |
|---|---|---|---|
| 旧 `/projects/`、`/works/` 页面 | `#f7f5f0`、`#fffdf8`、`#f0ece4` 等 | 按问题 2 的 B 选择，暂不迁移 |
| 暗色模式 | 尚未建立 | 按问题 3 的 B 选择，亮色回归通过后再处理 |

## 5. 已记录的用户决策

### 问题 1：是否采用 B 的完整中性色板？

- [x] A — 完整采用 B：背景 `#f7f9fb`、表面 `#ffffff`、正文 `#1d3341`、弱文本 `#68808d`、细线 `#d8e2e5`。
- [ ] B — 保留当前冷蓝灰中性色，只采用 B 的 accent；我更建议先选这个，能保留目前网站已经形成的淡蓝氛围。

影响：A 会让网站整体更接近 Lab 截图中的 Quiet Grid；B 只修正最明显的 accent 偏差，页面整体变化更小。

### 问题 2：旧 `/projects/`、`/works/` 页面是否一起换色？

- [ ] A — 一起迁移，保证所有历史路由也使用同一色板。
- [x] B — 暂不迁移；这些页面已经不属于当前主链路，等迁移或删除决定后再处理。我建议选这个。

### 问题 3：是否现在处理暗色模式的 B 色板？

- [ ] A — 现在一起建立暗色 token 映射。
- [x] B — 暂不处理，亮色跨页面回归通过后再做。我建议选这个。

## 6. 已执行结果与下一步

- 已按问题 1 的 A 选择，将当前主链路的亮色中性色板统一为 B；
- 已按问题 2 的 B 选择，未迁移旧 `/projects/`、`/works/` 页面；
- 已按问题 3 的 B 选择，未开始暗色模式；
- Design Baseline 和 Component Contract 已同步更新；
- 下一步是亮色主链路的跨页面回归，而不是继续修改颜色 token。

颜色迁移阶段完成。下一步进入亮色主链路的跨页面回归；如发现实际页面对比度、层级或某个旧页面不协调，再针对具体页面建立新的审计项。
