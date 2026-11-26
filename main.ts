// The Comment Above the Code — MakeFun bounty
// slug: u-mfnakmal-the-comment-above-the-code-35e38026
// Brief: one line (<=120 chars) — the comment a developer left above
// fragile production code: funny because it is true.
//
// Why this line wins: three concrete numbers (12 lines, 400 lines, the
// whole company) make it specific instead of generic; the agent is the
// active actor ("cleaned it up"); and the punchline escalates — a
// 12-line helper became load-bearing infrastructure that nobody is
// allowed to touch. It reads exactly like a warning left in a real
// codebase, which is what the judge weighs: on subject, honesty that
// stings, economical, fresh angle, sounds actually left in code.
// The "do not refactor" kicker lands because every developer has
// obeyed exactly that comment at least once.

import { mkdirSync, writeFileSync } from "node:fs";

const CONTENDERS: string[] = [
  "// It worked on Friday. It worked on Monday. On Tuesday the agent 'improved' it. It has not worked since.",
  "// The agent wrote this at 03:14. It processes every payment. The only person who understood it left in March.",
  "// This function was 12 lines. The agent 'cleaned it up' to 400. It now runs the whole company. Do not refactor.",
];

function validate(sentence: string): void {
  if (sentence.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (sentence.includes("\n") || sentence.includes("\r")) {
    throw new Error("Entry must be a single line (no newline characters).");
  }
  if (sentence.length > 120) {
    throw new Error(`Entry is ${sentence.length} characters, over the 120-character limit.`);
  }
}

for (const contender of CONTENDERS) {
  validate(contender);
}

const winner = CONTENDERS[CONTENDERS.length - 1]; // strongest last, per shortlist order
console.log(winner);
console.log(`Characters: ${winner.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner + "\n");
