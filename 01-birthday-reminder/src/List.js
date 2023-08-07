import React from 'react';
import data from './data';

const List = () => {
	return (
		<>
			{data.map((person) => {
				const {id, image, name, age} = person;
				return (
					<article key={id} className="person">
						<img src={image} alt={name} className="img" />
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
