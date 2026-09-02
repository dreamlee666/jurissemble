import type { Metadata } from "next";
import { PageShell, RepoTabs, StatusBadge } from "../../../../components/SiteShell";
import { modules } from "../../../../data/registry";

const moduleData = modules.variation;
export const metadata: Metadata = { title: "Variation Module · Jurissemble", description: moduleData.summary, openGraph: { images: [] }, twitter: { images: [] } };

export default function VariationPage() {
  return <ModulePage module={moduleData} active="variation" />;
}

function ModulePage({ module, active }: { module: typeof moduleData; active: string }) {
  return <PageShell><section className="subpage-head module-head"><p className="breadcrumb"><a href="/repositories/construction-legal-engineering">construction-legal-engineering</a> / modules / variation</p><div><span className="module-id">{module.id}</span><StatusBadge tone="amber">{module.state}</StatusBadge></div><h1>{module.cnTitle}</h1><p>{module.summary}</p></section><RepoTabs active={active} /><section className="repo-content module-content"><div className="module-question"><span>RESEARCH QUESTION</span><h2>{module.question}</h2></div><div className="module-section"><p className="section-kicker">STATE MACHINE v0.1</p><h2>候选流程状态</h2><div className="state-machine">{module.stages.map((stage, index) => <div key={stage}><span>{String(index + 1).padStart(2, "0")}</span><b>{stage}</b>{index < module.stages.length - 1 && <i>→</i>}</div>)}</div></div><div className="two-column"><article><p className="section-kicker">CONNECTED OBJECTS</p><h2>关联对象</h2><div className="tag-cloud">{module.objects.map((item) => <span key={item}>{item}</span>)}</div></article><article><p className="section-kicker">OPEN QUESTIONS</p><h2>待验证问题</h2><ol>{module.openQuestions.map((item) => <li key={item}>{item}</li>)}</ol></article></div><div className="caution-box"><b>使用边界</b><p>本模块是结构验证样本，不是特定合同或项目的法律意见。合同原文、专用条件、适用法律和项目事实均可能改变结论。</p></div></section></PageShell>;
}
