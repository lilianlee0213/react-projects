import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';
const List = () => {
	return (
		<div className="grocery-item">
			<input type="checkbox" className="check-box" />
			<p className="title"></p>
			<div className="button-container">
				<button className="edit-btn">{FaEdit()}</button>
				<button className="delete-btn">{FaTrash()}</button>
			</div>
		</div>
	);
};

export default List;
