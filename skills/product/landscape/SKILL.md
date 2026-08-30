---
name: landscape
description: Research what already exists for a product idea and write a cited landscape file. Use when an idea has a job story and no landscape yet, when the user asks "does this exist", "who else does this", or "what do people use for this today", and as a background agent during sharpen.
---

# Landscape

Call the Skill tool with "canon".

Inputs: the job story and status quo from the ledger. Output: `<docs home>/<idea>/landscape.md`.

## Search
Search the web for each of these, and keep the URL for every claim:
1. **Exists**: products that serve this job story directly, with how each positions itself and what it charges.
2. **Workarounds**: what people do today without a product (spreadsheets, scripts, manual process, a general tool bent to the job), as found in forum threads, questions, and complaints.
3. **Adjacent**: products serving the same job for a different person or circumstance, and products this person already uses that could absorb the job.
4. **Venues**: where the person in the job story gathers, by name (subreddits, Discords, mailing lists, registries, meetups), with one thread or post showing a comparable product landing there.
5. **Gap**: what none of the above does, stated in one paragraph, with the evidence that the gap is felt (a complaint, a workaround, a request).

Where the harness has no web access, write what you can reason from the idea, put `unverified` on the first line, and mark every claim the same way.

## Exit
`landscape.md` has the five sections, every claim has a URL or an `unverified` mark, and the gap is one paragraph. Add a line to the ledger's decisions: `landscape written · <n> products, <n> venues · gap: <one line>`.
