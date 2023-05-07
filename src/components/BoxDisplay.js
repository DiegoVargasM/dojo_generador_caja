import React from 'react';

const BoxDisplay = (props) => {
	return (
		<>
			{props.displayedColors.map((color, index) => (
				<div
					key={index}
					style={{
						backgroundColor: color,
						width: "60px",
						height: "60px",
						display: "inline-block",
						marginRight: "10px",
						padding: "20px",
						marginTop: "10px"
					}}
				>
				</div>
			))}
		</>
	)
}

export default BoxDisplay;

