import React, {useState, useContext, useReducer, useEffect} from 'react';
import cartItems from './data';
import {reducer} from './reducer';
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
};
const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	//increase
	const increase = (id) => {
		dispatch({type: 'increase', payload: {id}});
	};
	//descrease
	const decrease = () => {};
	//remove
	const remove = () => {};
	//clear
	const clearCart = () => {};
	//fetch
	const fetchCart = async () => {
		dispatch({type: 'loading'});
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