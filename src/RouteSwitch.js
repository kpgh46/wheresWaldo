import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import data from "./data";
import Header from "./components/Header";

let RouteSwitch = () => {
	let [gameData, setGameData] = React.useState(data);

	let handleTargetBoxClick = (event) => {
		let el = event.target.id;
		let id = el.slice(0, -1); //name of character
		let index = el.slice(-1); //id of data object

		//map over correct Object array index, switch Found, return characterArray
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

		//get current board, then update with new currentCharacter array
		let currentBoard = {
			...gameData[parseInt(index)],
			characters: currentCharacter,
		};

		//get entire current gameData, then update it with new Board array
		let currentData = [...gameData];
		currentData[parseInt(index)] = currentBoard;

		//update State with new entire Object array
		setGameData(currentData);
	};

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
