---
name: canon
description: napkin's shared rules. Use whenever a napkin discipline runs, or when reading or writing a napkin ledger or requirement specification.
---

# napkin canon

## The ledger
Find `<docs home>/<idea>/ledger.md` (docs home defaults to `docs/napkin`; the ledger's own `docs-home:` line overrides it). Read it before anything else and resume from `stage`. No ledger means a new idea: create one at `stage: none` with the format in [spec-format.md](references/spec-format.md), slug of two to four lowercase hyphenated words from the user's first sentence, and tell the user the path. Append within a session; supersede a decision with a new line rather than editing history.

## Rounds
A **round** is every question whose prerequisites are settled, asked together, numbered, each with your recommended answer, at most **five**. Questions beyond five wait for the next round. Ask a question only if its answer changes a line in the spec. Ask about the past ("the last time that happened") rather than the future ("would you"). Look up what the codebase or the web can answer; dispatch a sub-agent for it if the harness has them.

```
❓ Q1 · <title>: <question>
➡️ <recommended answer, one to three sentences, with the trade-off>
```

Log compliments, hypotheticals, and feature requests under **Non-evidence** in the ledger; they are not facts about the person.

## The pack
When a seat or a sub-agent is dispatched, it receives the ledger, `landscape.md` if it exists, and a summary of the current idea state that you write. It receives nothing from the conversation.

## Fan-out and fallback
Dispatch sub-agents with the pack and one job each. Where the harness has no sub-agents, run the same prompts one after another in this context, in the order given, and add `positions: sequential` to the ledger's decisions line for that fan-out. Where there is no web access, write `unverified` at the top of any research and carry that mark into every citation of it.

## Budgets
Kickoff is three sittings, about forty minutes of the user's attention. Sub-agent fan-out once per spar and once per board sitting.

## Words
The concepts napkin thinks with are defined in [leading-words.md](references/leading-words.md). Use the word (appetite, epicenter, four forces) rather than a paraphrase; explain it only when the user asks.

## Where each reference lives
- Questions by rung: [questions.md](references/questions.md)
- The four alternative kinds and their output shape: [alternative-kinds.md](references/alternative-kinds.md)
- The four seats and their output shape: [seats.md](references/seats.md)
- Ledger and spec formats: [spec-format.md](references/spec-format.md)
- Launch venue rules: [venues.md](references/venues.md)

Read each reference at the rung that names it.
