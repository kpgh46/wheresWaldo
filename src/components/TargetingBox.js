import React from "react";

let TargetingBox = (props) => {
	return (
		<div
			className={props.showBox ? "targeting-box" : "no-targeting-box"}
			style={{ top: props.top, left: props.left }}
		>
			<div
				onClick={props.handleTargetBoxClick}
				id="waldo"
				className="target-option"
			>
				Waldo
			</div>
			<div
				onClick={props.handleTargetBoxClick}
				id="wizard"
				className="target-option"
			>
				Wizard
			</div>
			<div
				onClick={props.handleTargetBoxClick}
				id="wally"
				className="target-option"
			>
				Wally
			</div>
		</div>
	);
};

export default TargetingBox;
