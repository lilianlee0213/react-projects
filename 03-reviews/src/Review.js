import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);
	const getRandom = () => {
		const randomIndex = Math.floor(Math.random() * people.length);
		//need to figure out when random index is the same with the next random index
		setIndex(randomIndex);
	};
	const onClickPrev = () => {
		if (index <= 0) {
			setIndex(people.length - 1);
		} else {
			setIndex((prev) => prev - 1);
		}
	};
	const onClickNext = () => {
		if (index >= people.length - 1) {
			setIndex(0);
		} else {
			setIndex((prev) => prev + 1);
		}
	};

	const {name, job, image, text} = people[index];
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
				<button className="prev-btn" onClick={onClickPrev}>
					{FaChevronLeft()}
				</button>
				<button className="next-btn" onClick={onClickNext}>
					{FaChevronRight()}
				</button>
			</div>
			<button className="btn random-btn" onClick={getRandom}>
				Suprise me
			</button>
		</article>
	);
};

export default Review;
