# midi-parser-js

MidiParserは、MIDIファイル（バイナリ、Base64、またはファイル入力から）を読み込み、構造化されたJSONオブジェクトに変換するJavaScriptライブラリです。軽量で依存関係がなく、Node.jsとブラウザの両方で動作します。

## 機能

- 軽量で依存関係なし
- ブラウザおよびNode.js対応
- サポートされるデータ入力:
    - `BASE64` エンコードされたMIDIデータ
    - `Uint8Array`（例: `fs.readFile` や `fetch` から取得）
    - ブラウザでの `HTMLInputElement`（`<input type="file">`）
- 非標準MIDIメッセージ用のカスタムインタープリタをサポート

## インストール

**NPM**:

```bash
npm install midi-parser-js -s
```

**CDN**:

```html
<script src="https://colxi.info/midi-parser-js/src/main.js"></script>
```

## 使い方

### Node.js (CommonJS)

```javascript
const midiParser = require('midi-parser-js');
const fs = require('fs');

// Base64文字列としてMIDIファイルを読み込み、解析する
fs.readFile('./test.mid', 'base64', function (err, data) {
  if (err) throw err;
  const json = midiParser.parse(data);
  console.log(JSON.stringify(json, null, 2));
});
```

### ブラウザ (ES Module)

```html
<input type="file" id="midi-file-input" />

<script type="module">
  import { MidiParser } from './src/midi-parser.js'; // モジュールへのパスを調整

  const fileInput = document.getElementById('midi-file-input');

  // parseメソッドはファイル入力に'change'イベントリスナーを追加します
  MidiParser.parse(fileInput, function (json) {
    console.log('解析されたMIDIデータ:', json);
  });
</script>
```

### ブラウザ (`<script>` タグ)

```html
<input type="file" id="midi
