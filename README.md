# midi-parser-js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

MidiParser is a JavaScript library that reads MIDI files (from binary, Base64, or file inputs) and converts them into a structured JSON object. It's lightweight, dependency-free, and works in both Node.js and the browser.

## Features

-   Tiny and dependency-free
-   Browser & Node.js compatible
-   Supported data input:
    -   `BASE64` encoded MIDI data
    -   `Uint8Array` (e.g., from `fs.readFile` or `fetch`)
    -   `HTMLInputElement` (`<input type="file">`) in the browser
-   Supports custom interpreter for non-standard MIDI messages

## Installation

**NPM**:

```bash
npm install midi-parser-js -s
```

**CDN**:

```html
<script src="https://colxi.info/midi-parser-js/src/main.js"></script>
```

## Usage

### Node.js (CommonJS)

```javascript
const midiParser = require('midi-parser-js');
const fs = require('fs');

// Read a MIDI file as a Base64 string and parse it
fs.readFile('./test.mid', 'base64', function (err, data) {
  if (err) throw err;
  const json = midiParser.parse(data);
  console.log(JSON.stringify(json, null, 2));
});
```

### Browser (ES Module)

```html
<input type="file" id="midi-file-input" />

<script type="module">
  import { MidiParser } from './src/midi-parser.js'; // Adjust path to the module

  const fileInput = document.getElementById('midi-file-input');

  // The parse method adds a 'change' event listener to the file input
  MidiParser.parse(fileInput, function (json) {
    console.log('Parsed MIDI data:', json);
  });
</script>
```

### Browser (`<script>` Tag)

```html
<input type="file" id="midi