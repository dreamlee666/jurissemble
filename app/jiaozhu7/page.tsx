import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";
import { foundingRepository } from "../data/product";
import { founder } from "../data/collaboration";

export const metadata: Metadata = { title: "jiaozhu7 · 贡献者 · Jurissemble · 律构集", description: "创始贡献者jiaozhu7及其首个公开法律仓库。" };

export default function ContributorProfilePage() {
  return <PageShell><section className="profile-hero"><div className="profile-avatar">J7</div><div><p className="eyebrow"><span /> FOUNDING CONTRIBUTOR</p><h1>{founder.username}</h1><p>{founder.bio} 当前主页展示仓库归属和产品原型中的贡献记录，不代表律师资质认证或专业排名。</p></div><StatusBadge tone="green">CONTRIBUTOR PROFILE</StatusBadge></section><section className="content-section compact profile-layout"><div><div className="section-head"><div><p className="section-kicker">REPOSITORIES</p><h2>公开仓库</h2></div><p>当前只有一个真实存在的本地示范仓库，不制造Star、Fork、合并或发布记录。</p></div><Link className="featured-repo-card" href={foundingRepository.path}><div className="repo-card-top"><span className="repo-glyph">CLE</span><div><p>{foundingRepository.owner} / <strong>{foundingRepository.slug}</strong></p><h3>{foundingRepository.title}</h3></div><StatusBadge tone="amber">{foundingRepository.stage}</StatusBadge></div><p>{foundingRepository.description}</p><div className="catalog-tags">{foundingRepository.jurisdictions.concat(foundingRepository.topics).map((tag) => <span key={tag}>{tag}</span>)}</div><div className="mini-stats">{foundingRepository.facts.map(([value, label]) => <span key={label}><b>{value}</b> {label}</span>)}</div></Link></div><aside className="profile-sidebar"><h2>贡献者概览</h2><p>以建设工程仓库验证法律工作能否像项目一样被维护。账号不是网站主题边界。</p><dl><div><dt>公开仓库</dt><dd>1</dd></div><div><dt>维护仓库</dt><dd>1</dd></div><div><dt>已合并提案</dt><dd>0</dd></div><div><dt>法律内容Release</dt><dd>0</dd></div></dl><h2 className="sidebar-subtitle">可见贡献范围</h2><ul className="activity-list"><li>创建首个仓库结构</li><li>维护通知与变更模块原型</li><li>整理10条来源线索</li><li>未形成已核验法律结论</li></ul><Link className="sidebar-link" href="/new"><span>创建另一个仓库</span><small>local prototype →</small></Link></aside></section></PageShell>;
}
