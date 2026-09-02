import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";
import { workflowSteps } from "../data/product";

export const metadata: Metadata = { title: "法律工作场景 · Jurissemble · 律构集", description: "按法律工作的实际环节发现和组合可调用工作流。" };

const scenarios = [
  ["争议解决", "从事项识别、请求权分析和证据审查，组合到程序管理与复盘。"],
  ["合同全周期", "从交易目标、条款生成和谈判，组合到履约监控与争议预防。"],
  ["公司并购", "从尽调范围、风险分级和审批，组合到交易文件、交割与整合。"],
  ["资本市场", "从合规核查、问题清单和整改，组合到披露、申报与持续义务。"],
  ["企业合规", "从义务识别、控制设计和证据留存，组合到监测、调查与更新。"],
  ["跨境与出海", "按国家和业务拆分依赖，组合准入、数据、用工、税务和交易工作流。"],
];

export default function TopicsPage() {
  return <PageShell><section className="page-hero product-page-hero"><p className="eyebrow"><span /> WORK SCENARIOS</p><h1>从工作环节发现，<br /><em>在项目场景中组合。</em></h1><p>最小工作流解决一个稳定步骤；诉讼、并购、IPO或出海等完整事项，则通过输入输出和依赖关系把多个工作流连接起来。</p></section><section className="content-section compact"><div className="section-head"><div><p className="section-kicker">WORKFLOW STEPS</p><h2>按法律工作环节进入</h2></div><p>当前Registry尚未接入真实包；下列分类先固定社区共同使用的发现语言。</p></div><div className="workflow-step-grid">{workflowSteps.map((step) => <article key={step.code}><code>{step.code}</code><StatusBadge>0 PACKAGES</StatusBadge><h3>{step.name}</h3><span>{step.en}</span><p>{step.detail}</p></article>)}</div></section><section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">COMPOSED SCENARIOS</p><h2>完整项目是工作流图，不是一个巨型模板</h2></div><p>同一个基础工作流可以被多个专业场景调用；场景之间共享方法，不复制孤立文件。</p></div><div className="scenario-compose-grid">{scenarios.map(([name, detail]) => <article key={name}><StatusBadge>COMPOSITION EMPTY</StatusBadge><h3>{name}</h3><p>{detail}</p><span>等待首个公开组合方案</span></article>)}</div></section><section className="final-cta"><p className="section-kicker">INTERFACE DEMO</p><h2>先看一个“案例检索”工作流如何声明输入、输出与依赖。</h2><div><Link className="button primary" href="/workflows/case-law-research">查看调用界面 <span>→</span></Link><Link className="button ghost" href="/docs#calling">了解调用方式</Link></div></section></PageShell>;
}
