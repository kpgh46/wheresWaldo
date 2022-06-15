import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import L1 from "./assets/gameboards/level-1.jpg";
import L2 from "./assets/gameboards/level-2.jpg";
import L3 from "./assets/gameboards/level-3.jpg";

let RouteSwitch = () => {
	let [characters, setCharacters] = React.useState([
		{ name: "waldo", found: false },
		{ name: "wizard", found: false },
		{ name: "wally", found: false },
	]);
	let gameboards = [L1, L2, L3];
	return (
		<div>
			<BrowserRouter>
				<Header characters={characters} />
				<Home gameboards={gameboards} />
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
