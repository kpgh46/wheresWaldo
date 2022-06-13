import { db } from "./firebase-config";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import photo from "./assets/Wheres-Waldo-Game.jpg";
import Header from "./components/Header";
import TargetingBox from "./components/TargetingBox";
import MainPhoto from "./components/MainPhoto";

function App() {
	let [users, setUsers] = React.useState([]);
	let usersCollectionRef = collection(db, "users");

	React.useEffect(() => {
		let getUsers = async () => {
			let data = await getDocs(usersCollectionRef);
			console.log(data);
		};
		getUsers();
	}, []);

	let handlePhotoClick = (event) => {
		let top = event.nativeEvent.offsetX;
		let left = event.nativeEvent.offsetY;

		let arr = [top, left];

		return arr;
	};

	return (
		<div>
			<Header />
			<div className="photo-container">
				<MainPhoto image={photo} handlePhotoClick={handlePhotoClick} />
			</div>
		</div>
	);
}

export default App;
