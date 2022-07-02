import { db } from "./firebase-config";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import photo from "./assets/game_basic.png";
import Header from "./components/Header";
import TargetingBox from "./components/TargetingBox";
import MainPhoto from "./components/MainPhoto";

function App() {
	let [users, setUsers] = React.useState([]);
	let [showBox, setShowBox] = React.useState(true);
	let [characters, setCharacters] = React.useState([
		{ name: "waldo", found: false },
		{ name: "wizard", found: false },
		{ name: "wally", found: false },
	]);
	let [top, setTop] = React.useState(0);
	let [left, setLeft] = React.useState(0);
	let usersCollectionRef = collection(db, "users");

	React.useEffect(() => {
		let getUsers = async () => {
			let data = await getDocs(usersCollectionRef);
		};
		getUsers();
	}, []);

	//shows targeting box to x/y value
	let handlePhotoClick = (event) => {
		let top = event.nativeEvent.offsetY;
		let left = event.nativeEvent.offsetX;

		setTop(top);
		setLeft(left);
		setShowBox(true);

		console.log(event.target);
	};

	//selects character and updates 'found' property on characters Object
	let handleTargetBoxClick = (event) => {
		let id = event.target.id;

		setCharacters((previousCharacters) =>
			previousCharacters.map((character) => {
				return id === character.name
					? { ...character, found: true }
					: character;
			})
		);
	};

	//removes display from targeting box when a selection is made
	React.useEffect(() => {
		setShowBox(false);
	}, [characters]);

	return (
		<div>
			<Header characters={characters} />
			<div className="photo-container" onClick={handlePhotoClick}>
				<div onClick={handlePhotoClick} className="waldo"></div>
				<div className="wizard"></div>
				<div className="wally"></div>
				{showBox ? (
					<TargetingBox
						top={top}
						left={left}
						handleTargetBoxClick={handleTargetBoxClick}
						showBox={showBox}
					/>
				) : (
					""
				)}
				<MainPhoto image={photo} top={top} left={left} />
			</div>
		</div>
	);
}

export default App;
