export const researchDocuments = [
  {
    code: "R01",
    title: "建设工程法律工程行业深度调研报告",
    subtitle: "全球技术演进、深港合同体系、前海实践及项目机会",
    role: "回答为什么建设工程适合作为首个验证仓库，以及行业已经解决和仍未解决的部分。",
    findings: ["建设工程具备标准合同、强事件驱动、程序期限和过程证据四项优势", "真正空白是连接规则、事件、流程、证据、争点和结果的开放语义层", "优先验证 Event–Issue 双核心，但不把假设当作结论"],
  },
  {
    code: "R02",
    title: "前海深港建设工程合同规则衔接与法律知识工程项目立项报告",
    subtitle: "深圳标准合同与香港 NEC 体系的模块化研究",
    role: "把行业命题缩小为前海深港规则衔接的可验证研究项目。",
    findings: ["首期只聚焦深圳2025示范合同、NEC HK Edition及必要参照体系", "Variation 与 Notice 是首批 Reference Module", "必须同步建立来源、版本、映射、Legal Test和数据分层治理"],
  },
  {
    code: "R03",
    title: "建设工程法律工程后续研究分析报告暨研究任务书",
    subtitle: "数据规范、验证方法、任务优先级与90日执行计划",
    role: "把研究转化为可持续维护的仓库目录、对象字段、验证指标和变更记录。",
    findings: ["结构化数据先使用 Markdown、YAML/JSON和CSV，不提前引入图数据库", "任何稳定Rule、Mapping或Case必须拥有source_id", "每次Schema变更记录理由、证据、受影响模块、兼容性和复核人"],
  },
];

export const researchQuestions = [
  "法律知识的最小稳定对象究竟是条款、规则、事件、争点，还是统一的LegalObject外壳？",
  "深港不同合同体系能否在不抹平差异的前提下建立概念、程序、风险和证据映射？",
  "项目事件能否稳定触发正确的规则、行动、期限、文件和证据要求？",
  "履约阶段形成的记录能否直接进入后续Issue Timeline和争议分析？",
  "新增案例进入后，Schema是增量扩展，还是需要持续整体推翻？",
];

export const repoBlueprint = [
  ["02_source_manifest", "来源清单", "官方来源、版本、权威等级、版权和最后核验时间"],
  ["11_ontology", "对象与词表", "LegalObject、Clause、Event、Issue、Relation及受控词表"],
  ["12_contract_mapping", "跨合同映射", "same/similar/broader/different procedure等类型化关系"],
  ["13_event_modules", "事件模块", "Variation、Notice以及后续EOT、Payment等可复用模块"],
  ["14_cases", "案例数据", "事实、请求、争点、证据、论证、裁判理由和结果反馈"],
  ["15_tests", "法律测试", "事实输入、预期规则/流程/争点和人工复核项"],
  ["19_changelog", "研究决策", "每次Schema变化的理由、依据、影响和兼容性"],
];

export const validationMetrics = [
  { name: "Coverage", question: "核心内容有多少能进入现有Schema？", signal: "新增内容主要增加对象，而非绕开结构" },
  { name: "Mapping", question: "不同体系能否明确对应或明确不对应？", signal: "差异能落实到概念、程序、风险与证据" },
  { name: "Stability", question: "新案例是否持续推翻Schema？", signal: "每批新增案例造成的破坏性修改逐步下降" },
  { name: "Inter-Rater", question: "不同律师能否得到相近分类？", signal: "双人独立标注形成可解释的一致或分歧" },
  { name: "Traceability", question: "结论能否回到原始来源？", signal: "稳定结论不存在无source_id状态" },
  { name: "Versioning", question: "规则变化能否找到受影响模块？", signal: "版本更新可以触发依赖和回归测试" },
];

export const ninetyDayPlan = [
  { period: "01—30", title: "建立研究地基", deliverables: "Source Manifest · Clause/Event Taxonomy · Research Gaps" },
  { period: "31—60", title: "完成两个参考模块", deliverables: "Variation · Notice · Rule/Workflow/Evidence · 初始Tests" },
  { period: "61—90", title: "压力测试与继续判断", deliverables: "跨合同Mapping · 案例扩展 · 三模型比较 · Go/No-Go" },
];
