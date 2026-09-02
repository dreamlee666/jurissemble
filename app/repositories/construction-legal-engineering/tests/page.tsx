import type { Metadata } from "next";
import { PageShell, RepoTabs, StatusBadge } from "../../../components/SiteShell";
import { legalTests } from "../../../data/registry";

export const metadata: Metadata = { title: "Legal Tests · 建设工程法律工程", description: "验证事实是否触发正确Rule、Workflow和Issue的法律测试。", openGraph: { images: [] }, twitter: { images: [] } };

export default function TestsPage() {
  return <PageShell><section className="subpage-head"><p className="breadcrumb"><a href="/repositories/construction-legal-engineering">construction-legal-engineering</a> / tests</p><h1>Legal Tests</h1><p>测试不预测法院必然如何裁判，而是检查给定事实是否找到正确规则、程序、证据要求和争点。</p></section><RepoTabs active="tests" /><section className="repo-content"><div className="test-summary"><div><strong>{legalTests.length}</strong><span>示范测试</span></div><div><strong>1</strong><span>通过Schema检查</span></div><div><strong>3</strong><span>仍需专业复核</span></div><p><span className="status-dot" /> Regression suite · v0.1</p></div><div className="test-list">{legalTests.map((test) => <article key={test.id}><div className="test-title"><code>{test.id}</code><StatusBadge tone={test.state === "示范通过" ? "green" : "amber"}>{test.state}</StatusBadge></div><h2>{test.name}</h2><dl><div><dt>事实输入</dt><dd>{test.input}</dd></div><div><dt>预期结果</dt><dd>{test.expected}</dd></div><div><dt>人工复核</dt><dd>{test.review}</dd></div></dl></article>)}</div></section></PageShell>;
}
