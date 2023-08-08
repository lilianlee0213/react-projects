import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
	const [tours, setTours] = useState([]);
	const getTours = async () => {
		await fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => {
				setTours(data);
			});
	};
	useEffect(() => {
		getTours();
	}, []);
	return tours === [] ? (
		<Loading />
	) : (
		<main>
			<section className="section">
				<div className="title">
					<h2>our tours</h2>
					<div className="underline"></div>
				</div>
				<Tours tours={tours} />
			</section>
		</main>
	);
}

export default App;
