import React from 'react';
import logo from './images/logo.svg';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav-center">
				<img src={logo} alt="" />
				<button className="toggle-btn">
					<FaBars />
				</button>
				<div className="nav-links">
					<button className="nav-link">Product</button>
					<button className="nav-link">Solutions</button>
					<button className="nav-link">Resources</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
