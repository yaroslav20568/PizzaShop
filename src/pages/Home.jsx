import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas, setCategorie, setSortBy } from '../redux/actions/importActions';
import { Categories, SortPopup, PizzaBlock, PizzaLoader } from './../components/importComponents';

const categorieItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Home = () => {
    const dispatch = useDispatch();
    const { pizzas, isLoaded } = useSelector(({ pizzas }) => ({
        pizzas: pizzas.pizzas,
        isLoaded: pizzas.isLoaded
    }));

    const { activeCategorie, activeSortBy } = useSelector(({ filter }) => ({
        activeCategorie: filter.categorie,
        activeSortBy: filter.sortBy
    }));

    useEffect(() => {
        dispatch(fetchPizzas(activeCategorie));
    }, [activeCategorie]);

    const onSelectCategorie = index => {
        dispatch(setCategorie(index));
    };

    const onSelectSortBy = sortBy => {
        dispatch(setSortBy(sortBy));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories 
                    categorieItems={categorieItems} 
                    activeCategorie={activeCategorie} 
                    onSelectCategorie={onSelectCategorie} 
                />
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? 
                        pizzas.map((pizza, index) => <PizzaBlock key={`pizza_${index}`} {...pizza} />) :
                        Array(10).fill(0).map((item, index) => <PizzaLoader key={`loader_${index}`} />)
                }
            </div>
        </div>
    );
}

export default Home;
