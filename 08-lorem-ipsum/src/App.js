import React, {useState} from 'react';
import data from './data';
function App() {
	return (
		<section className="section-center">
			<h3>tired of boring lorem ipsum?</h3>
			<form action="" className="lorem-form">
				<label htmlFor="amount">paragraphs</label>
				<input
					type="number"
					id="amount"
					name="amount"
					min="1"
					step="1"
					max="8"
					value="1"
				/>
				<button className="btn">generate</button>
			</form>
			<article className="lorem-text">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quos!
					Consectetur temporibus ab voluptatum, quis aperiam, deleniti officiis
					velit harum praesentium non animi accusamus possimus culpa doloremque
					id, laudantium in.
				</p>
			</article>
		</section>
	);
}

export default App;
