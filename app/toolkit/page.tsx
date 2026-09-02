import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, StatusBadge } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "本地整理工具 · Jurissemble · 律构集",
  description: "把案件材料留在本地，整理为私有案件包与经律师审查的法律模块候选。",
};

const stages = [
  ["01", "盘点", "只在本地生成文件清单、哈希和材料角色，不复制、不上传原件。"],
  ["02", "问题图", "把事实触发、法律问题、证据、法源、时点和待办连接起来。"],
  ["03", "候选识别", "识别反复出现的检索、核验、流程、文书、证据或论证能力。"],
  ["04", "抽象", "用输入、输出和合成示例替换案件事实，保留边界而不是结果。"],
  ["05", "双轨输出", "完整记录进入私有案件包；可复用能力进入公共模块草稿。"],
  ["06", "发布闸门", "保密、权限、第三方权利、法源、边界和责任律师逐项确认。"],
  ["07", "单独发布", "只有获得明确授权的确切版本，才进入社区仓库和后续协作。"],
];

const outputs = [
  ["PRIVATE", "私有案件包", "材料清单、事实与证据、问题图、研究轨迹、策略和复核记录。"],
  ["CANDIDATE", "模块候选", "能力类型、模块化等级、可复用理由，以及仍需去除的案件内容。"],
  ["PUBLIC DRAFT", "公共草稿", "用途、非用途、范围、接口、方法、依赖、验证、谱系和权利。"],
  ["GATE", "发布审查单", "默认HOLD_PRIVATE；任何未知或失败项都不能进入公开库。"],
];

export default function ToolkitPage() {
  return <PageShell>
    <section className="page-hero product-page-hero">
      <p className="eyebrow"><span /> LOCAL-TO-LIBRARY WORKBENCH</p>
      <h1>案件材料留在本地，<br /><em>可复用能力才进入社区。</em></h1>
      <p>这不是一键上传器，而是法律工作的“编译层”：先形成可追溯的私有案件结构，再生成经过脱敏、抽象和责任审查的 Legal Module 候选。</p>
      <div className="hero-actions"><a className="button primary" href="/downloads/legal-module-intake.zip" download>下载本地工具包 <span>↓</span></a><Link className="button secondary" href="/docs#local-intake">查看边界规范</Link></div>
      <div className="trust-row"><span>脚本不联网</span><span>原件不复制</span><span>默认不发布</span></div>
    </section>

    <section className="principle-strip"><p>THE MISSING COMPILER LAYER</p><strong>原始事项不能直接变成公共模块；中间必须有本地、双轨、可审查的转换过程。</strong></section>

    <section className="content-section">
      <div className="section-head"><div><p className="section-kicker">SEVEN STAGES</p><h2>从材料到可发布候选</h2></div><StatusBadge tone="amber">M0 LOCAL TOOL</StatusBadge></div>
      <div className="docs-rule-list">{stages.map(([id, title, detail]) => <article key={id}><code>{id}</code><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div>
    </section>

    <section className="content-section soft-section">
      <div className="section-head"><div><p className="section-kicker">TWO LANES, FOUR OUTPUTS</p><h2>完整事项与公共能力分开保存</h2></div><p>两条轨道通过不透明的本地编号保持谱系，但公共草稿不得出现私有路径、客户身份、证据或可反推事实。</p></div>
      <div className="contract-layer-grid">{outputs.map(([code, title, detail]) => <article key={code}><code>{code}</code><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </section>

    <section className="public-private-callout"><div><p className="section-kicker">LOCAL CORE</p><h2>SOP与确定性工具</h2><p>文件清单、哈希、目录结构、状态和审查闸门由本地脚本生成，不读取内容、不联网，团队可以复核和重复运行。</p></div><div><p className="section-kicker">OPTIONAL ASSISTANCE</p><h2>Skill或Agent辅助</h2><p>Skill只是工作流说明，不自动等于本机模型。只有确认处理环境、客户授权和律所政策后，才能让模型读取材料。</p></div></section>
    <p className="research-warning">保密提示：使用联网或云端模型分析文件，属于另一项数据处理活动。未经明确授权时，只运行本地清单脚本，并离线填写生成的空白模板。</p>

    <section className="content-section">
      <div className="section-head"><div><p className="section-kicker">RESPONSIBILITY GATES</p><h2>“删除姓名”不等于可以公开</h2></div><p>金额、日期、地域、程序阶段、独特事实组合、引文和元数据都可能重新识别事项。</p></div>
      <div className="composition-doc-grid">{[["AUTHORITY", "披露权限", "确认贡献者有权复用和披露确切内容。"], ["SECRECY", "保密与特权", "检查显性信息和组合推断风险。"], ["RIGHTS", "第三方权利", "检查版权、数据库、平台许可和个人信息。"], ["GENERALIZE", "能力抽象", "公开的是方法与接口，不是客户结果。"], ["SOURCE", "法源完整性", "公共依据有出处、效力层级和截止时点。"], ["LAWYER", "责任律师", "对确切版本作出最终公开决定。"]].map(([code, title, detail]) => <article key={code}><code>{code}</code><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </section>

    <section className="final-cta"><p className="section-kicker">LOCAL FIRST · PUBLISH LATER</p><h2>先用一个非敏感的模拟事项验证整理流程，再决定何时接入真实团队。</h2><div><a className="button primary" href="/downloads/legal-module-intake.zip" download>下载工具包 <span>↓</span></a><Link className="button ghost" href="/new">查看模块草稿字段</Link></div></section>
  </PageShell>;
}
