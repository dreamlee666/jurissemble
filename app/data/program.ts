export const programme = {
  name: "Open Legal Production",
  shortName: "OLP",
  version: "Research Programme · v0.1",
  asOf: "2026-08-28",
  currentStage: "Study 0 · Scoping review preparation",
  publicCorpus: 0,
};

export const evidenceStates = [
  { code: "VERIFIED", name: "已核验事实", detail: "来源和表述已经核对，但不自动证明理论命题。", tone: "green" as const },
  { code: "SUPPORTED INFERENCE", name: "有支持的推论", detail: "由多项资料共同支持，仍需说明推论边界。", tone: "green" as const },
  { code: "HYPOTHESIS", name: "可证伪假设", detail: "已经给出可能推翻它的观测或实验结果。", tone: "amber" as const },
  { code: "SPECULATIVE", name: "探索性设想", detail: "用于寻找方向，不进入结论或产品承诺。", tone: "neutral" as const },
  { code: "PRIOR-ART RISK", name: "先行研究风险", detail: "已有研究可能覆盖该主张，需要缩小创新边界。", tone: "amber" as const },
];

export const productionStack = [
  { level: "L5", name: "Project / Matter", cn: "项目与事项", detail: "完整客户目标、最终成果与决策责任。", objects: "Objective · Decision Gate · Final Decision" },
  { level: "L4", name: "Work Package", cn: "工作包", detail: "可由一个责任主体承接、执行和验收的具体工作。", objects: "Task · Assignee · Output · Acceptance" },
  { level: "L3", name: "Legal Work Interface", cn: "法律工作接口", detail: "在交接边界保存必要上下文、依赖、权限、复核与责任。", objects: "Context · Dependency · Review · Decision Rights" },
  { level: "L2", name: "Legal Capability", cn: "法律能力", detail: "可跨事项复用的Module、Pattern、Playbook或推理能力。", objects: "Module · Pattern · Playbook · Inference" },
  { level: "L1", name: "Legal Knowledge", cn: "法律知识", detail: "规则、案例、证据、权威来源和概念。", objects: "Rule · Case · Evidence · Authority · Concept" },
];

export const interfaceDimensions = [
  ["FACT", "事实背景", "执行者必须知道哪些事实，哪些仍然未知"],
  ["NORM", "规范背景", "法域、时点、权威来源及解释冲突"],
  ["STRATEGY", "战略背景", "客户目标、优先级、容忍度和不可公开考量"],
  ["TIME", "时间背景", "触发、期限、顺序和信息有效时间"],
  ["DEPENDENCY", "依赖关系", "前置工作、并行工作和下游整合点"],
  ["UNCERTAINTY", "不确定性", "未知、假设、分歧及升级条件"],
  ["VERIFY", "验证要求", "权威标准、复核层级和验收测试"],
  ["ACCESS", "保密与访问", "材料分类、使用许可和AI处理权限"],
  ["RESPONSIBILITY", "责任与决策权", "执行人、复核人和最终决策人"],
] as const;

export const constructs = [
  { code: "C01", name: "Legal Work Interface", cn: "法律工作接口", detail: "研究跨人员、组织或Human–AI边界时，哪些信息和责任必须随工作一起移动。" },
  { code: "C02", name: "Legal Modularizability", cn: "法律工作可模块化程度", detail: "衡量一项工作能否在可控质量、整合成本和责任条件下被独立执行与重组。" },
  { code: "C03", name: "Integration Knowledge", cn: "整合知识", detail: "识别如何拆分、哪些判断不能下放、在哪里复核以及怎样重新组合的专家知识。" },
];

export const hypotheses = [
  ["H1", "接口中介", "分解本身不必然改善表现；接口质量可能是关键中介。"],
  ["H2", "上下文可编码性", "越能明确表达必要上下文，工作越可能被模块化。"],
  ["H3", "输出可验证性", "越能客观验收，澄清和返工越可能减少。"],
  ["H4", "战略耦合", "战略耦合越强，结构化接口的收益可能越弱。"],
  ["H5", "责任边界分离", "执行可被分配，不代表专业责任同步转移。"],
  ["H6", "整合知识", "专家优势可能主要体现在拆分和重组，而非单点规则记忆。"],
  ["H7", "接口适配", "信息传递、概念翻译和利益转换需要不同强度的接口。"],
  ["H8", "AI互补", "AI可能扩展执行边界，但仍需显式复核与决策责任。"],
] as const;

