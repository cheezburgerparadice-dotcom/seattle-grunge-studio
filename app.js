const moodMaps = {
  rage: {
    setup: [
      "Static in the walls",
      "Hammering through the dark",
      "Spit in the wire",
      "Burning under a dead sky"
    ],
    verbs: ["shatter", "cut", "break", "crawl", "swell", "flood", "choke", "drag"],
    nouns: ["the room", "the noise", "the wire", "the town", "the ache", "the smoke", "my name", "the grave"],
    endings: [
      "I won't go down",
      "I'm still breathing",
      "I remember the spark",
      "nothing left to lose",
      "turn it inside out",
      "I can feel the heat"
    ]
  },
  melancholy: {
    setup: [
      "Rain under the door",
      "Dust on the bedframe",
      "Static between us",
      "A cold light in the hallway"
    ],
    verbs: ["linger", "break", "whisper", "fade", "lose", "wither", "drift", "hold"],
    nouns: ["the silence", "the old tape", "the empty room", "the train", "the bruise", "the floorboards", "your shadow", "the night"],
    endings: [
      "I still hear the echo",
      "the dark keeps closing",
      "I'm losing the shape",
      "the world is split open",
      "nothing moves but me",
      "the last note stays"
    ]
  },
  suffocation: {
    setup: [
      "Concrete in my lungs",
      "Heat behind the teeth",
      "The air tastes like rust",
      "Panic under the skin"
    ],
    verbs: ["claw", "tighten", "scratch", "squeeze", "collapse", "drag", "smother", "pin"],
    nouns: ["my throat", "the ceiling", "the heart", "the city", "the lock", "the room", "my hands", "the page"],
    endings: [
      "I can't breathe",
      "there is no exit",
      "I feel the pressure",
      "the walls close in",
      "the sky turns black",
      "nothing holds"
    ]
  },
  drunk: {
    setup: [
      "A neon crawl through the alley",
      "Mouthful of broken glass",
      "The speakers hum in my veins",
      "The room spins off the rails"
    ],
    verbs: ["stumble", "glow", "taste", "fall", "bleed", "choke", "drift", "flicker"],
    nouns: ["the highway", "the liquor", "the smoke", "the siren", "the gutter", "the fury", "the teeth", "the night"],
    endings: [
      "I wanna burn louder",
      "I feel alive for a second",
      "the whole world is a blur",
      "I keep racing the dark",
      "the song won't end",
      "I chase the spark"
    ]
  },
  rebellion: {
    setup: [
      "A boot in the door",
      "A match in the rain",
      "A knife in the wire",
      "A fist through the frame"
    ],
    verbs: ["break", "tear", "twist", "scar", "kick", "throw", "cut", "drag"],
    nouns: ["the system", "the silence", "the lock", "the glass", "the chain", "the road", "the crowd", "the wall"],
    endings: [
      "we are not afraid",
      "we can still fight",
      "we just keep coming back",
      "the fire won't die",
      "we cut the wire",
      "the noise is ours"
    ]
  }
};

