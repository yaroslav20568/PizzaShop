import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from './../redux/actions/pizzas';
import { Categories, SortPopup, PizzaBlock, PizzaLoader } from './../components/importComponents';

const Home = () => {
    const { pizzas, isLoaded } = useSelector(({ pizzas, isLoaded }) => ({
        pizzas: pizzas.pizzas,
        isLoaded: pizzas.isLoaded
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
            </div>
        </div>
    );
}

export default Home;
