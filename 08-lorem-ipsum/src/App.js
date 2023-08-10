import React, {useState} from 'react';
import data from './data';
function App() {
	const [lorems, setLorems] = useState([]);
	const [count, setCount] = useState(1);
	//To get the value from the input when changed
	const getValue = (e) => {
		const {value} = e.target;
		setCount(value);
	};
	//generate lorem when the button clicked
	const generateLorem = (e) => {
		e.preventDefault();
		const newLorem = data.slice(0, count);
		setLorems(newLorem);
	};
	return (
		<section className="section-center">
			<h3>tired of boring lorem ipsum?</h3>
			<form className="lorem-form" onSubmit={generateLorem}>
				<label htmlFor="amount">paragraphs</label>
				<input
					type="number"
					id="amount"
					name="amount"
					min="1"
					step="1"
					max="8"
					value={count}
					onChange={getValue}
				/>
				<button className="btn">generate</button>
			</form>
			<article className="lorem-text">
				{lorems.map((p, index) => (
					<p key={index}>{p}</p>
				))}
			</article>
		</section>
	);
}

export default App;
