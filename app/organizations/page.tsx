import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";

export const metadata: Metadata = { title: "组织空间 · Jurissemble · 律构集", description: "律所、法务团队和研究机构共同维护、复用和评审法律模块的空间。" };

const capabilities = [
  ["NAMESPACE", "组织模块命名空间", "模块归属于组织，版本维护不依赖某一个账号持续在线。"],
  ["PERMISSIONS", "方法与事项分层", "公开方法、组织内部方法和具体客户实例采用不同可见性与审计规则。"],
  ["REVIEW", "专业评审责任", "按接口、方法、来源、法域和实践范围指定复核者与发布权限。"],
  ["DEPENDENCY", "组织依赖治理", "统一批准可复用版本，查看哪些项目依赖某个模块及更新影响。"],
];

export default function OrganizationsPage() {
  return <PageShell><section className="page-hero product-page-hero"><p className="eyebrow"><span /> ORGANIZATIONS</p><h1>团队共同维护方法，<br /><em>项目安全复用版本。</em></h1><p>组织空间服务律所、企业法务、研究机构和专业共同体：维护模块、批准依赖版本、分配评审责任，同时隔离具体客户实例。</p><p className="research-warning"><strong>真实状态：</strong>0个组织账号，0个私有Registry，0个项目实例。不要在当前网站提交任何客户材料。</p></section><section className="content-section compact"><div className="organization-capability-grid">{capabilities.map(([code, title, detail]) => <article key={code}><code>{code}</code><StatusBadge>PLANNED</StatusBadge><h2>{title}</h2><p>{detail}</p></article>)}</div></section><section className="final-cta"><p className="section-kicker">PUBLIC MODULE FIRST</p><h2>账号和权限上线前，先验证公开模块能否被发现、锁定版本、派生和组合。</h2><div><Link className="button primary" href="/modules/open-practice/case-law-research">查看模块原型 <span>→</span></Link><Link className="button ghost" href="/new">配置模块草案</Link></div></section></PageShell>;
}
