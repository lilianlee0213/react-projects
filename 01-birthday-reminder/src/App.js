import React, {useState} from 'react';
import data from './data';
import List from './List';
function App() {
	return (
		<main>
			<section className="container">
				<h3>{data.length} birthdays Today</h3>
				<section>{/* List */}</section>
				<button type="button">clear all</button>
			</section>
		</main>
	);
}

export default App;
