/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import stamp from "../assets/characters/stampv2.png";
import { Link } from "react-router-dom";

let Header = (props) => {
	// let { characters } = props.characters;
	let [boardCharacters, setBoardCharacters] = React.useState(
		props.characters.characters
	);

	React.useEffect(() => {
		setBoardCharacters(props.characters.characters);
	}, [props]);

	let images = boardCharacters.map((character) => {
		return (
			<div>
				<img
					className={
						character.found ? "score-photo found" : "score-photo"
					}
					src={Object.values(character.image)}
					alt="photo"
				></img>
			</div>
		);
	});

	return (
		<div className="header">
			<div className="header-left">
				<img
					className="stamp"
					src={stamp}
					alt="wheres waldo stamp"
				></img>
				<h1 className="header-text">Where's Waldo?</h1>
			</div>
			<div className="header-right">{images}</div>
			<Link to="/">
				<button className="header__button">Home</button>
			</Link>
		</div>
	);
};

export default Header;
