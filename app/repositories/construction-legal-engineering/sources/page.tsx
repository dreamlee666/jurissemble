import type { Metadata } from "next";
import { PageShell, RepoTabs } from "../../../components/SiteShell";
import { SourceExplorer } from "../../../components/SourceExplorer";

export const metadata: Metadata = { title: "权威来源 · 建设工程法律工程", description: "Construction Legal Engineering首批Source Manifest。", openGraph: { images: [] }, twitter: { images: [] } };

export default function SourcesPage() {
  return <PageShell><section className="subpage-head"><p className="breadcrumb"><a href="/repositories/construction-legal-engineering">construction-legal-engineering</a> / sources</p><h1>Source Manifest</h1><p>稳定规则、映射和案例必须连接source_id。当前清单只表示官方来源已经定位，不代表相关内容已经完成法律审核。</p></section><RepoTabs active="sources" /><section className="repo-content"><SourceExplorer /></section></PageShell>;
}
