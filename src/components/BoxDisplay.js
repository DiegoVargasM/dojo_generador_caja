import React from 'react';

const BoxDisplay = (props) => {
	return (
		<>
			{props.displayedColors.map((color, index) => (
				<div
					key={index}
					style={{
						backgroundColor: color,
						width: "20px",
						height: "20px",
						display: "inline-block",
						marginRight: "10px"
					}}
				>
				</div>
			))}
		</>
	)
}

export default BoxDisplay;

