import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';
function App() {
	return (
		<section className="section-center">
			<article>
				<img src="" alt="" className="person-name" />
				<h5 className="name">maria</h5>
				<p className="title">hi</p>
				<p className="text">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et excepturi
					voluptatum ut nihil ex itaque fuga reiciendis aut! Ipsam accusantium
					commodi consequatur hic odio? Nobis iste repellendus temporibus vel
					asperiores?
				</p>
				<FaQuoteRight className="icon" />
				<button className="prev">{FiChevronLeft()}</button>
				<button className="next">{FiChevronRight()}</button>
			</article>
		</section>
	);
}

export default App;
