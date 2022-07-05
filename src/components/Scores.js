import React from "react";

let Scores = (props) => {
	let current = props.data.filter((item) => item.level === props.level);

	let score = current.map((item) => {
		return (
			<div className="leaderboard__scores-container">
				<div className="leaderboard__scores-header">
					<h3>Name</h3>
					<div>
						<div>{item.name}</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="leaderboard__scores-container">
			<div>
				<h3>Name</h3>
				{current.map((item) => (
					<div>{item.name}</div>
				))}
			</div>
			<div>
				<h3>Level</h3>
				{current.map((item) => (
					<div>{item.level}</div>
				))}
			</div>
			<div>
				<h3>Score</h3>
				{current.map((item) => (
					<div>{item.time}</div>
				))}
			</div>
		</div>
	);
};

export default Scores;
