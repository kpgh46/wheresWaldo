import Level1 from "./assets/gameboards/level-1.jpg";
import Level2 from "./assets/gameboards/level-2.jpg";
import Level3 from "./assets/gameboards/level-3.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		id: 1,
		level: "Level 1",
		difficulty: "easy",
		image: { Level1 },
	},
	{
		id: 2,
		level: "Level 2",
		difficulty: "medium",
		image: { Level2 },
	},
	{
		id: 3,
		level: "Level 3",
		difficulty: "hard",
		image: { Level3 },
	},
];