const keyProgressions = {
  E: ["E5", "A5", "B5", "C#m5", "A5", "B5", "E5", "B5"],
  A: ["A5", "D5", "E5", "F#m5", "D5", "E5", "A5", "E5"],
  D: ["D5", "A5", "Bm5", "G5", "A5", "G5", "D5", "A5"],
  G: ["G5", "C5", "D5", "Em5", "C5", "D5", "G5", "D5"],
  C: ["C5", "G5", "Am5", "F5", "G5", "F5", "C5", "G5"]
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateLyrics() {
  const mood = document.getElementById("mood").value;
  const key = document.getElementById("key").value;
  const hook = document.getElementById("hook").value.trim() || "hold the line";
  const intensity = Number(document.getElementById("intensity").value);
  const tempo = Number(document.getElementById("tempo").value);
  const pattern = moodMaps[mood];

  const verseA = [
    `${pick(pattern.setup)} ${pick(pattern.verbs)} ${pick(pattern.nouns)}.`,
    `${pick(pattern.setup)} and the room is shaking.`,
    `${pick(pattern.setup)} ${pick(pattern.verbs)} through the static.`,
    `I can hear ${pick(pattern.nouns)} screaming under the floor.`
  ];

  const verseB = [
    `My hands are full of ${pick(pattern.nouns)} and old mistakes.`,
    `The light keeps ${pick(pattern.verbs)} when the walls fall silent.`,
    `Nobody knows the shape of this ${pick(pattern.nouns)}.`,
    `${pick(pattern.setup)} and the noise won't leave me alone.`
  ];

  const chorus = [
    `(${key}) ${hook.toUpperCase()}`,
    `I feel the heat, I feel the break, I feel it split and bloom.`,
    `No clean exit, no soft hands, just pressure in the room.`,
    `You call it love, I call it smoke, I call it black in bloom.`,
    `${hook.toUpperCase()} — we keep breathing through the wreckage.`
  ];

  const bridge = [
    `Crack the glass, break the chain, let the machine fail.`,
    `Nothing pretty left, just the truth in the wire.`,
    `We are the sound under the dust and the fear.`,
    `This is the shape of the night when the world turns mean.`
  ];

  const lyricText = [
    "Verse 1",
    verseA.join("\n"),
    "",
    "Verse 2",
    verseB.join("\n"),
    "",
    "Chorus",
    chorus.join("\n"),
    "",
    "Bridge",
    bridge.join("\n"),
    "",
    "Final Chorus",
    chorus.join("\n"),
    "",
    "Outro",
    `${hook.toUpperCase()} — ${pick(pattern.endings)}`
  ].join("\n");

  return { lyrics: lyricText, key, intensity, tempo };
}

function generateChordProgression(keyName) {
  return keyProgressions[keyName] || keyProgressions.E;
}

function generateTab(chords, intensity, keyName) {
  const chordMap = {
    E5: "0---0---0---0",
    A5: "5---5---5---5",
    B5: "7---7---7---7",
    C5: "8---8---8---8",
    D5: "10--10--10--10",
    G5: "12--12--12--12",
    F5: "13--13--13--13",
    Em5: "0---2---2---0",
    Am5: "5---7---7---5",
    Bm5: "7---9---9---7",
    C#m5: "9---11---11---9"
  };

  const lines = [];
  const progression = chords.slice(0, 8);

  progression.forEach((chord, index) => {
    lines.push(`| ${chordMap[chord] || "0---0---0---0"} | ${index + 1} ${chord} |`);
  });

  const lead = [
    "e|----------------------|",
    "B|----------------------|",
    "G|----------------------|",
    "D|--5-7-8-7-5-3-2-0----|",
    "A|----------------------|",
    "E|----------------------|"
  ];

  if (intensity >= 8) {
    return [
      `${keyName} power-chord riff`,
      "",
      ...lead,
      "",
      "Rhythm: tight downstrokes, low-gain fuzz, palm-muted breaks.",
      "",
      ...lines
    ].join("\n");
  }

  return [
    `${keyName} power-chord riff`,
    "",
    ...lines,
    "",
    "Rhythm: chunky open strums, distorted attack, heavy reverb tails."
  ].join("\n");
}

function renderOutput() {
  const data = generateLyrics();
  const chords = generateChordProgression(data.key);
  const tab = generateTab(chords, data.intensity, data.key);

  document.getElementById("lyricsOutput").textContent = data.lyrics;
  document.getElementById("tabOutput").textContent = tab;
}

function randomizeControls() {
  const moodOptions = Object.keys(moodMaps);
  const keyOptions = ["E", "A", "D", "G", "C"];
  const hooks = [
    "hold the line",
    "burn it down",
    "taste the static",
    "cut the wire",
    "we keep breathing",
    "fear the blackout"
  ];

  document.getElementById("mood").value = moodOptions[Math.floor(Math.random() * moodOptions.length)];
  document.getElementById("key").value = keyOptions[Math.floor(Math.random() * keyOptions.length)];
  document.getElementById("intensity").value = String(Math.floor(Math.random() * 9) + 2);
  document.getElementById("tempo").value = String([70, 90, 110, 130, 150][Math.floor(Math.random() * 5)]);
  document.getElementById("hook").value = hooks[Math.floor(Math.random() * hooks.length)];
  renderOutput();
}

function copyOutput() {
  const lyrics = document.getElementById("lyricsOutput").textContent;
  const tab = document.getElementById("tabOutput").textContent;
  const text = `LYRICS\n${lyrics}\n\nGUITAR\n${tab}`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      const button = document.getElementById("copyBtn");
      const original = button.textContent;
      button.textContent = "Copied!";
      setTimeout(() => (button.textContent = original), 1200);
    })
    .catch(() => {
      alert("Copy failed. Please try again.");
    });
}

function downloadOutput() {
  const lyrics = document.getElementById("lyricsOutput").textContent;
  const tab = document.getElementById("tabOutput").textContent;
  const blob = new Blob([`LYRICS\n${lyrics}\n\nGUITAR\n${tab}`], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "grunge-studio-draft.txt";
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById("generateBtn").addEventListener("click", renderOutput);
document.getElementById("randomizeBtn").addEventListener("click", randomizeControls);
document.getElementById("copyBtn").addEventListener("click", copyOutput);
document.getElementById("downloadBtn").addEventListener("click", downloadOutput);

renderOutput();
