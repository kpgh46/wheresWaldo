import React from "react";
import { Link } from "react-router-dom";

let Home = (props) => {
	console.log(props);
	let boards = props.gameboards.map((board) => {
		return (
			<div>
				<Link to={`gameboard/${board.id}`}>
					<img src={Object.values(board.image)} alt="board"></img>
				</Link>
				<div>This is a gameboard</div>
			</div>
		);
	});

	return <div>{boards}</div>;
};

export default Home;
