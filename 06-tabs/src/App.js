import React, {useState, useEffect} from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	//value will be the index
	const [value, setValue] = useState(0);

	const fetchJobs = async () => {
		await fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => setJobs(data));
	};

	useEffect(() => {
		fetchJobs();
		setIsLoading(false);
	}, []);

	const {company, dates, duties, title} = jobs[value];
	return isLoading ? (
		<section className="section loading">
			<h2>Loading...</h2>
		</section>
	) : (
		<section className="jobs-center">
			<div className="btn-container">
				{jobs.map((job, index) => {
					return (
						<button
							key={index}
							className={`job-btn ${index === value && 'active-btn'}`}
							onClick={() => setValue(index)}>
							{job.company}
						</button>
					);
				})}
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
