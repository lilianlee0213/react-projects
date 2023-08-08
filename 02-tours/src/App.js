import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const removeTour = (id) => {
		const remainingTours = tours.filter((tour) => {
			return tour.id !== id;
		});
		setTours(remainingTours);
	};

	const getTours = async () => {
		//when refresh show loading again
		setIsLoading(true);
		await fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => {
				setTours(data);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getTours();
	}, []);
	//when loading, when tours.lenght ===0, and when tours exist
	return isLoading ? (
		<Loading />
	) : tours.length === 0 ? (
		<main>
			<section>
				<div className="title">
					<h2>No Tours Left</h2>
					<button className="btn" onClick={() => getTours()}>
						Refresh
					</button>
				</div>
			</section>
		</main>
	) : (
		<main>
			<section>
				<div className="title">
					<h2>Our Tours</h2>
					<div className="underline"></div>
				</div>
				<Tours tours={tours} removeTour={removeTour} />
			</section>
		</main>
	);
}

export default App;
