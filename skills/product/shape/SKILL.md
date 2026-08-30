---
name: shape
description: Shape a chosen product direction into a feature set that fits its appetite, around one hero feature. Use after spar, or when the user asks "what features should this have", "what is the MVP", "what do I build first", "what makes this product", or brings a feature list that needs cutting.
---

# Shape

Call the Skill tool with "canon".

If the ledger has no chosen direction, ask for the product in one paragraph and its hero feature in one line, and write them to decisions; a missing appetite is asked as in round one.

Rounds per canon. Questions come from the `shape` sections of canon's `references/questions.md`.

## Ladder
1. **Problem story.** One specific story of the status quo failing, drawn from the struggling moment, written for a reader who has never met the person. It opens the spec's Direction section.
2. **Epicenter.** Restate the hero feature as the thing the product cannot live without, delivered as a skateboard: a whole usable path through the job, end to end. Test: remove it and the product makes no sense. If the test fails, the hero is wrong; go back one rung.
3. **Kano sort.** Collect every candidate feature (the user's, the alternatives', the landscape's). Classify each must-be, performance, delighter, or indifferent, asking the functional and dysfunctional question only where the class is unclear. The hero must be a delighter. Indifferent features are struck and listed under rejected with the reason "indifferent".
4. **Supporting and must-be.** Supporting features exist only to make the hero usable; must-bes are the floor the person expects and cannot be the reason to switch. Write each as a job story with one "done looks like" line.
5. **Appetite fit.** For every surviving feature ask "possible in [appetite]?". Walk the use case slowly and name rabbit holes: novel technical work, unverified integrations, unsolved design, decisions left open. Declare no-gos. Cut until the set fits the appetite; cut supporting first, must-be second; the hero survives every cut.
6. **Riskiest assumption.** Decompose what must be true into single claims; pick the one most important with the least evidence; name the smallest test that could prove it wrong and the number that means pass. If the test involves people, the questions are about past behaviour or commitment.
7. **Second act.** What remains when the hero is copied. Write it to the ledger's decisions as `second act: <10x dimension or secret>`, or to open questions as `second act: none yet`.

## Exit
The ledger carries the feature table (feature · rank · job story · done looks like · appetite fit), the no-gos, the rabbit holes, the riskiest assumption with its test and pass number, and the second act. Then call the Skill tool with "board" with the sitting question "Does this feature set make the product?". When the sitting closes, write `stage: shaped` and write the spec, sections 1 to 6, 8, and 9, per canon's `references/spec-format.md`. Tell the user the spec's path, that `/napkin-position` adds the go-to-market section, and that `/whiteboard-me` (screens) and `/to-spec` (engineering) take the spec from here.
