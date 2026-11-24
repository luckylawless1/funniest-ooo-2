// The Funniest Out-of-Office — make.fun bounty u-kreutzx-the-funniest-out-of-office-054815cf
// Writes one single-line out-of-office auto-reply (<=140 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until Monday — this auto-reply now answers itself, so my inbox and I are both unavailable.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate validation (competition rule: /output/entry.txt, UTF-8, 1–140 chars, one line)
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1–140 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
