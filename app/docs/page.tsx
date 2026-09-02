import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";

export const metadata: Metadata = { title: "法律模块文档 · Jurissemble · 律构集", description: "了解Legal Module、复用方式、版本、组合、信任、许可和公共方法与私有事项的边界。" };

const callModes = [
  ["ADD", "加入项目", "把指定Release锁入私有项目，形成明确依赖。"],
  ["COMPOSE", "连接模块", "连接上下游端口，并检查类型、法域、时间、权限和责任交接。"],
  ["FORK", "派生版本", "保留来源谱系，为新法域、团队或边界建立可修改版本。"],
  ["REFERENCE", "精确引用", "引用owner、module和release，不复制失去来源的文本。"],
];

const contractLayers = [
  ["PURPOSE", "用途与非用途", "说明何时使用、何时不使用，以及何种状态才算完成。"],
  ["SCOPE", "法域与时间", "声明法域、截止时点、业务阶段、受众和限制。"],
  ["INTERFACE", "输入与输出", "定义类型、敏感等级、前置、停止和专业升级条件。"],
  ["METHOD", "方法与责任", "保存步骤、判断点、责任角色和交付顺序。"],
  ["DEPENDENCIES", "来源与依赖", "锁定其他模块、权威来源、工具和访问要求。"],
  ["TRUST", "验证与审查", "分别记录结构、来源、同行、维护、场景和事项判断。"],
  ["PROVENANCE", "贡献与派生", "记录作者、编辑、机器辅助和上游版本。"],
  ["RIGHTS", "权利与保密", "声明内容许可、来源特定权利和公共/私有边界。"],
];

const qualitySignals = [
  ["Schema valid", "字段和类型通过机器校验", "不证明法律内容正确"],
  ["Source checked", "来源和时点按声明核验", "不证明解释必然正确"],
  ["Peer reviewed", "某人按某范围审查该版本", "不延伸到其他法域和以后版本"],
  ["Maintainer accepted", "维护者已接纳并发布", "不代表平台承担事项责任"],
  ["Field tested", "在声明场景中使用过", "不代表适合所有事项"],
  ["Matter suitability", "责任专业人员作出的具体事项决定", "只属于私有事项"],
];

export default function DocsPage() {
  return <PageShell><section className="page-hero product-page-hero"><p className="eyebrow"><span /> LEGAL MODULE DOCUMENTATION</p><h1>复用的是有边界的能力，<br /><em>不是脱离上下文的文件。</em></h1><p>Legal Module让律师和软件都能判断：什么时候可以用、需要什么、会得到什么、依赖什么、哪里必须由专业人员接管。</p></section>
    <section className="content-section compact" id="calling"><div className="section-head"><div><p className="section-kicker">FOUR REUSE MODES</p><h2>四种动作，四种协作含义</h2></div><StatusBadge tone="amber">M0 PROTOCOL</StatusBadge></div><div className="docs-loop call-docs-grid">{callModes.map(([code, name, detail]) => <article key={code}><span>{code}</span><h3>{name}</h3><p>{detail}</p></article>)}</div></section>
    <section className="content-section soft-section"><div className="section-head"><div><p className="section-kicker">MODULE CONTRACT</p><h2>一个模块必须说明什么</h2></div><p>不是所有模块都需要形式逻辑或完整工作流，但必须有稳定用途和责任边界。</p></div><div className="contract-layer-grid">{contractLayers.map(([code, title, detail]) => <article key={code}><code>{code}</code><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
    <section className="content-section"><div className="section-head"><div><p className="section-kicker">COMPOSITION CHECKS</p><h2>能连接，不等于结论正确</h2></div><p>每条连接至少检查五个维度，项目仍需由责任专业人员评价组合后的整体工作。</p></div><div className="composition-doc-grid">{[["TYPE", "端口类型", "输出与输入的语义类型相同或存在已登记转换。"], ["SCOPE", "法域与时间", "适用地区、截止时点和业务阶段没有冲突。"], ["SOURCE", "权威与现行性", "下游要求的来源强度由上游证据满足。"], ["PERMISSION", "敏感与访问", "接收方和项目有权处理该敏感等级。"], ["HANDOFF", "责任与接受", "谁确认输入、谁接受输出、何处必须判断清楚。"]].map(([code, title, detail]) => <article key={code}><code>{code}</code><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
    <section className="content-section soft-section" id="governance"><div className="section-head"><div><p className="section-kicker">TRUST WITHOUT A FAKE GREEN CHECK</p><h2>六种质量状态分别展示</h2></div><p>合并、测试、资质和使用量都不能自动变成笼统的“法律已验证”。</p></div><div className="quality-signal-table">{qualitySignals.map(([signal, proves, notProves]) => <article key={signal}><strong>{signal}</strong><p>{proves}</p><span>{notProves}</span></article>)}</div></section>
    <section className="content-section"><div className="section-head"><div><p className="section-kicker">VERSION & GOVERNANCE</p><h2>Release锁定，法律状态持续更新</h2></div><p>已发布版本不可原地覆盖；上游法源变化生成影响提醒，维护者发布新版本，项目负责人决定是否升级。</p></div><div className="docs-rule-list">{[["01", "审查绑定具体版本", "声明法域、时间、维度、审查人范围和依据。"], ["02", "派生保留谱系", "Fork不得暗示原维护者为派生内容背书。"], ["03", "贡献声明权利", "原创、授权、第三方来源和机器辅助分别披露。"], ["04", "过期可以追踪", "Deprecated保留精确引用，Withdrawn按权利或安全规则限制。"], ["05", "公开区禁止事项资料", "Issue、Proposal和示例不得包含客户身份和真实证据。"]].map(([id, title, detail]) => <article key={id}><code>{id}</code><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div></section>
    <section className="public-private-callout"><div><p className="section-kicker">PUBLIC MODULE</p><h2>社区公开</h2><p>用途、接口、空白方法、公开来源、示例、版本差异、提案和范围化审查。</p></div><div><p className="section-kicker">PRIVATE MATTER</p><h2>项目私有</h2><p>客户身份、具体事实、证据、沟通、策略、律师意见、授权决定和运行日志。</p></div></section>
    <section className="content-section soft-section" id="local-intake"><div className="section-head"><div><p className="section-kicker">LOCAL INTAKE</p><h2>案件到公共库之间的编译层</h2></div><p>本地脚本生成不联网的文件清单和双轨工作区；Skill/Agent读取内容前还必须单独确认处理环境、权限与客户授权。</p></div><div className="docs-rule-list">{[["01", "默认私有", "所有原始材料、提取事实和策略首先进入私有轨道。"], ["02", "问题归类", "将检索、法源、证据、流程和决定连接到明确问题。"], ["03", "能力提取", "选择主类型、模块化程度和最小可复用边界。"], ["04", "发布闸门", "保密、权限、权利、去识别、法源和责任律师逐项通过。"]].map(([id, title, detail]) => <article key={id}><code>{id}</code><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div><div className="section-link-row"><Link className="button secondary" href="/toolkit">查看并下载本地工具 <span>→</span></Link></div></section>
    <section className="final-cta"><p className="section-kicker">SEE THE CONTRACT</p><h2>从中模块化的“类案检索”样本开始，查看完整接口、依赖和信任记录。</h2><div><Link className="button primary" href="/modules/open-practice/case-law-research">查看模块 <span>→</span></Link><Link className="button ghost" href="/new">创建模块草案</Link></div></section>
  </PageShell>;
}
