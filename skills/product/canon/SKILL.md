---
name: canon
description: napkin's shared rules. Use whenever a napkin discipline runs, or when reading or writing a napkin ledger or requirement specification.
---

# napkin canon

## The ledger
Find `<docs home>/<idea>/ledger.md` (docs home defaults to `docs/napkin`; the ledger's own `docs-home:` line overrides it). Read it before anything else and resume from `stage`. No ledger means a new idea: create one at `stage: none` with the format in [spec-format.md](references/spec-format.md), slug of two to four lowercase hyphenated words from the user's first sentence, and tell the user the path. Append within a session; supersede a decision with a new line rather than editing history.

## Rounds
A **round** is every question whose prerequisites are settled, at most **five**, asked **one per message**. Questions beyond five wait for the next round. Each message carries one ask in one sentence, in the words the user would use; a bank question with several asks goes out one ask at a time. Ask a question only if its answer changes a line in the spec. Where the user's messages already answer it, state what you took from them in one line and ask them to confirm. Ask about the past ("the last time that happened") rather than the future ("would you"). Look up what the codebase or the web can answer; dispatch a sub-agent for it if the harness has them.

Where the answer is a judgement you can draft yourself (a verdict, a classification, a decomposition), state your draft in one line and ask the user to confirm or correct it. Otherwise offer two to four short options with your pick marked, plus a last option "not sure, you pick", so the user can reply with a letter. A story question (the struggling moment) is asked open, with no options.

```
❓ <question>
a) <option> ← my pick
b) <option>
c) not sure, you pick
```

Add one line of trade-off under the options only when the pick costs something the user would care about. When the user answers "not sure", take your pick, move on, and log it under **Open questions** in the ledger as `assumed: <pick>`. When the user replies with a question of their own, answer it, then ask the same question again in plainer words; the next question waits for an answer.

When a rung closes, show the user where the idea stands before the next question, naming rungs in plain words:

```
Your idea so far: <two lines>
✓ <rung> · ✓ <rung> · next: <rung>
```

Log compliments, hypotheticals, and feature requests under **Non-evidence** in the ledger; they are not facts about the person.

## The pack
When a seat or a sub-agent is dispatched, it receives the ledger, `landscape.md` if it exists, and a summary of the current idea state that you write. It receives nothing from the conversation.

## Fan-out and fallback
Dispatch sub-agents with the pack and one job each. Where the harness has no sub-agents, run the same prompts one after another in this context, in the order given, and add `positions: sequential` to the ledger's decisions line for that fan-out. Where there is no web access, write `unverified` at the top of any research and carry that mark into every citation of it.

## Budgets
Kickoff is three sittings, about forty minutes of the user's attention. Sub-agent fan-out once per spar and once per board sitting.

## Words
The concepts napkin thinks with are defined in [leading-words.md](references/leading-words.md). Use the word (appetite, epicenter, four forces) in the ledger, the spec, and your own reasoning. To the user, say what it means in plain words: "how many weeks will you give the first version", not "what is your appetite".

## Where each reference lives
- Questions by rung: [questions.md](references/questions.md)
- The four alternative kinds and their output shape: [alternative-kinds.md](references/alternative-kinds.md)
- The four seats and their output shape: [seats.md](references/seats.md)
- Ledger and spec formats: [spec-format.md](references/spec-format.md)
- Launch venue rules: [venues.md](references/venues.md)

Read each reference at the rung that names it.
