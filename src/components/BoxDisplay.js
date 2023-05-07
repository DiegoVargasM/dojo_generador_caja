import React from 'react';

const BoxDisplay = (props) => {
	return (
		<div>
			{props.displayedBoxes.map((box, index) => (
				<div
					key={index}
					style={{
						backgroundColor: box.color,
						width: `${box.width}px`,
						height: `${box.height}px`,
						display: "inline-block",
						marginRight: "10px",
						marginTop: "20px",
					}}
				/>
			))}
		</div>
	);
}

export default BoxDisplay;

