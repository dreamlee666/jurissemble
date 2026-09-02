import type { ReactNode } from "react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell-header">
      <Link className="brand" href="/" aria-label="Jurissemble 律构集首页"><span className="brand-mark">JS</span><span>Jurissemble · 律构集 <small>OPEN LEGAL MODULE NETWORK</small></span></Link>
      <nav aria-label="主导航">
        <Link href="/explore">发现模块</Link><Link href="/repositories">仓库</Link><Link href="/projects">项目</Link><Link href="/toolkit">本地工具</Link><Link href="/organizations">组织</Link><Link href="/docs">文档</Link>
      </nav>
      <div className="header-actions"><Link className="header-profile" href="/jiaozhu7" aria-label="打开jiaozhu7个人主页">J7</Link><Link className="header-action" href="/new">＋ 发布模块</Link></div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><Link className="brand footer-brand" href="/"><span className="brand-mark">JS</span><span>Jurissemble · 律构集 <small>OPEN LEGAL MODULE NETWORK</small></span></Link><p>让法律工作能力能够被定义、调用、派生、组合和共同维护。</p></div>
      <div className="footer-links"><Link href="/explore">发现模块</Link><Link href="/repositories">仓库</Link><Link href="/projects">项目</Link><Link href="/toolkit">本地工具</Link><Link href="/new">发布模块</Link><Link href="/docs">文档</Link></div>
      <p className="footer-note">当前为M0产品原型。示例模块是结构和交互样本，不构成针对具体事项的法律意见；请勿在公共区提交客户身份、事实、证据、策略或其他受保护资料。</p>
    </footer>
  );
}

export function ResearchHeader() {
  return <header className="site-header shell-header research-lab-header"><Link className="brand" href="/research-lab"><span className="brand-mark">OLP</span><span>Open Legal Production <small>RESEARCH LAB</small></span></Link><nav aria-label="研究导航"><Link href="/research">研究</Link><Link href="/evidence">证据</Link><Link href="/studies">研究项目</Link><Link href="/artifacts">构件实验</Link><Link href="/governance">治理</Link></nav><Link className="header-action" href="/">返回产品</Link></header>;
}

export function ResearchFooter() {
  return <footer className="site-footer research-lab-footer"><div><Link className="brand footer-brand" href="/research-lab"><span className="brand-mark">OLP</span><span>Open Legal Production <small>RESEARCH LAB</small></span></Link><p>研究法律工作的拆分、交接、验证、复用边界和治理机制。</p></div><div className="footer-links"><Link href="/research">研究</Link><Link href="/evidence">证据</Link><Link href="/studies">研究项目</Link><Link href="/artifacts">构件实验</Link><Link href="/">公开产品</Link></div><p className="footer-note">Research Lab是产品的内部方法与证据层，不是公开社区首页；研究结论、结构原型与已发布法律内容必须明确区分。</p></footer>;
}

export function ResearchShell({ children }: { children: ReactNode }) {
  return <><ResearchHeader /><main className="page-main">{children}</main><ResearchFooter /></>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main className="page-main">{children}</main><SiteFooter /></>;
}

export function RepoTabs({ active }: { active: string }) {
  const tabs = [
    ["overview", "Overview", "/jiaozhu7/construction-legal-engineering"],
    ["modules", "Modules", "/jiaozhu7/construction-legal-engineering/modules/notice"],
    ["objects", "Objects", "/jiaozhu7/construction-legal-engineering/objects/CN.CONSTRUCTION.NOTICE.PROPOSITION.001"],
    ["sources", "Sources", "/repositories/construction-legal-engineering/sources"],
    ["proposals", "Proposals", "/jiaozhu7/construction-legal-engineering/proposals/CP-001"],
    ["releases", "Releases", "/jiaozhu7/construction-legal-engineering/releases/v0.1.0-alpha"],
    ["tests", "Tests", "/repositories/construction-legal-engineering/tests"],
    ["research", "Research", "/jiaozhu7/construction-legal-engineering/research"],
  ];
  return <nav className="repo-tabs" aria-label="仓库导航">{tabs.map(([id, label, href]) => <Link key={id} className={active === id ? "active" : ""} href={href}>{label}</Link>)}</nav>;
}

export function StatusBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "green" | "amber" }) {
  return <span className={`status-badge ${tone}`}>{children}</span>;
}
