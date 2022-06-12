import { db } from "./firebase-config";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import photo from "./Assets/Wheres-Waldo-Game.jpg";

function App() {
	let [users, setUsers] = React.useState([]);
	let usersCollectionRef = collection(db, "users");
	let test = photo;

	React.useEffect(() => {
		let getUsers = async () => {
			let data = await getDocs(usersCollectionRef);
			console.log(data);
		};
		getUsers();
	}, []);

	return (
		<div>
			<header>Sup</header>
			<img src={test} alt="photo"></img>
		</div>
	);
}

export default App;
