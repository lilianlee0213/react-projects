import React, {useState, useContext} from 'react';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
	const [isSidebarOpen, setIsSideBarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSidebar = () => {
		setIsSideBarOpen((prev) => !prev);
	};
	const handleModal = () => {
		setIsModalOpen((prev) => !prev);
	};
	return (
		<AppContext.Provider
			value={{isSidebarOpen, isModalOpen, handleSidebar, handleModal}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGloabalContext = () => {
	return useContext(AppContext);
};
