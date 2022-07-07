import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import data from "./data";
import Header from "./components/Header";
import { Link } from "react-router-dom";

let RouteSwitch = () => {
	let [gameData, setGameData] = React.useState(data);
	let [leaderboard, setLeaderboard] = React.useState([
		{ level: 1, name: "Kevin", time: 3 },
		{ level: 1, name: "Erin", time: 13 },
		{ level: 2, name: "Annabelle", time: 5 },
		{ level: 3, name: "Ava", time: 7 },
		{ level: 3, name: "Grace", time: 10 },
		{ level: 4, name: "Faven", time: 11 },
		{ level: 4, name: "Layla", time: 12 },
	]);
	let [showBox, setShowBox] = React.useState(true);
	let [top, setTop] = React.useState(0);
	let [left, setLeft] = React.useState(0);
	let [found, setFound] = React.useState("");

	let handleTargetBoxClick = (event) => {
		let el = event.target.id;
		let id = el.slice(0, -1); //name of character
		let index = el.slice(-1); //id of data object

		setFound({ found: true, name: id });

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

	let clickSubmitScore = (event) => {
		let name = document.getElementById("name").value;
		let level = parseInt(event.target.id);
		let time = parseInt(event.target.dataset.id);

		let newScore = { level: level + 1, name: name, time: time };

		setLeaderboard((previousData) => {
			return [...previousData, newScore];
		});

		event.target.parentElement.innerHTML = `Thank you for your submission! Please click Home button`;

		setGameData(data);
		setFound();
	};

	console.log(leaderboard, "route");
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
								found={found}
								clickSubmitScore={clickSubmitScore}
							/>
						}
					></Route>

					<Route
						path="/leaderboard"
						element={<Leaderboard data={leaderboard} />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
