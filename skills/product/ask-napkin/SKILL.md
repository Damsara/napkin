---
name: ask-napkin
description: Not sure where you are with an idea? Reads your napkin ledger and names the next command.
disable-model-invocation: true
---

# Ask Napkin

Find every `ledger.md` under the docs home (default `docs/napkin`). For each, read its `stage` and say where the idea stands and which command is next. Name exactly one command per idea and offer to run it.

## By stage
- No ledger: ask one question, "Do you have an idea, or a product that already exists?" An idea goes to `/napkin-me`; a product goes to `/napkin-position`.
- `none` or `sharpened`: the kickoff is mid-way; `/napkin-me` resumes from the ledger.
- `sparred`: direction chosen, features not yet decided; `/napkin-shape`.
- `shaped`: the spec exists without a go-to-market section; `/napkin-position`.
- `positioned`: napkin is done with this idea. Hand off: `/whiteboard-me` for screens and flows, `/to-spec` for the engineering spec.

## Confusable pairs
- `/napkin-spar` vs `/napkin-shape`: spar asks *which product*; shape asks *which features*. If the user is unsure the product is right, spar.
- `/napkin-position` vs whiteboard's `/whiteboard-ui`: position decides who sees it; whiteboard decides what it looks like.
- `/napkin-me` vs `/napkin-spar`: napkin-me is the full kickoff; napkin-spar is for an idea the user already believes in and wants attacked.
