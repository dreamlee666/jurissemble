export const legalDisclaimer = "结构示例，不构成针对具体事项的法律意见，也不得作为已核验法律结论引用。";

export const founder = {
  username: "jiaozhu7",
  role: "创始贡献者 · Maintainer",
  bio: "建设工程法律工程仓库的创建者。建设工程只是平台上的第一个账号仓库，不是平台的内容边界。",
};

export const repositoryIdentity = {
  owner: "jiaozhu7",
  slug: "construction-legal-engineering",
  path: "/jiaozhu7/construction-legal-engineering",
  title: "建设工程法律工程",
  description: "jiaozhu7用于验证法律单元、模块、提案、评审与版本组合的首个示范仓库。",
  release: "v0.1.0-alpha",
  releaseKind: "Schema Preview",
  visibility: "Public",
  license: "License policy pending",
  updatedAt: "2026-08-28",
  boundary: "这是jiaozhu7创建的第一个示范仓库；平台面向全部法律领域。",
};

export type ObjectDependency = { objectId: string; revisionId: string; label: string };

export const noticeObjects: ObjectDependency[] = [
  { objectId: "CN.CONSTRUCTION.NOTICE.FACT.001", revisionId: "rev_notice_fact_001", label: "可能触发通知审查的项目事件" },
  { objectId: "CN.CONSTRUCTION.NOTICE.ISSUE.001", revisionId: "rev_notice_issue_001", label: "事件是否进入合同通知机制" },
  { objectId: "CN.CONSTRUCTION.NOTICE.SOURCE.001", revisionId: "rev_notice_source_001", label: "项目通知条款来源锚点" },
  { objectId: "CN.CONSTRUCTION.NOTICE.PROPOSITION.001", revisionId: "rev_notice_001", label: "通知义务判断框架" },
  { objectId: "CN.CONSTRUCTION.NOTICE.ACTION.001", revisionId: "rev_notice_action_002", label: "制作、复核并发送项目通知" },
  { objectId: "CN.CONSTRUCTION.NOTICE.EVIDENCE.001", revisionId: "rev_notice_evidence_001", label: "通知送达与版本留痕" },
];

export const noticeModule = {
  moduleId: "CN.CONSTRUCTION.MODULE.NOTICE",
  slug: "notice",
  title: "项目通知工作流",
  version: "0.1.0-alpha",
  state: "schema_preview",
  purpose: "演示如何把事件、问题、命题、行动和证据规格组织成可复用工作流；不能直接用于真实项目。",
  inputs: ["事件事实", "适用合同及版本", "相关主体", "项目阶段", "已知时间节点"],
  outputs: ["判断问题清单", "待核验期限", "通知草稿任务", "送达动作", "证据包", "未决争点"],
  workflow: ["Trigger", "Identify Rule", "Calculate Deadline Inputs", "Prepare", "Deliver", "Preserve Evidence", "Review Consequence"],
  dependencies: noticeObjects,
  tests: ["缺少合同版本时不得计算期限", "事实事件不直接生成实体结论", "来源未核验时不得进入内容Release", "发送动作必须产生证据输出"],
};

