import React, {useState} from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#f15025').all(10));
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!error) {
			let colors = new Values(color).all(10);
			setList(colors);
		}
	};
	const handleTextInput = (e) => {
		const inputValue = e.target.value;
		const hexPattern = /^#?(?:[0-9a-fA-F]{3}){1,2}$/;
		// Set error state based on whether the input matches the pattern
		setError(!hexPattern.test(inputValue));
		// Update the color state with the input value
		setColor(inputValue);
	};
	return (
		<main>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit} className="color-form">
					<input
						type="color"
						onChange={(e) => setColor(e.target.value)}
						value={color}
					/>
					<input
						type="text"
						placeholder="#f15025"
						onChange={(e) => handleTextInput(e)}
						value={color}
						className={error ? 'error' : null}
					/>
					<button className="btn" type="submit">
						submit
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					return <SingleColor key={index} {...color} />;
				})}
			</section>
		</main>
	);
}

export default App;
