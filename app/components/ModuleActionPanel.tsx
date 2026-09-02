"use client";

import { FormEvent, useMemo, useState } from "react";
import type { LegalModule } from "../data/modules";

const modes = [
  ["ADD", "加入项目"],
  ["COMPOSE", "连接模块"],
  ["FORK", "派生版本"],
  ["REFERENCE", "精确引用"],
] as const;

export function ModuleActionPanel({ module }: { module: LegalModule }) {
  const [mode, setMode] = useState<(typeof modes)[number][0]>("ADD");
  const [target, setTarget] = useState("my-team/legal-project");
  const [message, setMessage] = useState("");

  const preview = useMemo(() => {
    const safeTarget = target.trim() || "my-team/legal-project";
    if (mode === "COMPOSE") return `composition:\n  module: ${module.packageId}\n  target: ${safeTarget}\n  check: [type, jurisdiction, time, permission, responsibility]`;
    if (mode === "FORK") return `legal fork ${module.packageId} --as ${safeTarget}/${module.slug}`;
    if (mode === "REFERENCE") return `legal ref ${module.packageId} --in ${safeTarget}`;
    return `legal add ${module.packageId} --project ${safeTarget}`;
  }, [mode, module, target]);

  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("操作清单已生成。M0原型尚未连接账号和Registry，因此没有写入任何项目。");
  }

  async function copyPreview() {
    try {
      await navigator.clipboard.writeText(preview);
      setMessage("操作清单已复制。它是精确版本引用，不代表模块已经执行。");
    } catch {
      setMessage("浏览器未允许自动复制，请直接选择上方文本。");
    }
  }

  return <aside className="workflow-call-panel module-action-panel" id="reuse"><div className="call-panel-head"><div><p>REUSE MODULE</p><h2>复用这个版本</h2></div><span className="status-badge amber">M0 PREVIEW</span></div><div className="call-mode-tabs" aria-label="复用方式">{modes.map(([code, label]) => <button type="button" aria-pressed={mode === code} className={mode === code ? "active" : ""} onClick={() => { setMode(code); setMessage(""); }} key={code}><code>{code}</code><span>{label}</span></button>)}</div><form onSubmit={generate}><label><span>目标项目 / 命名空间</span><input value={target} onChange={(event) => setTarget(event.target.value)} /></label><div className="call-version-row"><span>锁定版本</span><strong>{module.version}</strong></div><pre><code>{preview}</code></pre><div className="call-panel-actions"><button className="button primary" type="submit">生成操作清单</button><button className="button ghost" type="button" onClick={copyPreview}>复制</button></div>{message && <p className="form-message" role="status">{message}</p>}</form><small>公共模块进入项目后形成独立依赖。客户事实、证据、策略和决定不会回传公共社区。</small></aside>;
}
