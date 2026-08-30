#!/usr/bin/env node
// One-word installer: delegates to the skills.sh CLI against Damsara/napkin.
// Extra flags pass straight through, e.g. `npx napkin-skills --list`.
const { spawnSync } = require("node:child_process");

const result = spawnSync(
  "npx",
  ["-y", "skills@latest", "add", "Damsara/napkin", ...process.argv.slice(2)],
  { stdio: "inherit", shell: process.platform === "win32" }
);

process.exit(result.status ?? 1);
