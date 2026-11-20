// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a YouTube Short: one GTA 6 moment (Lucia's bus
// grenade-launcher escape from Rockstar's official Trailer 2), cut vertical
// with ffmpeg in the build session, with make.fun's pitch burned in after
// the hook. This program does the only job the house asks of the repo: hand
// VIDEO.json over to the grader by copying it to the output directory.
//
// It copies the raw bytes, never re-serializes, so the two graded runs
// always write identical bytes. It refuses to run when VIDEO.json is
// missing or is not a JSON object with a string "url", so a bad file fails
// loudly here instead of silently passing an empty output along.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outputDir, 'VIDEO.json');

if (!existsSync(sourcePath)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

const raw = readFileSync(sourcePath);

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  Array.isArray(parsed) ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('VIDEO.json must be an object with a string "url" field');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, raw);
