import React from 'react';
import logo from './images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './context';

const Navbar = () => {
	const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
	console.log();
	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openSubmenu(page, {center, bottom});
		console.log(page);
	};
	const handleCloseSubmenu = (e) => {
		if (!e.target.classList.contains('nav-link')) {
			closeSubmenu();
		}
	};
	return (
		<nav className="nav" onMouseOver={handleCloseSubmenu}>
			<div className="nav-center">
				<img src={logo} alt="" />
				<button className="toggle-btn" onClick={openSidebar}>
					<FaBars />
				</button>
				<ul className="nav-links">
					<li>
						<button className="nav-link" onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className="nav-link" onMouseOver={displaySubmenu}>
							solutions
						</button>
					</li>
					<li>
						<button className="nav-link" onMouseOver={displaySubmenu}>
							resources
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
