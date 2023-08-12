import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	return (
		<section className="section-center">
			<form action="" className="grocery-form">
				<h3>grocery bud</h3>
				<div className="form-control">
					<input type="text" className="grocery" placeholder="Add item" />
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
