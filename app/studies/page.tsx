import type { Metadata } from "next";
import Link from "next/link";
import { ResearchShell, StatusBadge } from "../components/SiteShell";
import { researchGates, studies } from "../data/program";

export const metadata: Metadata = {
  title: "研究项目与验证路线 · Open Legal Production",
  description: "Study 0—6、Construction Pilot、样本目标、实验指标和阶段Gate。",
};

const programmeMetrics = [
  ["40—60", "Matter片段", "Study 1主研究设计目标，不是当前已收集数量"],
  ["200—500", "Decision Points", "用于构念形成和跨案例比较的设计目标"],
  ["20%—30%", "双人编码", "主样本中计划独立编码并记录分歧的比例"],
  ["2", "法律领域", "至少需要建设工程之外的第二领域复制"],
] as const;

const experimentMetrics = ["完成时间", "澄清次数", "返工次数", "争点覆盖", "引用准确性", "关键遗漏", "Lead Counsel整合时间", "认知负荷", "理解一致性", "Reviewer信心"];

export default function StudiesPage() {
  return <ResearchShell>
    <section className="page-hero"><p className="eyebrow"><span /> EMPIRICAL PROGRAMME · STUDY 0—6</p><h1>网站按验证顺序生长，<br /><em>不按功能愿望生长。</em></h1><p>范围综述、专家CTA、委派案例、构念开发、Artifact、对照实验和跨领域复制形成连续证据链。当前只进入Study 0准备和Study 1 Pilot设计。</p></section>

    <section className="content-section compact"><div className="study-programme-list">{studies.map((study, index) => <article key={study.id}><div className="study-number"><span>{study.id}</span><i>{String(index + 1).padStart(2, "0")}</i></div><div><small>{study.title}</small><h2>{study.cn}</h2><p>{study.detail}</p></div><StatusBadge tone={study.id === "S0" ? "green" : study.id === "S1" || study.id === "S4" ? "amber" : "neutral"}>{study.status}</StatusBadge></article>)}</div></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">DESIGN TARGETS · NOT RESULTS</p><h2>把研究目标和已取得数据分开</h2></div><p>以下数字用于设计采样与质量控制，不能被显示成已经完成的进度。</p></div><div className="metric-card-grid">{programmeMetrics.map(([value, name, detail]) => <article key={name}><strong>{value}</strong><h3>{name}</h3><p>{detail}</p></article>)}</div></section>

    <section className="content-section" id="construction-pilot"><div className="section-head"><div><p className="section-kicker">STUDY 1 · DOMAIN A</p><h2>Construction CTA Pilot</h2></div><StatusBadge tone="amber">PILOT PLANNED · 0 COLLECTED</StatusBadge></div><div className="construction-study-grid"><article><code>RESEARCH PURPOSE</code><h3>观察法律工作怎样被委派和重新整合</h3><p>以Notice与Variation / Compensation Event为事件入口，还原当时的目标、线索、选择、依赖、遗漏、澄清、返工和最终决策。</p></article><article><code>PILOT BOUNDARY</code><h3>先验证访谈工具和代码本</h3><p>Pilot不等于主样本；只有伦理、同意、Matter授权和隔离条件明确后，才接收真实材料。</p></article><article><code>COMPARISON</code><h3>成功与失败委派都要进入样本</h3><p>只研究成功经验会隐藏接口失效条件。失败、撤回和无法模块化的工作同样重要。</p></article></div><div className="research-flow compact-flow">{["Consent Gate", "Critical Incident", "Decision Points", "Independent Coding", "Interface Dimensions", "Cross-case Finding"].map((item, index, items) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < items.length - 1 && <i>→</i>}</div>)}</div></section>

    <section className="content-section dark-section"><div className="section-head"><div><p className="section-kicker">STUDY 5 · CONTROLLED EXPERIMENT</p><h2>比较传统委派与结构化接口</h2></div><p>Control使用Word/邮件式交接；Interface组使用Legal Task Contract。AI只能作为可选对照条件。</p></div><div className="experiment-comparison"><article><span>CONTROL</span><h3>Word / Email Handoff</h3><p>保持常见工作方式，记录执行者主动澄清和Lead Counsel补充信息。</p></article><i>VS</i><article><span>INTERFACE</span><h3>Legal Task Contract</h3><p>显式提供上下文、依赖、输出、验收、复核、保密和决策权。</p></article></div><div className="tag-cloud metrics-cloud">{experimentMetrics.map((item) => <span key={item}>{item}</span>)}</div></section>

    <section className="content-section gate-section"><div className="section-head"><div><p className="section-kicker">GO / HOLD / NO-GO</p><h2>五个阶段门</h2></div><p>研究结果可能支持继续、要求修订，也可能停止社区方向。</p></div><div className="gate-grid">{researchGates.map((gate) => <article key={gate.id}><div><code>{gate.id}</code><StatusBadge tone={gate.id === "G1" ? "amber" : "neutral"}>{gate.status}</StatusBadge></div><h3>{gate.name}</h3><p>{gate.detail}</p></article>)}</div></section>

    <section className="final-cta"><p className="section-kicker">PARTICIPATE WITH EVIDENCE</p><h2>当前需要具体事件、失败案例和研究复核，不需要上传普通模板。</h2><div><Link className="button primary" href="/participate">查看参与条件 <span>→</span></Link><Link className="button ghost" href="/artifacts">查看实验构件</Link></div></section>
  </ResearchShell>;
}
