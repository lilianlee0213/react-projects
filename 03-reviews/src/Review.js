import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
	const [person, setPerson] = useState(people[0]);
	const getRandom = () => {
		const randomIndex = Math.floor(Math.random() * people.length);
		//need to figure out when random index is the same with the next random index
		setPerson(people[randomIndex]);
	};
	const {id, name, job, image, text} = person;
	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">{FaQuoteRight()}</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="btn-container">
				<button className="prev-btn">{FaChevronLeft()}</button>
				<button className="next-btn">{FaChevronRight()}</button>
			</div>
			<button className="btn random-btn" onClick={getRandom}>
				Suprise me
			</button>
		</article>
	);
};

export default Review;
