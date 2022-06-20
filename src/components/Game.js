import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

let Game = (props) => {
	let { level } = useParams();
	const imgElement = React.createRef();
	let character = props.data;
	let [test, setTest] = React.useState("not Clicked");
	let [width, setWidth] = React.useState(0);
	let [height, setHeight] = React.useState(0);

	let gameboard = character.find((board) => {
		return board.id === parseInt(level);
	});

	// React.useEffect(() => {
	// 	if (imgElement.current) {
	// 		const { current } = imgElement;
	// 		const boundingRect = current.getBoundingClientRect();
	// 		const { width, height } = boundingRect;
	// 		setHeight(height);
	// 		setWidth(width);
	// 	}
	// }, [imgElement]);

	function testClick(e) {
		let x = e.nativeEvent.offsetX;
		let y = e.nativeEvent.offsetY;
		let z = e.target.getBoundingClientRect().width;

		console.log(x, y);
		console.log(z);
	}

	let heightWidth = () => {
		setHeight(imgElement.current.naturalHeight);
		setWidth(imgElement.current.naturalWidth);
	};

	let testFunction = () => {
		let arr = [];
		let xOne = width * 0.51;
		let yOne = height * 0.47;
		let xTwo = xOne + 50;
		let yTwo = yOne + 100;

		arr.push(xOne, yOne, xTwo, yTwo);
		return arr.toString();
	};

	console.log(test);
	console.log(width);
	console.log(height);

	React.useEffect(() => {});

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
					ref={imgElement}
					onLoad={heightWidth}
				></img>
				<map name="gameboard">
					<area
						shape="rect"
						coords={testFunction()}
						alt="test"
						onClick={() => setTest("changed State!!!")}
					></area>
				</map>
			</div>
		</div>
	);
};

export default Game;
