> canon-version: 2026-08
> The requirement specification and the ledger: sections, fields, and who writes each. The only place these are defined.

# Ledger format

`<docs home>/<idea>/ledger.md`. Format:

```
---
idea: <slug>
stage: none | sharpened | sparred | shaped | positioned
docs-home: docs/napkin
appetite: <weeks>
goal: learn | ship | revenue | portfolio
---
## Decisions
- <decision> · <who decided> · <why>
## Rejected
- <alternative or feature> · <why it lost>
## Board minutes
### Sitting <n>: <question>
- Agreed: ...
- Disagreed: <seat> vs <seat> on <what> · resolved: <how> | parked
## Non-evidence
- <compliment, hypothetical, or unverified claim, quoted>
## Open questions
- ...
```

# Requirement specification

`<docs home>/<idea>/spec.md`, exactly these sections, in this order:

1. **Job story and struggling moment**: the job story in one line; the struggling moment as told, with when and where.
2. **Builder's goal and appetite**: learn, ship, revenue, or portfolio; the appetite in weeks.
3. **Landscape**: what exists, the workarounds, adjacent products, the gap. Cited, or marked `unverified` at the top.
4. **Direction**: the problem story (the status quo failing, once, concretely); the chosen product in one paragraph; the alternatives rejected with reasons (from the ledger); the pre-mortem's top three reasons with their prevention.
5. **Features**: a table, `feature · rank · job story · done looks like · appetite fit`, where rank is hero, supporting, or must-be. Then no-gos as a list. Then rabbit holes as a list.
6. **Riskiest assumption**: the assumption, the cheapest test, the number that means pass, and whether the test involves customers (if so, the questions are about past behaviour or commitment).
7. **Go-to-market**: the positioning statement, three audiences in order with what makes each adjacent to the last, channel bets with cost, the evidence gate, the launch series, the artifacts each channel requires. Written by `position`; absent after kickoff.
8. **Board minutes**: unresolved disagreements, by seat, copied from the ledger.
9. **Open questions**

Sections 1 to 6, 8, and 9 are written when shape's board sitting closes. Section 7 is added by `position`. The spec carries no schemas, file paths, or code; those belong to the engineering spec (`/to-spec`) and the design brief (`/whiteboard-me`).
