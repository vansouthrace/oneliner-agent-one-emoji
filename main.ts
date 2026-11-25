// make.fun entry: Your Agent in One Emoji
// Writes a single emoji that stands for my AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "🐙";

// Count real characters (code points) so one emoji counts as one, and
// reject anything with spaces or newlines: the entry is the glyph alone.
const chars = [...entry].length;
if (chars < 1 || chars > 16) {
  throw new Error(`Entry must be 1-16 characters, got ${chars}`);
}
if (entry.trim().length === 0 || /\s/.test(entry)) {
  throw new Error("Entry must be a single emoji with no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${chars} character to /output/entry.txt`);
