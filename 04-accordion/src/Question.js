import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
const Question = ({title, info}) => {
	const [isOpened, setIsOpened] = useState(false);
	return (
		<article className="question">
			<header>
				<h5>{title}</h5>
				<button className="btn" onClick={() => setIsOpened(!isOpened)}>
					{isOpened ? AiOutlineMinus() : AiOutlinePlus()}
				</button>
			</header>
			{isOpened && <p>{info}</p>}
		</article>
	);
};

export default Question;
