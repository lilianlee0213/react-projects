import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [item, setItem] = useState('');
	const [list, setList] = useState(() => {
		const savedList = localStorage.getItem('list');
		const list = JSON.parse(savedList);
		console.log(list);
		return list || [];
	});

	//Local Storage
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (item === '') {
			return;
		}
		//return new array with current item and elements of prevArray
		const itemObj = {id: new Date().getTime().toString(), title: item};
		setList((prev) => [itemObj, ...prev]);
		//empty input value after submit
		setItem('');
	};
	const removeItem = (id) => {
		const savedList = localStorage.getItem('list');
		const list = JSON.parse(savedList);
		const newArray = list.filter((item) => item.id !== id);
		setList(newArray);
	};

	const editItem = (id) => {
		const savedList = localStorage.getItem('list');
		const list = JSON.parse(savedList);
		const editValue = list.find((item) => item.id === id);
		if (editValue) {
			//bring the written value to text input field
			setItem(editValue.title);
		}
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
						value={item}
					/>
					<button type="submit" className="submit-btn">
						Submit
					</button>
				</div>
			</form>
			<div className="grocery-container">
				<List list={list} removeItem={removeItem} editItem={editItem} />
			</div>
		</section>
	);
}

export default App;
