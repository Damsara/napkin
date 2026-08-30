---
name: spar
description: Argue against a sharpened idea by generating independent alternative products with trade-offs, then run a pre-mortem on the chosen direction. Use after sharpen, or when the user asks "is there a better idea", "what else could this be", "poke holes in this idea", or wants alternatives to an idea they already hold.
---

# Spar

Call the Skill tool with "canon".

If the ledger has no `sharpened` stage, ask the three round-one questions from the `sharpen · round one` section of canon's `references/questions.md`, draft the job story from the struggling moment, and write goal, appetite, struggling moment, and job story to the ledger.

## Ladder
1. **Judging criterion.** Restate from the ledger, in three lines: the goal, the appetite, the job story. Every alternative is scored against these three, not against novelty.
2. **Fan-out.** Read canon's `references/alternative-kinds.md`. Dispatch four sub-agents, one per kind (Wedge, Circumstance, Underdo, Reframe), each receiving the pack, its own kind's prompt, and the output shape, and nothing else. Once per spar; sequential fallback per canon.
3. **Merge.** Drop duplicates. Strike any claim with no line in the pack or `landscape.md` behind it. Add **Keep the original**, written in the same shape by you. Present the set as one table: name, pitch, hero feature, for whom, weakest force, gives up, well or puddle.
4. **Choose.** One round, at most five questions from the `spar · choosing` section of questions.md, ending in the user picking one, merging two, or rejecting all and keeping the original. Every alternative not chosen goes to the ledger's rejected list with the user's reason in one line. The chosen direction and its hero feature go to decisions.
5. **Pre-mortem.** Dispatch one sub-agent that receives only the chosen direction, the job story, and `landscape.md` (not the alternatives, not the reasons), with the `spar · pre-mortem` questions from questions.md. It returns reasons for failure ranked by likelihood and ease of prevention. Put the top three to the user in one round with a recommended prevention each; write each to the ledger as a decision or an open question.

## Exit
The ledger carries the chosen direction with its hero feature, every rejected alternative with a reason, and the pre-mortem's top three. Then call the Skill tool with "board" with the sitting question "Is this the right direction, and is that its hero feature?". When the sitting closes, write `stage: sparred`. Tell the user the next step is shape (running now if a wrapper called you; otherwise `/napkin-shape`).
