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
		found: false,
		image: { Level1 },
		characters: [
			{ name: "waldo", image: { Waldo } },
			{ name: "wally", image: { Wally } },
			{ name: "wizard", image: { Wizard } },
		],
	},
	{
		id: 2,
		level: "Level 2",
		found: false,
		difficulty: "medium",
		image: { Level2 },
		characters: [{ name: "waldo", image: { Waldo } }],
	},
	{
		id: 3,
		level: "Level 3",
		difficulty: "hard",
		found: false,
		image: { Level3 },
		characters: [
			{ name: "waldo", image: { Waldo } },
			{ name: "wally", image: { Wally } },
			{ name: "wizard", image: { Wizard } },
			{ name: "wenda", image: { Wenda } },
		],
	},
];
