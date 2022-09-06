import React from "react";

let Scores = (props) => {
	let allData = props.data.filter((item) => item.level === props.level);
	let current = allData.sort(
		(a, b) => parseFloat(a.time) - parseFloat(b.time)
	);

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
				<h3>Seconds</h3>
				{current.map((item) => (
					<div>{item.time}s</div>
				))}
			</div>
		</div>
	);
};

export default Scores;
