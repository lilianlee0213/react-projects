import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);
	const {name, job, image, text} = people[index];

	//check index
	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};

	const getRandom = () => {
		const randomIndex = Math.floor(Math.random() * people.length);

		//if randomIndex and index is the same add + 1
		if (randomIndex === index) {
			setIndex(checkNumber(randomIndex + 1));
		} else {
			setIndex(randomIndex);
		}
	};
	const onClickPrev = () => {
		setIndex((prev) => {
			let newIndex = prev - 1;
			return checkNumber(newIndex);
		});
	};
	const onClickNext = () => {
		setIndex((prev) => {
			let newIndex = prev + 1;
			return checkNumber(newIndex);
		});
	};

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
