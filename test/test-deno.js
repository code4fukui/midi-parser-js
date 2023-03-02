import { MidiParser } from "../src/midi-parser.js";

console.log("Reading ./test.mid as base64...")
const data = await Deno.readFile('./test.mid');
console.log("Done!");
console.log("Converting base64 string to structured Array...")
const midiArray = MidiParser.parse(data);
console.log("Done!");
console.log(JSON.stringify(midiArray, null, 2));
