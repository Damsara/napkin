# napkin

Board-table product skills for coding agents. Bring a vague idea; leave with a requirement specification that argues with you on the way.

*gstack argues about your architecture; napkin argues about your product.*

## What happens in a session

You describe the idea. Four seats (Customer, Marketer, Builder, Skeptic) read the same pack and disagree in writing; you settle the disagreements. In three sittings:

1. **Sharpen**: five questions at a time until the job story, the struggling moment, your goal, and the appetite are written down.
2. **Spar**: four independently generated alternative products, each with its hero feature and what it gives up, plus keep-the-original. You choose. A pre-mortem follows.
3. **Shape**: one hero feature, the supporting and must-be features around it, no-gos, rabbit holes, and the riskiest assumption with its cheapest test. The spec is written.

Then, when the product is confirmed, **position**: who to show it to first, in order, with evidence.

Everything decided or rejected lands in `docs/napkin/<idea>/ledger.md`, and every command resumes from it. About forty minutes of your attention for the kickoff.

## Install

Two ways in, pick one.

**Claude Code plugin** (managed, auto-updating):

```bash
/plugin marketplace add Damsara/napkin
/plugin install napkin-skills@napkin
```

**skills.sh** (editable copies; Claude Code, Cursor, Codex, Copilot and others):

```bash
npx napkin-skills
```

Then run `/napkin-me` with an idea.

## Which skill do I use?

### Starting from an idea

| Skill | Use it for |
|---|---|
| [`/napkin-me`](./skills/product/napkin-me/SKILL.md) | The full kickoff: sharpen, spar, shape, and the spec. |
| [`/napkin-spar`](./skills/product/napkin-spar/SKILL.md) | An idea you already believe in and want attacked. |
| [`sharpen`](./skills/product/sharpen/SKILL.md) | Fires when you bring a new idea. |
| [`landscape`](./skills/product/landscape/SKILL.md) | Fires when an idea has no research yet; cited. |
| [`spar`](./skills/product/spar/SKILL.md) | Fires when you ask for a better idea or holes poked. |

### Deciding what to build

| Skill | Use it for |
|---|---|
| [`/napkin-shape`](./skills/product/napkin-shape/SKILL.md) | Which features make the product, sized to an appetite. |
| [`shape`](./skills/product/shape/SKILL.md) | Fires when you ask what the MVP is or bring a feature list. |

### Deciding who sees it

| Skill | Use it for |
|---|---|
| [`/napkin-position`](./skills/product/napkin-position/SKILL.md) | Positioning, first audiences in order, channel bets, launch series. |
| [`position`](./skills/product/position/SKILL.md) | Fires when you ask how to launch or who to show it to. |

### Utilities

| Skill | Use it for |
|---|---|
| [`/ask-napkin`](./skills/product/ask-napkin/SKILL.md) | Reads your ledger and names the next command. |
| [`board`](./skills/product/board/SKILL.md) | The sitting: four seats, independent positions, disagreements to you. |
| [`canon`](./skills/product/canon/SKILL.md) | The shared rules every skill reads: ledger, rounds, seats, spec format. |

## What you get

- `docs/napkin/<idea>/ledger.md`: decisions, rejected alternatives with reasons, board minutes, open questions.
- `docs/napkin/<idea>/landscape.md`: what exists, workarounds, adjacent products, venues, the gap, cited.
- `docs/napkin/<idea>/spec.md`: the requirement specification. Hands to `/whiteboard-me` for screens and to `/to-spec` for engineering.

## What napkin does not do

No engineering spec, no screens, no copywriting, no personas, no category creation, no PRD template. It picks the product, the hero feature, and the first audience, and writes down why.

## Update installed skills

```bash
npx skills update
```

## Develop this repository

```bash
pnpm install --frozen-lockfile
pnpm validate
pnpm test
pnpm package:check
```

## License

MIT
