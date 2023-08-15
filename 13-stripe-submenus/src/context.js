import React, {useState, useContext} from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [isSubmenuOpen, setSubmenuOpen] = useState(false);
	const [page, setPage] = useState({page: '', links: []});
	const [location, setLocation] = useState({});

	const openSidebar = () => {
		setSidebarOpen(true);
	};
	const closeSidebar = () => {
		setSidebarOpen(false);
	};
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
		setSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setSubmenuOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				isSubmenuOpen,
				openSubmenu,
				closeSubmenu,
				page,
				location,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
console.log(useGlobalContext);
export {AppContext, AppProvider};
