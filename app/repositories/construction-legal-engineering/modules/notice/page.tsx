import type { Metadata } from "next";
import { PageShell, RepoTabs, StatusBadge } from "../../../../components/SiteShell";
import { noticeModule, repositoryIdentity } from "../../../../data/collaboration";

export const metadata: Metadata = {
  title: "项目通知工作流 · Module · Jurissemble",
  description: noticeModule.purpose,
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function NoticePage() {
  return <PageShell>
    <section className="subpage-head module-head">
      <p className="breadcrumb"><a href={repositoryIdentity.path}>jiaozhu7 / construction-legal-engineering</a> / modules / notice</p>
      <div><span className="module-id">{noticeModule.moduleId}</span><StatusBadge tone="amber">{noticeModule.state}</StatusBadge></div>
      <h1>{noticeModule.title}</h1>
      <p>{noticeModule.purpose}</p>
      <div className="badge-row"><StatusBadge tone="amber">来源待核验</StatusBadge><StatusBadge>非自动法律结论</StatusBadge><StatusBadge tone="amber">仅Schema Preview锁定</StatusBadge></div>
    </section>
    <RepoTabs active="modules" />
    <section className="repo-content module-content">
      <div className="module-question"><span>MODULE CONTRACT · 0.1.0-alpha</span><h2>输入和来源不完整时，流程应暴露缺口，而不是提前输出通知期限或实体结论。</h2></div>

      <div className="two-column module-io"><article><p className="section-kicker">INPUTS</p><h2>开始前需要什么</h2><ul className="clean-list">{noticeModule.inputs.map((item) => <li key={item}>{item}</li>)}</ul></article><article><p className="section-kicker">OUTPUTS</p><h2>模块产生什么</h2><ul className="clean-list">{noticeModule.outputs.map((item) => <li key={item}>{item}</li>)}</ul></article></div>

      <div className="module-section"><p className="section-kicker">WORKFLOW</p><h2>从触发到后果复核</h2><div className="state-machine notice-machine">{noticeModule.workflow.map((stage, index) => <div key={stage}><span>{String(index + 1).padStart(2, "0")}</span><b>{stage}</b>{index < noticeModule.workflow.length - 1 && <i>→</i>}</div>)}</div></div>

      <div className="module-section"><div className="section-head"><div><p className="section-kicker">LOCKED DEPENDENCIES</p><h2>依赖的LegalUnit revisions</h2></div><p>不是依赖“最新版”。当前锁定只验证结构稳定性，不表示单元已完成来源与专业复核。</p></div><div className="dependency-list">{noticeModule.dependencies.map((dependency) => <a key={dependency.objectId} href={dependency.objectId.includes("PROPOSITION") ? `${repositoryIdentity.path}/objects/${dependency.objectId}` : "#tests"}><div><code>{dependency.objectId}</code><h3>{dependency.label}</h3></div><strong>{dependency.revisionId}</strong></a>)}</div></div>

      <div className="two-column" id="tests"><article><p className="section-kicker">TESTS</p><h2>结构测试</h2><ol>{noticeModule.tests.map((item) => <li key={item}>{item}</li>)}</ol></article><article><p className="section-kicker">SCHEMA PREVIEW</p><h2>结构兼容快照</h2><div className="release-lock"><StatusBadge tone="amber">v0.1.0-alpha</StatusBadge><strong>Module {noticeModule.version}</strong><p>Alpha仅表示结构闭环可演示，不表示法律内容可用于具体项目。</p></div></article></div>

      <div className="action-row"><a className="button primary" href={`${repositoryIdentity.path}/objects/CN.CONSTRUCTION.NOTICE.PROPOSITION.001`}>查看核心LegalUnit <span>→</span></a><a className="button secondary" href={`${repositoryIdentity.path}/releases/v0.1.0-alpha`}>查看Schema Preview</a></div>
    </section>
  </PageShell>;
}
