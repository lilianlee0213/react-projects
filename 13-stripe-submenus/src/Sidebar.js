import React from 'react';
import {FaTimes} from 'react-icons/fa';
import sublinks from './data';

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar-container ">
				<button className="close-btn">
					<FaTimes />
				</button>
				<div className="sidebar-links">
					{sublinks.map((item, index) => (
						<article key={index}>
							<h3>{item.page}</h3>
							<div className="sidebar-sublinks">
								{item.links.map((link, linkIndex) => {
									const {url, label, icon} = link;
									return (
										<a href={url} key={linkIndex}>
											{icon}
											{label}
										</a>
									);
								})}
							</div>
						</article>
					))}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
