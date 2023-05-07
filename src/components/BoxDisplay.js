import React, { useState } from 'react';

const BoxDisplay = (props) => {
	return (
		<>
			<div>{props.displayedColors}</div>
		</>
	)
}

export default BoxDisplay;

/* const Groceries = (props) => {
	// esto podría provenir fácilmente de props
	const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
	return (
		<ul>{
			groceryList.map( (item, i) => 
				<li key={ i }>{ item }</li>
			)
		}</ul>
	); 
} */