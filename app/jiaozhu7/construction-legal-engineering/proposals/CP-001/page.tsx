import type { Metadata } from "next";
import { PageShell, RepoTabs, StatusBadge } from "../../../../components/SiteShell";
import { proposal, propositionObject, repositoryIdentity } from "../../../../data/collaboration";

export const metadata: Metadata = { title: `${proposal.id} · 提案示例 · Jurissemble`, description: proposal.reason, openGraph: { images: [] }, twitter: { images: [] } };

export default function ProposalPage() {
  return <PageShell><section className="subpage-head proposal-head"><p className="breadcrumb"><a href={repositoryIdentity.path}>jiaozhu7 / construction-legal-engineering</a> / proposals / {proposal.id}</p><div className="badge-row"><StatusBadge tone="amber">{proposal.state}</StatusBadge><StatusBadge>NOT MERGED</StatusBadge></div><h1>{proposal.id} · {proposal.title}</h1><p>{proposal.reason}</p><dl className="proposal-meta"><div><dt>Author</dt><dd>{proposal.author}</dd></div><div><dt>Target</dt><dd>{proposal.targetObject}</dd></div><div><dt>Base</dt><dd>{proposal.baseRevision}</dd></div><div><dt>Candidate</dt><dd>{proposal.proposedRevision}</dd></div></dl></section><RepoTabs active="proposals" />
    <section className="repo-content"><div className="section-head"><div><p className="section-kicker">LEGAL SEMANTIC DIFF</p><h2>变化的不只是字词</h2></div><p>范围、来源、权利、法律效果、机器来源和下游依赖都可能随一次修改改变。</p></div><div className="semantic-diff">{proposal.diff.map(([kind, detail], index) => <article key={kind}><div><span>{String(index + 1).padStart(2, "0")}</span><code>{kind}</code></div><p>{detail}</p></article>)}</div>
      <section className="module-section"><div className="section-head"><div><p className="section-kicker">REVIEW REQUIREMENTS</p><h2>这是待办，不是批准记录</h2></div><p>当前没有真实评审者，也没有任何APPROVED记录。未来每次Review必须声明范围、身份和判断理由。</p></div><div className="review-list">{proposal.reviewRequirements.map(([scope, status, note]) => <article key={scope}><div><StatusBadge tone="amber">{status}</StatusBadge><code>{scope}</code></div><h3>Required review</h3><p>{note}</p></article>)}</div></section>
      <div className="merge-boundary"><span>MERGE ≠ LEGAL TRUTH</span><strong>{proposal.mergeMeaning}</strong></div><div className="action-row"><a className="button primary" href={`${repositoryIdentity.path}/releases/v0.1.0-alpha`}>查看相关Schema Preview <span>→</span></a><a className="button secondary" href={`${repositoryIdentity.path}/objects/${propositionObject.objectId}`}>返回LegalUnit</a></div>
    </section>
  </PageShell>;
}
