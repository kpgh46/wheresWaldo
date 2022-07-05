import React from "react";

let Leaderboard = (props) => {
	let data = props.data;
	console.log(data);
	let scores = data.map((item) => {
		return <div>{item.name}</div>;
	});
	return (
		<div>
			<h1>Leaderboard</h1>
			<div className="levelOne">
				<div>Name</div>
				<div>Time</div>
				<div>Time</div>
				<div>{scores}</div>
			</div>
		</div>
	);
};

export default Leaderboard;
