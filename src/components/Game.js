import React from "react";

let Game = (props) => {
	return (
		<div>
			<img src={props.board} alt="gameboard"></img>
			<div>This is level {props.key}</div>
		</div>
	);
};

export default Game;
