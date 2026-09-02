import Link from "next/link";
import { SiteFooter, SiteHeader, StatusBadge } from "./components/SiteShell";
import { featuredModule, legalModules } from "./data/modules";

const callModes = [
  ["ADD", "加入项目", "锁定精确版本，把一个法律能力加入私有项目。"],
  ["COMPOSE", "连接模块", "按输入、输出、法域、时间和权限检查上下游连接。"],
  ["FORK", "派生版本", "保留来源谱系，适配新法域、团队或工作边界。"],
  ["REFERENCE", "精确引用", "引用owner、module和release，不复制失去来源的文本。"],
];

const collaborationLoop = [
  ["01", "Publish", "发布用途、接口、来源、限制和版本。"],
  ["02", "Reuse", "其他律师在自己的项目中锁定复用。"],
  ["03", "Find gaps", "使用中发现缺口、冲突和过期来源。"],
  ["04", "Propose", "把改进提交为可审查的提案。"],
  ["05", "Release", "维护者按范围评审并发布新版本。"],
];

export default function Home() {
  return <main>
    <div className="prototype-bar"><span>M0 PRODUCT PROTOTYPE</span> · PUBLIC MODULES / PRIVATE MATTERS · 示例内容不构成法律意见</div>
    <SiteHeader />

    <section className="hero module-home-hero">
      <div className="hero-copy">
        <p className="eyebrow"><span /> OPEN LEGAL MODULE NETWORK</p>
        <h1>找到一种法律能力，<br /><em>加入你的项目。</em></h1>
        <p className="hero-lead">律师发布的不是客户资料，也不只是结果文件，而是有用途、有接口、有来源、有版本和复核边界的法律模块。其他人可以精确引用、加入项目、派生和共同改进。</p>
        <form className="home-search" action="/explore" method="get"><label className="sr-only" htmlFor="home-search">搜索法律模块</label><span>⌕</span><input id="home-search" name="q" placeholder="搜索能力、法域、业务领域、维护者或输入输出" /><button type="submit">搜索模块</button></form>
        <div className="hero-actions"><Link className="button primary" href="/explore">发现法律模块 <span>→</span></Link><Link className="button secondary" href="/new">发布一个模块</Link></div>
        <div className="trust-row"><span>公开方法，隔离事项</span><span>版本锁定，更新可追踪</span><span>审查范围分别展示</span></div>
      </div>

      <Link className="workflow-package-preview module-package-preview" href={featuredModule.path}>
        <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>{featuredModule.owner} / {featuredModule.slug}</span><b>MODULE · {featuredModule.moduleType}</b></div>
        <div className="workflow-preview-body">
          <div className="package-title"><span className="package-glyph">LM</span><div><small>{featuredModule.modularity} MODULARITY · {featuredModule.status}</small><strong>{featuredModule.title}</strong><code>{featuredModule.packageId}</code></div></div>
          <div className="call-command"><span>ADD</span><code>legal add {featuredModule.packageId}</code><b>＋ 加入项目</b></div>
          <div className="workflow-io-grid"><article><small>INPUTS</small>{featuredModule.inputs.map(([name]) => <span key={name}>{name}</span>)}</article><i>→</i><article><small>OUTPUTS</small>{featuredModule.outputs.map(([name]) => <span key={name}>{name}</span>)}</article></div>
          <div className="dependency-line"><span>TRUST</span><code>as-of {featuredModule.asOf}</code><code>{featuredModule.requiredReview.length} reviews required</code></div>
        </div>
        <div className="commit-bar"><span className="status-dot amber-dot" /><b>RESEARCH SCHEMA 0.1</b><span>结构已校验 · 专业评审未运行</span></div>
      </Link>
    </section>

    <section className="principle-strip"><p>THE NATIVE OBJECT</p><strong>仓库承载协作；真正被复用的是有边界、有版本的 Legal Module。</strong></section>

    <section className="content-section module-showcase-section">
      <div className="section-head"><div><p className="section-kicker">START WITH REAL BOUNDARIES</p><h2>不同法律工作，不同复用方式</h2></div><p>高模块化能力可以独立核验；中模块化能力需要人工界定；低模块化能力只能作为责任决策框架。</p></div>
      <div className="module-preview-grid">{legalModules.map((item) => <Link href={item.path} key={item.slug}><div><code>{item.moduleType}</code><StatusBadge tone={item.status === "DRAFT" ? "neutral" : "amber"}>{item.status}</StatusBadge></div><h3>{item.shortTitle}</h3><p>{item.description}</p><footer><span>{item.modularity} MODULARITY</span><span>{item.jurisdictions[0]}</span><span>v{item.version}</span></footer></Link>)}</div>
    </section>

    <section className="content-section soft-section">
      <div className="section-head"><div><p className="section-kicker">FOUR REUSE ACTIONS</p><h2>调用不是复制粘贴</h2></div><p>项目保留精确版本、来源、法域、时间、权利和审查范围，更新不会静默覆盖正在进行的工作。</p></div>
      <div className="call-mode-grid">{callModes.map(([code, name, detail]) => <article key={code}><code>{code}</code><h3>{name}</h3><p>{detail}</p><span>{code === "ADD" ? "PRIMARY ACTION" : "REUSE OPTION"}</span></article>)}</div>
    </section>

    <section className="content-section dark-section workflow-community-section">
      <div className="section-head"><div><p className="section-kicker">USE CREATES COMMUNITY</p><h2>围绕真实复用形成交流</h2></div><p>身份、版本、提案和范围化评审让经验能够被看见、质疑、派生和持续维护。</p></div>
      <div className="workflow-community-loop">{collaborationLoop.map(([id, name, detail], index) => <article key={id}><span>{id}</span><small>{name}</small><p>{detail}</p>{index < collaborationLoop.length - 1 && <i>→</i>}</article>)}</div>
    </section>

    <section className="content-section public-private-section"><div><p className="section-kicker">PUBLIC MODULE</p><h2>社区公开可复用能力</h2><p>用途、接口、空白方法、公开来源、测试、版本和评审记录可以共同维护。</p><StatusBadge tone="green">SHAREABLE</StatusBadge></div><i>＋</i><div><p className="section-kicker">PRIVATE MATTER</p><h2>项目保存具体事项</h2><p>客户身份、合同、事实、证据、策略选择和运行日志只留在私有空间。</p><StatusBadge tone="amber">ISOLATED</StatusBadge></div></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">LOCAL-TO-LIBRARY</p><h2>律师还需要一个本地“编译层”</h2></div><p>本地脚本先完成不联网的盘点与工作区初始化；内容分析、问题归类和能力抽象只有在处理环境与授权确认后才启动。</p></div><div className="call-mode-grid">{[["PRIVATE", "保留完整事项", "事实、证据、策略、检索轨迹和工作底稿留在私有案件包。"], ["EXTRACT", "提取可复用能力", "把重复工作转换为有输入、输出、边界和来源的模块候选。"], ["GATE", "责任律师审查", "保密、权限、权利、法源和可识别风险逐项确认后另行发布。"]].map(([code, name, detail]) => <article key={code}><code>{code}</code><h3>{name}</h3><p>{detail}</p><span>LOCAL WORKBENCH</span></article>)}</div><div className="section-link-row"><Link className="button secondary" href="/toolkit">查看本地整理工具 <span>→</span></Link></div></section>

    <section className="final-cta product-final-cta"><p className="section-kicker">PUBLISH · REUSE · IMPROVE</p><h2>把一种反复进行的法律工作，发布成下一位律师可以理解和复用的版本。</h2><div><Link className="button primary" href="/new">发布模块原型 <span>→</span></Link><Link className="button ghost" href="/docs">阅读模块规范</Link></div></section>
    <SiteFooter />
  </main>;
}
