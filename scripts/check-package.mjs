#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expectedFiles = ["bin/napkin-skills.js", "LICENSE", "package.json", "README.md"];
const result = spawnSync("pnpm", ["pack", "--dry-run", "--json"], { cwd: root, encoding: "utf8" });

if (result.status !== 0) {
  console.error(result.stderr || result.stdout);
  process.exit(result.status ?? 1);
}

let pack;
try {
  pack = JSON.parse(result.stdout);
} catch (error) {
  console.error(`Could not parse pnpm pack output: ${error.message}`);
  process.exit(1);
}

const actualFiles = pack.files.map(({ path: filePath }) => filePath).sort();
const expected = [...expectedFiles].sort();
if (JSON.stringify(actualFiles) !== JSON.stringify(expected)) {
  console.error(`Unexpected package contents. Expected ${expected.join(", ")}; got ${actualFiles.join(", ")}`);
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const binPath = path.join(root, packageJson.bin["napkin-skills"]);
if (!fs.readFileSync(binPath, "utf8").startsWith("#!/usr/bin/env node")) {
  console.error("The napkin-skills binary is missing its Node.js shebang");
  process.exit(1);
}

console.log(`Package contents verified for ${packageJson.name}@${packageJson.version}.`);
