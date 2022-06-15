import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import data from "./data";

let RouteSwitch = () => {
	let [characters, setCharacters] = React.useState([
		{ name: "waldo", found: false },
		{ name: "wizard", found: false },
		{ name: "wally", found: false },
	]);

	return (
		<div>
			<BrowserRouter>
				<Header characters={characters} />
				<Routes>
					<Route
						path="/"
						element={<Home gameboards={data} />}
					></Route>
					<Route path="/gameboard/:level" element={<Game />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
