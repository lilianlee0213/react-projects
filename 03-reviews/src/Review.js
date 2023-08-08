import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
	return (
		<article className="review">
			<div className="img-container">
				<img src="" alt="" className="person-img" />
				<span className="quote-icon">{FaQuoteRight()}</span>
			</div>
			<h4 className="author"></h4>
			<p className="job"></p>
			<p className="info"></p>
			<div className="btn-container">
				<button className="prev-btn">{FaChevronLeft()}</button>
				<button className="next-btn">{FaChevronRight()}</button>
			</div>
			<button className="btn random-btn">Suprise me</button>
		</article>
	);
};

export default Review;
