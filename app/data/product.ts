export const productIdentity = {
  name: "律构集",
  englishName: "Jurissemble",
  mark: "JS",
  stage: "M0 PRODUCT PROTOTYPE",
  description: "开放的法律模块网络：让有边界的法律能力能够被定义、调用、派生、组合和共同维护。",
};

export const workflowCallModes = [
  { code: "ADD", name: "加入项目", detail: "锁定一个版本，在自己的事项空间生成可执行实例。" },
  { code: "COMPOSE", name: "作为步骤组合", detail: "把工作流嵌入更大的项目流程，并连接上下游输入输出。" },
  { code: "FORK", name: "派生自己的版本", detail: "保留来源谱系，针对新法域、团队或工作方法继续修改。" },
  { code: "REFERENCE", name: "精确引用", detail: "引用规范标识和不可变版本，不再依赖脱离上下文的复制粘贴。" },
];

export const workflowLifecycle = [
  { step: "01", name: "发布", detail: "维护者公开工作方法、接口、依赖、验证规则与适用边界。" },
  { step: "02", name: "调用", detail: "使用者锁定版本，把方法加入自己的项目或组合为一个步骤。" },
  { step: "03", name: "执行", detail: "事项事实与客户材料留在私有实例，公开层只承载可复用的方法。" },
  { step: "04", name: "反馈", detail: "执行中发现的缺口转为Issue或Proposal，并说明法律影响。" },
  { step: "05", name: "评审", detail: "维护者按来源、法域、方法和安全边界决定是否合并并发布新版。" },
];

export const workflowSteps = [
  { code: "INTAKE", name: "事项识别", en: "Intake", detail: "界定目标、事实范围、法域、角色和截止时点。" },
  { code: "STATUTE", name: "法条检索", en: "Statute Search", detail: "检索现行规范、效力层级、沿革和适用条件。" },
  { code: "CASE", name: "案例检索", en: "Case Search", detail: "形成检索式、筛选口径、裁判矩阵和分歧识别。" },
  { code: "ANALYSIS", name: "法律分析", en: "Legal Analysis", detail: "连接事实、规范、案例、反方观点与不确定性。" },
  { code: "EVIDENCE", name: "证据审查", en: "Evidence Review", detail: "建立待证事实、证据来源、缺口与核验动作。" },
  { code: "PROCEDURE", name: "程序管理", en: "Procedure", detail: "维护触发条件、期限、动作、责任人和升级点。" },
  { code: "STRATEGY", name: "策略形成", en: "Strategy", detail: "比较方案、约束、成本、风险与决策条件。" },
  { code: "DELIVERY", name: "成果交付", en: "Delivery", detail: "生成文书、清单、报告或谈判方案并留存依据。" },
  { code: "REVIEW", name: "专业复核", en: "Review", detail: "声明复核范围、问题、结论、责任与签发状态。" },
  { code: "LEARNING", name: "复盘更新", en: "Learning", detail: "把结果、偏差和新来源反馈为方法版本。" },
];

export const legalContentTypes = [
  { code: "RESEARCH", name: "法律问题研究", en: "Legal Research", detail: "围绕一个具体law issue维护问题、规则、观点、来源和更新。", state: "可创建" },
  { code: "CONTRACT", name: "合同与条款", en: "Contract & Clause", detail: "维护条款、变量、替代方案、谈判说明和适用边界。", state: "可创建" },
  { code: "DISPUTE", name: "诉讼与争议", en: "Litigation & Dispute", detail: "组织请求权、争点、证据、程序、策略和结果复盘。", state: "规划中" },
  { code: "WORKFLOW", name: "非诉与流程", en: "Procedure & Workflow", detail: "沉淀角色、触发条件、期限、动作、交付物和检查点。", state: "可创建" },
  { code: "TRANSACTION", name: "IPO与商业并购", en: "IPO & M&A", detail: "组合尽调、交易结构、审批、披露、交割与风险分配。", state: "规划中" },
  { code: "COMPLIANCE", name: "合规与出海", en: "Compliance & Cross-border", detail: "按国家、义务、控制、证据与更新周期组织跨境项目。", state: "规划中" },
];

export const productLoop = [
  { step: "01", name: "创建仓库", detail: "一个法律问题、流程或项目，一个清楚的维护边界。" },
  { step: "02", name: "发布版本", detail: "标明法域、截止时点、来源、许可和复核状态。" },
  { step: "03", name: "引用或派生", detail: "锁定精确版本，Fork形成自己的适用版本。" },
  { step: "04", name: "提案与评审", detail: "解释修改影响，由维护者分范围审查、合并和署名。" },
];

export const foundingRepository = {
  owner: "jiaozhu7",
  slug: "construction-legal-engineering",
  title: "建设工程法律工程",
  description: "围绕工程通知与变更，试验法律资料、工作模块、来源、提案和版本怎样在一个仓库中共同维护。",
  path: "/jiaozhu7/construction-legal-engineering",
  visibility: "Public",
  stage: "SCHEMA PREVIEW",
  jurisdictions: ["中国内地", "深圳 / 前海", "香港"],
  topics: ["建设工程", "合同履约", "争议预防"],
  updatedAt: "2026-08-28",
  facts: [["10", "来源线索"], ["2", "工作模块"], ["1", "提案示例"], ["0", "内容Release"]],
};

export const trustDimensions = [
  ["JURISDICTION", "适用法域"], ["AS OF", "法律截止时点"], ["SOURCE", "来源核验"],
  ["REVIEW", "专业复核范围"], ["RIGHTS", "公开与复用权限"], ["VERSION", "不可变引用版本"],
];

export const emptyTopicPreviews = [
  { name: "民商事诉讼", hint: "等待首个公开仓库", code: "LITIGATION" },
  { name: "公司并购", hint: "等待首个公开仓库", code: "M&A" },
  { name: "资本市场", hint: "等待首个公开仓库", code: "CAPITAL" },
  { name: "企业合规", hint: "等待首个公开仓库", code: "COMPLIANCE" },
];
