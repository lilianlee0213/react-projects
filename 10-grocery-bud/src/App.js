import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [item, setItem] = useState('');
	const [list, setList] = useState(() => {
		const savedList = localStorage.getItem('list');
		const list = JSON.parse(savedList);
		return list || [];
	});
	const [editId, setEditId] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [alert, setAlert] = useState({show: false, msg: '', type: ''});
	console.log(alert);
	//Local Storage
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);
	console.log(list);
	const handleSubmit = (e) => {
		e.preventDefault();
		const itemObj = {id: new Date().getTime().toString(), title: item};
		if (!item) {
			return;
		} else if (item && isEditing) {
			setList(
				list.map((i) => {
					if (i.id === editId) {
						//change item title to input value
						return {editId, title: item};
					}
					//return rest of list item
					return i;
				})
			);
			setItem('');
			setIsEditing(false);
			setEditId(null);
			showAlert(true, 'success', 'item changed');
			// setAlert(true, 'success', 'item changed');
		} else {
			showAlert(true, 'success', 'item added to the list');
			//return new array with current item and elements of prevArray
			setList((prev) => [itemObj, ...prev]);
			//empty input value after submit
			setItem('');
		}
	};
	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({show, type, msg});
	};
	const removeItem = (id) => {
		const savedList = localStorage.getItem('list');
		const list = JSON.parse(savedList);
		const newArray = list.filter((item) => item.id !== id);
		setList(newArray);
		showAlert(true, 'danger', 'item removed');
	};

	const editItem = (id) => {
		const savedList = localStorage.getItem('list');
		const list = JSON.parse(savedList);
		const editValue = list.find((item) => item.id === id);
		if (editValue) {
			//bring the written value to text input field
			setItem(editValue.title);
			setIsEditing(true);
			//pass id to submit new value when editing
			setEditId(id);
		}
	};
	const clearList = () => {
		setList([]);
		showAlert(true, 'danger', 'Cleared');
	};
	return (
		<section className="section-center">
			<Alert {...alert} showAlert={showAlert} list={list} />
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
						{isEditing ? 'Edit' : 'Submit'}
					</button>
				</div>
			</form>
			<div className="grocery-container">
				<List list={list} removeItem={removeItem} editItem={editItem} />
				{list.length !== 0 && (
					<button className="clear-btn" onClick={clearList}>
						clear items
					</button>
				)}
			</div>
		</section>
	);
}

export default App;
