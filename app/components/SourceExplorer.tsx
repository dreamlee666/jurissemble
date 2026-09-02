"use client";

import { useMemo, useState } from "react";
import { sources } from "../data/registry";

export function SourceExplorer() {
  const [query, setQuery] = useState("");
  const [jurisdiction, setJurisdiction] = useState("全部");
  const filtered = useMemo(() => sources.filter((source) => {
    const matchesQuery = `${source.id} ${source.title} ${source.issuer}`.toLowerCase().includes(query.toLowerCase());
    const matchesJurisdiction = jurisdiction === "全部" || source.jurisdiction.includes(jurisdiction);
    return matchesQuery && matchesJurisdiction;
  }), [query, jurisdiction]);

  return (
    <div>
      <div className="source-toolbar">
        <label><span className="sr-only">搜索来源</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索 source_id、标题或发布机构" /></label>
        <div className="filter-pills" aria-label="法域筛选">{["全部", "前海", "深圳", "香港", "中国内地", "国际"].map((item) => <button key={item} className={jurisdiction === item ? "active" : ""} onClick={() => setJurisdiction(item)}>{item}</button>)}</div>
      </div>
      <div className="source-count">显示 {filtered.length} / {sources.length} 个来源</div>
      <div className="source-list">
        {filtered.map((source) => (
          <article className="source-row" key={source.id}>
            <div className="authority-grade">{source.authority}</div>
            <div className="source-main"><a href={source.url} target="_blank" rel="noreferrer">{source.title} <span aria-hidden="true">↗</span></a><p>{source.id}</p></div>
            <div><strong>{source.issuer}</strong><span>{source.jurisdiction} · {source.type}</span></div>
            <div><strong>{source.layer}</strong><span>{source.state}</span></div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <div className="empty-state">没有符合条件的来源。</div>}
    </div>
  );
}
