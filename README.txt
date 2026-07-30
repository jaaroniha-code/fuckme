KEYLOCK — VOCAL PITCH GAME

WHAT IT DOES
- Target Notes: randomly chooses notes from your selected key and listens until you sing and hold the exact note.
- Free Sing: listens for 30 seconds and reports what percentage of stable detected notes belong to the selected key.
- Shows the detected note, frequency, cents flat/sharp, mic level, pitch clarity, score, streak, history, XP, and saved best progress.
- Audio is processed locally in the browser. It is not uploaded or recorded.

FASTEST WAY ON A COMPUTER
1. Install Node.js if it is not already installed.
2. Open Terminal / Command Prompt inside this folder.
3. Run:
   node server.js
4. Open:
   http://localhost:8787
5. Allow microphone access.

PHONE / IPHONE
Mobile browsers require the page to be served through HTTPS before microphone access is allowed reliably.
Upload index.html to an HTTPS host such as GitHub Pages, Netlify, or Vercel, then open that link in Safari.
Opening the raw HTML file directly from the Files app may block microphone permission.

TIPS
- Use a sustained vowel such as “ah” or “oo.”
- Keep the phone or microphone a consistent distance from your mouth.
- Use headphones when pressing Hear Target so the reference tone does not leak into the microphone.
- Normal difficulty accepts ±30 cents and requires a 0.75-second hold.
- Free Sing checks scale membership. It does not judge whether a note fits a specific chord at that exact moment.


HEALTHY ATTEMPT
- Target Notes judges how the note was reached and held, not only whether it was correct.
- It can flag shaky holds, consistently flat or sharp pitch centers, sliding into the note, and possible pushing.
- The pushing warning is an audio-based clue, not a medical diagnosis. Stop if singing hurts.


KEYLOCK V2 FEATURES
- Adjustable microphone sensitivity with room auto-calibration.
- Open Song Analysis estimates likely major, minor, modal, harmonic-minor, and pentatonic scales.
- Live scale candidates, confidence, notes used, outside notes, vocal range, and melody contour.
- Final report includes estimated scale, range, average cents offset, longest stable note, and mic level.
- Sing With Your Song mode accepts an audio file, analyzes its strongest pitched line, and compares live singing against it.
- Full-song comparison is experimental. It works best with isolated vocals and headphones; dense mixes may produce the wrong reference pitch.


OPEN NOTE DETECTOR
- Runs indefinitely until Stop Listening is pressed.
- Has no target note, timer, score, XP result, or automatic ending.
- Continuously displays the current note, frequency, cents flat/sharp, mic level, and clarity.
- Tracks recent notes, highest and lowest notes, and a scrolling melody graph.
- Includes Reset History without stopping the microphone.
- Likely-scale estimation can be switched on or off.


GUESS THE NOTE
- Plays one note or a sequence of 2–4 notes and asks the player to identify them in order.
- Uses the selected key, scale, pitch range, and difficulty.
- Supports 5, 10, or 20 sequences per run.
- Answer choices can be note names only or exact note plus octave.
- Playback speed can be slow, normal, or fast.
- Hear Again, Undo, partial-note scoring, sequence streaks, XP, and a final accuracy report are included.
- This mode uses audio playback only and does not request microphone permission.


CUSTOM NOTE POOL
- Guess the Note can use all notes in the selected scale or only specifically chosen note names.
- Examples: C only, C and D only, or any other combination available in the chosen key and scale.
- A one-note pool repeats automatically across the sequence.
- Repeated notes can be enabled or disabled for larger pools.
- Exact-octave answers include matching octaves inside the selected voice range.
- The scale selector includes a larger library of major/minor scales, modes, pentatonic and blues scales, symmetrical scales, bebop scales, and several additional scale patterns.


VOCAL TRAINING LAB
- Vocal Builder captures the MIDI note of any pitched vocal sound, then trains the same sound on nearby notes.
- Target Note Trainer, interactive MIDI Piano, Pitch Ladder, Interval Trainer, Melody Copy, Pitch Memory, Pitch Correction Coach, Range Builder, Scale Builder, Chord Builder, Relative Pitch, Absolute Pitch, and Singing Accuracy Replay are included.
- Every exercise follows the selected key, scale, range, accuracy, and optional custom note pool where applicable.
- The correction coach analyzes average flat/sharp center, sliding, overshooting, wobble, wide pitch movement, and slow landings.
- A replay graph shows the target pitch and the detected vocal pitch after every completed note.


