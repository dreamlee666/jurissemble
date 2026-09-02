import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";

export const metadata: Metadata = { title: "法律仓库 · Jurissemble · 律构集", description: "浏览共同维护Legal Module、来源、提案、测试和Release的协作容器。" };

export default function RepositoriesPage() {
  return <PageShell><section className="page-hero product-page-hero"><p className="eyebrow"><span /> REPOSITORIES</p><h1>模块用于复用，<br /><em>仓库用于共同维护。</em></h1><p>仓库承载模块文件、来源、测试、Issue、Proposal、Review和Release。它可以属于个人或组织，但不等于可调用能力本身。</p></section><section className="content-section compact"><div className="catalog-summary"><strong>1 个示例仓库</strong><span>建筑工程是发起人账号下的首个参考项目，不是网站的内容边界。</span></div><Link className="repository-index-card" href="/repositories/construction-legal-engineering"><div><span className="repo-glyph">CLE</span><section><p>jiaozhu7 / <strong>construction-legal-engineering</strong></p><h2>建设工程法律工程</h2><span>试验来源、法律问题、模块、提案和Release如何共同维护。</span></section><StatusBadge tone="amber">SCHEMA PREVIEW</StatusBadge></div><footer><span>PUBLIC</span><span>0 CONTENT RELEASES</span><span>0 PROFESSIONAL REVIEWS</span><span>CC LICENSE · PENDING</span></footer></Link><div className="module-empty-state repository-callout"><strong>未来仓库不按建筑工程限定</strong><p>诉讼、合同、并购、IPO、出海、合规和任何可命名法律问题，都可以由其他账号建立自己的仓库和模块。</p><Link className="button secondary" href="/new">定义第一个模块</Link></div></section></PageShell>;
}
