import React, {useState} from 'react';
import data from './data';
import List from './List';
function App() {
	const [isCleared, setIsCleared] = useState(false);
	const clearAll = () => {
		setIsCleared(true);
	};
	return (
		<main>
			<section className="container">
				<h3>{isCleared ? '0' : data.length} birthdays Today</h3>
				<section>{!isCleared && <List />}</section>
				<button type="button" onClick={clearAll}>
					{isCleared ? 'No more upcoming birthdays' : 'clear all'}
				</button>
			</section>
		</main>
	);
}

export default App;
