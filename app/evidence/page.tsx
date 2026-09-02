import type { Metadata } from "next";
import Link from "next/link";
import { ResearchShell, StatusBadge } from "../components/SiteShell";
import { evidenceStates, stateDimensions } from "../data/program";

export const metadata: Metadata = {
  title: "证据与先行研究 · Open Legal Production",
  description: "公开区分探索性文献、正式范围综述、Prior Art边界和可审计研究主张。",
};

const priorArt = [
  ["PA-01", "法律服务模块化", "PRIOR ART", "不能把“法律服务可以模块化”本身作为原创主张。"],
  ["PA-02", "服务接口与边界对象", "PRIOR ART", "一般服务接口、知识边界与跨组织协调已有理论基础。"],
  ["PA-03", "规则即代码与法律知识工程", "PRIOR ART", "规则表达、文档模块、本体、图谱和论证结构均已有成熟研究。"],
  ["GAP-01", "法律特定工作接口维度", "CANDIDATE GAP", "哪些上下文、依赖、复核和责任在法律工作交接时不可缺失。"],
  ["GAP-02", "Legal Modularizability", "CANDIDATE GAP", "把法律工作能否独立执行和重组建成可测量构念。"],
  ["GAP-03", "Integration Knowledge", "CANDIDATE GAP", "解释专家如何拆分、保留判断边界并整合分布式成果。"],
] as const;

const evidenceFlow = ["Research Claim", "Supporting Evidence", "Counterevidence", "Prior-Art Impact", "Confidence", "Revision"];

export default function EvidencePage() {
  return <ResearchShell>
    <section className="page-hero evidence-hero"><p className="eyebrow"><span /> CLAIM–EVIDENCE LEDGER</p><h1>先说明证据到哪里，<br /><em>再说明网站应该做什么。</em></h1><p>本页不是法律资料搜索库，而是研究主张的审计入口：来源、反证、创新边界、置信度和修订必须能够一起查看。</p></section>

    <section className="content-section compact">
      <div className="evidence-reality-grid"><article><StatusBadge tone="amber">CURATED · EXPLORATORY</StatusBadge><strong>35</strong><h2>探索性资料记录</h2><p>用于形成检索词、文献簇和候选创新边界，不等于系统性综述结果。</p></article><article><StatusBadge tone="amber">SEARCH RUNS · EXPLORATORY</StatusBadge><strong>3</strong><h2>探索性检索记录</h2><p>正式命中、导出、去重、筛选和全文纳入数字尚未填写。</p></article><article><StatusBadge>FORMAL PRISMA CORPUS</StatusBadge><strong>0</strong><h2>正式纳入文献</h2><p>在协议冻结和正式数据库检索完成前，公开数字保持为零。</p></article></div>
      <p className="research-warning">真实性边界：当前资料包是高质量研究起点，不是已经完成的PRISMA-ScR综述，也不是理论有效性的证明。</p>
    </section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">FIVE EVIDENCE STATES</p><h2>不同认识状态不能混用</h2></div><p>“来源已核验”和“假设已被支持”是两件事；同一条主张会随着新证据修订或退役。</p></div><div className="evidence-state-row">{evidenceStates.map((item) => <article key={item.code}><StatusBadge tone={item.tone}>{item.code}</StatusBadge><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">PRIOR ART BOUNDARY</p><h2>创新点应放在已有领域之间</h2></div><p>网站不把“法律模块化”“法律图谱”或“规则即代码”重新包装成原创。</p></div><div className="prior-art-table"><div className="prior-art-row header"><span>ID</span><span>主题</span><span>判断</span><span>对本研究的影响</span></div>{priorArt.map(([id, name, state, effect]) => <div className="prior-art-row" key={id}><code>{id}</code><strong>{name}</strong><StatusBadge tone={state === "CANDIDATE GAP" ? "amber" : "neutral"}>{state}</StatusBadge><p>{effect}</p></div>)}</div></section>

    <section className="content-section dark-section"><div className="section-head"><div><p className="section-kicker">AUDITABLE CLAIM FLOW</p><h2>页面结论必须能回到证据</h2></div><p>任何Working Theory、Artifact或Gate决定都通过同一条主张审计链。</p></div><div className="research-flow">{evidenceFlow.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < evidenceFlow.length - 1 && <i>→</i>}</div>)}</div></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">ORTHOGONAL STATES</p><h2>状态按对象类型分开</h2></div><p>一个公开Artifact可以仍是研究假设；一个完成的Study也可能得到“不支持”结果。</p></div><div className="state-dimension-grid">{stateDimensions.map(([code, name, values]) => <article key={code}><code>{code}</code><h3>{name}</h3><p>{values}</p></article>)}</div></section>

    <section className="final-cta"><p className="section-kicker">NEXT: TEST THE THEORY</p><h2>证据不是装饰，它决定构念继续、修订还是撤回。</h2><div><Link className="button primary" href="/research">查看研究命题 <span>→</span></Link><Link className="button ghost" href="/studies">查看验证计划</Link></div></section>
  </ResearchShell>;
}
