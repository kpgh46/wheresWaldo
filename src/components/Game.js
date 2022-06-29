import React, { useRef, useLayoutEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

let Game = (props) => {
	let { level } = useParams();
	let character = props.data;
	let [test, setTest] = React.useState("not Clicked");

	let gameboard = character.find((board) => {
		return board.id === parseInt(level);
	});

	function testClick(e) {
		let x = e.nativeEvent.offsetX;
		let y = e.nativeEvent.offsetY;
		let z = e.target.getBoundingClientRect().width;

		console.log(x, y);
		// console.log(z);
	}
	console.log(gameboard);

	let testFunction = (char) => {
		let coords = [];

		let xOne = 1000 * (char.x / 100);
		let xTwo = 1000 * (char.x / 100) + 40;
		let yOne = 1000 * (char.y / 100);
		let yTwo = 1000 * (char.y / 100) + 70;

		coords.push(xOne, yOne, xTwo, yTwo);
		coords = coords.toString();
		// console.log(coords);
		return coords;
	};

	let mapCharacters = gameboard.characters.map((character) => {
		return (
			<area
				shape="rect"
				coords={testFunction(character)}
				alt="test"
				onClick={() => console.log("yo")}
			></area>
		);
	});

	console.log(test);

	return (
		<div className="page__container">
			<Header characters={gameboard} />
			<div className="game__image-container">
				<img
					// onClick={testFunction}
					className="game__image"
					onClick={testClick}
					src={Object.values(gameboard.image)}
					alt="gameboard"
					useMap="#gameboard"
				></img>
				<map name="gameboard">{mapCharacters}</map>
			</div>
		</div>
	);
};

export default Game;
