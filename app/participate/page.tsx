import type { Metadata } from "next";
import Link from "next/link";
import { ResearchShell, StatusBadge } from "../components/SiteShell";
import { participationPaths } from "../data/program";

export const metadata: Metadata = {
  title: "参与法律生产研究 · Open Legal Production",
  description: "了解关键委派事件、失败案例、双人编码与Task Contract实验的参与条件和数据边界。",
};

const participationFlow = [
  ["01", "适格与伦理Gate", "确认研究方案、伦理条件和材料范围已经允许启动。"],
  ["02", "研究说明与同意", "分别说明记录方式、研究用途、退出机制和公开边界。"],
  ["03", "Matter授权核验", "参与者同意不等于客户或事项资料可以用于研究。"],
  ["04", "关键事件访谈", "围绕具体时间线、Decision Point和当时信息提问。"],
  ["05", "去标识与确认", "参与者复核是否仍可能识别客户、项目或其他人员。"],
  ["06", "独立编码与仲裁", "研究者按版本化代码本编码并保留分歧。"],
  ["07", "发布Gate", "只有同意、授权、权利和去标识均满足时才可能公开抽象。"],
] as const;

const currentNeeds = [
  ["CTA PILOT", "建设工程委派事件", "需要成功、失败或高返工的具体事件；当前尚未开放在线提交。"],
  ["COUNTERCASE", "无法模块化的工作", "说明哪些任务不能下放、不能标准化，以及原因。"],
  ["METHOD REVIEW", "访谈提纲与代码本复核", "检查问题是否诱导、字段是否混淆事实与事后评价。"],
  ["PUBLIC SOURCE", "公开先行研究", "补充可核验论文、标准或官方研究项目，不提交客户材料。"],
] as const;

export default function ParticipatePage() {
  return <ResearchShell>
    <section className="page-hero community-hero"><p className="eyebrow"><span /> PARTICIPATE IN RESEARCH</p><h1>当前需要的不是上传模板，<br /><em>而是能检验理论的证据。</em></h1><p>研究重点是具体委派事件、失败案例、独立编码和Task Contract实验。伦理、同意、Matter授权和数据隔离尚未准备完成前，网站不接收原始客户材料。</p><div className="research-verdict"><StatusBadge tone="amber">RECRUITMENT · NOT OPEN</StatusBadge><span>PUBLIC SOURCES · REVIEWABLE</span><span>RAW MATTER UPLOAD · DISABLED</span></div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">CONTRIBUTION TYPES</p><h2>四种能改变研究结论的参与</h2></div><p>发生过一次的做法不会自动升级为Pattern；反例和无法拆分的工作同样重要。</p></div><div className="participation-path-grid">{participationPaths.map((item) => <article key={item.code}><code>{item.code}</code><h3>{item.name}</h3><p>{item.detail}</p><StatusBadge>RESEARCH INPUT</StatusBadge></article>)}</div></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">PARTICIPANT JOURNEY</p><h2>从授权到可能公开的七道步骤</h2></div><p>参与研究、使用Matter材料和公开内容是三种不同权利，不能互相替代。</p></div><div className="contribution-ladder study-ladder">{participationFlow.map(([id, title, body]) => <article key={id}><span>{id}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="content-section dark-section"><div className="section-head"><div><p className="section-kicker">CRITICAL INCIDENT METHOD</p><h2>不问“你有什么经验”，而是还原一次判断</h2></div><p>访谈避免先向参与者灌输Legal Work Interface术语，以免把候选理论写进答案。</p></div><div className="incident-field-grid">{["Timeline", "Cue", "Goal", "Options", "Decision Point", "Known / Unknown", "Delegation Boundary", "Dependencies", "Clarifications", "Rework", "Counterfactual", "Outcome"].map((field, index) => <div key={field}><span>{String(index + 1).padStart(2, "0")}</span><strong>{field}</strong></div>)}</div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">CURRENT RESEARCH NEEDS</p><h2>真实状态：尚未开始招募</h2></div><p>以下是研究准备清单，不是已经存在的社区任务或项目机会。</p></div><div className="current-needs-grid">{currentNeeds.map(([code, title, detail]) => <article key={code}><StatusBadge tone="amber">{code}</StatusBadge><h3>{title}</h3><p>{detail}</p></article>)}</div><p className="research-warning">网站现在没有上传表单。等伦理、授权文本、撤回机制、保存期限和安全基础设施完成后，再开放Pilot招募。</p></section>

    <section className="final-cta"><p className="section-kicker">READ BEFORE PARTICIPATING</p><h2>先理解研究目的和数据边界，再决定是否参与。</h2><div><Link className="button primary" href="/governance">查看治理与权利 <span>→</span></Link><Link className="button ghost" href="/studies#construction-pilot">查看Construction Pilot</Link></div></section>
  </ResearchShell>;
}
