import React, {useState, useEffect} from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);

	const fetchJobs = async () => {
		await fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => setJobs(data));
	};

	return isLoading ? (
		<section className="section loading">
			<h2>Loading...</h2>
		</section>
	) : (
		<section className="jobs-center">
			<div className="btn-container">
				<button className="job-btn active-btn">Tommy</button>
				<button className="job-btn">BigDrop</button>
				<button className="job-btn">Cuker</button>
			</div>
			<article className="job-info">
				<h3>Full Stack web developer</h3>
				<h4 className="job-company">tommy</h4>
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
