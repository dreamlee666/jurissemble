import type { Metadata } from "next";
import { PageShell, RepoTabs, StatusBadge } from "../../../components/SiteShell";
import { repositoryIdentity } from "../../../data/collaboration";
import { sources } from "../../../data/registry";

export const metadata: Metadata = {
  title: "通知与期限研究 · 建设工程法律工程",
  description: "建设工程仓库中关于通知触发、合同来源、期限输入、送达和证据的公开法律问题研究。",
  openGraph: { images: [] },
  twitter: { images: [] },
};

const researchQuestions = [
  ["Q01", "什么事实足以触发通知条款审查，而不是直接得出必须通知的结论？", "FactPattern → IssueFrame"],
  ["Q02", "如何锁定具体合同版本、条款位置、修改文件和适用主体？", "SourceAnchor → Scope"],
  ["Q03", "自然日、工作日、知悉时间和延长规则需要哪些输入？", "Inputs → Deadline Rule"],
  ["Q04", "通知的形式、必要内容、送达方式和接收角色如何被分别表达？", "Proposition → ActionStep"],
  ["Q05", "通知迟延、瑕疵、放弃或实际损害的不同观点如何并存？", "IssueFrame → Arguments"],
  ["Q06", "哪些发送记录和后续往来足以组成可复核的证据包？", "ActionStep → EvidenceSpec"],
];

const currentFindings = [
  ["事实与评价分离", "Event只记录发生了什么；是否产生通知义务由独立的Issue和Proposition判断。"],
  ["期限必须声明输入", "没有合同版本、触发点和计算规则时，LegalUnit返回unknown，而不是生成一个看似精确的日期。"],
  ["行动连接证据输出", "发送通知不能只记录“已完成”，还应关联定稿版本、渠道、时间、收件信息和回执。"],
  ["分歧不被覆盖", "不同合同解释和后果观点可以通过revision、branch或conflicts_with关系并存。"],
];

export default function ResearchPage() {
  return <PageShell>
    <section className="subpage-head"><p className="breadcrumb"><a href={repositoryIdentity.path}>jiaozhu7 / construction-legal-engineering</a> / research / notice</p><p className="section-kicker">EXPERIMENT 01 · CRITICAL INCIDENT RESEARCH</p><h1>通知与期限</h1><p>先从真实关键事件还原触发事实、合同来源、判断点、期限输入、送达、证据和行动，再检验哪些内容可以抽象为 Pattern 或 Module。</p></section>
    <RepoTabs active="research" />
    <section className="repo-content">
      <div className="section-head"><div><p className="section-kicker">RESEARCH QUESTIONS</p><h2>可以独立讨论和贡献的问题</h2></div><p>研究被拆成明确问题点，贡献者可以只补充一个来源、一个反例或一种解释，而不必重写整份报告。</p></div>
      <div className="public-question-grid">{researchQuestions.map(([id, question, mapping]) => <article key={id}><div><code>{id}</code><StatusBadge>OPEN DISCUSSION</StatusBadge></div><h3>{question}</h3><span>{mapping}</span></article>)}</div>

      <section className="module-section"><div className="section-head"><div><p className="section-kicker">PROVISIONAL MODEL DECISIONS</p><h2>等待事件样本检验的设计判断</h2></div><p>这些是为了开始实验而采用的暂定结构，不是已由实践证明的法律发现。</p></div><div className="finding-list">{currentFindings.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section className="module-section"><div className="section-head"><div><p className="section-kicker">EMPIRICAL GATES</p><h2>从 Pilot 到迁移测试</h2></div><p>30—50 个事件是探索性目标；先以 6—8 个 Pilot 修订访谈提纲和代码本。</p></div><div className="experiment-gate-grid">{[["01","Pilot episodes","0 / 8"],["02","Double-coded sample","0"],["03","Candidate patterns","0"],["04","Transfer tests","0"]].map(([id, title, status]) => <article key={id}><span>{id}</span><StatusBadge tone="amber">NOT STARTED</StatusBadge><h3>{title}</h3><p>{status}</p></article>)}</div></section>

      <section className="module-section"><div className="section-head"><div><p className="section-kicker">SOURCE REGISTER</p><h2>公开来源与核验状态</h2></div><a className="text-link" href="/repositories/construction-legal-engineering/sources">打开完整来源台账 →</a></div><div className="research-source-list">{sources.slice(0, 5).map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer"><div><code>{source.id}</code><h3>{source.title}</h3></div><div><StatusBadge tone={source.state === "已定位" ? "green" : "amber"}>{source.state}</StatusBadge><span>{source.issuer}</span></div></a>)}</div></section>

      <section className="research-contribute"><div><p className="section-kicker">CONTRIBUTE TO THIS RESEARCH</p><h2>有关键事件、遗漏来源或结构反例？</h2><p>原始事项不会直接公开。先确认研究同意和去标识边界，再形成 Decision Episode、来源贡献或反例。</p></div><div className="action-row"><a className="button primary" href="/community">查看研究参与路径 <span>→</span></a><a className="button secondary" href={`${repositoryIdentity.path}/proposals/CP-001`}>查看Proposal示例</a></div></section>
    </section>
  </PageShell>;
}
