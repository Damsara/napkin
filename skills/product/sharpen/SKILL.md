---
name: sharpen
description: Sharpen a vague product idea in short interview rounds until the job story, the struggling moment, the goal, and the appetite are written down. Use when the user brings a new idea, says "I have an idea", "what if I built", "is this worth building", or asks to build a product whose user and problem are not yet written down.
---

# Sharpen

Call the Skill tool with "canon".

Pick questions from the `sharpen` sections of canon's `references/questions.md`; skip any rung the ledger already answers.

## Ladder
1. **Round one, fixed.** The three round-one questions from questions.md: the builder's goal, the appetite in weeks, the one person and the last time it hurt. Write goal and appetite to the ledger header before asking anything else.
2. **Job story.** From the struggling moment, draft "When [situation], I want to [motivation], so I can [outcome]" and confirm it. A persona the user offers becomes a situation; the demographic is dropped.
3. **Status quo.** What they hire today (including nothing) and what they call it; what they have tried; what they would have to stop using. When rung 3 is answered, dispatch a sub-agent that calls the Skill tool with "landscape" and continue the rounds; only questions that depend on it wait. Without sub-agents, call the Skill tool with "landscape" inline, then resume at rung 4.
4. **Four forces.** Push, pull, anxiety, habit for that person. Write a one-line verdict to the ledger's decisions: whether push + pull beats anxiety + habit today, and the weakest force.
5. **Well or puddle.** Few who want it a lot, or many who want it a little. Who wants it right now, named or placed at a venue. Write the verdict.

## Exit
The ledger carries goal, appetite, the confirmed job story, the struggling moment, the forces verdict, and the well-or-puddle verdict. Then call the Skill tool with "board" with the sitting question "Is this the right problem?". When the sitting closes, write `stage: sharpened`. Tell the user the next step is spar (running now if a wrapper called you; otherwise `/napkin-spar`).
