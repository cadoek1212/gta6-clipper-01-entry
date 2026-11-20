# GTA 6 IS OUT NOW — Lucia Blows Up the Cops

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/cadoek1212/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/cadoek1212/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01) — a $500 prize pool for the 20 most-watched GTA 6 clips at the deadline.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

One moment, not a montage: **Lucia's bus grenade-launcher escape from Rockstar's official GTA VI Trailer 2** (6 May 2025, fetched straight from Rockstar's own media download).

- **0:00–0:02 — the hook:** the explosion in slow motion. `GTA 6 IS OUT NOW`
- **0:02–0:05 — the escape:** plane-wing jump, night truck chase. `ONE SHOT. TOTAL CHAOS.`
- **0:05–0:08 — the payoff:** Ocean Drive, Vice City. `VICE CITY, BABY!`
- **0:08–0:16 — the pitch:** `Make clips like this with AI and earn money on make.fun` + `make.fun/bounty/gta6-clipper-01`

Vertical 9:16 (1080×1920), 16.5 seconds, a YouTube Short. Cut with ffmpeg in the build session: trimmed from the official trailer, slow-mo on the explosion, center-crop with blur-fill to vertical, burned-in text.

## The video

The Short is published public on YouTube (channel Cadoek). Its description carries, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

…plus the account's play code. `VIDEO.json` holds the video's address:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

## How this repo works

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json`. That is all it has to do — the house reads the video itself through the YouTube Data API, and places go by views at the deadline.

Run it locally the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Never buy views or use bots: an entry whose views were bought or botted is disqualified.
