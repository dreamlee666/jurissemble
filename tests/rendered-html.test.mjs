import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

function visibleText(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

test("home presents a Legal Module community product", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  const text = visibleText(html);
  assert.match(html, /<html[^>]*lang="zh-CN"/i);
  for (const item of ["LEGAL MODULE NETWORK", "找到一种法律能力", "加入你的项目", "公开方法，隔离事项", "ADD", "COMPOSE", "FORK", "REFERENCE"]) assert.match(text, new RegExp(item));
  for (const item of ["法源现行性", "类案检索与裁判分歧识别", "诉讼策略决策框架"]) assert.match(text, new RegExp(item));
  assert.doesNotMatch(html, /建设工程只是首个仓库|由jiaozhu7从建设工程开始|FIVE RESEARCH GATES|PRISMA/);
});

test("publishes Legal Module metadata without AI positioning", async () => {
  const html = await (await render()).text();
  assert.match(html, /Jurissemble · 律构集/);
  assert.match(html, /精确引用、派生、组合/);
  assert.doesNotMatch(html, /AI机器人|合同文档库|可调用的法律工作流网络/);
});

test("module detail exposes scope, typed interface, composition and separated trust", async () => {
  const html = await (await render("/modules/open-practice/case-law-research")).text();
  const text = visibleText(html);
  for (const item of ["RESEARCH_ANALYSIS", "MEDIUM MODULARITY", "open-practice/case-law-research@0.1.0", "USE WHEN", "NOT FOR", "legal_issue", "case_matrix", "COMPOSITION", "VALIDATION LEDGER", "SCHEMA", "PEER", "FIELD", "MATTER", "复用这个版本"]) assert.match(text, new RegExp(item));
  assert.match(text, /Schema通过只表示结构合规/);
  assert.match(text, /客户事实、证据、策略和决定不会回传/);
  assert.doesNotMatch(html, /[0-9]+次调用|[0-9]+位维护者/);
});

test("directory shows all three modularity levels without fake community metrics", async () => {
  const html = await (await render("/explore")).text();
  const text = visibleText(html);
  for (const item of ["3 个研究原型模块", "SOURCE_CHECK", "RESEARCH_ANALYSIS", "ARGUMENT_PATTERN", "高模块化", "中模块化", "低模块化"]) assert.match(text, new RegExp(item));
  assert.match(text, /尚无真实社区使用量或专业背书/);
});

test("publish flow asks for boundary fields and writes no data", async () => {
  const html = await (await render("/new")).text();
  const text = visibleText(html);
  for (const item of ["PUBLISH LEGAL MODULE", "Use when", "Not for", "停止条件", "专业升级条件", "PUBLIC_METHOD_ONLY", "LEGAL MODULE · V0.1"]) assert.match(text, new RegExp(item, "i"));
  assert.match(text, /不得填写客户身份、事实、证据、策略/);
  assert.match(text, /不会上传、注册或写入任何数据/);
});

test("projects and repositories keep the platform general and matters private", async () => {
  const projects = await (await render("/projects")).text();
  assert.match(projects, /PUBLIC/);
  assert.match(projects, /PRIVATE/);
  assert.match(projects, /PRIVATE RUNTIME · NOT BUILT/);
  assert.match(projects, /客户身份、文档、证据、策略和决定不进入公共社区/);
  const repositories = await (await render("/repositories")).text();
  assert.match(repositories, /建筑工程是发起人账号下的首个参考项目/);
  assert.match(repositories, /不是网站的内容边界/);
});

test("local intake tool separates private matters from public candidates", async () => {
  const html = await (await render("/toolkit")).text();
  const text = visibleText(html);
  for (const item of ["LOCAL-TO-LIBRARY WORKBENCH", "案件材料留在本地", "私有案件包", "公共草稿", "HOLD_PRIVATE", "责任律师", "脚本不联网", "Skill只是工作流说明"]) assert.match(text, new RegExp(item));
  assert.match(html, /\/downloads\/legal-module-intake\.zip/);
  assert.match(text, /不复制、不上传原件/);
  assert.match(text, /一键上传器/);
});

test("working theory exposes constructs, hypotheses and falsifiers", async () => {
  const html = await (await render("/research")).text();
  for (const item of ["Legal Work Interface", "Legal Modularizability", "Integration Knowledge", "H1", "H8", "FALSIFICATION CONDITIONS"]) assert.match(html, new RegExp(item));
  assert.match(html, /G1 · IN PROGRESS/);
  assert.match(html, /COMMUNITY · HOLD/);
  assert.doesNotMatch(html, /行业既定标准|已经证明/);
});

test("evidence and study pages keep plans separate from completed results", async () => {
  const evidence = await (await render("/evidence")).text();
  for (const item of ["CURATED · EXPLORATORY", "FORMAL PRISMA CORPUS", "PRIOR-ART RISK"]) assert.match(evidence, new RegExp(item));
  const studies = await (await render("/studies")).text();
  for (const item of ["S0", "S1", "S2", "S3", "S4", "S5", "S6", "PILOT PLANNED · 0 COLLECTED"]) assert.match(studies, new RegExp(item));
});

test("governance labels private infrastructure as proposed rather than active", async () => {
  const html = await (await render("/governance")).text();
  assert.match(html, /PUBLIC STATIC SITE · ACTIVE/);
  assert.match(html, /PRIVATE WORKBENCH · NOT BUILT/);
  assert.match(html, /EVIDENCE VAULT · NOT BUILT/);
});

test("primary product and retained research routes render", async () => {
  const routes = ["/", "/explore", "/modules/open-practice/source-currentness", "/modules/open-practice/case-law-research", "/modules/open-practice/litigation-strategy-frame", "/repositories", "/repositories/construction-legal-engineering", "/projects", "/projects/qianhai-notice-playbook", "/toolkit", "/organizations", "/docs", "/new", "/jiaozhu7", "/research-lab", "/research", "/evidence", "/studies", "/artifacts", "/participate", "/governance"];
  for (const route of routes) assert.equal((await render(route)).status, 200, `${route} should render`);
});

test("legacy workflow URL redirects to the Legal Module route", async () => {
  const response = await render("/workflows/case-law-research");
  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "/modules/open-practice/case-law-research");
});

test("founding repository remains visibly non-production", async () => {
  const repositoryHtml = await (await render("/repositories/construction-legal-engineering")).text();
  assert.match(repositoryHtml, /SCHEMA PREVIEW/);
  assert.match(repositoryHtml, /建设工程是一个账号的首个仓库/);
  assert.match(repositoryHtml, /0 VERIFIED/);
});
