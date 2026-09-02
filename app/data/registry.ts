export type ReviewState = "已定位" | "研究中" | "待专业复核" | "示范通过";

export const repository = {
  slug: "construction-legal-engineering",
  name: "construction-legal-engineering",
  owner: "jiaozhu7",
  title: "建设工程法律工程",
  description: "发布建设工程领域可追溯、可评审、可组合的法律元素、工作模块、来源索引和研究成果。",
  version: "v0.1.0-alpha",
  license: "Public metadata & original research",
  lastUpdated: "2026-08-27",
};

export const sources = [
  { id: "QH.GOV.REFORM.2023", title: "前海建设工程管理制度港澳规则衔接改革相关信息", issuer: "深圳前海管理局", jurisdiction: "前海", type: "政策资料", authority: "A", layer: "Public", state: "已定位" as ReviewState, url: "https://qh.sz.gov.cn/sygnan/qhzx/dtzx/content/post_10733274.html" },
  { id: "QH.GOV.EVAL.2024", title: "建设工程港澳规则衔接评估研究采购结果", issuer: "深圳前海管理局", jurisdiction: "前海", type: "政府采购", authority: "A", layer: "Public", state: "已定位" as ReviewState, url: "https://qh.sz.gov.cn/sygnan/xxgk/xxgkml/zbcg/zbgg/content/post_11689633.html" },
  { id: "QH.GOV.PLATFORM.2026", title: "建设工程全生命周期监督管理平台可行性研究", issuer: "深圳前海管理局", jurisdiction: "前海", type: "政府项目", authority: "A", layer: "Public", state: "研究中" as ReviewState, url: "https://qh.sz.gov.cn/gkmlpt/content/12/12618/post_12618279.html" },
  { id: "HK.DEVB.QH.PILOT.2026", title: "前海深港建设试点公开信息", issuer: "香港发展局", jurisdiction: "香港 / 前海", type: "官方发布", authority: "A", layer: "Public", state: "已定位" as ReviewState, url: "https://www.devb.gov.hk/en/publications_and_press_releases/press/index_id_15518.html" },
  { id: "HK.DEVB.NEC.INDEX", title: "NEC Hong Kong Edition 标准文件索引", issuer: "香港发展局", jurisdiction: "香港", type: "合同文件索引", authority: "B", layer: "Public / Licensed", state: "研究中" as ReviewState, url: "https://www.devb.gov.hk/en/publications_and_press_releases/publications/standard_contract_documents/practice_notes_nec_engineering_construction_contract/index.html" },
  { id: "SZ.ZJJ.MODEL.CONTRACTS", title: "深圳市建设工程合同示范文本", issuer: "深圳市住房和建设局", jurisdiction: "深圳", type: "示范合同索引", authority: "A", layer: "Public", state: "已定位" as ReviewState, url: "https://zjj.sz.gov.cn/ztfw/gcjs/zlxz/" },
  { id: "SZ.ZJJ.CONTRACTS.2025", title: "2025版施工类示范合同发布信息", issuer: "深圳市住房和建设局", jurisdiction: "深圳", type: "示范合同", authority: "A", layer: "Public", state: "研究中" as ReviewState, url: "https://zjj.sz.gov.cn/gcjs/tzgg/content/post_12504566.html" },
  { id: "SPC.CASELIB", title: "人民法院案例库", issuer: "最高人民法院", jurisdiction: "中国内地", type: "权威案例库", authority: "A", layer: "Public", state: "已定位" as ReviewState, url: "https://rmfyalk.court.gov.cn/" },
  { id: "BSA.IDS", title: "Information Delivery Specification", issuer: "buildingSMART International", jurisdiction: "国际", type: "数字标准", authority: "B", layer: "Public", state: "研究中" as ReviewState, url: "https://github.com/buildingSMART/IDS" },
  { id: "ACCORD.PROJECT", title: "Computable Contracts 技术框架", issuer: "Accord Project", jurisdiction: "国际", type: "开放法律工程", authority: "C", layer: "Public", state: "研究中" as ReviewState, url: "https://accordproject.org/" },
];

export const modules = {
  variation: {
    id: "CLE.MODULE.VARIATION.001",
    title: "Variation / Compensation Event",
    cnTitle: "工程变更与补偿事件",
    state: "研究中" as ReviewState,
    summary: "比较深圳合同中的工程变更机制与 NEC Compensation Event，在触发、授权、通知、计价、工期、证据和争议后果上的结构差异。",
    question: "同一现场变化，在不同合同体系下会触发哪些不同的程序动作和风险？",
    stages: ["Potential Change", "Instruction", "Notice", "Quotation", "Assessment", "Accepted / Rejected", "Implementation", "Dispute"],
    objects: ["Event", "Rule", "Authorization", "Workflow", "Document", "Evidence", "Issue"],
    openQuestions: ["何种行为构成有效变更授权？", "未及时通知的法律后果如何分层表达？", "计价与工期影响应作为一个还是两个子流程？"],
  },
  notice: {
    id: "CLE.MODULE.NOTICE.001",
    title: "Notice",
    cnTitle: "通知与期限",
    state: "研究中" as ReviewState,
    summary: "将通知主体、接收人、触发事件、期限、形式、必备内容、失权风险和证据要求表达为可复用、可测试的对象。",
    question: "一个项目事件发生后，系统能否找到正确的通知义务并说明依据？",
    stages: ["Trigger", "Identify Rule", "Calculate Deadline", "Prepare Notice", "Deliver", "Preserve Evidence", "Review Consequence"],
    objects: ["Trigger Event", "Actor", "Recipient", "Deadline", "Method", "Required Content", "Evidence", "Consequence"],
    openQuestions: ["自然日、工作日及延长规则如何表达？", "Waiver与实际损害是否进入确定性测试？", "送达证据的最低要求如何跨合同映射？"],
  },
};

