import Level1 from "./assets/gameboards/level-1.jpg";
import Level2 from "./assets/gameboards/level-2.jpg";
import Level3 from "./assets/gameboards/level-3.png";
import Level4 from "./assets/gameboards/level-4.png";

import Waldo from "./assets/characters/waldo.jpeg";
import Wally from "./assets/characters/wally.png";
import Wizard from "./assets/characters/wizard.png";
import Wenda from "./assets/characters/wenda.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		id: 0,
		level: "Level 1",
		difficulty: "easy",
		image: { Level1 },
		characters: [
			{ name: "wally", x: 23, y: 35, image: { Wally }, found: false },
			{ name: "waldo", x: 51, y: 34, image: { Waldo }, found: false },
			{ name: "wizard", x: 61, y: 35, image: { Wizard }, found: false },
		],
	},
	{
		id: 1,
		level: "Level 2",

		difficulty: "medium",
		image: { Level2 },
		characters: [
			{ name: "waldo", x: 84, y: 20, image: { Waldo }, found: false },
		],
	},
	{
		id: 2,
		level: "Level 3",
		difficulty: "hard",

		image: { Level3 },
		characters: [
			{ name: "waldo", x: 96, y: 2, image: { Waldo }, found: false },
			{ name: "wally", x: 91, y: 36, image: { Wally }, found: false },
			{ name: "wizard", x: 28, y: 24, image: { Wizard }, found: false },
			{ name: "wenda", x: 27, y: 42, image: { Wenda }, found: false },
		],
	},
	{
		id: 3,
		level: "Level 4",
		difficulty: "hard",

		image: { Level4 },
		characters: [
			{ name: "waldo", x: 79, y: 3, image: { Waldo }, found: false },
			{ name: "wally", x: 3, y: 43, image: { Wally }, found: false },
		],
	},
];
