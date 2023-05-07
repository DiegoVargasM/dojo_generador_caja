import React, { useState } from 'react';

const BoxForm = (props) => {
	const [color, setColor] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onNewColors(color);
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="color">Color</label>
			<input type="text" name="color" placeholder="Choose a color" onChange={(e) => setColor(e.target.value)} value={color} />
			<button type="submit">Add</button>
		</form>
	)
}

export default BoxForm;