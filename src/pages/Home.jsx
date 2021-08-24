import React from 'react';
import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import PizzaBlock from './../components/PizzaBlock';

function Home() {
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
