import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/characters/logo.png";

let Home = (props) => {
	console.log(props.data);
	let boards = props.gameboards.map((board) => {
		return (
			<div className="home__board-container">
				<Link to={`gameboard/${board.id}`}>
					<img
						className="home__board-images"
						src={Object.values(board.image)}
						alt="board"
						id={board.id}
					></img>
				</Link>
				<div className="home__board-description">
					<div className="home__board-level">{board.level}</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="page__container">
				<div className="home__banner">
					<div className="header-text">Where's Waldo?</div>
					<img
						className="home__logo"
						src={logo}
						alt="waldo logo"
					></img>
					<Link to={"/leaderboard"}>
						<button className="header__button">Leaderboard</button>{" "}
					</Link>
				</div>
				<div className="home__boards">{boards}</div>
			</div>
		</div>
	);
};

export default Home;
