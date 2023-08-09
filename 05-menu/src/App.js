import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const filterCategory = (category) => {
		if (category === 'all') {
			return setMenuItems(items);
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className="menu">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterCategory={filterCategory} />
				<Menu items={menuItems} />;
			</section>
		</main>
	);
}

export default App;
