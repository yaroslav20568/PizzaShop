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

            const itemsAfterAdd = {
                ...state.items, 
                [action.payload.id]: {
                    items: currentPizzaArray,
                    totalPrice: sumTotalPrice(currentPizzaArray)
                }
            }

            const itemsAddArray = [].concat.apply([], Object.values(itemsAfterAdd).map(obj => obj.items));

            return {
                ...state,
                items: itemsAfterAdd,
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
            const newItems = {...state.items};
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalPizzas = newItems[action.payload].items.length;
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalPizzas: state.totalPizzas - currentTotalPizzas
            }
        case 'MINUS_COUNT_PIZZA':
            const oldItems = [...state.items[action.payload].items]
            const currentPizzaArrayMinus = oldItems.length > 1 ?  [...state.items[action.payload].items.slice(1)] : oldItems;

            const itemsAfterMinusCount = {
                ...state.items, 
                [action.payload]: {
                    items: currentPizzaArrayMinus,
                    totalPrice: sumTotalPrice(currentPizzaArrayMinus)
                }
            }

            const itemsMinusArray = [].concat.apply([], Object.values(itemsAfterMinusCount).map(obj => obj.items));
            
            return {
                ...state,
                items: itemsAfterMinusCount,
                totalPrice: sumTotalPrice(itemsMinusArray),
                totalPizzas: itemsMinusArray.length
            }
        case 'PLUS_COUNT_PIZZA':
            const currentPizzaArrayPlus = [state.items[action.payload].items[0], ...state.items[action.payload].items];
            
            const itemsAfterPlusCount = {
                ...state.items, 
                [action.payload]: {
                    items: currentPizzaArrayPlus,
                    totalPrice: sumTotalPrice(currentPizzaArrayPlus)
                }
            }
            
            const itemsPlusArray = [].concat.apply([], Object.values(itemsAfterPlusCount).map(obj => obj.items));
            
            return {
                ...state,
                items: itemsAfterPlusCount,
                totalPrice: sumTotalPrice(itemsPlusArray),
                totalPizzas: itemsPlusArray.length
            }
        default:
            return state;
    }
};

export default cart;