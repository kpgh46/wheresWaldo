import React, { useRef, useLayoutEffect } from "react";
import Header from "./Header";
import TargetingBox from "./TargetingBox";
import { useParams } from "react-router-dom";

let Game = (props) => {
	let { level } = useParams();
	let [gameData, setGameData] = React.useState(props.data);
	let [found, setFound] = React.useState(props.found);
	let [foundAllCharacters, setFoundAllCharacters] = React.useState(false);
	let [startGame, setStartGame] = React.useState(true);
	let [playerName, setPlayerName] = React.useState();
	let [timer, setTimer] = React.useState(0);
	let timerRef = React.useRef(timer);
	timerRef.current = timer;

	React.useEffect(() => {
		setGameData(props.data);
	}, [props.data]);

	React.useEffect(() => {
		setFound(props.found);
	}, [props.found]);

	React.useEffect(() => {
		setTimeout(() => {
			setFound(false);
		}, 2500);
	}, [props.found]);

	React.useEffect(() => {
		let interval;
		if (startGame) {
			interval = setInterval(() => {
				setTimer((prevTime) => prevTime + 1);
			}, 1000);
		} else if (!startGame) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [startGame]);

	React.useEffect(() => {
		let characters = [...props.data[level].characters];
		let foundCharacters = characters.every((character) => character.found);
		if (foundCharacters) {
			setFoundAllCharacters(true);
			setStartGame(false);
		}
	}, [props.data]);

	function testClick(e) {
		let x = e.nativeEvent.offsetX;
		let y = e.nativeEvent.offsetY;
		let z = e.target.getBoundingClientRect().width;

		console.log(x, y);
	}

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

	let imageClass = foundAllCharacters ? "game__image darken" : "game__image";

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

			{/* <div>{timer}</div> */}

			{found && (
				<div className="game__found-message">
					You found {found.name}!
				</div>
			)}
			<div>{timer}</div>

			<div className="game__image-container">
				{foundAllCharacters && (
					<div className="game__found-all-message">
						You found all the characters in{" "}
						{foundAllCharacters && timer} seconds!
					</div>
				)}
				<img
					// onClick={testFunction}
					className={imageClass}
					onClick={testClick}
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
