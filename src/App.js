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
		{ name: "something", found: false },
	]);
	let [top, setTop] = React.useState(0);
	let [left, setLeft] = React.useState(0);
	let usersCollectionRef = collection(db, "users");

	React.useEffect(() => {
		let getUsers = async () => {
			let data = await getDocs(usersCollectionRef);
			console.log(data);
		};
		getUsers();
	}, []);

	let handlePhotoClick = (event) => {
		let top = event.nativeEvent.offsetY;
		let left = event.nativeEvent.offsetX;

		setTop(top);
		setLeft(left);
		setShowBox(true);
	};

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

	console.log(characters);

	return (
		<div>
			<Header />
			<div className="photo-container" onClick={handlePhotoClick}>
				<div className="waldo"></div>
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
