---
name: legal-module-intake
description: Organize lawyers' local matter files into a private matter package and reviewable, de-identified Legal Module candidates. Use when converting case, transaction, research, or advisory work into reusable community content; do not use to publish raw client materials or to give final matter-specific legal advice.
---

# Legal Module Intake

Turn a completed or ongoing legal matter into structured private work records and narrowly scoped public module candidates. Use the bundled script for the deterministic local stage. This skill prepares drafts; it never publishes them.

## Non-negotiable boundary

- Treat every source file, extracted fact, communication, work product, strategy choice, and client identifier as private by default.
- Do not upload, sync, transmit, or paste source material into a public issue, repository, module, or external service.
- Do not modify source files. Build a separate working directory and preserve hashes for traceability.
- The bundled inventory script runs locally and sends nothing. A Skill is workflow instructions, not proof that model processing is on-device. Before any model reads source contents, require confirmation that the selected environment, account, retention controls, client authority, and firm policy permit that processing. If this is unknown, run inventory only and stop before content analysis.
- A public candidate may describe a reusable method, blank structure, typed input/output contract, public authority, or generalized pattern. It must not reveal a client, matter, counterparty, unique fact pattern, evidence, negotiation position, or privileged reasoning.
- Never publish or push. Stop at the publication gate and require the responsible lawyer's explicit approval for a separate publication action.

## Workflow

1. Resolve the local source directory, an empty output directory, a non-identifying matter code, jurisdiction, and practice area. Do not request a client name.
2. Run `scripts/init_intake.py --source <source> --output <output> --matter-code <code>` to create a private inventory and review workspace. Add `--jurisdiction` and `--practice-area` when known.
3. Confirm the model-processing gate above. If it passes, read only the files necessary for the requested intake. Keep extracted facts in `private/`; do not place confidential text in candidate files. If it does not pass, leave the generated templates blank for offline completion.
4. Build an issue map. For each issue record the trigger, legal question, material facts by neutral IDs, applicable sources and dates, research status, dependencies, uncertainty, next action, and responsible reviewer.
5. Identify repeated capability candidates. Choose one primary module type from `SOURCE_CHECK`, `RULE_DECISION`, `RESEARCH_ANALYSIS`, `EVIDENCE`, `DOCUMENT_CLAUSE`, `PROCESS`, `ARGUMENT_PATTERN`, or `COMPOSITION`. Read [references/classification.md](references/classification.md) when selecting the type or modularity level.
6. For each candidate, separate reusable method from matter outcome. Define `use_when`, `not_for`, jurisdiction/as-of scope, typed inputs, typed outputs, dependencies, stopping conditions, escalation conditions, validation plan, provenance, and rights.
7. Run the two-output review in [references/intake-sop.md](references/intake-sop.md): preserve a complete private matter package and produce only a generalized public draft.
8. Complete every item in `review/publication-gate.md`. If any item is unknown or fails, mark the candidate `HOLD_PRIVATE` and explain the reason without copying sensitive content.

## Output standard

Use [references/output-contract.md](references/output-contract.md) when filling generated files. Preserve links from a public candidate to private provenance by opaque local IDs only; public artifacts must not expose private paths or descriptions.

Report what was inventoried, which issue records and candidates were created, what remains uncertain, and which human approvals are required. Do not imply that schema validity proves legal correctness or matter suitability.
