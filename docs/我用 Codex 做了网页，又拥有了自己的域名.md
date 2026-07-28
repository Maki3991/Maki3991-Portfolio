---
title: "我用 Codex 做了网页，又拥有了自己的域名"
source: "https://x.com/AdrianPunk115/status/2062804487665029241"
author:
  - "[[@AdrianPunk115]]"
published: 2026-06-05
created: 2026-06-05
description: "这篇教程写给完全没有网站部署经验的人。一、先搞懂 4 个概念你最终要得到的是：plaintexthttps://yourname.com背后其实有 4 层：plaintext本地 HTML 文件↓网站托管平台↓域名↓DNS 解析名词解释：HTML 文件：你电脑里的网页..."
tags:
  - "clippings"
---
![图像](https://pbs.twimg.com/media/HJ_Cqd3bgAAzdU2?format=jpg&name=large)

这篇教程写给完全没有网站部署经验的人。

## 一、先搞懂 4 个概念

你最终要得到的是：

```plaintext
https://yourname.com
```

背后其实有 4 层：

```plaintext
本地 HTML 文件
↓
网站托管平台
↓
域名
↓
DNS 解析
```

**名词解释：**

- **HTML 文件：**你电脑里的网页文件，比如 index.html
- **托管平台：**帮你把网页放到网上，比如 Netlify、Cloudflare Pages、Vercel
- **域名：**你买的网址，比如 [adrianpunk.com](https://adrianpunk.com/)
- **DNS：**把域名指向你网页所在平台的“导航系统”

我自己的流程大概是这样👇：

一开始，我是在 Codex 里让它帮我做了一个 HTML 页面。生成 HTML 之后，我继续让 Codex 帮我部署到 Vercel。于是我注册了 Vercel 账号，把项目部署了上去。Vercel 部署本身很方便，部署成功后会自动生成一个类似这样的地址：

```plaintext
https://xxx.vercel.app
```

理论上，这个地址已经可以发给别人访问了。

但实际使用中，我发现一个问题：Vercel 在国内访问需要VPN。这对于一个想直接发给别人看的网页来说，就不是很方便。

所以我后来换了一个更适合小白、也更适合国内访问的方案：直接用 Cloudflare Pages 部署静态 HTML 网站。

Cloudflare Pages 同样可以托管 HTML 页面，而且部署完成后也会给你一个临时网址。等网站确认能正常访问之后，再在 Cloudflare 上购买自己的域名，并把域名绑定到这个网站上。

最终目标是：

```plaintext
本地 HTML 页面
↓
上传到 Cloudflare Pages
↓
购买自己的域名
↓
绑定域名
↓
别人可以通过你的专属网址访问
```

## 第一步：先把 HTML 部署到 Cloudflare Pages

从这里开始，对于小白来说，Codex可以替你解决很多问题

最稳的做法是：先把你的 HTML 网站部署到 Cloudflare Pages，确认它能正常打开。Cloudflare 会先送你一个临时网址，比如：

```plaintext
https://你的项目名.pages.dev
```

**1\. 准备好你的 HTML 项目文件夹**

假设 Codex 已经帮你生成了一个网页项目。【别担心这一步，codex会全程处理】

你的文件夹大概长这样：

```plaintext
my-website/
├── index.html
├── style.css
├── script.js
└── images/
    ├── 1.png
    └── 2.png
```

其中，index.html必须在最外层

```plaintext
index.html
```

也就是说，打开你的文件夹后，第一眼就应该能看到 index.html，不要再套一层文件夹。

✅正确结构：

```plaintext
my-website/
└── index.html
```

❌错误结构

```plaintext
my-website/
└── another-folder/
    └── index.html
```

如果结构错了，部署后可能会出现空白页、404，或者首页打不开。

**2\. 登录 Cloudflare**

打开 Cloudflare 官网，注册或登录账号。

登录后进入控制台，找到：

![图像](https://pbs.twimg.com/media/HJ-hWSPa4AAk8OE?format=jpg&name=large)

然后点击进入。

Cloudflare 里有很多功能，新手不用管太多。你这一步只需要记住：

**我们要用的是 Pages，不是 Workers，**Pages 更适合部署静态网站，比如 HTML、CSS、JS 页面。

**3\. 创建 Pages 项目**

![图像](https://pbs.twimg.com/media/HJ-jmbSbIAAiKz2?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HJ-jyVHb0AAKCkh?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HJ-j6J7aAAAloyE?format=jpg&name=large)

最小白的方式，就是选择直接拖拽你的文件

它不需要你连接 GitHub，也不需要你会命令行。

**4\. 上传你的网页文件**

点击上传后，把你的整个网站文件夹上传

💡**上传的是包含 index.html 的那一整个文件夹**

**5\. 设置项目名称**

Cloudflare 会让你填写一个项目名称。

这个名字会影响你的临时网址。

例如你填的是：ai-gallery

部署成功后，临时网址可能就是：

```plaintext
https://ai-gallery.pages.dev
```

**6\. 点击部署**

确认文件上传完成后，点击部署

部署成功后，你会看到一个类似这样的地址：

```plaintext
https://项目名.pages.dev
```

**⚠️****⚠️****⚠️****如果你是小白，那么，code解放双手****👇****。**

只需要配合完成授权即可

![图像](https://pbs.twimg.com/media/HJ-mgjlbUAANpRB?format=jpg&name=large)

**7\. 打开临时网址测试**

部署完成后，直接点击 Cloudflare 提供的临时网址。

**建议你分别用：**

- 电脑浏览器
- 手机浏览器
- 微信/浏览器内打开

**你要检查几个地方：**

- 页面能不能打开
- 文字是否正常
- 图片是否显示
- 按钮是否能点
- 排版有没有乱
- 手机上能不能正常看

都测试一下。

如果这些都没问题，说明你的 HTML 网站已经成功部署到 Cloudflare Pages

## 第二步：在 Cloudflare 上购买自己的域名

**1\. 进入 Cloudflare 域名购买页面**

登录 Cloudflare 后，在左侧菜单里找到：Domains - Registations

![图像](https://pbs.twimg.com/media/HJ-44ygaQAAQVtY?format=jpg&name=large)

**2\. 搜索你想买的域名**

在搜索框里输入你想要的域名，比如：

```text
yourname.com
```

如果这个域名没人注册，你就可以购买。

如果已经被别人注册了，Cloudflare 会提示不可用，你就需要换一个名字。

![图像](https://pbs.twimg.com/media/HJ-5adcaIAE-4K9?format=jpg&name=large)

**3\. 域名后缀怎么选？**

域名后缀就是最后面的部分

```plaintext
.com
.ai
.co
.net
.xyz
.site
```

小白优先选：**.com**

因为 .com 最通用，别人也最熟悉。

如果 .com 已经被注册了，可以再考虑其他的

**4\. 域名怎么起名？**

新手选域名时，记住几个原则：

- 短一点
- 好记
- 好拼
- 尽量用英文
- 不要加太多横杠
- 不要太长
- 不要用奇怪缩写

不建议选择域名太长的名字，别人很难记住，也不适合发给客户或朋友。

**5\. 加入购物车并付款**

选好域名后，点击comfirm，进行详情页填写个人信息，并选择支付方式。

![图像](https://pbs.twimg.com/media/HJ-6aB8bgAAiHRZ?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HJ-6w6haIAEKYoI?format=jpg&name=large)

购买时一般会让你选择购买年限，

小白建议：**先买一年**

等以后这个网站真的长期使用，再考虑续费多年。

Cloudflare 的一个好处是，它默认会提供域名隐私保护。也就是说，别人不会轻易通过域名查询看到你的私人注册信息。

**💰****付款前重点确认三件事：**

- 域名拼写有没有错
- 后缀是不是你想要的
- 价格是不是可以接受

域名一旦买错，通常不能随便退款，所以一定要看清楚。

**6\. 购买时不要乱买附加服务**

❌很多平台买域名时会推荐各种套餐

- 网站建设
- 企业邮箱
- SEO 服务
- SSL 证书
- 安全防护
- 高级托管

如果你已经用 Cloudflare Pages 部署网站，这些大部分都不需要。

你现在真正需要的只有**：****✅****域名本身** **✅****DNS 管理** **✅****HTTPS**

**7\. 注意事项**

到这里，你手里应该有两个东西：

- Cloudflare Pages 临时网址：[https://你的项目名.pages.dev](https://xn--6qqv7iiq1bema489k.pages.dev/)
- 刚买的正式域名：[yourname.com](https://yourname.com/)

**域名只是一个名字，网站内容还在 Cloudflare Pages 上。**

你需要通过绑定和 DNS 解析，让这个名字指向你的网站。

## 第三步：把域名绑定到 Cloudflare Pages 项目

登录 Cloudflare 后，找到刚部署的项目，**找到自定义域名设置**

**点击【Set up a custom domain】****👇**

![图像](https://pbs.twimg.com/media/HJ-8wsGbQAASLFQ?format=jpg&name=large)

在输入框里填写你的域名👇

![图像](https://pbs.twimg.com/media/HJ-9ByhaIAASYMq?format=jpg&name=large)

如果你想让带 www 的地址也能访问，再添加一次：[www.yourname.com](https://www.yourname.com/)

🙌🏻建议两个都绑定：

- [yourname.com](https://yourname.com/)
- [www.yourname.com](https://www.yourname.com/)

**Cloudflare 会自动帮你配置 DNS**

只需要按照页面提示操作，完成后会出现类似

```plaintext
类型：CNAME
名称：@
目标：你的项目名.pages.dev
```

**等待域名状态变成 Active**

添加完成后，Cloudflare 会开始验证域名和配置 HTTPS。

你可能会看到状态类似：

```plaintext
Pending
Initializing
Verifying
Active
```

刚添加的时候显示 Pending 很正常。

一般几分钟到几十分钟会生效。

有时 DNS 全球同步会慢一点，可以等到 24 小时内。

最终你要看到：**Active/绑定成功**

🎉这一步完成后，你已经真正拥有了一个可以公开访问的网站。

## 关于作者

**Punk**｜中科大 MBA｜被大厂优化，在 X 上重新进化｜HerName 首席设计师｜AI提示词｜分享小白能看懂、复制能上手的 AI / Web3 / 搞钱方法｜

[@adrianpunk115](https://x.com/@adrianpunk115)