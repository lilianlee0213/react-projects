import React, {useState, useContext, useReducer, useEffect} from 'react';
import cartItems from './data';
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const reducer = (state, action) => {};
const initialState = {
	count: 0,
	cart: cartItems,
	total: 0,
	amount: 0,
};
const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	//increase
	const increase = () => {};
	//descrease
	const decrease = () => {};
	//remove
	const remove = () => {};
	//clear
	const clearCart = () => {};
	//fetch
	const fetchCart = async () => {
		await fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	useEffect(() => {
		fetchCart();
	}, []);
	return (
		<AppContext.Provider
			value={{
				...state,
				increase,
				decrease,
				remove,
				clearCart,
			}}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export {AppContext, AppProvider};
