export type ModuleStatus = "EXPERIMENTAL" | "DRAFT" | "REVIEWED";

export type LegalModule = {
  owner: string;
  slug: string;
  title: string;
  shortTitle: string;
  version: string;
  packageId: string;
  path: string;
  moduleType: "SOURCE_CHECK" | "RESEARCH_ANALYSIS" | "ARGUMENT_PATTERN";
  modularity: "HIGH" | "MEDIUM" | "LOW";
  status: ModuleStatus;
  description: string;
  useWhen: string[];
  notFor: string[];
  completion: string[];
  jurisdictions: string[];
  practiceAreas: string[];
  asOf: string;
  risk: "MEDIUM" | "HIGH" | "CRITICAL";
  inputs: Array<[string, string, string, string]>;
  outputs: Array<[string, string, string, string]>;
  dependencies: Array<[string, string, string]>;
  steps: Array<[string, string, string, string]>;
  validations: Array<[string, string, string]>;
  requiredReview: string[];
  sourceCount: number;
};

export const legalModules: LegalModule[] = [
  {
    owner: "open-practice",
    slug: "source-currentness",
    title: "法源现行性与沿革核验",
    shortTitle: "法源现行性核验",
    version: "0.1.0",
    packageId: "open-practice/source-currentness@0.1.0",
    path: "/modules/open-practice/source-currentness",
    moduleType: "SOURCE_CHECK",
    modularity: "HIGH",
    status: "EXPERIMENTAL",
    description: "核验指定法源在目标日期的状态、修订链和权威出处，并显式报告无法解决的来源冲突。",
    useWhen: ["已经能够唯一识别待核验法源", "需要确认目标日期的效力和版本"],
    notFor: ["需要直接作出溯及力或具体事项适用结论"],
    completion: ["权威来源、沿革、有效期间和未解决冲突均已记录"],
    jurisdictions: ["中国内地"],
    practiceAreas: ["法律研究", "质量控制"],
    asOf: "2026-08-31",
    risk: "MEDIUM",
    inputs: [["source_identifier", "source.identifier", "PUBLIC", "能够唯一定位法源的名称、文号、条文或权威链接"], ["target_date", "time.target-date", "PUBLIC", "需要判断法源状态的目标日期"]],
    outputs: [["source_status", "source.status-record", "PUBLIC", "法源状态、有效期间、沿革、证据和未解决冲突"]],
    dependencies: [],
    steps: [["01", "唯一定位", "在权威来源中定位法源", "研究者"], ["02", "追踪沿革", "核对发布、修订、废止和生效时间", "研究者"], ["03", "形成记录", "输出状态并显式列出冲突和缺口", "研究者"]],
    validations: [["SCHEMA", "PASS", "结构已通过 V0.1 校验"], ["COUNTEREXAMPLE", "PASS", "无法唯一定位时必须停止"], ["PEER REVIEW", "NOT RUN", "尚无专业审查声明"]],
    requiredReview: ["责任律师", "来源审查人"],
    sourceCount: 1,
  },
  {
    owner: "open-practice",
    slug: "case-law-research",
    title: "类案检索与裁判分歧识别",
    shortTitle: "类案检索与分歧识别",
    version: "0.1.0",
    packageId: "open-practice/case-law-research@0.1.0",
    path: "/modules/open-practice/case-law-research",
    moduleType: "RESEARCH_ANALYSIS",
    modularity: "MEDIUM",
    status: "EXPERIMENTAL",
    description: "以可复核的检索范围、纳入标准和事实因素矩阵组织类案，并报告裁判分歧与研究缺口。",
    useWhen: ["法律问题、最低必要事实因素、法域和时间范围能够被界定"],
    notFor: ["把一次检索直接当成胜诉预测或最终法律意见"],
    completion: ["检索式、纳入排除、案例矩阵、分歧、缺口和来源可复核"],
    jurisdictions: ["法域由项目输入"],
    practiceAreas: ["诉讼", "法律研究"],
    asOf: "2026-08-31",
    risk: "HIGH",
    inputs: [["legal_issue", "legal.issue", "INTERNAL", "可以命名并限定的法律问题"], ["fact_factors", "fact.factor-set", "CONFIDENTIAL", "最低必要、已去身份化的事实因素"], ["jurisdiction", "jurisdiction.identifier", "PUBLIC", "法院、地区或适用法域"]],
    outputs: [["case_matrix", "research.case-matrix", "INTERNAL", "含来源、事实因素和裁判观点的案例矩阵"], ["research_gaps", "research.gap-set", "INTERNAL", "覆盖限制、冲突和待确认事项"]],
    dependencies: [["open-practice/source-currentness", "0.1.0", "核验引用法源和裁判来源状态"]],
    steps: [["01", "界定问题", "确认问题、事实因素和检索边界", "责任律师"], ["02", "执行检索", "保存可复核检索式和结果范围", "研究者"], ["03", "比较分歧", "编码案例因素并报告分歧与缺口", "研究者"]],
    validations: [["SCHEMA", "PASS", "结构已通过 V0.1 校验"], ["COUNTEREXAMPLE", "PASS", "问题未界定时必须停止"], ["PEER REVIEW", "NOT RUN", "尚无专业审查声明"]],
    requiredReview: ["责任律师", "法域专业人员", "来源审查人"],
    sourceCount: 1,
  },
  {
    owner: "open-practice",
    slug: "litigation-strategy-frame",
    title: "诉讼策略选项与责任决策框架",
    shortTitle: "诉讼策略决策框架",
    version: "0.1.0",
    packageId: "open-practice/litigation-strategy-frame@0.1.0",
    path: "/modules/open-practice/litigation-strategy-frame",
    moduleType: "ARGUMENT_PATTERN",
    modularity: "LOW",
    status: "DRAFT",
    description: "组织诉讼与和解选项、假设、权衡、缺口和不可逆节点，最终选择由责任律师和授权客户作出。",
    useWhen: ["责任律师需要系统整理可选路径、假设和待决定节点"],
    notFor: ["在客户目标、授权、证据或程序姿态缺失时自动选择策略"],
    completion: ["每个选项都有依据、反对因素、触发器和明确责任记录"],
    jurisdictions: ["由具体事项确定"],
    practiceAreas: ["诉讼", "和解"],
    asOf: "2026-08-31",
    risk: "CRITICAL",
    inputs: [["client_objectives", "matter.objective-set", "HIGHLY CONFIDENTIAL", "客户目标、风险偏好和授权边界"], ["matter_state", "matter.state", "HIGHLY CONFIDENTIAL", "程序、证据、对方行为和时间成本状态"]],
    outputs: [["option_set", "analysis.option-set", "HIGHLY CONFIDENTIAL", "选项、假设、权衡、缺口和触发条件"], ["decision_record", "matter.decision-record", "HIGHLY CONFIDENTIAL", "责任律师和授权客户的决定记录"]],
    dependencies: [["open-practice/case-law-research", "0.1.0", "提供有范围的裁判研究输入"]],
    steps: [["01", "确认授权", "确认责任、客户目标和授权边界", "责任律师"], ["02", "形成选项", "组织方案、风险、假设和触发器", "法律团队"], ["03", "记录决定", "由责任律师和授权客户作出决定", "责任律师"]],
    validations: [["SCHEMA", "PASS", "结构已通过 V0.1 校验"], ["COUNTEREXAMPLE", "PASS", "目标和授权缺失时必须停止"], ["FIELD TEST", "NOT RUN", "不得在真实事项中直接使用"]],
    requiredReview: ["责任律师", "法域专业人员", "隐私审查人"],
    sourceCount: 0,
  },
];

export const featuredModule = legalModules[1];

export function findModule(owner: string, slug: string) {
  return legalModules.find((item) => item.owner === owner && item.slug === slug);
}
