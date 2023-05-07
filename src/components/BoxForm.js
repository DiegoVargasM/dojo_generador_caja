import React, { useState } from "react";

const BoxForm = (props) => {
	const [color, setColor] = useState("");
	const [height, setHeight] = useState(60);
	const [width, setWidth] = useState(60);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newBox = { color, height, width };
		props.onNewBox(newBox);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="color">Color</label>
			<input
				type="text"
				name="color"
				placeholder="Choose a color"
				onChange={(e) => setColor(e.target.value)}
				value={color}
			/>
			<label htmlFor="height">Altura:</label>
			<input
				type="number"
				name="height"
				placeholder="Enter height"
				onChange={(e) => setHeight(e.target.value)}
				value={height}
			/>
			<label htmlFor="width">Ancho:</label>
			<input
				type="number"
				name="width"
				placeholder="Enter width"
				onChange={(e) => setWidth(e.target.value)}
				value={width}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default BoxForm;
