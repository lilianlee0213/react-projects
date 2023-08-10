import React, {useState, useEffect} from 'react';
import rgbToHex from './utils';

const SingleColor = ({rgb, weight}) => {
	const [alert, setAlert] = useState(false);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearInterval(timeOut);
	}, [alert]);
	const bgc = rgb.join(',');
	const hexValue = rgbToHex(...rgb);
	const handleCopy = () => {
		setAlert(true);
		navigator.clipboard.writeText(hexValue);
	};
	return (
		<article
			className="color"
			style={{backgroundColor: `rgb(${bgc})`}}
			onClick={handleCopy}>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
			{alert && <p className="alert">copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
