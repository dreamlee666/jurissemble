import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "项目档案 · Jurissemble · 律构集",
  description: "供学术与专业评估使用的Jurissemble项目档案：研究问题、系统贡献、公开证据、复现方法、边界与下一步验证。",
  keywords: ["legal engineering", "computational law", "open source law", "legal knowledge engineering", "法律工程"],
  openGraph: {
    title: "Jurissemble Project Dossier · 律构集项目档案",
    description: "一个从法律工程研究问题走向可运行产品、开放规范与可复现实验的公共项目。",
    type: "website",
  },
};

const repositoryUrl = "https://github.com/dreamlee666/jurissemble";

const reviewPath = [
  ["01", "体验产品", "查看律师如何发现、引用、派生和组合Legal Module。", "/"],
  ["02", "检查对象", "检查用途、接口、来源、版本、边界和复核是否同时存在。", "/modules/open-practice/case-law-research"],
  ["03", "复现验证", "从公开仓库运行构建、页面测试和Schema校验。", `${repositoryUrl}#本地运行`],
  ["04", "审查研究", "核对研究主张、证据状态、反证条件与未完成工作。", "/research-lab"],
] as const;

const layers = [
  ["F", "事实命题层", "Fact Proposition", "把材料转为带来源、时点、置信度和争议状态的事实命题；事实不会自动变成法律结论。"],
  ["L", "法律命题层", "Legal Proposition", "连接规范、案例、解释、反方观点和适用条件；保留权威层级与法域时间。"],
  ["C", "可执行规格层", "Executable Specification", "把输入、输出、依赖、停止条件、测试和版本写成机器可读接口；结构通过不等于法律正确。"],
  ["D", "律师决策控制面", "Lawyer Decision Control Plane", "决定目标、相关性、风险容忍、升级、策略选择、复核范围与最终签发；它贯穿前三层而非被代码取代。"],
] as const;

const contributions = [
  ["NATIVE OBJECT", "把Legal Module设为原生复用对象", "仓库是协作容器；真正被调用的是有用途、非用途、输入输出、来源、版本、权利和复核边界的能力模块。"],
  ["FLC+D", "把事实、法律、规格与决策分层", "避免从原始事实直接跳到自动结论，让每次转换都能被检查、质疑、复核和回退。"],
  ["TRUST ENVELOPE", "把可信度拆成可审计状态", "结构、来源、同行审查、实践使用、法域时点和事项适用性分别展示，不制造一个笼统的绿色勾。"],
  ["LOCAL COMPILER", "建立案件到公共库之间的编译层", "完整事项默认留在本地；只有通过保密、权利、去识别、来源和责任律师闸门的能力候选才可能公开。"],
] as const;

const evidence = [
  ["运行中的多页面产品原型", "IMPLEMENTED · BUILD TESTED", "证明信息架构和核心交互已经落成；不证明存在真实社区采用。", "/explore", "打开产品"],
  ["Legal Module JSON Schema与三个合成样本", "STRUCTURE VALIDATED", "证明高、中、低模块化对象可以机器校验；不证明法律内容正确。", `${repositoryUrl}/tree/main/spec`, "检查Schema"],
  ["本地事项整理脚本与安全工作流", "IMPLEMENTED · LOCAL ONLY", "证明私有事项与公共候选可以双轨组织；当前不读取内容、不自动脱敏。", "/toolkit", "查看工具"],
  ["研究主张—证据账本与Study 0—6", "REGISTERED · NOT COMPLETE", "证明研究计划和反证条件已公开；正式综述与实证数据尚未完成。", "/evidence", "审查证据"],
  ["公开源代码、许可、治理与贡献规则", "VERSIONED · PUBLIC", "证明项目可以复现、引用和接受外部审查；不代表已经形成治理共同体。", repositoryUrl, "查看仓库"],
] as const;

const limits = [
  "目前没有真实社区账号、活跃用户、Star/Fork成效或机构背书数据。",
  "示例仅使用合成、公开或去客户化内容，不构成针对具体事项的法律意见。",
  "Schema校验只验证结构，不验证法律结论、来源充分性或事项适用性。",
  "FLC+D与Legal Modularizability仍是工作理论，尚未完成访谈、对照实验和跨领域复制。",
  "品牌、域名和正式商业使用仍需另行完成商标、合规与安全审查。",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Jurissemble · 律构集",
  alternateName: "Open Legal Module Network",
  description: "An open legal engineering prototype for versioned, reviewable and composable legal capability modules.",
  codeRepository: repositoryUrl,
  programmingLanguage: ["TypeScript", "JSON Schema"],
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  author: { "@type": "Person", alternateName: "dreamlee666" },
};

