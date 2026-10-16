#!/usr/bin/env node
// Prepares the workspace for a Vercel build.
//
// Local dev uses `file:../petalprogress-ui` for the UI package, but Vercel
// can't see sibling directories. This script:
//   1. Rewrites file: dependency refs in package.json to their published
//      versions (from PROD_VERSIONS below).
//   2. Removes package-lock.json so `npm install` regenerates it against
//      the rewritten package.json instead of honoring the stale file: ref
//      that's locked in there.
//
// Bump PROD_VERSIONS when a new @ccowen/petalprogress-ui release is published.

import {
  readFileSync,
  writeFileSync,
  existsSync,
  unlinkSync,
} from "node:fs";

const PROD_VERSIONS = {
  "@ccowen/petalprogress-ui": "^0.2.0",
};

console.log("[vercel-install] starting");

const pkgPath = "package.json";
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
let changed = false;

for (const [name, version] of Object.entries(PROD_VERSIONS)) {
  const current = pkg.dependencies?.[name];
  if (current?.startsWith("file:")) {
    pkg.dependencies[name] = version;
    console.log(`[vercel-install] ${name}: ${current} → ${version}`);
    changed = true;
  } else {
    console.log(
      `[vercel-install] ${name}: already ${current ?? "(absent)"}, no change`
    );
  }
}

if (changed) {
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
  console.log("[vercel-install] rewrote package.json");

  if (existsSync("package-lock.json")) {
    unlinkSync("package-lock.json");
    console.log(
      "[vercel-install] removed package-lock.json; npm install will regenerate it"
    );
  }
}

console.log("[vercel-install] done");
