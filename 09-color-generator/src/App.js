import React, {useState} from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!error) {
			console.log(color);
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
				<h3>color genrator</h3>
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
						className={error && 'error'}
					/>
					<button className="btn" type="submit">
						submit
					</button>
				</form>
			</section>
			<section className="colors">
				<SingleColor />
			</section>
		</main>
	);
}

export default App;
