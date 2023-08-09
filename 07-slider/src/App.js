import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';
function App() {
	const [people, setPeople] = useState(data);
	console.log(people);
	return (
		<section className="section-center">
			{people.map((person) => {
				const {id, name, image, quote, title} = person;
				return (
					<article key={id}>
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