export const propositionObject = {
  objectId: "CN.CONSTRUCTION.NOTICE.PROPOSITION.001",
  revisionId: "rev_notice_001",
  objectType: "Proposition",
  knowledgeKind: "legal_interpretation",
  title: "通知义务判断框架",
  purpose: "判断一个工程事件是否需要进入通知机制的专业审查，而不是直接给出必须通知的结论。",
  summary: "事件发生后，先锁定适用合同和来源，再分别判断触发条件、主体、形式、期限、送达及后果。",
  contentStage: "SCHEMA_EXAMPLE",
  sourceStatus: "MISSING",
  maintenanceStatus: "NEEDS_REVIEW",
  practiceStatus: "NOT_USED",
  machineOrigin: "HUMAN",
  scope: { 法域: "待项目填写", 截止时点: "待核验", 合同体系: "待输入", 项目阶段: "履约阶段", 适用主体: "通知发出方、通知接收方" },
  interface: { 输入: "事件事实、适用合同版本、参与主体、已知时间", 输出: "七项审查问题和未知项", 前置条件: "必须先取得合法且版本明确的合同文本" },
  content: { 触发: "出现可能关联通知机制的项目事件", 动作: "启动七项判断，不直接输出实体结论", 检查项: "合同版本、触发条件、主体、形式与内容、起算点与期限、送达方式、未履行后果", 期限: "source_defined", 例外: "以已核验合同文本、有效修改及适用规则为准" },
  source: { id: "DEMO.CONTRACT.NOTICE.CLAUSE.001", title: "项目适用合同中的通知条款", pinpoint: "待在真实项目中填写合同名称、版本、条款号及原文位置", authority: "contractual", status: "MISSING", copyright: "仅展示元数据" },
  contestability: { counterposition: "部分事件可能不触发该合同机制，或后果受弃权、实际损害等因素影响", uncertainty: "interpretation_required", unknowns: "期限、有效送达方式和失权后果均待来源核验" },
  relations: [
    ["triggered_by", "CN.CONSTRUCTION.NOTICE.FACT.001", "事实事件触发框架，但不预设结论"],
    ["supported_by", "CN.CONSTRUCTION.NOTICE.SOURCE.001", "具体判断必须回到适用合同来源"],
    ["requires", "CN.CONSTRUCTION.NOTICE.ACTION.001", "完成判断后才可能进入通知准备动作"],
  ],
  owner: "jiaozhu7",
  contributors: ["jiaozhu7"],
  governance: { access: "public_metadata", license: "PENDING", rights: "来源文本权利状态待确认" },
  requiredReviews: [
    { scope: "legal_meaning", status: "NOT_STARTED", requirement: "检查命题是否准确保留条件、例外和不确定性" },
    { scope: "source", status: "NOT_STARTED", requirement: "补齐并核验合同版本、精确条款位置和效力" },
    { scope: "structure", status: "NOT_STARTED", requirement: "检查输入、输出、关系和版本依赖是否完整" },
    { scope: "rights", status: "NOT_STARTED", requirement: "确认来源文本与衍生成果的使用权限" },
    { scope: "practice", status: "NOT_STARTED", requirement: "在去标识化场景中验证可执行性并记录反馈" },
  ],
  assumptions: ["尚未输入特定项目合同和事实", "不存在已核验的统一期限"],
  taxonomyGaps: ["不同示范文本和国际合同体系的字段映射尚待研究"],
  tests: ["TEST.NOTICE.NO_PREMATURE_CONCLUSION.001", "TEST.NOTICE.SOURCE.001"],
  canonicalReference: "https://jurissemble.example/jiaozhu7/construction-legal-engineering/objects/CN.CONSTRUCTION.NOTICE.PROPOSITION.001?revision=rev_notice_001",
  exportAlias: "legal://jiaozhu7/construction-legal-engineering/objects/CN.CONSTRUCTION.NOTICE.PROPOSITION.001#rev_notice_001",
};

export const proposal = {
  id: "CP-001",
  title: "把送达记录加入通知动作的必要输出",
  author: "jiaozhu7",
  state: "EXAMPLE",
  targetObject: "CN.CONSTRUCTION.NOTICE.ACTION.001",
  baseRevision: "rev_notice_action_001",
  proposedRevision: "rev_notice_action_002",
  reason: "演示一次修改如何同时说明文本、范围、来源、权利、机器来源和下游影响；它尚未进入真实合并流程。",
  diff: [
    ["Text", "把发送动作扩展为复核定稿版本、按已核验方式发送并登记记录。"],
    ["Scope", "仅在合同版本和送达方式已核验后适用。"],
    ["Provenance", "拟加入实践经验来源；该来源不是法律规范，当前仍待核验。"],
    ["Rights", "来源文本和示例字段的可再发布权限仍需确认。"],
    ["Legal Effect", "不新增实体义务结论，只演示操作层的证据留存输出。"],
    ["Machine Status", "本示例标记为HUMAN；未来机器辅助修改必须披露。"],
    ["Dependencies", "Module如采纳该修订，应锁定ActionStep和EvidenceSpec的新revision。"],
  ],
  reviewRequirements: [
    ["legal_meaning", "NOT_STARTED", "确认没有把操作建议误写成统一法律义务"],
    ["source", "NOT_STARTED", "核验合同送达要求和精确出处"],
    ["structure", "NOT_STARTED", "检查输出字段、依赖和测试"],
    ["rights", "NOT_STARTED", "确认示例内容的公开许可"],
  ],
  mergeMeaning: "即使未来合并，也只表示维护者将修订纳入仓库；不代表平台宣布唯一正确答案。",
};

