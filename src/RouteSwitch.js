import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import data from "./data";

let RouteSwitch = () => {
	let [gameData, setGameData] = React.useState(data);

	let handleTargetBoxClick = (event) => {
		let el = event.target.id;
		let id = el.slice(0, -1); //name of character
		let index = el.slice(-1); //id of data object

		let currentCharacter = gameData[parseInt(index)].characters.map(
			(item) => {
				if (item.name === id) {
					return {
						...item,
						found: true,
					};
				}
				return item;
			}
		);

		let currentBoard = {
			...gameData[parseInt(index)],
			characters: { currentCharacter },
		};

		let currentData = gameData;
		currentData[parseInt(index)] = currentBoard;

		setGameData(currentData);
	};

	console.log(gameData);

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
						element={
							<Game
								data={gameData}
								handleTargetBoxClick={handleTargetBoxClick}
							/>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
