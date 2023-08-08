import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
	return (
		<div className="tours">
			<Tour tours={tours} />
		</div>
	);
};

export default Tours;
