import type { Metadata } from "next";
import Link from "next/link";
import { ResearchShell, StatusBadge } from "../components/SiteShell";
import { interfaceDimensions, taskContractGroups } from "../data/program";

export const metadata: Metadata = {
  title: "Legal Task Contract构件实验室 · Open Legal Production",
  description: "Legal Work Interface、Matter拆分、工作包、验收和责任边界的合成数据原型。",
};

const matterMap = [
  ["PROJECT", "Matter", "客户目标与最终Decision Owner"],
  ["GATE", "Decision Gate", "决定继续、升级、和解或停止"],
  ["STREAM", "Workstream", "将争点、事实、证据和行动分组"],
  ["PACKAGE", "Work Package", "由明确主体执行与交付"],
  ["INTERFACE", "Legal Work Interface", "保存交接所需边界"],
  ["INTEGRATE", "Integration Point", "复核并重新组合结果"],
] as const;

const boundaryTypes = [
  ["TRANSFER", "传递", "共同语法已经稳定，重点是准确移动信息和版本。"],
  ["TRANSLATION", "翻译", "双方理解或分类不同，需要解释概念、法域和专业语义。"],
  ["TRANSFORMATION", "转换", "利益、策略或判断存在冲突，需要Lead Counsel参与整合。"],
] as const;

export default function ArtifactsPage() {
  return <ResearchShell>
    <section className="page-hero artifact-hero"><p className="eyebrow"><span /> ARTIFACT LAB · SCHEMA DRAFT</p><h1>先做一份可以验证的<br /><em>Legal Task Contract。</em></h1><p>当前Artifact不是完整平台，也不是自动法律判断工具。它把候选Legal Work Interface转化为可检查的交接结构，以便比较传统委派和结构化委派。</p><div className="research-verdict"><StatusBadge tone="amber">ARTIFACT · SCHEMA DRAFT</StatusBadge><span>USABILITY · NOT TESTED</span><span>CAUSAL UTILITY · NOT TESTED</span></div></section>

    <section className="content-section compact"><div className="section-head"><div><p className="section-kicker">LEGAL TASK CONTRACT</p><h2>任务不是一句“帮我研究一下”</h2></div><p>每个字段都来自候选理论维度，未来可因实证结果合并、拆分或删除。</p></div><div className="task-contract-shell"><div className="task-contract-head"><div><span>task_contract_id</span><strong>LTC.CONSTRUCTION.NOTICE.001</strong></div><StatusBadge tone="amber">SYNTHETIC EXAMPLE</StatusBadge></div><div className="task-contract-body">{taskContractGroups.map((group, index) => <article key={group.code}><span>{String(index + 1).padStart(2, "0")}</span><div><code>{group.code}</code><h3>{group.name}</h3><p>{group.fields}</p></div></article>)}</div><div className="task-contract-foot"><span>revision: draft-0.1</span><span>real_matter_data: none</span><span>public_release: false</span></div></div></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">NINE INTERFACE DIMENSIONS</p><h2>接口不仅是输入和输出</h2></div><p>法律交接还需要规范、战略、时点、权限、复核和责任信息。</p></div><div className="interface-dimension-grid">{interfaceDimensions.map(([code, name, detail], index) => <article key={code}><span>{String(index + 1).padStart(2, "0")}</span><code>{code}</code><h3>{name}</h3><p>{detail}</p></article>)}</div></section>

    <section className="content-section dark-section"><div className="section-head"><div><p className="section-kicker">MATTER DECOMPOSITION</p><h2>从完整事项到重新整合</h2></div><p>分解不是终点；每个Work Package都必须回到Integration Point和最终Decision Owner。</p></div><div className="matter-map">{matterMap.map(([code, name, detail], index) => <article key={code}><span>{String(index + 1).padStart(2, "0")}</span><div><code>{code}</code><h3>{name}</h3><p>{detail}</p></div>{index < matterMap.length - 1 && <i>↓</i>}</article>)}</div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">MODULE ≠ WORK PACKAGE</p><h2>复用能力和具体工作不能混称</h2></div><p>同一个能力在不同事项中，会因事实、法域、执行者、权限和责任产生不同接口。</p></div><div className="comparison-grid"><article><code>LEGAL CAPABILITY</code><h3>Module / Pattern</h3><p>跨项目复用的知识与方法，保存适用边界、来源、版本和测试。</p><small>Reusable across matters</small></article><i>进入具体事项</i><article className="accent"><code>WORK PACKAGE</code><h3>Task in a Matter</h3><p>在确定目标、上下文和责任条件下，由特定主体完成并验收的工作。</p><small>Situated execution</small></article><i>需要明确边界</i><article><code>LEGAL WORK INTERFACE</code><h3>Contextual Contract</h3><p>把能力与具体执行环境连接起来，并确定复核、升级和最终决定。</p><small>Versioned per assignment</small></article></div></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">BOUNDARY FIT</p><h2>不同知识边界需要不同接口</h2></div><p>更多字段不必然更好；接口应与边界性质和任务风险匹配。</p></div><div className="boundary-grid">{boundaryTypes.map(([code, name, detail]) => <article key={code}><code>{code}</code><h3>{name}</h3><p>{detail}</p><StatusBadge>WORKING THEORY</StatusBadge></article>)}</div></section>

    <section className="final-cta"><p className="section-kicker">ARTIFACT, NOT ANSWER</p><h2>结构只有在真实实验中降低澄清、返工和整合成本，才值得继续。</h2><div><Link className="button primary" href="/studies">查看实验设计 <span>→</span></Link><Link className="button ghost" href="/governance">查看数据边界</Link></div></section>
  </ResearchShell>;
}
