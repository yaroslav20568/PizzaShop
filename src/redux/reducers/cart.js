const defaultState = {
    items: {},
    totalPrice: 0,
    totalPizzas: 0
};

const cart = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id] ? 
                    [...state.items[action.payload.id], action.payload] :
                    [action.payload]
            };
            const newItemsArr = [].concat.apply([], Object.values(newItems));
            return {
                ...state, 
                items: newItems, 
                totalPizzas: newItemsArr.length,
                totalPrice: newItemsArr.reduce((acc, curVal) => acc + curVal.price, 0)
            }

        default:
            return state;
    }
};

export default cart;