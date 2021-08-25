import axios from 'axios';

const setPizzas = (pizzas) => ({type: 'SET_PIZZAS', payload: pizzas});
const setLoaded = (flag) => ({type: 'SET_LOADED', payload: flag});

const fetchPizzas = (categorie) => {
    return (dispatch) => {
        dispatch(setLoaded(false));
        axios.get('http://localhost:3001/pizzas', {
            params: {
                category: categorie
            }
        })
            .then(({ data }) => {
                dispatch(setPizzas(data));
                dispatch(setLoaded(true));
            })
    }
};

export { setPizzas, setLoaded, fetchPizzas };