import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";
import { legalModules } from "../data/modules";

export const metadata: Metadata = { title: "私有项目 · Jurissemble · 律构集", description: "在私有项目中锁定、组合法律模块版本，并隔离客户事实和运行状态。" };

export default function ProjectsPage() {
  return <PageShell><section className="page-hero product-page-hero project-index-hero"><div><p className="eyebrow"><span /> PRIVATE PROJECTS</p><h1>公开模块进入项目，<br /><em>具体事项保持私有。</em></h1><p>项目锁定模块Release、连接输入输出并记录更新影响；客户身份、文档、证据、策略和决定不进入公共社区。</p></div><StatusBadge tone="amber">PRIVATE RUNTIME · NOT BUILT</StatusBadge></section><section className="content-section compact"><div className="project-boundary-grid"><article><code>PUBLIC</code><h2>Module Registry</h2><p>用途、接口、公开方法、来源、版本和审查记录。</p></article><i>ADD / COMPOSE →</i><article><code>PRIVATE</code><h2>Project & Matter</h2><p>事实、文档、证据、策略、授权、状态和运行日志。</p></article></div><div className="project-prototype"><div className="section-head"><div><p className="section-kicker">COMPOSITION PREVIEW</p><h2>研究问题项目 · 示例依赖图</h2></div><StatusBadge tone="amber">NO DATA WRITTEN</StatusBadge></div><div className="project-lock-list">{legalModules.map((item, index) => <article key={item.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{item.title}</strong><code>{item.packageId}</code></div><StatusBadge>{index === 2 ? "OPTIONAL" : "LOCKED"}</StatusBadge></article>)}</div><p>这个组合只演示版本锁定和依赖关系。M0不会创建项目、上传文件或运行具体事项。</p></div><div className="project-action-row"><Link className="button secondary" href="/projects/qianhai-notice-playbook">查看既有Manifest示例</Link><Link className="button primary" href="/explore">选择模块 <span>→</span></Link></div></section></PageShell>;
}
