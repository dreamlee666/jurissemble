import type { Metadata } from "next";
import Link from "next/link";
import { ResearchShell, StatusBadge } from "../components/SiteShell";
import { constructs, hypotheses, productionStack, programme, researchGates } from "../data/program";

export const metadata: Metadata = {
  title: "研究计划与工作理论 · Open Legal Production",
  description: "Legal Work Interface、Legal Modularizability与Integration Knowledge的候选理论、命题和证伪条件。",
};

const falsifiers = [
  "专家事件中不能稳定观察到重复的接口维度。",
  "结构化接口没有减少澄清、返工、遗漏或整合时间。",
  "一般项目管理接口已经能够完整解释法律工作的边界。",
  "专家与新手在拆分和重组判断上不存在稳定差异。",
  "直接提供完整材料持续、可靠地优于显式接口，且没有治理代价。",
];

const modularityFactors = [
  ["+", "Context Codifiability", "必要上下文能否被明确表达并正确理解"],
  ["+", "Output Verifiability", "结果能否按明确标准独立验收"],
  ["+", "Dependency Stability", "上下游关系是否可预测且变化可追踪"],
  ["−", "Tacit Judgment", "工作是否强依赖难以说清的专家判断"],
  ["−", "Strategic Coupling", "局部选择是否会改变整体策略或谈判位置"],
  ["−", "Data Sensitivity", "材料是否因秘密、权限或跨境限制而不可传递"],
] as const;

export default function ResearchPage() {
  return <ResearchShell>
    <section className="page-hero research-foundation-hero"><p className="eyebrow"><span /> WORKING THEORY · {programme.version}</p><h1>研究重点从“拆分”，<br /><em>转向可靠的重组。</em></h1><p>核心问题是：高度情境化、知识密集并承担专业责任的法律工作，怎样跨越人员、组织或Human–AI边界，同时避免上下文损失、判断扭曲、责任漂移和追溯断裂。</p><div className="research-verdict"><StatusBadge tone="amber">G1 · IN PROGRESS</StatusBadge><span>G2—G5 · PENDING</span><span>COMMUNITY · HOLD</span></div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">MOTHER QUESTION</p><h2>一个可以被推翻的母题</h2></div><p>网站信息架构是研究结论的投影，不是用网站页面反过来证明理论。</p></div><div className="research-question-callout"><span>RQ-01</span><strong>什么样的法律工作接口，能够使被拆分的专业工作在重新组合时保留必要上下文、判断质量、来源、保密与责任？</strong></div></section>

    <section className="content-section dark-section"><div className="section-head"><div><p className="section-kicker">CANDIDATE CONSTRUCTS</p><h2>三个构念，而不是一个平台口号</h2></div><p>三个构念尚处于Working Theory阶段，必须经访谈、对照案例、构念开发和实验检验。</p></div><div className="construct-grid">{constructs.map((item) => <article key={item.code}><code>{item.code}</code><small>{item.name}</small><h3>{item.cn}</h3><p>{item.detail}</p><StatusBadge tone="amber">HYPOTHESIS</StatusBadge></article>)}</div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">LEGAL PRODUCTION STACK</p><h2>明确Module、Work Package与Interface</h2></div><p>同一个Module进入不同客户、法域、执行者和保密环境时，会产生不同的工作接口。</p></div><div className="production-stack">{productionStack.map((layer) => <article key={layer.level}><span>{layer.level}</span><div><small>{layer.name}</small><h3>{layer.cn}</h3><p>{layer.detail}</p></div><code>{layer.objects}</code></article>)}</div><p className="research-warning">旧六层知识对象模型保留为Knowledge/Capability子Artifact，不与这套法律生产层级混用L1—L5编号。</p></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">H1—H8</p><h2>当前需要验证的命题</h2></div><p>命题用于指导采样、编码和实验，不是已被证实的产品功能。</p></div><div className="hypothesis-grid">{hypotheses.map(([id, name, detail]) => <article key={id}><div><code>{id}</code><StatusBadge tone="amber">TESTABLE</StatusBadge></div><h3>{name}</h3><p>{detail}</p></article>)}</div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">LEGAL MODULARIZABILITY</p><h2>它是程度，不是能拆或不能拆</h2></div><p>工作是否适合独立分配，需要同时观察促进因素和限制因素。</p></div><div className="factor-grid">{modularityFactors.map(([sign, name, detail]) => <article key={name} className={sign === "+" ? "positive" : "negative"}><span>{sign}</span><div><code>{name}</code><p>{detail}</p></div></article>)}</div></section>

    <section className="content-section dark-section"><div className="section-head"><div><p className="section-kicker">FALSIFICATION CONDITIONS</p><h2>哪些结果会让理论失败</h2></div><p>如果这些结果持续出现，就应修订或停止构念，而不是继续增加页面。</p></div><ol className="falsifier-list">{falsifiers.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></section>

    <section className="content-section gate-section"><div className="section-head"><div><p className="section-kicker">RESEARCH GATES</p><h2>从创新性到治理可行性</h2></div><p>Gate没有通过时，下游社区功能继续保持Hold。</p></div><div className="gate-grid">{researchGates.map((gate) => <article key={gate.id}><div><code>{gate.id}</code><StatusBadge tone={gate.id === "G1" ? "amber" : "neutral"}>{gate.status}</StatusBadge></div><h3>{gate.name}</h3><p>{gate.detail}</p></article>)}</div></section>

    <section className="final-cta"><p className="section-kicker">FROM THEORY TO STUDY</p><h2>下一步不是宣布标准，而是让事件、反例和实验检验它。</h2><div><Link className="button primary" href="/studies">查看Study 0—6 <span>→</span></Link><Link className="button ghost" href="/evidence">核对证据状态</Link></div></section>
  </ResearchShell>;
}
