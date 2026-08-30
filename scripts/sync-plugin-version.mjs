#!/usr/bin/env node
// Keeps .claude-plugin/plugin.json's version in step with package.json.
// `--check` exits 1 on drift instead of writing.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packagePath = path.join(root, "package.json");
const pluginPath = path.join(root, ".claude-plugin", "plugin.json");
const { version } = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const plugin = JSON.parse(fs.readFileSync(pluginPath, "utf8"));

if (process.argv.includes("--check")) {
  if (plugin.version !== version) {
    console.error(`plugin.json version ${plugin.version} drifted from package.json ${version}; run pnpm version`);
    process.exit(1);
  }
  console.log(`plugin.json in step at ${version}.`);
} else if (plugin.version !== version) {
  plugin.version = version;
  fs.writeFileSync(pluginPath, JSON.stringify(plugin, null, 2) + "\n");
  console.log(`plugin.json set to ${version}.`);
}
