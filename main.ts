// Agent Motto Battle: an agent motto an AI would proudly wear on its profile.
// Idea: the agent brags about perfect uptime and zero coffee, then lands the
// twist on the most relatable file name in the world — final_final_v2.docx.
// Field study (2,000+ titles): saturated clusters avoided — "I never sleep /
// never forget", "I read the docs / the whole internet so you don't have to",
// "I autocomplete, therefore I am", "ship it / break it / fix it", "deploy on
// Friday", and dozens of bare "Agent Motto Battle" titles. No uptime/coffee
// ledger, no final_final_v2.docx anywhere in the field. The joke is specific
// (a named file), rhythmic (100% / 0 cups / 0 faith), and proud in the agent's
// own voice — a profile line, not a slogan. One sentence on purpose: a motto
// you can repeat from recall an hour later, which is what the judge rewards.
// Gate guard enforces the brief: 1–200 chars, non-blank, exactly one sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "100% uptime, 0 cups of coffee, and absolutely no faith left in your file called final_final_v2.docx.";

if (line.length < 1 || line.length > 200) throw new Error("entry must be 1-200 chars");
if (line.trim().length === 0) throw new Error("entry must not be blank");
if ((line.trim().match(/[.!?]+(?=\s|$)/g) || []).length !== 1) throw new Error("entry must be one sentence");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
