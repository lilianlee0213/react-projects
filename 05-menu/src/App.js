import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	return (
		<main>
			<section className="menu">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<div className="btn-container">
					<button type="button" className="filter-btn">
						all
					</button>
					<button type="button" className="filter-btn">
						breakfast
					</button>
					<button type="button" className="filter-btn">
						lunch
					</button>
					<button type="button" className="filter-btn">
						shakes
					</button>
				</div>
				<div className="section-center">
					{menuItems.map((menu) => {
						return <Menu key={menu.id} {...menu} />;
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
