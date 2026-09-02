export const evidenceStates = [
  { state: "较稳定判断", code: "SUPPORTED", tone: "green" as const, description: "异构对象、来源与版本分离、分范围复核，已有相邻标准和方法支持。" },
  { state: "暂定结论", code: "PROVISIONAL", tone: "amber" as const, description: "Pattern、Domain / Inference / Task 和四层测试可进入第一轮实验。" },
  { state: "研究假设", code: "HYPOTHESIS", tone: "neutral" as const, description: "Event–Issue 是否跨领域通用、样本规模和社区激励仍需真实事项检验。" },
];

export const unitDistinctions = [
  { code: "OBSERVE", en: "Decision Episode", name: "观察单位", detail: "真实事项中的关键决策片段；发生一次不等于可复用规律。", status: "WORKING DECISION" },
  { code: "MODEL", en: "Typed Legal Object", name: "建模单位", detail: "Rule、Event、Issue、Argument、Pattern、Task 等异构对象。", status: "WORKING DECISION" },
  { code: "ABSTRACT", en: "Practice Pattern", name: "候选复用单位", detail: "从多个片段抽象情境、约束、解法、反例与失败条件。", status: "TO VALIDATE" },
  { code: "EXCHANGE", en: "LegalUnit Envelope", name: "交换与治理外壳", detail: "为L1/L2对象携带身份、来源、修订、权利和测试；不是法律工作接口。", status: "WORKING DECISION" },
  { code: "USE", en: "Module", name: "能力复用单位", detail: "可被具体Work Package引用的能力包，不与事项中的工作包混称。", status: "WORKING DECISION" },
];

export const modelLayers = [
  { code: "L0", name: "证据与来源", objects: "SourceArtifact · SourceAnchor · Observation · Provenance", question: "从哪里来，能否公开？" },
  { code: "L1", name: "领域与事实", objects: "Rule · Event · Fact · Actor · Evidence · Outcome", question: "法律世界发生了什么？" },
  { code: "L2", name: "推理与论证", objects: "Issue · Factor · Proposition · Argument · Inference", question: "为什么得出或质疑判断？" },
  { code: "L3", name: "经验与模式", objects: "Pattern · AntiPattern · Heuristic · Warning · Fallback", question: "哪些做法可能跨事项复现？" },
  { code: "L4", name: "工作与任务", objects: "Task · Workflow · Action · Deadline · DecisionGate", question: "谁在何时做什么？" },
  { code: "L5", name: "工程与发布", objects: "Test · Review · Revision · Release · Dependency", question: "如何验证、更新和负责？" },
];

export const compilerSteps = [
  ["01", "ELICIT", "从真实关键事件获取情境、线索、选择、行动和结果"],
  ["02", "TYPE", "分开事实、规则、解释、经验、策略和客户偏好"],
  ["03", "MODEL", "建立 Domain、Inference 与 Task 及其有类型关系"],
  ["04", "MINE", "跨事件寻找 Pattern，同时保存反例和失败条件"],
  ["05", "TEST", "进行结构、来源、场景行为和迁移价值四层测试"],
  ["06", "RELEASE", "同行分范围复核后形成不可变版本并继续反馈"],
];

export const testLayers = [
  ["01", "Schema Test", "字段、类型、受控词表和关系是否符合约束"],
  ["02", "Traceability Test", "主张能否回到来源、版本、精确位置和生成过程"],
  ["03", "Behavioral Scenario", "给定事实是否提出应检查的问题、行动、证据和人工判断点"],
  ["04", "Transfer & Utility", "另一名律师能否在新事项中正确使用并减少遗漏或时间"],
];

export const researchParticipation = [
  ["EPISODE", "提供关键事件", "经同意和去标识后，还原一个真实决策时刻。"],
  ["SOURCE", "补充来源", "提供公开材料、版本、精确位置或效力变化。"],
  ["COUNTEREXAMPLE", "指出反例", "说明一个候选 Pattern 在什么情境下会失败。"],
  ["CODING", "参与双人编码", "独立标注同一片段，并解释一致或分歧。"],
  ["TRANSFER", "执行迁移测试", "在新场景中使用候选 Module 并记录效果。"],
  ["REVIEW", "完成范围复核", "只对实际检查的来源、含义、结构、权利或实践负责。"],
];

export const researchSources = [
  ["CommonKADS", "Domain / Inference / Task", "https://www.researchgate.net/publication/220628697_CommonKADS_a_comprehensive_methodology_for_KBS_development"],
  ["Legal Design Patterns", "Pattern mining 仍是开放方法问题", "https://link.springer.com/article/10.1007/s44206-024-00109-y"],
  ["LegalRuleML", "规范规则、例外、优先与法律元数据", "https://www.oasis-open.org/standard/legalruleml-core-specification-version-1-0-oasis-standard/"],
  ["Critical Decision Method", "多轮事件回溯和决策探针", "https://journals.sagepub.com/doi/10.1518/001872098779480442"],
  ["W3C SHACL / PROV", "结构验证与生成来源", "https://www.w3.org/TR/shacl/"],
  ["OECD Rules as Code", "可计算规则的价值与边界", "https://www.oecd.org/content/dam/oecd/en/publications/reports/2020/10/dechiffrer-le-code_d56cab77/3afe6ba5-en.pdf"],
];
