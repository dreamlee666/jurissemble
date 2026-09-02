"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { legalModules } from "../data/modules";

const typeFilters = ["全部", "SOURCE_CHECK", "RESEARCH_ANALYSIS", "ARGUMENT_PATTERN"];
const modularityLabels: Record<string, string> = { HIGH: "高模块化", MEDIUM: "中模块化", LOW: "低模块化" };

export function ExploreCatalog() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("全部");
  const visible = useMemo(() => {
    const value = query.trim().toLowerCase();
    return legalModules.filter((item) => {
      const haystack = [item.owner, item.slug, item.title, item.description, item.moduleType, item.modularity, ...item.practiceAreas, ...item.jurisdictions, ...item.inputs.flat(), ...item.outputs.flat()].join(" ").toLowerCase();
      return (!value || haystack.includes(value)) && (active === "全部" || item.moduleType === active);
    });
  }, [query, active]);

  return <div className="explore-catalog module-catalog">
    <div className="explore-controls"><label><span>搜索法律能力</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="能力、法域、领域、维护者、输入或输出" /></label><div className="filter-row" aria-label="模块类型筛选">{typeFilters.map((filter) => <button className={active === filter ? "active" : ""} type="button" onClick={() => setActive(filter)} key={filter}>{filter === "全部" ? filter : filter.replace("_", " ")}</button>)}</div></div>
    <div className="catalog-summary"><strong>{visible.length} 个研究原型模块</strong><span>用于验证发现、接口、组合和信任展示；尚无真实社区使用量或专业背书。</span></div>
    <div className="module-catalog-list">{visible.map((item) => <Link className="module-catalog-card" href={item.path} key={item.slug}><div className="module-catalog-main"><div className="repo-card-top"><span className="repo-glyph">LM</span><div><p>{item.owner} / <strong>{item.slug}</strong> · v{item.version}</p><h2>{item.title}</h2></div><span className={`status-badge ${item.status === "DRAFT" ? "neutral" : "amber"}`}>{item.status}</span></div><p>{item.description}</p><div className="catalog-tags"><span>{item.moduleType}</span><span>{modularityLabels[item.modularity]}</span>{item.practiceAreas.map((tag) => <span key={tag}>{tag}</span>)}</div><code className="catalog-call-command">legal add {item.packageId}</code></div><aside><div><strong>{item.inputs.length}</strong><span>INPUTS</span></div><div><strong>{item.outputs.length}</strong><span>OUTPUTS</span></div><div><strong>{item.dependencies.length}</strong><span>DEPENDENCIES</span></div><div><strong>{item.sourceCount}</strong><span>SOURCES</span></div></aside></Link>)}</div>
    {!visible.length && <div className="catalog-empty"><strong>没有匹配的模块</strong><p>可以更换关键词或类型。当前目录只包含三个用于验证边界的研究原型。</p><button className="button secondary" type="button" onClick={() => { setQuery(""); setActive("全部"); }}>清除筛选</button></div>}
  </div>;
}
