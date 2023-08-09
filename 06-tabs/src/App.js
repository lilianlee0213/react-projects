import React, {useState, useEffect} from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
	return (
		<section className="job-center">
			<div className="btn-container">
				<button className="job-btn active-btn">Tommy</button>
				<button className="job-btn">BigDrop</button>
				<button className="job-btn">Cuker</button>
			</div>
			<article className="job-info">
				<h3>Full Stack web developer</h3>
				<span className="job-company">tommy</span>
				<p className="job-date">Descember</p>
				<div>
					<div className="job-desc">
						Lorem ipsum dolor sit amet consectetur a
					</div>
					<div className="job-desc">
						Lorem ipsum dolor sit amet consectetur a
					</div>
					<div className="job-desc">
						Lorem ipsum dolor sit amet consectetur a
					</div>
				</div>
			</article>
		</section>
	);
}

export default App;
