import React from "react";
import Scores from "../components/Scores";
import { Link } from "react-router-dom";

let Leaderboard = (props) => {
	let data = props.data;
	let [currentLevel, setCurrentLevel] = React.useState(1);
	console.log(data, "leaderboard");

	let clickLevel = (event) => {
		let el = parseInt(event.target.id);
		setCurrentLevel(el);
	};

	return (
		<div className="page__container">
			<div className="leaderboard__header-container">
				<h1 style={{ color: "#3B82F6" }}>Leaderboard</h1>
				<div className="leaderboard__levels">
					<div onClick={clickLevel} id="1">
						Level 1
					</div>
					<div onClick={clickLevel} id="2">
						Level 2
					</div>
					<div onClick={clickLevel} id="3">
						Level 3
					</div>
					<div onClick={clickLevel} id="4">
						Level 4
					</div>
				</div>
				<Link to="/">
					<button className="header__button">Home</button>
				</Link>
			</div>
			<Scores data={data} level={currentLevel} />
		</div>
	);
};

export default Leaderboard;
