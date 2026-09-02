# Generated workspace contract

`scripts/init_intake.py` creates a working directory without copying or altering originals.

```text
intake/
├── private/
│   ├── matter.json
│   ├── inventory/files.json
│   ├── issue-map/issues.json
│   └── analysis/notes.md
├── candidates/
│   ├── candidates.json
│   └── public-module-draft.json
└── review/
    └── publication-gate.md
```

Private records may reference source paths. Candidate records may reference private provenance only through opaque IDs such as `ISSUE-001`; they must not contain source paths, client names, quotations from private documents, or matter-specific facts.

A candidate is ready for review only when it includes identity, purpose, scope, interface, method, dependencies, validation, provenance, rights, and release intent. Its default status is `HOLD_PRIVATE`; only a separate, explicitly authorized publication workflow may change that state.
