#!/usr/bin/env python3
"""Create a local, non-publishing Legal Module intake workspace."""

from __future__ import annotations

import argparse
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def write_json(path: Path, value: object) -> None:
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Inventory local matter files and create private/public-draft lanes. Nothing is uploaded."
    )
    parser.add_argument("--source", required=True, type=Path, help="Directory containing original matter files")
    parser.add_argument("--output", required=True, type=Path, help="New or empty intake directory")
    parser.add_argument("--matter-code", required=True, help="Non-identifying internal code; do not use a client name")
    parser.add_argument("--jurisdiction", default="UNSPECIFIED")
    parser.add_argument("--practice-area", default="UNSPECIFIED")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    source = args.source.expanduser().resolve()
    output = args.output.expanduser().resolve()

    if not source.is_dir():
        raise SystemExit(f"Source directory does not exist: {source}")
    if source == output or source in output.parents:
        raise SystemExit("Output must not be inside the source directory.")
    if output.exists() and any(output.iterdir()):
        raise SystemExit("Output directory must be new or empty; existing files were not changed.")

    for relative in [
        "private/inventory",
        "private/issue-map",
        "private/analysis",
        "candidates",
        "review",
    ]:
        (output / relative).mkdir(parents=True, exist_ok=True)

    created_at = datetime.now(timezone.utc).isoformat()
    files = []
    for path in sorted(source.rglob("*")):
        if not path.is_file() or path.is_symlink():
            continue
        stat = path.stat()
        files.append(
            {
                "file_id": f"FILE-{len(files) + 1:04d}",
                "relative_path_private": path.relative_to(source).as_posix(),
                "extension": path.suffix.lower(),
                "size_bytes": stat.st_size,
                "sha256": sha256(path),
                "modified_at_utc": datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
                "review_status": "UNREVIEWED",
                "document_role": "UNCLASSIFIED",
            }
        )

    write_json(
        output / "private/matter.json",
        {
            "matter_code": args.matter_code,
            "classification": "PRIVATE_MATTER",
            "jurisdiction": args.jurisdiction,
            "practice_area": args.practice_area,
            "source_root_local": str(source),
            "created_at_utc": created_at,
            "notice": "Contains private provenance. Do not publish this file.",
        },
    )
    write_json(
        output / "private/inventory/files.json",
        {
            "classification": "PRIVATE_MATTER",
            "originals_copied": False,
            "file_count": len(files),
            "files": files,
        },
    )
    write_json(
        output / "private/issue-map/issues.json",
        {
            "classification": "PRIVATE_MATTER",
            "issues": [
                {
                    "issue_id": "ISSUE-001",
                    "trigger": "",
                    "legal_question": "",
                    "fact_ids": [],
                    "source_ids": [],
                    "source_as_of": "",
                    "research_status": "NOT_STARTED",
                    "dependencies": [],
                    "uncertainty": "",
                    "next_action": "",
                    "responsible_reviewer": "",
                }
            ],
        },
    )
    (output / "private/analysis/notes.md").write_text(
        "# Private analysis notes\n\nKeep facts, chronology, evidence, strategy and privileged reasoning in this private lane.\n",
        encoding="utf-8",
    )
    write_json(
        output / "candidates/candidates.json",
        {
            "classification": "PUBLIC_CANDIDATE_DRAFTS",
            "default_status": "HOLD_PRIVATE",
            "candidates": [
                {
                    "candidate_id": "CANDIDATE-001",
                    "private_issue_ids": ["ISSUE-001"],
                    "module_type": "UNCLASSIFIED",
                    "modularity": "UNASSESSED",
                    "reusable_capability": "",
                    "reason_to_extract": "",
                    "matter_specific_content_removed": False,
                    "status": "HOLD_PRIVATE",
                }
            ],
        },
    )
    write_json(
        output / "candidates/public-module-draft.json",
        {
            "classification": "PUBLIC_CANDIDATE_DRAFT",
            "status": "HOLD_PRIVATE",
            "identity": {"owner": "", "slug": "", "version": "0.1.0-draft", "module_type": ""},
            "purpose": {"use_when": [], "not_for": []},
            "scope": {"jurisdictions": [], "as_of": "", "limitations": []},
            "interface": {"inputs": [], "outputs": []},
            "method": {"steps": [], "stopping_conditions": [], "escalation_conditions": []},
            "dependencies": {"modules": [], "public_sources": []},
            "validation": {"schema": "NOT_RUN", "source": "NOT_RUN", "peer": "NOT_RUN", "field": "NOT_RUN"},
            "provenance": {"private_issue_ids": [], "contributors": [], "machine_assistance": ""},
            "rights": {"content_license": "UNSELECTED", "third_party_restrictions": []},
            "publication_notice": "No public content may be derived from private material until every publication gate is approved.",
        },
    )
    (output / "review/publication-gate.md").write_text(
        """# Publication gate\n\nCandidate status remains `HOLD_PRIVATE` until every item is checked by the responsible lawyer.\n\n- [ ] I have authority to reuse and disclose this exact content.\n- [ ] Confidentiality, privilege and professional-secrecy review passed.\n- [ ] Client, counterparty, personal and uniquely identifying information cannot be inferred.\n- [ ] Third-party copyright, database, licence and platform restrictions were checked.\n- [ ] Matter facts and outcomes were replaced with typed inputs or synthetic examples.\n- [ ] Public sources, authority level and as-of dates were verified.\n- [ ] Use, non-use, inputs, outputs, stopping and escalation boundaries are explicit.\n- [ ] Validation labels are scoped and do not imply legal correctness.\n- [ ] A responsible lawyer reviewed the exact candidate version.\n- [ ] Separate explicit approval to publish was recorded.\n\nReviewer: ____________________\nDate: ________________________\nDecision: HOLD_PRIVATE / APPROVED_FOR_SEPARATE_PUBLICATION\n""",
        encoding="utf-8",
    )

    print(f"Created local intake workspace: {output}")
    print(f"Inventoried {len(files)} files; copied 0 originals; uploaded 0 files.")
    print("Next: complete the private issue map, extract candidates, and pass the publication gate.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
