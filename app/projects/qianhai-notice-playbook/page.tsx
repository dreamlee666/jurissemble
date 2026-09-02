import type { Metadata } from "next";
import { PageShell, StatusBadge } from "../../components/SiteShell";
import { projectManifest, repositoryIdentity } from "../../data/collaboration";

export const metadata: Metadata = {
  title: `${projectManifest.title} · Project Manifest · Jurissemble`,
  description: projectManifest.description,
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function ProjectManifestPage() {
  return <PageShell>
    <section className="manifest-hero"><div><p className="section-kicker">PROJECT MANIFEST · PUBLIC BLUEPRINT</p><h1>{projectManifest.title}</h1><p>{projectManifest.description}</p><div className="badge-row"><StatusBadge tone="amber">{projectManifest.label}</StatusBadge><StatusBadge>NOT PRODUCTION READY</StatusBadge><StatusBadge>update · {projectManifest.updatePolicy}</StatusBadge></div></div><div className="manifest-file"><div><span>project.manifest</span><b>LOCKED</b></div><pre>{`project: ${projectManifest.id}\nvisibility: public_blueprint\nrepository: jiaozhu7/construction-legal-engineering\nschema_preview: v0.1.0-alpha\nmodule: CN.CONSTRUCTION.MODULE.NOTICE@0.1.0-alpha\ncontent_release: none\nupdate_policy: manual_review\nlocal_overlay: private`}</pre></div></section>
    <section className="content-section compact"><div className="section-head"><div><p className="section-kicker">LOCKED DEPENDENCIES</p><h2>项目依赖的精确版本</h2></div><p>底层内容的新revision不会静默改变当前项目；当前锁定的是结构预览，不是生产可用的法律内容。</p></div><div className="manifest-dependencies">{projectManifest.dependencies.map(([kind, name, version]) => <article key={`${kind}-${name}`}><StatusBadge tone={kind === "Schema Preview" ? "amber" : "neutral"}>{kind}</StatusBadge><h3>{name}</h3><code>{version}</code></article>)}</div></section>

    <section className="content-section overlay-section"><div><p className="section-kicker">PRIVATE LOCAL OVERLAY</p><h2>公共知识与客户事项在这里分层</h2><p>公共Manifest只保存可复用结构。真实项目的事实、合同、金额、证据和策略在私有层叠加，不进入公共仓库。</p></div><div className="overlay-card"><div><StatusBadge>PRIVATE</StatusBadge><strong>local-overlay.yml</strong></div><ul>{projectManifest.privateFields.map((field) => <li key={field}>{field}</li>)}</ul></div></section>

    <section className="content-section update-section"><div className="lock-callout"><span>VERSION LOCK</span><h2>{projectManifest.lockNote}</h2><p>新版本只形成更新提示，由项目维护者判断是否升级并重新检查适用性和影响。</p></div><div className="action-row"><a className="button primary" href={`${repositoryIdentity.path}/releases/v0.1.0-alpha`}>查看依赖Schema Preview <span>→</span></a><a className="button secondary" href={`${repositoryIdentity.path}/objects/CN.CONSTRUCTION.NOTICE.PROPOSITION.001`}>查看依赖LegalUnit</a></div></section>
  </PageShell>;
}
