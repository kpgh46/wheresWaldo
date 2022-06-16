import React from "react";
import { Link } from "react-router-dom";

let Home = (props) => {
	console.log(props);
	let boards = props.gameboards.map((board) => {
		return (
			<div className="home__board-container">
				<Link to={`gameboard/${board.id}`}>
					<img
						className="home__board-images"
						src={Object.values(board.image)}
						alt="board"
					></img>
				</Link>
				<div className="home__board-description">
					<div>{board.level}</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="home__container">
				<div className="home__banner">
					<div>Where's Waldo?</div>
				</div>
				<div className="home__boards">{boards}</div>
			</div>
		</div>
	);
};

export default Home;
