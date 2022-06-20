import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

let Game = (props) => {
	let { level } = useParams();
	let character = props.data;
	let [test, setTest] = React.useState("not Clicked");

	let gameboard = character.find((board) => {
		return board.id === parseInt(level);
	});

	let testClick = (e) => {
		let x = e.nativeEvent.offsetX;
		let y = e.nativeEvent.offsetY;
		let z = e.target.getBoundingClientRect().width; //initialize state onload and resize
		//state will be x (from data) / z. Same with y.

		console.log(x, y);
		console.log(z);
	};

	return (
		<div className="page__container">
			<Header characters={gameboard} />
			<div className="game__image-container">
				<img
					className="game__image"
					onClick={testClick}
					src={Object.values(gameboard.image)}
					alt="gameboard"
					useMap="#gameboard"
				></img>
				<map name="gameboard">
					<area
						shape="rect"
						coords="0, 0, 82, 162"
						alt="test"
						onClick={() => setTest("changed State!!!")}
						// href="#"
					></area>
				</map>
			</div>
		</div>
	);
};

export default Game;
