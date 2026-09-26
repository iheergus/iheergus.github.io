# Thai tutorial narration

These 22 MP3 files ship with the game. Playback uses HTML audio; no installed Thai
system voice, API key, runtime synthesis service, or third-party connection is required.
Only the player's normal game host serves the files.

Voice: th-TH-NiwatNeural, rate -8%. The scripts in `script.json` are written for this
game. `manifest.json` records durations, byte sizes and SHA-256 hashes.

Generation: `scripts/generate-tutorial-voice.py` using
[edge-tts](https://github.com/rany2/edge-tts), with verified system certificate trust.
Generation sends only the public tutorial script. The generator is an optional build
tool and its Python dependencies are not included in the browser bundle.

Verification: `tests/tutorial-voice.cjs` checks the files and playback controls with
speech synthesis absent. `scripts/verify-tutorial-voice.py` decodes all clips, checks
audible signal, confirms localhost audio responses, and compares the production copies.
