import React from "react";

let Header = (props) => {
	console.log(props);
	// let test = (character) => {
	// 	for (let i = 0; i < characters.length; i++) {
	// 		if (
	// 			character === characters[i].name &&
	// 			characters[i].found === true
	// 		) {
	// 			return true;
	// 		}
	// 	}
	// };
	let { characters } = props.characters;
	console.log(characters);

	// let images = characters.map((character) => {
	// 	return (
	// 		<div>
	// 			<img
	// 				className="score-photo"
	// 				src={Object.values(character.image)}
	// 				alt="photo"
	// 			></img>
	// 		</div>
	// 	);
	// });

	return (
		<div className="header">
			<div className="header-left">
				<h1>Where's Waldo?</h1>
			</div>
			<div className="header-right">
				<div>test</div>
				{/* {images} */}
			</div>
		</div>
	);
};

export default Header;