export const mappings = [
  { concept: "工程变更 / Compensation Event", source: "深圳示范合同", target: "NEC HK Edition", relation: "different_procedure", focus: "触发与授权", state: "待专业复核" as ReviewState },
  { concept: "书面通知", source: "通知与索赔条款", target: "NEC communication / notification", relation: "similar_to", focus: "形式与送达", state: "研究中" as ReviewState },
  { concept: "发包人或工程师指令", source: "内地角色体系", target: "Project Manager instruction", relation: "different_consequence", focus: "角色权限", state: "待专业复核" as ReviewState },
  { concept: "变更估价", source: "计价与签证机制", target: "Quotation / assessment", relation: "similar_to", focus: "估价程序", state: "研究中" as ReviewState },
  { concept: "工期影响", source: "工期顺延机制", target: "Completion Date / Key Date", relation: "different_procedure", focus: "时间后果", state: "研究中" as ReviewState },
  { concept: "争议升级", source: "协商、调解、仲裁或诉讼", target: "NEC dispute resolution", relation: "different_procedure", focus: "救济路径", state: "待专业复核" as ReviewState },
];

export const legalTests = [
  { id: "CLE.TEST.NOTICE.001", name: "通知期限边界测试", input: "事件日期、通知日期、适用期限", expected: "识别是否逾期并列出需人工判断的例外", review: "waiver / actual prejudice", state: "示范通过" as ReviewState },
  { id: "CLE.TEST.NOTICE.002", name: "通知接收人测试", input: "发送主体、接收主体、合同角色", expected: "匹配正确接收人或标记角色冲突", review: "apparent authority", state: "研究中" as ReviewState },
  { id: "CLE.TEST.VAR.001", name: "非正式指令测试", input: "口头指令、会议纪要、实际施工", expected: "触发授权、通知与证据三个检查点", review: "ratification / estoppel", state: "研究中" as ReviewState },
  { id: "CLE.TEST.VAR.002", name: "变更计价流程测试", input: "指令、报价、评估、实施状态", expected: "定位当前流程状态和缺失文件", review: "valuation discretion", state: "待专业复核" as ReviewState },
];

export const coreObjects = [
  ["SourceAnchor", "来源锚点", "权威材料、精确位置、版本、效力和使用权限"],
  ["ClausePattern", "条款模式", "原创或获许可的条款文字、变量、替代文本和谈判边界"],
  ["Proposition", "法律命题", "适用范围、触发、主体、权利义务、例外与后果"],
  ["FactPattern", "事实与事件", "参与者、时间、事实字段、生成材料与触发关系"],
  ["ActionStep", "行动步骤", "角色、条件、动作、期限、输入输出与状态迁移"],
  ["EvidenceSpec", "证据规格", "证明对象、真实性、时间戳、来源系统与保全"],
  ["IssueFrame", "争点框架", "问题、构成要件、举证责任、规则和事实缺口"],
  ["Argument", "论证单元", "主张、前提、权威、推理、反论与适用限制"],
  ["OutcomeRecord", "结果记录", "裁判、交易或项目结果及其对既有单元的支持或限制"],
  ["TestCase", "法律测试", "事实输入、预期触发、流程、争点和人工判断点"],
];

export const practiceAreas = [
  { code: "01", name: "建设工程", en: "Construction", status: "ACTIVE", description: "合同规则、工程事件、通知、变更、证据与争议" },
  { code: "02", name: "民商事诉讼", en: "Litigation", status: "BLUEPRINT", description: "请求权、事实、证据、策略、庭审与结果反馈" },
  { code: "03", name: "商业并购", en: "M&A", status: "BLUEPRINT", description: "尽调、交易结构、审批、交割条件与赔偿机制" },
  { code: "04", name: "资本市场", en: "Capital Markets", status: "BLUEPRINT", description: "IPO阶段、适格规则、披露、问询与整改流程" },
  { code: "05", name: "企业合规", en: "Compliance", status: "RESEARCH", description: "义务、控制、证据、事件响应与版本监测" },
  { code: "06", name: "常年法律服务", en: "Legal Operations", status: "RESEARCH", description: "事项分流、模板、审批、交付与机构经验" },
];

export const repoStats = {
  sources: sources.length,
  modules: Object.keys(modules).length,
  mappings: mappings.length,
  tests: legalTests.length,
};
