const defaultState = {
    items: {},
    totalPrice: 0,
    totalPizzas: 0
};

const cart = (state = defaultState, action) => {
    const sumTotalPrice = (array) => {
        return array.reduce((acc, curVal) => acc + curVal.price, 0)
    };

    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const currentPizzaArray = state.items[action.payload.id] ? 
                    [...state.items[action.payload.id].items, action.payload] :
                    [action.payload];

            const newItems = {
                ...state.items, 
                [action.payload.id]: {
                    items: currentPizzaArray,
                    totalPrice: sumTotalPrice(currentPizzaArray)
                }
            }

            const itemsAddArray = [].concat.apply([], Object.values(newItems).map(obj => obj.items));

            return {
                ...state,
                items: newItems,
                totalPrice: sumTotalPrice(itemsAddArray),
                totalPizzas: itemsAddArray.length
            }
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalPizzas: 0
            }
        case 'REMOVE_PIZZA_FROM_CART':
            delete state.items[action.payload];
            const itemsAfterDelete = {...state.items};

            const itemsRemoveArray = [].concat.apply([], Object.values(itemsAfterDelete).map(obj => obj.items));

            return {
                ...state,
                items: itemsAfterDelete,
                totalPrice: sumTotalPrice(itemsRemoveArray),
                totalPizzas: itemsRemoveArray.length
            }
        default:
            return state;
    }
};

export default cart;