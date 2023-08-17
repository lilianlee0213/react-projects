import React, {useState, useContext, useReducer, useEffect} from 'react';
import cartItems from './data';
import {reducer} from './reducer';
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: [],
	total: 0,
	amount: 0,
};
const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	//remove
	const remove = (id) => {
		dispatch({type: 'remove', payload: id});
	};
	//clear
	const clearCart = () => {
		dispatch({type: 'clear'});
	};
	//getTotals
	useEffect(() => {
		dispatch({type: 'getTotal'});
	}, [state.cart]);
	//fetch
	const fetchCart = async () => {
		dispatch({type: 'loading'});
		await fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch({type: 'display', payload: data});
			});
	};
	const toggleAmount = (id, type) => {
		dispatch({type: 'toggleAmount', payload: {id, type}});
	};
	useEffect(() => {
		fetchCart();
	}, []);
	return (
		<AppContext.Provider
			value={{
				...state,
				remove,
				clearCart,
				toggleAmount,
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
