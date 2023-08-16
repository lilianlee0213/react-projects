export const reducer = (state, action) => {
	switch (action.type) {
		case 'increase':
			let tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === action.payload) {
					return {...cartItem, amount: cartItem.amount + 1};
				}
				return cartItem;
			});
			return {...state, cart: tempCart};
		case 'loading':
			return {...state, loading: true};
		case 'display':
			return {...state, cart: action.payload, loading: false};
	}
};
