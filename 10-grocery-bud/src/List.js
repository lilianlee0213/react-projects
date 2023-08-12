import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';
const List = ({list}) => {
	return list.map((item, index) => {
		return (
			<div className="grocery-item" key={index}>
				<input type="checkbox" className="check-box" />
				<p className="title">{item}</p>
				<div className="button-container">
					<button className="edit-btn">{FaEdit()}</button>
					<button className="delete-btn">{FaTrash()}</button>
				</div>
			</div>
		);
	});
};

export default List;
