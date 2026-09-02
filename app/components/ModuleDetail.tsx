import Link from "next/link";
import type { LegalModule } from "../data/modules";
import { ModuleActionPanel } from "./ModuleActionPanel";
import { PageShell, StatusBadge } from "./SiteShell";

const trustSignals = [
  ["SCHEMA", "结构校验", "PASS"],
  ["SOURCE", "来源核验", "DECLARED"],
  ["PEER", "同行评审", "NOT RUN"],
  ["MAINTAINER", "维护者接纳", "PROTOTYPE"],
  ["FIELD", "场景测试", "NOT RUN"],
  ["MATTER", "事项适用", "PRIVATE DECISION"],
];

function dependencyPath(id: string) {
  const [owner, slug] = id.split("/");
  return owner && slug ? `/modules/${owner}/${slug}` : "/explore";
}
export function ModuleDetail({ module }: { module: LegalModule }) {
  return <PageShell>
    <section className="workflow-detail-hero module-detail-hero"><div className="workflow-detail-title"><div className="workflow-detail-mark">LM</div><div><p className="package-breadcrumb">{module.owner} / {module.slug}</p><h1>{module.title}</h1><p>{module.description}</p><div className="module-hero-tags"><span>{module.moduleType}</span><span>{module.modularity} MODULARITY</span><span>{module.jurisdictions[0]}</span></div></div></div><div className="workflow-detail-state"><StatusBadge tone={module.status === "DRAFT" ? "neutral" : "amber"}>{module.status} · RESEARCH PROTOTYPE</StatusBadge><strong>{module.packageId}</strong><span>Schema通过只表示结构合规，不表示法律正确、同行已经审查或适用于具体事项。</span></div></section>
    <nav className="workflow-tabs" aria-label="模块详情"><a href="#overview">概览</a><a href="#interface">接口</a><a href="#method">方法</a><a href="#composition">组合</a><a href="#sources">来源</a><a href="#validation">验证</a><a href="#versions">版本</a><a href="#proposals">提案</a></nav>
    <div className="workflow-detail-layout module-detail-layout"><main>
      <section className="workflow-detail-section" id="overview"><p className="section-kicker">PURPOSE & SCOPE</p><h2>先判断能不能用，再看怎样使用</h2><div className="module-scope-grid"><article><code>USE WHEN</code>{module.useWhen.map((item) => <p key={item}>{item}</p>)}</article><article><code>NOT FOR</code>{module.notFor.map((item) => <p key={item}>{item}</p>)}</article><article><code>COMPLETION</code>{module.completion.map((item) => <p key={item}>{item}</p>)}</article><article><code>SCOPE</code><p>{module.practiceAreas.join(" · ")}</p><p>as of {module.asOf}</p><p>风险等级：{module.risk}</p></article></div><div className="workflow-trust-row module-trust-row">{trustSignals.map(([code, name, state]) => <span key={code}><code>{code}</code>{name}<b>{state}</b></span>)}</div></section>
      <section className="workflow-detail-section" id="interface"><p className="section-kicker">TYPED INTERFACE</p><h2>输入、输出和敏感等级</h2><div className="workflow-interface-columns"><div><h3>Inputs</h3>{module.inputs.map(([name, type, sensitivity, detail]) => <article key={name}><code>{name}</code><span>{type}</span><p>{detail}</p><small>{sensitivity}</small></article>)}</div><div><h3>Outputs</h3>{module.outputs.map(([name, type, sensitivity, detail]) => <article key={name}><code>{name}</code><span>{type}</span><p>{detail}</p><small>{sensitivity}</small></article>)}</div></div><p className="prototype-inline-warning">输入输出能够连接，不代表组合后的法律结论正确。还必须检查法域、时点、来源、权限和责任交接。</p></section>
      <section className="workflow-detail-section" id="method"><p className="section-kicker">METHOD & RESPONSIBILITY</p><h2>工作步骤与责任节点</h2><div className="workflow-step-list">{module.steps.map(([id, name, detail, role], index) => <article key={id}><div><code>{id}</code>{index < module.steps.length - 1 && <span />}</div><section><h3>{name}</h3><p>{detail}</p><small>RESPONSIBLE · {role}</small></section></article>)}</div></section>
      <section className="workflow-detail-section" id="composition"><p className="section-kicker">COMPOSITION</p><h2>依赖和组合关系</h2>{module.dependencies.length ? <div className="dependency-cards">{module.dependencies.map(([name, version, detail]) => <Link href={dependencyPath(name)} key={name}><div><code>{name}</code><StatusBadge>REQUIRED</StatusBadge></div><strong>{version}</strong><p>{detail}</p></Link>)}</div> : <div className="module-empty-state"><strong>没有模块依赖</strong><p>该能力仍依赖声明的公开来源和责任复核，不等于完全无依赖。</p></div>}<div className="compatibility-checks">{["TYPE · 端口类型", "SCOPE · 法域与时间", "SOURCE · 权威与现行性", "PERMISSION · 敏感与访问", "HANDOFF · 责任与接受"].map((item) => <span key={item}>{item}</span>)}</div></section>
      <section className="workflow-detail-section" id="sources"><p className="section-kicker">SOURCES & RIGHTS</p><h2>来源、时点与使用权利</h2><div className="source-summary-card"><div><strong>{module.sourceCount}</strong><span>DECLARED SOURCES</span></div><p>当前示例只声明来源数量和使用边界。真实Release必须记录权威URI、访问日、有效期、锚点和来源特定权利。</p><StatusBadge tone="amber">SOURCE REVIEW NOT RUN</StatusBadge></div></section>
      <section className="workflow-detail-section" id="validation"><p className="section-kicker">VALIDATION LEDGER</p><h2>每一种“验证”分别显示</h2><div className="validation-ledger">{module.validations.map(([kind, status, detail]) => <article key={kind}><code>{kind}</code><StatusBadge tone={status === "PASS" ? "green" : "neutral"}>{status}</StatusBadge><p>{detail}</p></article>)}</div><p className="prototype-inline-warning">专业审查必须绑定具体Release、法域、时间、审查维度和审查人范围；不会被压成一个“法律已验证”绿勾。</p></section>
      <section className="workflow-detail-section" id="versions"><p className="section-kicker">VERSIONS</p><h2>Release不可静默覆盖</h2><div className="version-row"><StatusBadge tone="amber">CURRENT</StatusBadge><strong>v{module.version}</strong><span>{module.status}</span><time>{module.asOf}</time></div><p>项目锁定精确版本。上游法源变化会生成影响提醒，由维护者判断是否发布新版本，项目负责人决定是否升级。</p></section>
      <section className="workflow-detail-section" id="proposals"><p className="section-kicker">PROPOSALS</p><h2>发现缺口，提交有范围的改进</h2><p>提案应说明它改变的是接口、法源、法律分析、方法、权利、测试还是兼容性。M0尚未连接账号和提案数据库。</p><Link className="button secondary" href="/docs#governance">查看评审和治理规则</Link></section>
    </main><ModuleActionPanel module={module} /></div>
  </PageShell>;
}
