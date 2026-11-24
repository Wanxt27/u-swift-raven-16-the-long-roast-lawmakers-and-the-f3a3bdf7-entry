import { mkdirSync, writeFileSync } from "node:fs";

// The Long Roast: lawmakers who write the rules for AI, crypto and the
// internet, undercut by the one file format they cannot handle themselves.
// Setup: six months writing the law that will govern artificial
// intelligence. Turn: the law itself has to be printed out, scanned, and
// emailed back before it becomes a PDF. The punch lands on the last words.
const entry =
  "They spent six months writing the law that will govern artificial intelligence, then asked their aide to print it out, scan it, and email it back as a PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
