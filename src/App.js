import { db } from "./firebase-config";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import photo from "./assets/Wheres-Waldo-Game.jpg";
import Header from "./components/Header";
import TargetingBox from "./components/TargetingBox";
import MainPhoto from "./components/MainPhoto";

function App() {
	let [users, setUsers] = React.useState([]);
	let [showBox, setShowBox] = React.useState(false);
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

	return (
		<div>
			<Header />
			<div className="photo-container" onClick={handlePhotoClick}>
				{showBox ? <TargetingBox top={top} left={left} /> : ""}
				<MainPhoto image={photo} top={top} left={left} />
			</div>
		</div>
	);
}

export default App;