export const alphaRelease = {
  tag: "v0.1.0-alpha",
  kind: "SCHEMA PREVIEW",
  title: "通知工作流结构预览版",
  publishedAt: "2026-08-28",
  maintainer: "jiaozhu7",
  module: { id: noticeModule.moduleId, version: noticeModule.version },
  objects: noticeObjects,
  changes: ["展示最小安全复用单元和来源层的分离", "展示九组共同外壳与多维状态", "展示法律语义Diff和待复核范围", "展示Project Manifest的精确版本锁定"],
  limitations: ["这是Schema Preview，不是法律内容Release", "全部示例来源均未达到VERIFIED", "CP-001只是界面与流程示例，未合并", "许可规则和专业复核均未完成", "不得用于真实项目决策"],
  canonicalReference: "https://jurissemble.example/jiaozhu7/construction-legal-engineering/releases/v0.1.0-alpha",
};

export const projectManifest = {
  id: "qianhai-notice-playbook",
  title: "前海项目通知工作手册",
  label: "公开结构蓝图 · 非真实项目",
  description: "演示项目如何锁定Schema Preview、Module和LegalUnit revision；不包含真实客户事实，也不表示依赖已达到生产复用标准。",
  dependencies: [["Schema Preview", "jiaozhu7/construction-legal-engineering", "v0.1.0-alpha"], ["Module", "CN.CONSTRUCTION.MODULE.NOTICE", "0.1.0-alpha"], ["LegalUnit", "CN.CONSTRUCTION.NOTICE.PROPOSITION.001", "rev_notice_001"], ["LegalUnit", "CN.CONSTRUCTION.NOTICE.ACTION.001", "rev_notice_action_002"]],
  privateFields: ["客户与项目身份", "合同全文和专用条款", "具体事件事实", "金额和期限", "内部诉讼或谈判策略", "真实通知和证据文件"],
  updatePolicy: "manual_review",
  lockNote: "底层仓库后续产生新版本时，本项目仍保持当前锁定内容；升级必须由项目维护者审查。",
};

export const collaborationSteps = [
  ["01", "Create", "把一个明确法律问题按共同外壳写成草稿"],
  ["02", "Assess", "检查粒度、边界、来源、权利和不确定性"],
  ["03", "Reuse", "引用精确revision，组合进Module或Project"],
  ["04", "Propose", "用法律语义Diff提交有理由的修改"],
  ["05", "Review", "按专业含义、来源、结构、权利和实践分别复核"],
  ["06", "Release", "只有通过门槛的内容才进入不可变Release"],
];

export const compositionPatterns = [
  { code: "CLAUSE", name: "合同条款包", formula: "ClausePattern + Proposition + Variables + Alternatives", description: "把文字、适用条件、变量、替代方案和依据一起维护。" },
  { code: "ISSUE", name: "法律问题研究", formula: "IssueFrame + Proposition + Argument + EvidenceSpec", description: "把问题拆成规则、论证、证据需求和分歧观点。" },
  { code: "WORKFLOW", name: "非诉或履约流程", formula: "FactPattern + ActionStep + EvidenceSpec", description: "按角色、触发、期限输入、交付物和证据要求组织。" },
  { code: "STRATEGY", name: "诉讼或谈判策略", formula: "Module(Objective + LegalUnit@Revision[] + Options)", description: "策略依赖事实和目标，因此属于Module而不是最小原子。" },
  { code: "PROJECT", name: "完整法律项目", formula: "Repository@Release[] + PrivateLocalOverlay", description: "锁定多个仓库版本，组合出海、并购、IPO、诉讼或合规项目。" },
];
