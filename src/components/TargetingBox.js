import React from "react";

let TargetingBox = (props) => {
	return (
		<div
			className="targeting-box"
			style={{ top: props.top, left: props.left }}
		>
			<div className="target-option">Waldo</div>
			<div className="target-option">Wizard</div>
			<div className="target-option">Something</div>
		</div>
	);
};

export default TargetingBox;
