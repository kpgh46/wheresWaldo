import { db } from "./firebase-config";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import photo from "./assets/Wheres-Waldo-Game.jpg";
import Header from "./components/Header";
import TargetingBox from "./components/TargetingBox";

function App() {
	let [users, setUsers] = React.useState([]);
	let usersCollectionRef = collection(db, "users");
	let image = photo;

	React.useEffect(() => {
		let getUsers = async () => {
			let data = await getDocs(usersCollectionRef);
			console.log(data);
		};
		getUsers();
	}, []);

	// let handlePhotoClick = () => {

	// };

	return (
		<div>
			<Header />
			<div className="photo-container">
				<img
					// onClick={(event) =>
					// 	console.log(
					// 		event.nativeEvent.offsetX,
					// 		event.nativeEvent.offsetY
					// 	)
					// }
					src={image}
					alt="photo"
				></img>
				<TargetingBox />
			</div>
		</div>
	);
}

export default App;
