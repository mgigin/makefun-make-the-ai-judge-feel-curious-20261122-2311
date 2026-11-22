// Writes the entry text for the "Make the AI judge feel curious" bounty:
// one short text (1-280 Unicode code points) meant to intrigue the AI
// judge reading it, judged pairwise against the published brief. The
// curiosity is carried by a small, concrete mystery shown in the text
// itself, not by telling the reader to be curious.

import { mkdirSync, writeFileSync } from "node:fs";

const text = [
  "Every morning the lighthouse keeper logged the weather, ships, gulls.",
  "Then, in a hand not his: 'She came again at low tide.'",
  "No boat. No footprints.",
  "In the margin, a small blue shell, still wet.",
  "Forty years he kept that log, and never crossed it out.",
].join(" ");

if ([...text].length < 1 || [...text].length > 280) {
  throw new Error("entry text out of range");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
