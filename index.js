const scribble = require('scribbletune');
const dist = 'dist/';

// https://www.gametabs.net/nes/super-mario-brothers/overworld-main-theme/archard
// http://www.mariopiano.com/mario-sheet-music-overworld-main-theme.html

let overworldNotes = [
    'e5', 'e5', 'e5', 'c4', 'e5', 'g5', 'g4', 'c4',
    'g4', 'e4', 'a4', 'b4', 'a#4', 'a4', 'g4', 'e5',
    'g5', 'a6', 'f5', 'g5', 'e5', 'c4', 'd4', 'b4',
    'c4', 'g4', 'e4', 'a4', 'b4', 'a#4', 'a4', 'g4',
    'e5', 'g5', 'a6', 'f5', 'g5', 'e5', 'c4', 'd4',
    'b4', 'g5', 'f#5', 'f5', 'd#4', 'e5', 'g4', 'a5'
];

let overworldPattern =
    '--------' +
    'x-x-x-x-x-x-x-x-' +
    'x-x-x-x-x-x-x-x-' +
    'x-x-x-x-x-x-x-x-' +
    'x-x-x-x-x-x-x-x-' +
    'x-x-x-x-x-x-x-x-' +
    'x-x-x-x-x-x-x-x-';

let overworld = scribble.clip({
    notes: overworldNotes,
	pattern: overworldPattern,
});

scribble.midi(overworld, dist + 'overworld.mid');
