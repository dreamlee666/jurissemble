export const reuseLayers = [
  { level: "L0", name: "SourceAnchor", cn: "来源锚点", description: "独立保存法规、案例、合同或项目材料的版本、效力、精确位置和使用权限。来源不是法律结论。" },
  { level: "L1", name: "LegalUnit", cn: "知识交换外壳", description: "为知识对象保存身份、适用性、来源、权利和版本；不再被视为法律生产的最小工作单元。" },
  { level: "L2", name: "Module", cn: "可复用能力", description: "组合多个知识对象形成跨事项能力；进入具体事项时仍需Work Package和Legal Work Interface。" },
  { level: "L3", name: "Repository", cn: "维护与治理边界", description: "由账号或组织拥有，集中管理模块、权限、提案、评审规则和不可变发布。" },
  { level: "L4", name: "ProjectManifest", cn: "项目组合清单", description: "锁定多个仓库和修订，叠加私有事实，形成合同、诉讼、并购、IPO或合规项目。" },
];

export const unitEnvelope = [
  { key: "identity", name: "身份", fields: "unit_id · unit_type · title · revision_id", why: "稳定识别同一单元，并把每次修改保存为不可混淆的修订。" },
  { key: "applicability", name: "适用性", fields: "jurisdiction · as_of · subject · transaction · stage", why: "先说明在哪个法域、时点、主体和程序阶段可能适用。" },
  { key: "interface", name: "接口", fields: "inputs · outputs · preconditions · variables", why: "明确它需要什么、产出什么，才能被其他模块安全组合。" },
  { key: "substance", name: "实质内容", fields: "statement · conditions · exceptions · consequences", why: "让结论、成立条件、例外和后果始终一起移动。" },
  { key: "provenance", name: "来源链", fields: "source_anchor · pinpoint · authority · derivation", why: "区分原始来源、律师解释和实践经验，并能回到精确出处。" },
  { key: "contestability", name: "可争议性", fields: "counterpositions · conflicts · uncertainty · rationale", why: "法律分歧不能被一个绿色徽章抹平，应保留反论和判断空间。" },
  { key: "dependencies", name: "依赖关系", fields: "relation_type · target_id · target_revision · rationale", why: "组合引用明确版本；关系本身也是可追溯、可版本化的主张。" },
  { key: "governance", name: "治理", fields: "owner · review_scopes · access · license · rights", why: "说明谁负责、谁复核了什么，以及是否允许引用、复制和再发布。" },
  { key: "validation", name: "验证", fields: "tests · practice_status · last_checked · maintenance", why: "记录结构测试、实践反馈和维护状态，不伪装成结果保证。" },
];

export const legalUnitFamilies = [
  { code: "COGNITION", name: "法律认知单元", description: "表达问题、命题和论证，是法律分析可引用的最小组成。", types: [["IssueFrame", "问题框架", "问题、要件、举证责任、事实缺口与裁量边界"], ["Proposition", "法律命题", "条件、主体、权利义务、例外、后果与不确定性"], ["Argument", "论证单元", "主张、前提、来源、推理链、反论与限制"]] },
  { code: "WORK", name: "法律工作单元", description: "表达律师可执行的文本、动作和证据要求。", types: [["ClausePattern", "条款模式", "原创或获许可文本、变量、替代方案和谈判边界"], ["ActionStep", "行动步骤", "角色、触发、期限输入、动作、输出与失败处理"], ["EvidenceSpec", "证据规格", "证明对象、证据类型、真实性、时间戳与保全要求"]] },
  { code: "VALIDATION", name: "验证与反馈单元", description: "让抽象规则接受事实场景、边界测试和真实结果的持续校验。", types: [["FactPattern", "事实模式", "参与者、事件、时间和关键事实，不预先混入法律评价"], ["TestCase", "法律测试", "事实输入、预期触发、边界条件和必须人工判断之处"], ["OutcomeRecord", "结果记录", "裁判、交易或项目结果，以及对既有单元的反馈"]] },
  { code: "SOURCE", name: "独立来源层", description: "SourceAnchor位于L0，为LegalUnit提供可核验依据，但它本身不是LegalUnit。", types: [["SourceAnchor", "来源锚点", "来源ID、版本、精确位置、效力、权威和使用权限"]] },
];

export const extensionScopes = [
  { code: "core.*", name: "共同内核", description: "所有领域共同理解的身份、适用性、接口、来源、争议、依赖、治理和验证字段。", example: "core.jurisdiction · core.source_status" },
  { code: "type.*", name: "类型字段", description: "由Proposition、IssueFrame、ActionStep等对象类型定义的字段。", example: "proposition.modality · issue.elements" },
  { code: "domain.*", name: "专业扩展", description: "建设工程、诉讼、并购等领域在独立命名空间扩展，不污染共同内核。", example: "construction.critical_path · ma.closing_condition" },
];

export const stableReferenceExample = `https://jurissemble.example/jiaozhu7/construction-legal-engineering
  /releases/v0.1.0-alpha
  /objects/CN.CONSTRUCTION.NOTICE.PROPOSITION.001
  ?revision=rev_notice_001`;
