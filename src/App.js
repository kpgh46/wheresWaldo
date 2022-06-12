import { db } from "./firebase-config";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import photo from "./assets/Wheres-Waldo-Game.jpg";
import Header from "./components/Header";

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
			<Header />
			<img src={test} alt="photo"></img>
		</div>
	);
}

export default App;
