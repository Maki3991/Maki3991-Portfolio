---
{
  "id": "move-your-lips",
  "order": 1,
  "title": "Move Your Lips",
  "type": "project",
  "status": "completed",
  "visibility": "public",
  "period": {
    "start": "2026-10-10",
    "end": "2026-10-18"
  },
  "summary": "围绕公共场合无法出声输入的问题，完成中文唇语识别应用原型。",
  "role": "负责问题定义、产品范围决策、测试设计",
  "contributions": [
    "根据本人在教室等不能出声的场景中无法使用语音输入的经历，定义项目要探索的问题，并将其保留为待市场验证的假设。",
    "采用纯视觉桌面原型路径，明确实时录制、识别记录、文本复制和个人适配的范围。",
    "与 AI 协作完成应用和记录文档；本人录制测试样本并复核识别结果。"
  ],
  "outcomes": [
    "完成原型：摄像头录制、识别文本复制、本地记录、嘴部录制回放、重新转写和个人适配。",
    "在同素材对照中，个人候选模型 CER 从 55.30% 降至 45.45%；原模型与候选模型均为 0/10 整句完全正确。",
    "中文视觉模型仍未达到稳定识别完整句子的标准。"
  ],
  "evidence": [
    {
      "kind": "public-link",
      "label": "Move Your Lips GitHub 仓库",
      "url": "https://github.com/Maki3991/move-your-lips",
      "supports": "公开源码、研究版使用说明和项目文档"
    }
  ],
  "relatedWorks": [],
  "limitations": [
    "需求来自本人在公共场合的使用经历，尚未通过其他用户访谈或测试验证市场需求。",
    "识别实验基于一位使用者的样本；同素材新句子对照每句仅录制一次，结果不能代表其他用户或不同拍摄条件。",
    "CER 改善只说明字符级变化；候选模型在 10 句新句子对照中仍无整句完全正确，不应据此宣称识别已达到实用水平。",
    "安装需要自行配置上游环境并获取模型权重，尚未在其他人的电脑上验证安装流程。",
    "上游模型有非商业比较或基准测试等许可限制，使用时需遵循对应条款。"
  ],
  "sources": [
    "Move Your Lips GitHub 仓库与 README",
    "docs/product/design-thinking.md",
    "docs/product/prd-mvp-v0.3.md",
    "docs/product/prd-mvp-v0.4.md",
    "docs/evidence.md（2026-10-18）"
  ]
}
---
