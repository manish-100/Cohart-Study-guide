#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..");
const dest = path.join(__dirname, "content");

function copyDir(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  const entries = fs.readdirSync(from, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.name.endsWith(".md")) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true });

const episodes = fs.readdirSync(src).filter((d) => d.startsWith("Episode-"));
for (const ep of episodes) {
  copyDir(path.join(src, ep), path.join(dest, ep));
}

console.log(`Copied ${episodes.length} episode(s) to viewer/content/`);
