import React, {useState, useRef, useEffect} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';
import {links, social} from './data';
import logo from './logo.svg';

const Navbar = () => {
	return (
		<div className="nav-center">
			<div className="nav-header">
				<img src={logo} className="logo" alt="logo" />
				<button className="nav-toggle">
					<FaBars />
				</button>
			</div>
			<div className="links-container">
				<ul className="links">
					{links.map((link) => (
						<li>
							<a href={link.url}>{link.text}</a>
						</li>
					))}
				</ul>
				<ul className="social-icons"></ul>
			</div>
		</div>
	);
};

export default Navbar;
