import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';
function App() {
	const [people, setPeople] = useState(data);
	const [value, setValue] = useState(0);
	console.log(value);
	useEffect(() => {
		const interval = setTimeout(() => {
			setValue((prev) => (prev === people.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, [value]);
	const getClassName = (index) => {
		if (value === index) {
			return 'activeSlide';
		}
		if (value > index) {
			return 'lastSlide';
		}
		if (value < index) {
			return 'nextSlide';
		}
	};
	return (
		<section className="section-center">
			{people.map((person, index) => {
				const {id, name, image, quote, title} = person;
				return (
					<article key={id} className={getClassName(index)}>
						<img src={image} alt={name} className="person-img" />
						<h5 className="name">{name}</h5>
						<p className="title">{title}</p>
						<p className="text">{quote}</p>
						<FaQuoteRight className="icon" />
						<button className="prev">{FiChevronLeft()}</button>
						<button className="next">{FiChevronRight()}</button>
					</article>
				);
			})}
		</section>
	);
}

export default App;