SCALE PIANO
- Found inside Vocal Training Lab.
- Presents a starting piano note and asks for the immediately following note in the selected scale.
- Supports ascending, descending, alternating, and random directions.
- Uses every key and every scale available in the game.
- The current key is outlined, the correct answer turns green, and an incorrect choice turns red.
- Gives a written explanation of each transition.
- Scores first-choice accuracy, streak, XP, and final results.
- Uses audio playback only; microphone permission is not required.


V8 — PHYSICAL MIDI KEYBOARD INTEGRATION
- Connects to USB or Bluetooth MIDI input through the browser Web MIDI API.
- Selectable MIDI input, live note/velocity display, in-scale feedback, optional piano sound, and MIDI-answer toggle.
- Physical MIDI keys answer Guess the Note.
- Scale Piano accepts the on-screen piano or a connected MIDI controller.
- Interactive MIDI Piano accepts a physical key as the vocal target.
- Absolute Pitch can use a physical key as the note-name answer.
- MIDI Scale Run: play the complete selected scale.
- MIDI Scale Degree: play requested degrees such as the third, fifth, or seventh.
- MIDI Interval: hear a starting note and play the chosen interval.
- MIDI Melody Copy: hear a scale-based melody and play it back.
- MIDI Chord Builder: play all chord tones together or in any order.
- MIDI exercises share the existing key, scale, range, direction, sequence length, note pool, chord, interval, round, score, streak, XP, and piano systems.
- The on-screen piano remains available when no physical controller is connected.
- Web MIDI generally requires Chrome, Edge, or Opera on HTTPS or localhost.


V9 — STRICT MIDI SCALE PRACTICE
- Adds a separate top-level Strict MIDI Scale Practice mode.
- Requires a connected physical MIDI keyboard; on-screen piano clicks cannot answer this mode.
- Uses the globally selected key and scale.
- Lets the player choose starting octave, ascending/descending/up-and-down direction, and number of successful levels.
- Shows the entire exact scale path with note names and octaves.
- A single incorrect MIDI key instantly fails the current level.
- Failed levels must restart from the tonic; progress within the failed level is discarded.
- Correct levels advance only after every exact MIDI note and octave is played in order.
- Adds a dedicated detected-octave readout in setup and during gameplay.
- Octave detection is inferred from the actual MIDI note transmitted by the controller.


V10 — LEARNABLE MIDI RESTART / NEXT CONTROL
- Adds a Learn MIDI Control button to Strict MIDI Scale Practice settings.
- Press Learn, then press one controller button, drum pad, transport control, or spare MIDI piano key.
- The learned control is saved in localStorage and restored when the game is opened again.
- Supports MIDI Note On, Control Change (CC), Program Change, and standard Start/Continue/Stop real-time transport messages.
- After a failed strict level, the mapped control restarts the level.
- After a completed strict level, the mapped control starts the next level or opens results after the final level.
- While a strict level is actively being played, the mapped control is reserved and ignored so it cannot accidentally fail the scale.
- A live monitor shows the latest detectable control message.
- Some DAW-specific transport buttons may send MMC SysEx or no browser-visible MIDI message; those controls cannot be learned with standard Web MIDI access.


V11 — INFINITE STRICT LEVELS + MIDI SCALE MEMORY CHALLENGE
- Strict MIDI Scale Practice now includes an Infinite Practice option under Levels to Complete.
- Infinite mode continues until End Practice is pressed.
- Adds a separate top-level MIDI Scale Memory Challenge.
- Each memory level requires a displayed guided pass followed by a hidden memory pass.
- During the hidden pass, the sequence and on-screen piano disappear.
- One wrong MIDI note in either pass fails the entire level.
- A failure in the hidden pass restarts from the displayed pass.
- The learned MIDI control can begin the memory pass, restart, and advance.
- Memory Challenge also supports finite or infinite levels.
- Fixed strict-scale result handling so it runs through the normal results screen.