export default function DossierPage() {
  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

    <section className="dossier-hero">
      <div className="dossier-hero-copy">
        <p className="eyebrow"><span /> PROJECT DOSSIER · RESEARCH × PRODUCT × OPEN SOURCE</p>
        <h1>把一个法律工程问题，<br /><em>做成可以被检查的公共系统。</em></h1>
        <p className="dossier-lead">Jurissemble不是个人宣传页，也不是已经成立的行业标准。它是一项公开进行的法律工程实验：法律工作能否在保留事实来源、法域时点、专业判断和责任边界的前提下，被版本化、复用、组合与共同维护。</p>
        <div className="hero-actions"><Link className="button primary" href="/">进入产品 <span>→</span></Link><a className="button secondary" href={repositoryUrl} target="_blank" rel="noreferrer">查看公开代码</a></div>
        <p className="dossier-audience">FOR · 研究生/博士项目评估 · 法律科技与知识工程岗位 · 开源协作者</p>
      </div>
      <aside className="review-path-card" aria-label="五分钟评估路径">
        <div className="review-path-head"><div><small>REVIEW PATH</small><h2>五分钟判断它是否成立</h2></div><StatusBadge tone="amber">M0</StatusBadge></div>
        <ol>{reviewPath.map(([id, title, detail, href]) => <li key={id}><span>{id}</span><div><h3>{title}</h3><p>{detail}</p></div>{href.startsWith("http") ? <a href={href} target="_blank" rel="noreferrer" aria-label={`${title}（新窗口）`}>↗</a> : <Link href={href}>→</Link>}</li>)}</ol>
      </aside>
    </section>

    <section className="dossier-verdict-strip">
      <article><small>RESEARCH QUESTION</small><strong>法律经验怎样成为可复用、可争议、可维护的公共能力？</strong></article>
      <article><small>SYSTEM CONTRIBUTION</small><strong>Legal Module + FLC+D + Trust Envelope + Local Compiler</strong></article>
      <article><small>PUBLIC EVIDENCE</small><strong>可运行网站、开放Schema、样本、测试、治理与版本记录</strong></article>
      <article><small>CURRENT CLAIM</small><strong>可检验的研究原型，不是已证实标准或可直接执业系统</strong></article>
    </section>

    <section className="content-section dossier-question-section">
      <div className="section-head"><div><p className="section-kicker">CORE RESEARCH ARCHITECTURE</p><h2>不是“把法律写成代码”，而是控制每一次转换</h2></div><p>项目把事实、法律和可执行规格分开，并让律师决策贯穿其中。关键问题不是自动化程度，而是转换是否保留来源、异议、不确定性和责任。</p></div>
      <div className="dossier-layer-stack">{layers.map(([code, title, en, detail], index) => <article key={code} className={code === "D" ? "decision" : ""}><span>{code}</span><div><small>{en}</small><h3>{title}</h3><p>{detail}</p></div><b>{index < layers.length - 1 ? "↓ controlled transformation" : "cross-layer control"}</b></article>)}</div>
    </section>

    <section className="content-section soft-section">
      <div className="section-head"><div><p className="section-kicker">ORIGINAL CONTRIBUTION · WORKING CLAIMS</p><h2>目前真正值得评估的四项设计</h2></div><p>这些是项目提出并已部分实现的系统主张，不宣称为行业首创；原创性仍需通过完整先行研究和同行评议继续界定。</p></div>
      <div className="dossier-contribution-grid">{contributions.map(([code, title, detail], index) => <article key={code}><span>{String(index + 1).padStart(2, "0")}</span><code>{code}</code><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </section>

    <section className="content-section dossier-evidence-section">
      <div className="section-head"><div><p className="section-kicker">AUDITABLE OUTPUTS</p><h2>主张旁边必须放证据和边界</h2></div><div className="dossier-status-legend"><span><i className="implemented" /> 已实现</span><span><i className="partial" /> 部分验证</span><span><i /> 尚待验证</span></div></div>
      <div className="dossier-evidence-table"><div className="dossier-evidence-head"><span>公开构件</span><span>当前状态</span><span>能证明什么 / 不能证明什么</span><span>核验入口</span></div>{evidence.map(([title, state, proof, href, label]) => <article key={title}><strong>{title}</strong><StatusBadge tone={state.includes("IMPLEMENTED") || state.includes("PUBLIC") ? "green" : "amber"}>{state}</StatusBadge><p>{proof}</p>{href.startsWith("http") ? <a href={href} target="_blank" rel="noreferrer">{label} ↗</a> : <Link href={href}>{label} →</Link>}</article>)}</div>
    </section>

    <section className="content-section dark-section dossier-reproduce-section">
      <div><p className="section-kicker">REPRODUCE, DO NOT JUST BELIEVE</p><h2>任何评估者都可以独立运行</h2><p>公开仓库包含网站、Legal Module Schema、合成样本、校验器、测试和治理文件。以下命令复现当前结构性验证。</p><a className="button dossier-light-button" href={repositoryUrl} target="_blank" rel="noreferrer">打开GitHub仓库 ↗</a></div>
      <pre aria-label="项目复现命令"><code>{`git clone https://github.com/dreamlee666/jurissemble.git
cd jurissemble
pnpm install
pnpm test
pnpm spec:validate`}</code></pre>
    </section>

    <section className="content-section dossier-english-section">
      <div className="dossier-english-label"><span>EN</span><small>ENGLISH ABSTRACT</small></div>
      <div><h2>Jurissemble is an open legal engineering experiment, not a legal-answer bot.</h2><p>It investigates whether legal work can be represented as versioned and composable capability modules without collapsing facts, authority, professional judgment, provenance, and accountability into a single opaque output. The public prototype combines a GitHub-like collaboration model with a proposed Fact–Law–Code architecture and a lawyer decision control plane.</p><p>Its present contribution is a falsifiable system design supported by working software, a machine-readable schema, synthetic examples, local intake safeguards, explicit governance boundaries, and a public research ledger. It does not yet claim doctrinal correctness, empirical effectiveness, community adoption, or autonomous legal practice.</p></div>
    </section>

    <section className="content-section soft-section dossier-evaluation-section">
      <div className="section-head"><div><p className="section-kicker">EVALUATION PROTOCOL</p><h2>请用四个问题评价，而不是看概念是否宏大</h2></div><p>如果系统不能让第三方更准确地理解边界、发现缺口并复现判断链，它就没有完成目标。</p></div>
      <div className="dossier-evaluation-grid">{[
        ["01", "可理解吗？", "未参与编写的人，能否仅凭模块说明判断用途、非用途和所需输入？"],
        ["02", "可追溯吗？", "每个关键事实、法律命题和版本能否回到来源、时点与修改记录？"],
        ["03", "可组合吗？", "上下游连接能否暴露类型、法域、权限、时点和责任冲突？"],
        ["04", "可否证吗？", "失败、反例和不确定性是否会改变Schema、模块边界或研究主张？"],
      ].map(([id, title, detail]) => <article key={id}><span>{id}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </section>

    <section className="content-section dossier-accountability-section">
      <div className="dossier-accountability-card"><div><p className="section-kicker">AUTHORSHIP & ACCOUNTABILITY</p><h2>生成过程公开，责任不能外包</h2></div><div className="dossier-accountability-columns"><article><code>HUMAN INITIATOR</code><p><strong>dreamlee666 / jiaozhu7</strong>提出研究问题与原始构想，提供材料、连续指令与纠偏，确定产品边界、对象模型和公开路线，并对内容取舍与发布承担最终责任。</p></article><article><code>AI-ASSISTED WORK</code><p>截至当前版本，仓库中的代码、规范、页面、测试和整理性文字均由OpenAI Codex / ChatGPT生成。机器输出本身不作为学术证据或法律结论；AI不具有作者资格、律师执业资格或责任能力。</p></article></div></div>
    </section>

    <section className="content-section dossier-limits-section"><div className="section-head"><div><p className="section-kicker">KNOWN LIMITATIONS · 2026-09-03</p><h2>当前最重要的不是包装，而是缺口</h2></div><StatusBadge tone="amber">RESEARCH PROTOTYPE</StatusBadge></div><ul>{limits.map((item) => <li key={item}>{item}</li>)}</ul></section>

    <section className="final-cta dossier-final-cta"><p className="section-kicker">INSPECT · CHALLENGE · CONTRIBUTE</p><h2>从一个模块开始检查这套设想，而不是先接受它。</h2><div><Link className="button primary" href="/modules/open-practice/case-law-research">检查模块样本 <span>→</span></Link><a className="button ghost" href={`${repositoryUrl}/issues`} target="_blank" rel="noreferrer">提出问题或反例</a></div></section>
  </PageShell>;
}

