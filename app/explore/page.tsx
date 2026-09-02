import type { Metadata } from "next";
import { ExploreCatalog } from "../components/ExploreCatalog";
import { PageShell, StatusBadge } from "../components/SiteShell";

export const metadata: Metadata = { title: "发现法律模块 · Jurissemble · 律构集", description: "按用途、类型、法域、时点、接口和维护状态发现可复用法律能力。" };

export default function ExplorePage() {
  return <PageShell><section className="page-hero product-page-hero explore-module-hero"><div><p className="eyebrow"><span /> MODULE REGISTRY</p><h1>先判断是否适用，<br /><em>再加入自己的项目。</em></h1><p>用途、非用途、输入输出、法域、时点、来源、版本和审查范围，比星标和下载量更重要。</p></div><StatusBadge tone="amber">3 RESEARCH PROTOTYPES</StatusBadge></section><section className="content-section compact"><ExploreCatalog /></section></PageShell>;
}