V12 — MIDI SCALE ENDURANCE
- Adds a separate top-level MIDI Scale Endurance mode.
- Requires a connected physical MIDI keyboard.
- Uses the globally selected key and scale.
- Supports a chosen starting octave and ascending loops, descending loops, or continuous up-and-down practice.
- The timer begins on the first correct MIDI note.
- The scale pattern repeats indefinitely while every exact note and octave remains correct.
- One incorrect MIDI key immediately freezes the timer and ends the current run.
- Displays live elapsed time, correct-note count, completed scale loops, and the best time.
- Start New Run allows repeated attempts without leaving the mode.
- The previously learned MIDI restart control also starts a new run after a mistake.
- Personal records are saved separately for each key, scale, octave, and direction.
- End Practice shows the best run from the session, correct notes, loops, attempt count, XP, and saved personal best.


V13 — MOBILE TOUCH PIANO
- Adds a separate Mobile Touch Piano free-play mode that needs no microphone or external MIDI controller.
- Adds a global Piano Input selector: Auto, Physical MIDI only, or Touchscreen piano.
- Auto uses an already connected MIDI controller when available and otherwise falls back to the touchscreen piano.
- The touchscreen piano can answer Guess the Note and all MIDI-only Lab exercises.
- Strict Scale Practice, Scale Memory Challenge, and Scale Endurance can now be played with the touchscreen piano instead of physical MIDI.
- Includes every chromatic note in the visible range, live Octave - / + controls, one- or two-octave views, exact note/octave/MIDI readouts, note labels, scale highlighting, and root-note highlighting.
- Supports multi-touch chords, sustain, Stop Notes, and an expanded piano layout for phones and tablets.
- Two-octave keyboards can scroll horizontally on small screens.
- Scale challenges automatically align the touchscreen piano to the selected starting octave.
- During the hidden Scale Memory pass, note labels, scale shading, and expected-note highlighting are removed while the playable piano remains available.
- Mobile Touch Piano free play reports notes played, unique notes, range, largest detected chord, session duration, and XP.
- Touch-piano preferences are saved locally in the browser.

FULL PROJECT — LOCAL SERVER FILES

FILES
- index.html: The complete KeyLock V13 game.
- server.js: A dependency-free local web server.
- package.json: Node project information and the npm start command.
- README.txt: Setup and feature instructions.

RUN ON A COMPUTER
1. Install Node.js 18 or newer.
2. Extract this ZIP.
3. Open Terminal, Command Prompt, or PowerShell inside the extracted folder.
4. Run:
   npm start

   You can also run:
   node server.js
5. Open:
   http://localhost:8787
6. Allow microphone or MIDI access when the browser asks.

No npm packages need to be installed. The server uses only features built into Node.js.

MOBILE TOUCH PIANO
- For the touchscreen piano alone, upload index.html to an HTTPS static host and open the hosted link on the phone.
- GitHub Pages, Netlify, Vercel, and similar HTTPS hosts can serve this project.
- iPhone Safari can use the touchscreen piano, but normal Safari does not provide Web MIDI access to a physical MIDI controller.
- The Touchscreen Piano input option replaces physical MIDI for compatible exercises.

OPTIONAL SERVER SETTINGS
- Change the port:
  PORT=9000 npm start
- The server listens only on this computer by default.
- To expose it to other devices on the same network:
  HOST=0.0.0.0 npm start

A phone opening the computer's local-network HTTP address may have browser restrictions for microphone or MIDI permissions. HTTPS hosting is the reliable mobile option.

V14 — MOBILE PIANO POSITION SLIDER
- Replaces reliance on the cramped native mobile scrollbar with a large custom Move Keyboard slider.
- The slider sits well below the piano keys, reducing accidental note presses.
- The slider thumb has a much larger mobile touch target.
- The slider and keyboard position stay synchronized in both directions.
- The mobile browser's tiny native horizontal scrollbar is hidden.
- The control automatically disables when the entire piano already fits on screen.
- Left, right, and percentage position feedback is displayed beside the slider.

V15 — MOBILE TOUCH PIANO MODE LAUNCH FIX
- Tapping the Mobile Touch Piano mode card now opens the piano immediately.
- The mode no longer requires a second tap on the main Start button.
- Adds a dedicated Open Mobile Touch Piano button as a fallback.
- Adds a launch guard to prevent rapid double taps from opening multiple sessions.
- Startup validation and error paths now properly release the launch guard.

