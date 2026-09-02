import type { Metadata } from "next";
import { ResearchShell, StatusBadge } from "../components/SiteShell";
import { programmePlanes } from "../data/program";

export const metadata: Metadata = {
  title: "研究伦理、数据与责任治理 · Open Legal Production",
  description: "公开研究层、私有工作台、隔离证据库、责任边界和未来发布Gate。",
};

const rights = [
  ["CONSENT", "参与者研究同意", "允许访谈或观察，不当然允许使用客户Matter材料。"],
  ["MATTER", "事项材料授权", "确认客户秘密、第三方权利和专业义务允许研究处理。"],
  ["LICENSE", "内容公开许可", "确认抽象、原文、结构或研究成果可以公开到何种程度。"],
  ["WITHDRAWAL", "撤回与下架", "说明撤回截止点、已发布成果处理和下游影响通知。"],
] as const;

const reviewScopes = ["research_method", "legal_meaning", "source", "de_identification", "rights", "structure", "reproducibility", "practice"];

export default function GovernancePage() {
  return <ResearchShell>
    <section className="page-hero"><p className="eyebrow"><span /> RESEARCH ETHICS & GOVERNANCE</p><h1>公开研究状态，<br /><em>隔离原始事项。</em></h1><p>当前提供公开静态原型、不联网的本地清单脚本，以及带模型处理前置闸门的可选Skill。具备账户、加密、身份映射和访问审计的私有工作台与证据库尚未上线，因此网站当前不接收原始客户材料。</p><div className="research-verdict"><StatusBadge tone="green">PUBLIC STATIC SITE · ACTIVE</StatusBadge><span>LOCAL INTAKE · M0</span><span>PRIVATE WORKBENCH · NOT BUILT</span><span>EVIDENCE VAULT · NOT BUILT</span></div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">PROPOSED SYSTEM SEPARATION</p><h2>四个层面，不能只靠前端隐藏</h2></div><p>公共Release只能由去标识、权利审查和审批后的冻结快照生成。</p></div><div className="programme-plane-grid">{programmePlanes.map((plane) => <article key={plane.code}><div><code>{plane.code}</code><StatusBadge tone={plane.code === "PUBLIC" || plane.code === "LAB" ? "green" : "amber"}>{plane.code === "PUBLIC" || plane.code === "LAB" ? "STATIC PROTOTYPE" : "PROPOSED"}</StatusBadge></div><small>{plane.name}</small><h3>{plane.cn}</h3><p>{plane.detail}</p></article>)}</div><p className="research-warning">“Evidence Vault”在本网站中表示治理设计，不表示当前已经存在加密存储、账户权限或安全认证。</p></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">THREE RIGHTS · ONE REMEDY</p><h2>同意、授权和公开许可分别判断</h2></div><p>任何单一勾选都不能自动产生public_release_allowed。</p></div><div className="rights-grid">{rights.map(([code, name, detail]) => <article key={code}><code>{code}</code><h3>{name}</h3><p>{detail}</p></article>)}</div></section>

    <section className="content-section dark-section"><div className="section-head"><div><p className="section-kicker">EXECUTION ≠ ACCOUNTABILITY</p><h2>工作可以分配，责任不自动转移</h2></div><p>Task Contract必须同时记录执行边界、复核边界与最终决策权。</p></div><div className="accountability-flow"><article><span>01</span><code>ASSIGNEE</code><h3>Execution Boundary</h3><p>谁执行哪些步骤，允许使用哪些材料和工具。</p></article><i>→</i><article><span>02</span><code>REVIEWER</code><h3>Review Boundary</h3><p>谁检查哪些范围，未检查部分保持明确。</p></article><i>→</i><article><span>03</span><code>DECISION OWNER</code><h3>Accountability Boundary</h3><p>谁整合结果、处理升级并作出最终专业判断。</p></article></div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">SCOPED REVIEW</p><h2>谁检查了什么，逐项显示</h2></div><p>“Reviewed”不能覆盖未完成的来源、权利、方法或专业含义复核。</p></div><div className="review-scope-grid">{reviewScopes.map((scope) => <article key={scope}><span>○</span><code>{scope}</code><StatusBadge>NOT STARTED</StatusBadge></article>)}</div></section>

    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">DATA LIFECYCLE</p><h2>未来工作台必须实现的控制</h2></div><p>这些是上线前置条件，不是当前已经提供的功能。</p></div><div className="governance-rule-grid">{[["身份隔离","身份映射与研究编号分开保存，按最小权限访问。"],["原始数据不可覆盖","清洗、编码和去标识产生新的版本并记录输入与hash。"],["保存与删除","为原始材料、身份数据和研究结果分别设定期限和删除方式。"],["访问审计","记录谁在何时以何种目的读取、导出或交给机器处理。"],["跨境与AI判断","材料进入外部模型或跨境前必须检查授权和合法基础。"],["事件响应","泄露、误公开、再识别或撤回均形成正式状态和下游通知。"]].map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="content-section"><div className="section-head"><div><p className="section-kicker">MACHINE PROVENANCE</p><h2>AI只是被记录的参与者</h2></div><p>AI不是网站中心，也不能单独确认来源、权利、研究结论或最终法律判断。</p></div><div className="state-dimension-grid"><article><h3>AI Permission</h3><p>每个Task Contract明确是否允许、允许处理哪些字段和材料。</p></article><article><h3>Processing Activity</h3><p>记录提供方、模型版本、输入范围、输出、参数和已知限制。</p></article><article><h3>Human Review</h3><p>记录谁核对哪些内容、接受或拒绝什么，以及最终Decision Owner。</p></article></div></section>
  </ResearchShell>;
}
