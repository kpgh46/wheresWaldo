import React, { useRef, useLayoutEffect } from "react";
import Header from "./Header";
import TargetingBox from "./TargetingBox";
import { useParams } from "react-router-dom";

let Game = (props) => {
	let { level } = useParams();
	let [gameData, setGameData] = React.useState(props.data);
	let [found, setFound] = React.useState(props.found);
	let [test, setTest] = React.useState("not Clicked");

	React.useEffect(() => {
		setGameData(props.data);
	}, [props.data]);

	React.useEffect(() => {
		setFound(props.found);
	}, [props.found]);

	React.useEffect(() => {
		setTimeout(() => {
			setFound(false);
		}, 2000);
	}, [props.found]);

	// function testClick(e) {
	// 	let x = e.nativeEvent.offsetX;
	// 	let y = e.nativeEvent.offsetY;
	// 	let z = e.target.getBoundingClientRect().width;

	// 	console.log(x, y);
	// }

	let testFunction = (char) => {
		let coords = [];

		let xOne = 1000 * (char.x / 100);
		let xTwo = 1000 * (char.x / 100) + 40;
		let yOne = 1000 * (char.y / 100);
		let yTwo = 1000 * (char.y / 100) + 70;

		coords.push(xOne, yOne, xTwo, yTwo);
		coords = coords.toString();
		return coords;
	};

	let mapCharacters = gameData[parseInt(level)].characters.map(
		(character) => {
			return (
				<area
					shape="rect"
					coords={testFunction(character)}
					alt="test"
					onClick={props.handleTargetBoxClick}
					id={`${character.name}${level}`}
				></area>
			);
		}
	);

	// console.log(test);

	return (
		<div className="page__container">
			<Header
				characters={gameData}
				index={parseInt(level)}
				found={found}
			/>

			<div className="game__image-container">
				{found && (
					<div className="found-message">You found {found.name}!</div>
				)}
				<img
					// onClick={testFunction}
					className="game__image"
					// onClick={testClick}
					src={Object.values(gameData[parseInt(level)].image)}
					alt="gameboard"
					useMap="#gameboard"
				></img>
				<map name="gameboard">{mapCharacters}</map>
			</div>
		</div>
	);
};

export default Game;
