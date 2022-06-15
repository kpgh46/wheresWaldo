import React from "react";

let Home = (props) => {
	let boards = props.gameboards.map((board) => {
		return (
			<div>
				<img src={board} alt="board"></img>
				<div>This is a gameboard</div>
			</div>
		);
	});

	return <div>{boards}</div>;
};

export default Home;
