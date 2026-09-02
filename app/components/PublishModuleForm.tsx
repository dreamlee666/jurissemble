"use client";

import { FormEvent, useMemo, useState } from "react";

function toSlug(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const moduleTypes = ["SOURCE_CHECK", "RULE_DECISION", "RESEARCH_ANALYSIS", "EVIDENCE", "DOCUMENT_CLAUSE", "PROCESS", "ARGUMENT_PATTERN", "COMPOSITION"];

export function PublishModuleForm() {
  const [owner, setOwner] = useState("your-team");
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [moduleType, setModuleType] = useState("RESEARCH_ANALYSIS");
  const [jurisdiction, setJurisdiction] = useState("调用时指定");
  const [useWhen, setUseWhen] = useState("");
  const [notFor, setNotFor] = useState("");
  const [inputs, setInputs] = useState("legal_issue, jurisdiction, as_of");
  const [outputs, setOutputs] = useState("analysis, source_list, unresolved_gaps");
  const [stop, setStop] = useState("");
  const [escalation, setEscalation] = useState("具体事项结论必须由责任律师判断");
  const [message, setMessage] = useState("");

  const ownerSlug = toSlug(owner) || "owner";
  const moduleSlug = toSlug(name) || "module-name";
  const manifest = useMemo(() => JSON.stringify({
    schema_version: "0.1.0",
    id: `${ownerSlug}/${moduleSlug}`,
    module_type: moduleType,
    status: "DRAFT",
    version: "0.1.0",
    summary: summary || "请填写一句话能力说明",
    purpose: { use_when: [useWhen || "待填写"], not_for: [notFor || "待填写"] },
    scope: { jurisdictions: [jurisdiction], as_of: "发布时确定" },
    interface: { inputs: inputs.split(",").map((item) => item.trim()).filter(Boolean), outputs: outputs.split(",").map((item) => item.trim()).filter(Boolean), stop_conditions: [stop || "待填写"], escalation_conditions: [escalation || "待填写"] },
    rights: { content_license: "CC-BY-4.0-proposed", confidentiality_level: "PUBLIC_METHOD_ONLY" },
  }, null, 2), [ownerSlug, moduleSlug, moduleType, summary, useWhen, notFor, jurisdiction, inputs, outputs, stop, escalation]);

  function preview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missing = [name, summary, useWhen, notFor, stop].filter((value) => !value.trim()).length;
    setMessage(missing ? `还缺少 ${missing} 个核心边界字段。当前仍可查看草案，但不能进入发布检查。` : "模块草案已在本页生成。当前原型不会上传、注册或写入任何数据。");
  }

  return <div className="new-repo-layout module-publish-layout"><form className="new-repo-form" onSubmit={preview}><div className="prototype-notice"><strong>公开方法配置器</strong><span>只生成V0.1草案，不会上传、注册或写入任何数据；不得填写客户身份、事实、证据、策略或未获授权的律所资料。</span></div><div className="form-section-label"><span>01</span><div><strong>定义能力</strong><small>一个可以命名的稳定问题和边界</small></div></div><div className="form-row two"><label><span>Owner / 维护组织</span><input value={owner} onChange={(event) => setOwner(event.target.value)} /></label><label><span>Module name</span><input value={name} onChange={(event) => setName(event.target.value)} placeholder="例如 source-currentness" /></label></div><label><span>一句话能力说明</span><textarea value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="这个模块完成什么可复用能力？" rows={3} /></label><div className="form-row two"><label><span>模块类型</span><select value={moduleType} onChange={(event) => setModuleType(event.target.value)}>{moduleTypes.map((item) => <option key={item}>{item}</option>)}</select></label><label><span>法域策略</span><select value={jurisdiction} onChange={(event) => setJurisdiction(event.target.value)}><option>调用时指定</option><option>中国内地</option><option>香港</option><option>跨境 / 多法域</option></select></label></div><div className="form-row two"><label><span>Use when · 何时使用</span><textarea value={useWhen} onChange={(event) => setUseWhen(event.target.value)} rows={3} /></label><label><span>Not for · 不能用于</span><textarea value={notFor} onChange={(event) => setNotFor(event.target.value)} rows={3} /></label></div><div className="form-section-label"><span>02</span><div><strong>定义接口</strong><small>输入、输出、停止和责任升级</small></div></div><div className="form-row two"><label><span>Inputs · 逗号分隔</span><textarea value={inputs} onChange={(event) => setInputs(event.target.value)} rows={3} /></label><label><span>Outputs · 逗号分隔</span><textarea value={outputs} onChange={(event) => setOutputs(event.target.value)} rows={3} /></label></div><div className="form-row two"><label><span>停止条件</span><textarea value={stop} onChange={(event) => setStop(event.target.value)} placeholder="缺少什么时必须停止，而不能继续猜测？" rows={3} /></label><label><span>专业升级条件</span><textarea value={escalation} onChange={(event) => setEscalation(event.target.value)} rows={3} /></label></div><div className="form-section-label"><span>03</span><div><strong>方法、来源和验证</strong><small>真实发布前继续补齐步骤、依赖、来源、反例和审查人</small></div></div><fieldset><legend>公开边界</legend><label className="radio-option"><input aria-label="公开方法模块" type="radio" name="visibility" defaultChecked /><span><strong>Public method only</strong><small>公开空白方法、接口、来源和测试；具体事项资料始终留在私有项目。</small></span></label><label className="radio-option disabled"><input aria-label="组织内部模块（尚未接入）" type="radio" name="visibility" disabled /><span><strong>Organization only · 尚未接入</strong><small>需要账号、权限、审计和私有Registry后才能提供。</small></span></label></fieldset><button className="button primary" type="submit">检查并生成草案 <span>→</span></button>{message && <p className="form-message" role="status">{message}</p>}</form><aside className="new-repo-preview workflow-manifest-preview module-manifest-preview"><p>LEGAL MODULE · V0.1</p><strong>{ownerSlug}/{moduleSlug}@0.1.0</strong><span>{summary || "模块的用途、适用条件和非用途将显示在这里。"}</span><pre>{manifest}</pre><code>legal add {ownerSlug}/{moduleSlug}@0.1.0</code><small>进入Release前还需要完成步骤、来源权利、依赖、完成标准、正反例、专业复核范围和贡献者声明。</small></aside></div>;
}
