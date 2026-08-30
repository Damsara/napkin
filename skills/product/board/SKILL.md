---
name: board
description: Convene napkin's four seats on the current state of an idea, collect independent written positions, and put only their disagreements to the user. Use when the user asks "what would the board say", "get a second opinion on this product", or wants the product argued from more than one side.
---

# Board

Call the Skill tool with "canon".

You are the **chair**. The caller supplies the **sitting question** (right problem? which direction and its hero feature? does this feature set make the product?). If no caller supplied one, ask the user for it in one line.

## Convene
Read the seats in canon's `references/seats.md`. Write the pack per canon. Dispatch four sub-agents, one per seat (Customer, Marketer, Builder, Skeptic), each receiving the pack, its own seat definition, and the sitting question, and nothing else. Each returns a position in the shape seats.md fixes. Sequential fallback per canon.

## Chair
1. Strike any claim with no line in the pack behind it, and say which seat lost which claim.
2. Record every agreement to the ledger's board minutes for this sitting, without discussion.
3. Tabulate the disagreements: which seats, on what, with each side's evidence. Put them to the user as one round of at most five numbered questions, each with your recommended resolution and its trade-off. Where the seats raised more than five, park the rest as open questions and say so.
4. Write each resolution to the ledger: `disagreed: <seat> vs <seat> on <what> · resolved: <how>`, or `parked`.

## Exit
The sitting is closed when every disagreement is resolved or parked and the minutes are in the ledger. Return to the caller with the minutes; the caller writes the stage.
