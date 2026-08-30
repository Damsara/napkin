# napkin: repo invariants

Skills live under `skills/product/<name>/SKILL.md` with `agents/openai.yaml` beside each. Only `canon` carries `references/`. Draft skills incubate in `skills/in-progress/<name>/`: never listed in the README, never in `plugin.json`, never announced in a changeset until promoted.

## Skill rules

- Every `SKILL.md` has `name` (lowercase-hyphen, matching its folder) and a single-line `description` under 1536 chars.
- **Disciplines** (`canon`, `sharpen`, `landscape`, `spar`, `shape`, `position`, `board`) are model-invoked: no `disable-model-invocation`; the description is a routing rule with trigger phrases, one trigger per distinct branch. Every discipline except `canon` opens with `Call the Skill tool with "canon"` and reads the ledger before anything else.
- **Wrappers** (`napkin-*`) and the **router** (`ask-napkin`) are user-invoked: `disable-model-invocation: true`, a human-facing one-line description, and `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. Wrapper bodies are at most four lines, each a Skill tool call and nothing else. A wrapper that grows content is a bug; move the content into the discipline it wraps.
- Dependencies are written as `Call the Skill tool with "<name>"`, one skill per call. Never a bare `/name` in a discipline, never a `../` path into another skill's folder. Preconditions on user-invoked skills are phrased for the human ("tell the user to run `/napkin-me`").
- Sub-agents are dispatched with the words "dispatch a sub-agent" and no harness-specific agent or tool names. Every fan-out states its sequential fallback.
- The spec sections, the ledger format, the round rules, and the pack rules are defined once in `canon`; disciplines point there and never restate them.

## Canon rules

- Every `references/*.md` opens with `> canon-version: YYYY-MM` plus a one-line purpose. All reference files carry the same stamp; refreshing the canon changes the stamp on every touched file.
- Distilled principles are paraphrased with attribution, never verbatim excerpts.
- Every reference file is reachable from `references/sources.md`'s Feeds column.

## Quality bar (run on every skill edit)

- **No-op hunt**: delete any sentence the model already obeys by default; delete whole sentences, do not trim words.
- **Single source of truth**: each rule, cap, and format lives in exactly one file.
- **Leading words**: one pretrained concept (job story, appetite, epicenter, wedge, pre-mortem) over a spelled-out list. The words are defined in `canon/references/leading-words.md`.
- **Positive phrasing**: say what to do; a prohibition drags the forbidden behaviour into context.
- **Checkable exits**: every discipline's Exit names a completion criterion the agent can verify (ledger stage written, every seat has a position, every feature has a rank).
- **Examples are the test**: after editing a skill, re-read the affected `examples/<slug>/transcript.md` and judge whether the change would have improved it.

## Sync rules

- Every promoted skill has a linked entry in the top-level `README.md`, grouped by situation. Typed skills carry the `/` prefix; auto-firing ones do not.
- `ask-napkin` routes by ledger stage. Whenever a wrapper is added, renamed, or removed, re-sync the router.
- `.claude-plugin/plugin.json` lists exactly the promoted set; run `claude plugin validate . --strict` after touching either manifest.
- No em-dashes anywhere in the repo. Rewrite with a comma, colon, period, or parentheses.
- Every behaviour-changing branch adds a changeset (`pnpm changeset`; package `napkin-skills`): patch = wording or pruning, minor = new skill or new rung, major = removed or renamed skill.
- Releasing: `GITHUB_TOKEN=$(gh auth token) pnpm version`, commit, `git tag v<version>`, `gh release create v<version>` with the new CHANGELOG section as notes, then `npm publish`. Installed users pick up the release via `npx skills update` or the plugin's auto-update.
