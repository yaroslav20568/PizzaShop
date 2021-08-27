const defaultState = {
    items: {},
    totalPrice: 0,
    totalPizzas: 0
};

const cart = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            return {
                ...state, items: {
                    ...state.items,
                    [action.payload.id]: state.items[action.payload.id] ? 
                        [...state.items[action.payload.id], action.payload] :
                        [action.payload]
                }
            }

        default:
            return state;
    }
};

export default cart;