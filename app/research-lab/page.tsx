import type { Metadata } from "next";
import Link from "next/link";
import { ResearchShell, StatusBadge } from "../components/SiteShell";
import { programme } from "../data/program";

export const metadata: Metadata = { title: "Research Lab · Open Legal Production", description: "法律协作产品的内部方法、证据、实验与治理研究入口。" };

const labAreas = [
  ["THEORY", "研究与工作理论", "Legal Work Interface、可模块化程度、重组知识与可证伪命题。", "/research", "IN PROGRESS"],
  ["EVIDENCE", "证据与先行研究", "区分事实、推论、假设、先行研究和正式综述状态。", "/evidence", "EXPLORATORY"],
  ["STUDIES", "Study 0—6", "范围综述、事件访谈、构念开发、实验与跨域迁移路线。", "/studies", "PLANNED"],
  ["ARTIFACTS", "构件实验室", "Task Contract、对象外壳和结构原型，不等于社区内容。", "/artifacts", "SCHEMA DRAFT"],
  ["GOVERNANCE", "治理与数据边界", "保密、权利、责任、人机协作和私有基础设施边界。", "/governance", "DRAFT"],
  ["PARTICIPATE", "研究参与", "正式招募开放前的研究角色、材料门槛和伦理边界。", "/participate", "NOT OPEN"],
];

export default function ResearchLabPage() {
  return <ResearchShell><section className="page-hero research-lab-hero"><p className="eyebrow"><span /> INTERNAL METHOD & EVIDENCE LAYER</p><h1>研究支撑产品，<br /><em>但不冒充产品。</em></h1><p>这里保留Open Legal Production的基础研究：法律工作怎样被拆分、交接、验证和可靠重组。公开用户无需先理解这些构念才能创建仓库。</p><div className="research-verdict"><StatusBadge tone="amber">{programme.version}</StatusBadge><span>{programme.currentStage}</span><span>COMMUNITY PRODUCT · SEPARATE</span></div></section><section className="content-section compact"><div className="lab-area-grid">{labAreas.map(([code, title, detail, href, state]) => <Link key={code} href={href}><div><code>{code}</code><StatusBadge tone="amber">{state}</StatusBadge></div><h2>{title}</h2><p>{detail}</p><span>进入研究区 →</span></Link>)}</div></section><section className="final-cta"><p className="section-kicker">RETURN TO THE PRODUCT</p><h2>公开社区以仓库和协作为主线；研究结果只在需要时进入产品规则。</h2><div><Link className="button primary" href="/">返回产品首页 <span>→</span></Link><Link className="button ghost" href="/jiaozhu7/construction-legal-engineering">查看首个仓库</Link></div></section></ResearchShell>;
}
