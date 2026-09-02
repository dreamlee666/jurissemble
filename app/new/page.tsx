import type { Metadata } from "next";
import { PublishModuleForm } from "../components/PublishModuleForm";
import { PageShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "发布法律模块 · Jurissemble · 律构集", description: "定义法律能力的用途、非用途、输入输出、来源、停止条件和专业复核边界。" };

export default function PublishModulePage() {
  return <PageShell><section className="page-hero product-page-hero"><p className="eyebrow"><span /> PUBLISH LEGAL MODULE</p><h1>先定义边界，<br /><em>再发布方法。</em></h1><p>不用先理解完整理论。回答何时使用、不能用于什么、需要什么输入、产出什么、何时必须停止，就能形成第一份模块草案。</p></section><section className="content-section compact"><PublishModuleForm /></section></PageShell>;
}
