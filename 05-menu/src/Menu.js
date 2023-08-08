import React from 'react';

const Menu = ({id, title, category, price, img, desc}) => {
	return (
		<article className="menu-item">
			<img src={img} alt={title} className="photo" />
			<div className="item-info">
				<header>
					<h5>{title}</h5>
					<span className="item-price">{price}</span>
				</header>
				<p className="item-text">{desc}</p>
			</div>
		</article>
	);
};

export default Menu;
