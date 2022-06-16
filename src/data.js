import Level1 from "./assets/gameboards/level-1.jpg";
import Level2 from "./assets/gameboards/level-2.jpg";
import Level3 from "./assets/gameboards/level-3.jpg";
import Waldo from "./assets/characters/waldo.jpeg";
import Wally from "./assets/characters/wally.png";
import Wizard from "./assets/characters/wizard.png";
import Wenda from "./assets/characters/wenda.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		id: 1,
		level: "Level 1",
		difficulty: "easy",
		image: { Level1 },
		characters: [
			{ name: "waldo", image: { Waldo }, found: true },
			{ name: "wally", image: { Wally }, found: false },
			{ name: "wizard", image: { Wizard }, found: false },
		],
	},
	{
		id: 2,
		level: "Level 2",

		difficulty: "medium",
		image: { Level2 },
		characters: [{ name: "waldo", image: { Waldo }, found: false }],
	},
	{
		id: 3,
		level: "Level 3",
		difficulty: "hard",

		image: { Level3 },
		characters: [
			{ name: "waldo", image: { Waldo }, found: false },
			{ name: "wally", image: { Wally }, found: true },
			{ name: "wizard", image: { Wizard }, found: false },
			{ name: "wenda", image: { Wenda }, found: false },
		],
	},
];
