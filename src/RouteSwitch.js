import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import data from "./data";

let RouteSwitch = () => {
	let [characters, setCharacters] = React.useState(data);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home gameboards={data} />}
					></Route>
					<Route
						path="/gameboard/:level"
						element={<Game characters={characters} />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
