import React, {useState, useRef, useEffect} from 'react';
import {useGlobalContext} from './context';

const Submenu = () => {
	const {isSubmenuOpen, location, coordinates} = useGlobalContext();
	return (
		<aside className={isSubmenuOpen ? 'submenu show' : 'submenu'}>
			<h5></h5>
			<div className="submenu-center"></div>
		</aside>
	);
};

export default Submenu;