export const exportAliasExample = "legal://jiaozhu7/construction-legal-engineering@v0.1.0-alpha/objects/CN.CONSTRUCTION.NOTICE.PROPOSITION.001#rev_notice_001";

export const compositionRecipes = [
  { code: "CLAUSE", name: "合同条款包", formula: "ClausePattern + Proposition[] + Variables + Alternatives + SourceAnchor[]", example: "条款文字与适用条件、谈判变量、替代文本和依据共同发布。" },
  { code: "ISSUE", name: "法律问题研究", formula: "IssueFrame + Proposition[] + EvidenceSpec[] + Argument[] + OutcomeRecord[]", example: "争点研究可被备忘录、诉讼策略和尽调模块引用。" },
  { code: "WORKFLOW", name: "非诉或履约流程", formula: "FactPattern[] + ActionStep[] + ClausePattern[] + EvidenceSpec[]", example: "流程按角色、触发、期限输入、交付物和证据要求组合。" },
  { code: "STRATEGY", name: "诉讼或谈判策略模块", formula: "Objective + Assumptions + LegalUnit@Revision[] + Options + StopConditions", example: "策略依赖目标与事实，属于Module，不作为脱离项目的原始法律单元。" },
  { code: "PROJECT", name: "完整法律项目", formula: "Repository@Release[] + Module@Revision[] + PrivateLocalOverlay", example: "出海、并购或IPO项目锁定多个仓库版本，再叠加客户事实。" },
];

export const relationGroups = [
  { name: "权威与解释", values: ["supported_by", "interprets", "limits", "exception_to", "conflicts_with", "supersedes"] },
  { name: "事实与行动", values: ["triggered_by", "requires", "produces", "proves", "raises_issue", "results_in"] },
  { name: "复用与组合", values: ["depends_on", "imports", "includes", "alternative_to", "overrides", "compatible_with"] },
];

export const granularityChecks = [
  ["01", "一个明确用途", "不能同时试图解决整份合同、整个案件或整项交易。"],
  ["02", "可独立理解", "读者不依赖作者记忆，也能知道它说什么和为什么。"],
  ["03", "适用边界完整", "法域、时点、主体、场景和程序阶段能够判断。"],
  ["04", "输入输出明确", "组合者知道需要提供什么，以及会得到什么。"],
  ["05", "来源可核验", "事实性和规范性主张能回到合法、精确的来源位置。"],
  ["06", "分歧可表达", "反论、例外、不确定性和未知不会在抽取时消失。"],
  ["07", "可单独修订", "修改它不必复制或重写整个上层文档。"],
  ["08", "可测试与反馈", "至少存在边界用例，实践结果能够回流但不篡改历史。"],
];

export const lifecycle = [
  { state: "SCHEMA_EXAMPLE", name: "结构示例", description: "只证明数据结构和页面交互，不可当作法律内容发布。" },
  { state: "DRAFT", name: "草稿", description: "作者持续修改，尚不可作为稳定依赖。" },
  { state: "PROPOSED", name: "待审提案", description: "冻结本次修订，说明理由、来源和影响范围。" },
  { state: "REVIEWED", name: "完成所需复核", description: "仅代表已列明的复核范围完成，不等于法律真理。" },
  { state: "RELEASED", name: "内容发布", description: "进入不可变Release，可被其他项目锁定引用。" },
];

export const stateDimensions = [
  { name: "内容阶段", values: "SCHEMA_EXAMPLE · DRAFT · PROPOSED · REVIEWED · RELEASED" },
  { name: "来源状态", values: "MISSING · ANCHORED · VERIFIED · STALE" },
  { name: "维护状态", values: "ACTIVE · NEEDS_REVIEW · SUPERSEDED · WITHDRAWN" },
  { name: "实践状态", values: "NOT_USED · PILOT_USED · FIELD_FEEDBACK" },
  { name: "机器来源", values: "HUMAN · AI_ASSISTED · MACHINE_GENERATED" },
  { name: "复核范围", values: "legal_meaning · source · structure · rights · practice" },
];

export const legalUnitExample = `unit_id: CN.CONSTRUCTION.NOTICE.PROPOSITION.001
revision_id: rev_notice_001
unit_type: Proposition
content_stage: SCHEMA_EXAMPLE
source_status: MISSING
maintenance_status: NEEDS_REVIEW
practice_status: NOT_USED
machine_origin: HUMAN

purpose: 判断一个工程事件是否需要进入通知审查
applicability:
  jurisdiction: 待项目填写
  as_of: 待核验
  contract_system: 待输入

interface:
  inputs: [事件事实, 合同版本, 参与主体]
  outputs: [七项审查问题, 未知项]

substance:
  statement: 先核验来源，再判断触发、主体、形式、期限、送达及后果
  exceptions: [以经核验合同及有效修改为准]

provenance:
  source_anchor: DEMO.CONTRACT.NOTICE.CLAUSE.001
  pinpoint: 待合法文本核验后填写

contestability:
  uncertainty: interpretation_required

governance:
  owner: jiaozhu7
  required_review_scopes: [legal_meaning, source, structure, rights]

validation:
  tests: [TEST.NOTICE.NO_PREMATURE_CONCLUSION.001]
  demo_only: true`;
