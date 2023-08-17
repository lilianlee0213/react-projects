export const reducer = (state, action) => {
	switch (action.type) {
		case 'clear':
			return {...state, cart: []};
		case 'loading':
			return {...state, loading: true};
		case 'display':
			return {...state, cart: action.payload, loading: false};
		case 'toggleAmount':
			let updatedCart = state.cart
				.map((cartItem) => {
					if (cartItem.id === action.payload.id) {
						if (action.payload.type === 'inc') {
							return {...cartItem, amount: cartItem.amount + 1};
						}
						if (action.payload.type === 'dec') {
							return {...cartItem, amount: cartItem.amount - 1};
						}
					}
					return cartItem;
				})
				//when amount is 0 it removes item from the cart array
				.filter((cartItem) => cartItem.amount !== 0);
			return {...state, cart: updatedCart};
	}
};
