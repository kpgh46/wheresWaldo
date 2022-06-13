import React from "react";
import TargetingBox from "./TargetingBox";

let MainPhoto = (props) => {
	let [showBox, setShowBox] = React.useState(false);

	return (
		<div>
			{showBox ? <TargetingBox /> : ""}
			<img
				onClick={() => setShowBox(true)}
				src={props.image}
				alt="main"
			></img>
		</div>
	);
};

export default MainPhoto;
