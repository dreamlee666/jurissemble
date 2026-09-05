# Jurissemble · 律构集

> Open Legal Module Network · 开放法律模块网络

> [!IMPORTANT]
> **AI生成披露：**截至当前版本，本仓库中实际落盘的代码、结构化规范、网站页面、测试和整理性文字，均由 **OpenAI Codex / ChatGPT** 根据项目发起人 `dreamlee666` 提供的构想、资料、连续指令与纠偏生成。`dreamlee666` 是项目发起人和人类决策者，并对内容取舍与公开发布承担最终责任；AI不具有作者资格、律师执业资格或责任能力，任何法律内容仍须由具备资格的人独立核验。

Jurissemble 是一个面向法律专业人员的开放协作产品原型：把有边界的法律工作能力定义为可版本化、可发现、可精确引用、可派生、可组合、可审查的 `Legal Module`。

当前版本为 **M0 Research Prototype**。通过结构校验不代表法律正确、同行已经审查、适用于具体事项或可以由 AI 自动执行。

**公开审阅版：** [https://dreamlee666.github.io/jurissemble/](https://dreamlee666.github.io/jurissemble/)<br>
该GitHub Pages站点用于稳定分享核心产品模型、项目档案和模块样本；完整交互原型与未来社区后端采用独立部署轨道。

## 给评估者的五分钟路径

如果你从研究生/博士项目、法律科技、知识工程、产品或开源协作角度评估本项目，建议按以下顺序：

1. 打开[项目档案](https://dreamlee666.github.io/jurissemble/dossier/)，查看研究问题、FLC+D架构、系统贡献和已知限制；
2. 检查[`case-law-research`模块](https://dreamlee666.github.io/jurissemble/module/)的用途、接口、来源、复核和版本边界；
3. 阅读[`spec/`](spec/)并运行`pnpm spec:validate`，核验三个不同模块化程度的合成样本；
4. 运行`pnpm test`，复现网站构建与公开真实性边界测试；
5. 通过[结构化反馈入口](https://github.com/dreamlee666/jurissemble/issues/new?template=peer-feedback.yml)提出误解点、边界问题或反例。

项目的核心工作问题是：**法律工作能否在不丢失事实来源、法域时点、专业判断、异议和责任边界的前提下，被版本化、复用、组合与共同维护？** 当前回答是一套可运行、可检查、可否证的研究原型，而不是已经证实的行业标准。

## 核心对象

- `Repository`：共同维护模块、来源、测试、Proposal 和 Release 的协作容器；
- `Legal Module`：具有用途、非用途、接口、方法、依赖、验证、谱系和权利声明的可复用能力；
- `Release`：不可原地覆盖的模块版本，可按 `owner/module@version` 精确引用；
- `Project`：私有地锁定和组合公共模块版本；
- `Matter`：未来承载客户事实、文件、证据、策略和运行状态的私有实例。

```text
Public Repository → Legal Module → immutable Release
                                      ↓ ADD / REFERENCE / FORK / COMPOSE
                               Private Project → Matter
```

## 仓库内容

- `app/`：Jurissemble 多页面产品原型；
- `spec/`：Legal Module Research Schema V0.1、验证器和高/中/低模块化样本；
- `tooling/legal-module-intake/`：把本地事项材料整理为私有事项包和待审公共模块候选的安全工作流；
- `docs/`：架构、许可、治理、安全边界和路线图；
- `tests/`：页面和构建验证；
- `examples/`：仅使用虚构、公开或去客户化数据的示例。

建筑工程只是 `jiaozhu7` 账号下的第一个参考仓库，不是网站的主题边界。

## 本地运行

需要 Node.js `>=22.13.0` 与 pnpm。

```bash
pnpm install
pnpm dev
pnpm test
```

校验 Legal Module 样本：

```bash
pnpm spec:validate
```

可选环境变量：`NEXT_PUBLIC_SITE_URL`，用于生成社交分享元数据的绝对网址。复制 `.openai/hosting.example.json` 并由自己的部署环境写入项目标识；不要提交真实部署凭据。

## 许可

本仓库采用分层许可，而不是用一个许可证覆盖所有对象：

| 内容 | 许可 |
|---|---|
| 网站代码、脚本、验证器 | Apache-2.0 |
| 原创规范、文档、公开 Legal Module 示例 | CC-BY-4.0 |
| Schema 字段和基础元数据 | CC0-1.0 |
| 官方法律文件 | 不主张平台著作权，按来源状态记录 |
| 第三方材料 | 仅按原许可或 `REFERENCE_ONLY` 使用 |
| 私有 Project、Matter 和客户资料 | 不公开、不因使用本项目获得许可 |

详见 [LICENSE](LICENSE)、[LICENSES/README.md](LICENSES/README.md) 和 [docs/licensing.md](docs/licensing.md)。

## 贡献与安全边界

提交贡献前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 与 [SECURITY.md](SECURITY.md)。公共区域禁止提交客户身份、具体事项事实、合同、证据、策略、律师意见、通信、执业证件或未经许可的第三方数据库内容。

发现疑似泄密、凭据暴露或安全问题时，不要创建公开 Issue，请按 `SECURITY.md` 的非公开路径处理。

## 项目状态

- 当前没有真实社区账号、公共 Registry 写入、私有事项存储或文件上传；
- 页面交互只生成本地预览；
- 示例模块是结构和交互样本，不构成针对具体事项的法律意见；
- 对外品牌仍应在正式商业使用前完成商标和域名专项核验。

欢迎通过 Issue 讨论结构问题，通过 Pull Request 改进代码、Schema、文档和虚构示例。

## 署名与AI生成披露

项目发起账号为[`dreamlee666`](https://github.com/dreamlee666)，站内贡献者身份为`jiaozhu7`。截至当前版本，仓库中的代码、规范、网站页面、测试和整理性文字均由OpenAI Codex / ChatGPT在发起人的持续指令与纠偏下生成。发起人提供研究问题、原始构想、参考材料、方向选择和发布决定。机器输出本身不作为学术证据或法律结论；来源核验、研究判断、专业审查和最终发布责任必须由人承担。

