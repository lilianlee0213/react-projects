import React from 'react';
import data from './data';

const List = () => {
	return (
		<>
			{data.map((person) => (
				<article className="person">
					<img src={person.image} alt={person.name} className="img" />
					<div>
						<h4>{person.name}</h4>
						<p>{person.age} years</p>
					</div>
				</article>
			))}
		</>
	);
};

export default List;
