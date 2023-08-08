import React, {useState} from 'react';

const Tour = ({id, name, image, info, price}) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<article className="single-tour" key={id}>
			<img src={image} alt={name} className="img" />
			<span className="tour-price">${price}</span>
			<div className="tour-info">
				<h4>{name}</h4>
				<p>
					{readMore ? info : info.slice(0, 200) + '...'}
					<button
						className="info-btn"
						onClick={() => {
							setReadMore(!readMore);
						}}>
						{readMore ? 'Show Less' : 'Read More'}
					</button>
				</p>
				<button className="delete-btn btn-block btn">not interested</button>
			</div>
		</article>
	);
};

export default Tour;
