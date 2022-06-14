import React from "react";
import waldo from "../assets/characters/waldo.jpeg";
import wizard from "../assets/characters/wizard.png";
import wally from "../assets/characters/wally.png";

let Header = (props) => {
	console.log(props);
	let hi = true;
	return (
		<div className="header">
			<div className="header-left">
				<h1>Where's Waldo?</h1>
			</div>

			<div className="header-right">
				<img
					className={`score-photo ${hi ? "found" : ""}`}
					src={waldo}
					alt="waldo"
				></img>
				<img className="score-photo" src={wizard} alt="wizard"></img>
				<img className="score-photo" src={wally} alt="wally"></img>
			</div>
		</div>
	);
};

export default Header;
