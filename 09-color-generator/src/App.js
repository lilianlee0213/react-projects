import React, {useState} from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	return (
		<main>
			<section className="container">
				<h3>color genrator</h3>
				<form action="" className="color-form">
					<input type="color" />
					<input type="text" placeholder="#f15025" />
					<button className="btn" type="submit">
						submit
					</button>
				</form>
			</section>
			<section className="colors">
				<article className="color false">
					<p className="percent-value"></p>
					<p className="color-value"></p>
				</article>
			</section>
		</main>
	);
}

export default App;
