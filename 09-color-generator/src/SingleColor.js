import React, {useState, useEffect} from 'react';
import rgbToHex from './utils';

const SingleColor = ({rgb, weight}) => {
	const bgc = rgb.join(',');
	const hexValue = rgbToHex(...rgb);
	return (
		<article className="color" style={{backgroundColor: `rgb(${bgc})`}}>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
		</article>
	);
};

export default SingleColor;
