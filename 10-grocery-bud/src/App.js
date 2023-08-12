import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [item, setItem] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(item);
	};
	return (
		<section className="section-center">
			<form onSubmit={handleSubmit} className="grocery-form">
				<h3>grocery bud</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="Add item"
						onChange={(e) => setItem(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						Submit
					</button>
				</div>
			</form>
			<div className="grocery-container">
				<div className="grocery-item">
					<input type="checkbox" className="check-box" />
					<p className="title">egg</p>
					<div className="button-container">
						<button className="edit-btn">Edit</button>
						<button className="delete-btn">Delete</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
