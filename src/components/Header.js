import React from "react";
import waldo from "../assets/characters/waldo.jpeg";
import wizard from "../assets/characters/wizard.png";
import wally from "../assets/characters/wally.png";

let Header = (props) => {
	let characters = props.characters;
	let hi = true;

	let test = (character) => {
		for (let i = 0; i < characters.length; i++) {
			if (
				character === characters[i].name &&
				characters[i].found === true
			) {
				return true;
			}
		}
	};

	return (
		<div className="header">
			<div className="header-left">
				<h1>Where's Waldo?</h1>
			</div>

			<div className="header-right">
				<img
					className={`score-photo ${test("waldo") ? "found" : ""}`}
					src={waldo}
					alt="waldo"
				></img>
				<img
					className={`score-photo ${test("wizard") ? "found" : ""}`}
					src={wizard}
					alt="wizard"
				></img>
				<img
					className={`score-photo ${test("wally") ? "found" : ""}`}
					src={wally}
					alt="wally"
				></img>
			</div>
		</div>
	);
};

export default Header;