export const studies = [
  { id: "S0", title: "Scoping Review & Prior Art", cn: "范围综述与先行研究", status: "PREPARING", detail: "冻结检索协议、完成正式数据库检索、筛选和创新边界。" },
  { id: "S1", title: "Expert CTA", cn: "专家认知任务分析", status: "PILOT PLANNED", detail: "从具体委派事件中识别Decision Point、接口信息和整合判断。" },
  { id: "S2", title: "Delegation Cases", cn: "成功与失败委派对照", status: "PLANNED", detail: "比较澄清、返工、遗漏、责任漂移和整合成本。" },
  { id: "S3", title: "Construct Development", cn: "构念与量表开发", status: "PLANNED", detail: "检验Legal Modularizability的维度、信度和区分效度。" },
  { id: "S4", title: "Design Science Artifact", cn: "Legal Task Contract", status: "SCHEMA DRAFT", detail: "把候选接口维度转化为可检查、可版本化的任务契约。" },
  { id: "S5", title: "Controlled Experiment", cn: "对照实验", status: "NOT STARTED", detail: "比较传统Word/邮件交接与结构化接口。" },
  { id: "S6", title: "Cross-domain Replication", cn: "跨领域复制", status: "NOT STARTED", detail: "检验建设工程之外的适用性和领域边界。" },
];

export const researchGates = [
  { id: "G1", name: "创新性边界", status: "IN PROGRESS", detail: "模块化本身不是新颖主张；正在核验法律特定接口与重组缺口。" },
  { id: "G2", name: "构念有效性", status: "PENDING", detail: "等待专家访谈、编码稳定性和失败案例检验。" },
  { id: "G3", name: "外部有效性", status: "PENDING", detail: "等待第二法律领域复制。" },
  { id: "G4", name: "因果效用", status: "PENDING", detail: "等待Task Contract对照实验。" },
  { id: "G5", name: "治理可行性", status: "PENDING", detail: "等待小规模权限、责任和协作实验。" },
];

export const programmePlanes = [
  { code: "PUBLIC", name: "Public Research Registry", cn: "公开研究注册层", detail: "公开研究问题、主张、证据、研究状态、结果和修订。" },
  { code: "LAB", name: "Artifact Lab", cn: "研究构件实验室", detail: "使用合成或去标识数据检查Task Contract、工作包和整合机制。" },
  { code: "PRIVATE", name: "Permissioned Workbench", cn: "私有研究工作台", detail: "未来在伦理和授权到位后处理访谈、编码与实验数据。" },
  { code: "VAULT", name: "Encrypted Evidence Vault", cn: "隔离证据库", detail: "原始Matter、身份映射、录音和授权不进入公共仓库。" },
];

export const taskContractGroups = [
  { code: "PURPOSE", name: "目的与问题", fields: "objective · question · required_outputs" },
  { code: "CONTEXT", name: "必要上下文", fields: "factual · normative · strategic · temporal" },
  { code: "BOUNDARY", name: "边界与依赖", fields: "assumptions · dependencies · confidentiality · ai_permission" },
  { code: "QUALITY", name: "质量与不确定性", fields: "authority_standard · uncertainty_reporting · acceptance_tests" },
  { code: "ACCOUNTABILITY", name: "复核与责任", fields: "assignee · reviewer · review_level · decision_owner" },
];

export const stateDimensions = [
  ["CLAIM", "主张状态", "VERIFIED · SUPPORTED · HYPOTHESIS · SPECULATIVE · PRIOR-ART RISK"],
  ["STUDY", "研究状态", "PLANNED · ETHICS PENDING · PILOT · COLLECTING · ANALYSING · COMPLETE"],
  ["ARTIFACT", "构件成熟度", "CONCEPT · SCHEMA DRAFT · PILOT TESTED · CAUSAL TESTED · REPLICATED"],
  ["ACCESS", "可见性", "RESTRICTED · CONTROLLED · DE-IDENTIFIED · PUBLIC · WITHDRAWN"],
] as const;

export const participationPaths = [
  { code: "INCIDENT", name: "关键委派事件", detail: "还原一次成功、失败或高返工的具体交接，而不是直接总结经验。" },
  { code: "COUNTERCASE", name: "反例与失败案例", detail: "指出候选接口不能解释、不能简化或反而增加负担的情形。" },
  { code: "CODING", name: "独立编码", detail: "使用同一版代码本独立标注，并保留无法消除的专业分歧。" },
  { code: "EXPERIMENT", name: "任务契约实验", detail: "在统一材料下比较传统委派和结构化接口的结果。" },
];
