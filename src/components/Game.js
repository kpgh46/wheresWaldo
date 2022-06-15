import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

let Game = (props) => {
	let { level } = useParams();
	let character = props.characters;

	let gameboard = character.find((board) => {
		return board.id === parseInt(level);
	});

	return (
		<div>
			<Header characters={character} />
			<img src={Object.values(gameboard.image)} alt="gameboard"></img>
			<div>This is level {gameboard.level}</div>
		</div>
	);
};

export default Game;
