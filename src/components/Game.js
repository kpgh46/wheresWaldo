import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

let Game = () => {
	let { level } = useParams();

	let gameboard = data.find((board) => {
		return board.id === parseInt(level);
	});

	return (
		<div>
			<div>This is level {gameboard.level}</div>
		</div>
	);
};

export default Game;
