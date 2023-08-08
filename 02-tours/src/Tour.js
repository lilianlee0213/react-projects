import React, {useState} from 'react';

const Tour = () => {
	return (
		<article className="single-tour">
			<img src="" alt="" className="img" />
			<span className="tour-price">$1,995</span>
			<div className="tour-info">
				<h5>Best of Prais in 7 Days Tour</h5>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum impedit
					veniam possimus rem velit suscipit repellendus amet, maiores ad,
					quidem officiis provident rerum ex natus expedita neque vitae
					perspiciatis! Ea!
					<button className="info-btn">read more</button>
				</p>
				<button className="delete-btn btn-block btn">not interested</button>
			</div>
		</article>
	);
};

export default Tour;
