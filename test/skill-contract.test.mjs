import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { validateRepository, validateSkillDocument, WRAPPERS } from "../scripts/validate-skills.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skill = (name) => fs.readFileSync(path.join(root, "skills", "product", name, "SKILL.md"), "utf8");
const reference = (name) => fs.readFileSync(path.join(root, "skills", "product", "canon", "references", name), "utf8");

test("the repository satisfies its skill and release contracts", () => {
  assert.deepEqual(validateRepository(root), []);
});

test("invalid skill frontmatter and bodies are rejected", () => {
  const malformed = validateSkillDocument({
    relativePath: "skills/product/sharpen/SKILL.md",
    content: "---\nname: Wrong Name\ndescription: short\ndisable-model-invocation: true\n---\n",
  }).join("\n");
  assert.match(malformed, /does not match folder/);
  assert.match(malformed, /lowercase-hyphen/);
  const flagged = validateSkillDocument({
    relativePath: "skills/product/sharpen/SKILL.md",
    content: '---\nname: sharpen\ndescription: short\ndisable-model-invocation: true\n---\nCall the Skill tool with "canon".\n',
  }).join("\n");
  assert.match(flagged, /must omit disable-model-invocation/);

  const crossPath = validateSkillDocument({
    relativePath: "skills/product/spar/SKILL.md",
    content: '---\nname: spar\ndescription: x\n---\nCall the Skill tool with "canon". Read ../canon/references/seats.md\n',
  }).join("\n");
  assert.match(crossPath, /\.\.\/ path/);

  const fatWrapper = validateSkillDocument({
    relativePath: "skills/product/napkin-me/SKILL.md",
    content: '---\nname: napkin-me\ndescription: x\ndisable-model-invocation: true\n---\nCall the Skill tool with "sharpen".\nThen explain the ledger at length.\n',
  }).join("\n");
  assert.match(fatWrapper, /not a Skill tool call/);
});

test("the kickoff wrapper runs sharpen, spar, shape in order and nothing else", () => {
  const body = skill("napkin-me").split("---").slice(2).join("---");
  const calls = [...body.matchAll(/Call the Skill tool with "([a-z-]+)"/g)].map((m) => m[1]);
  assert.deepEqual(calls, ["sharpen", "spar", "shape"]);
});

test("every discipline hands its sitting to the board and the router routes every wrapper", () => {
  for (const name of ["sharpen", "spar", "shape"]) {
    assert.match(skill(name), /call the Skill tool with "board"/i, `${name} must convene the board`);
  }
  const router = skill("ask-napkin");
  for (const name of WRAPPERS) assert.match(router, new RegExp(`/${name}\\b`));
  for (const stage of ["sharpened", "sparred", "shaped", "positioned"]) assert.match(router, new RegExp(stage));
});

test("the spec format is the single source of the spec sections", () => {
  const sections = [...reference("spec-format.md").matchAll(/^\d+\. \*\*([^*]+)\*\*/gm)].map((m) => m[1]);
  assert.equal(sections.length, 9);
  for (const name of ["shape", "position"]) {
    assert.match(skill(name), /spec-format\.md/, `${name} must point at spec-format.md`);
    assert.doesNotMatch(skill(name), /^\d+\. \*\*(Job story|Go-to-market|Board minutes)\*\*/m, `${name} must not restate spec sections`);
  }
});

test("every seat in seats.md is named in board, and every alternative kind in spar", () => {
  const seats = [...reference("seats.md").matchAll(/^## (Customer|Marketer|Builder|Skeptic)$/gm)].map((m) => m[1]);
  assert.deepEqual(seats, ["Customer", "Marketer", "Builder", "Skeptic"]);
  for (const seat of seats) assert.match(skill("board"), new RegExp(seat));
  const kinds = [...reference("alternative-kinds.md").matchAll(/^## (.+)$/gm)].map((m) => m[1]).filter((k) => k !== "Keep the original");
  assert.equal(kinds.length, 4);
  assert.match(skill("spar"), /Keep the original/);
  for (const kind of kinds) assert.match(skill("spar"), new RegExp(kind.split(" ")[0]));
});

test("rounds are capped at five everywhere a round is defined", () => {
  assert.match(skill("canon"), /five/i);
  for (const name of ["sharpen", "spar", "shape", "board"]) {
    assert.doesNotMatch(skill(name), /one question at a time/i, `${name} must use rounds, not one-at-a-time`);
  }
});
