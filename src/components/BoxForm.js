import { useState } from "react";

const BoxForm = (props) => {


	return (
		<form>
			<label htmlFor="color">Color</label>
			<input type="text" name="color" placeholder="Choose a color" value={value} />
			<button>Add</button>
		</form>
	)
}