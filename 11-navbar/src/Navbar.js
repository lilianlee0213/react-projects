import React, {useState, useRef, useEffect} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';
import {links, social} from './data';
import logo from './logo.svg';

const Navbar = () => {
	const [isNavShown, setIsNavShown] = useState(false);
	const toggleNav = () => {
		setIsNavShown((prev) => !prev);
	};
	return (
		<div className="nav-center">
			<div className="nav-header">
				<img src={logo} className="logo" alt="logo" />
				<button className="nav-toggle" onClick={toggleNav}>
					<FaBars />
				</button>
			</div>
			<div className={`links-container ${isNavShown ? 'show-container' : ''}`}>
				<ul className="links">
					{links.map((link) => (
						<li>
							<a href={link.url}>{link.text}</a>
						</li>
					))}
				</ul>
			</div>
			<ul className="social-icons">
				{social.map((icon) => (
					<li>
						<a href={icon.url}>{icon.icon}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
