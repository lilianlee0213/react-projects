import React from 'react';
import logo from './logo.svg';
import {FaTimes} from 'react-icons/fa';
import {social, links} from './data';

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar-header">
				<img src={logo} alt="logo" className="logo" />
				<button className="close-btn">
					<FaTimes />
				</button>
			</div>
			<ul className="links">
				{links.map((link) => (
					<li>
						<a href={link.url}>
							{link.icon}
							{link.text}
						</a>
					</li>
				))}
			</ul>
			<ul className="social-icons">
				{social.map((icon) => (
					<li>
						<a href={icon.url}>{icon.icon}</a>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
