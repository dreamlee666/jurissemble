import type { Metadata } from "next";
import { PageShell, RepoTabs, StatusBadge } from "../../../components/SiteShell";
import { mappings } from "../../../data/registry";

export const metadata: Metadata = { title: "跨合同映射 · 建设工程法律工程", description: "深圳建设工程示范合同与NEC HK Edition的候选语义映射。", openGraph: { images: [] }, twitter: { images: [] } };

export default function MappingsPage() {
  return <PageShell><section className="subpage-head"><p className="breadcrumb"><a href="/repositories/construction-legal-engineering">construction-legal-engineering</a> / mappings</p><h1>Cross-contract Mapping</h1><p>映射不是文本相似度。每个概念需分别比较含义、程序、风险、证据和法律后果。</p></section><RepoTabs active="mappings" /><section className="repo-content"><div className="mapping-legend"><code>same_as</code><code>similar_to</code><code>broader_than</code><code>narrower_than</code><code>different_procedure</code><code>different_consequence</code></div><div className="mapping-table"><div className="mapping-row header"><span>概念</span><span>深圳 / 内地表达</span><span>NEC表达</span><span>关系与状态</span></div>{mappings.map((mapping) => <article className="mapping-row" key={mapping.concept}><div><strong>{mapping.concept}</strong><small>{mapping.focus}</small></div><span>{mapping.source}</span><span>{mapping.target}</span><div><code>{mapping.relation}</code><StatusBadge tone="amber">{mapping.state}</StatusBadge></div></article>)}</div></section></PageShell>;
}
