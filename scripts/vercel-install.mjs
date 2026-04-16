#!/usr/bin/env node
// Rewrites local file: dependencies to their published versions before
// `npm install` runs on Vercel. Keeps local dev working against
// file:../petalprogress-ui while letting Vercel pull from GitHub Packages.
//
// Bump the version here when a new @ccowen/petalprogress-ui release is
// published — otherwise Vercel will continue installing the older version.

import { readFileSync, writeFileSync } from "node:fs";

const PROD_VERSIONS = {
  "@ccowen/petalprogress-ui": "^0.1.0",
};

const pkgPath = "package.json";
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
let changed = false;

for (const [name, version] of Object.entries(PROD_VERSIONS)) {
  const current = pkg.dependencies?.[name];
  if (current?.startsWith("file:")) {
    pkg.dependencies[name] = version;
    console.log(`[vercel-install] ${name}: ${current} → ${version}`);
    changed = true;
  }
}

if (changed) {
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}
