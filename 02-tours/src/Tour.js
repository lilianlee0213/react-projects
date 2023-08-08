import React, {useState} from 'react';

const Tour = ({tours}) => {
	return tours.map((tour) => {
		const {id, name, info, image, price} = tour;
		return (
			<article className="single-tour" key={id}>
				<img src={image} alt={name} className="img" />
				<span className="tour-price">${price}</span>
				<div className="tour-info">
					<h4>{name}</h4>
					<p>
						{info}
						<button className="info-btn">read more</button>
					</p>
					<button className="delete-btn btn-block btn">not interested</button>
				</div>
			</article>
		);
	});
};

export default Tour;
