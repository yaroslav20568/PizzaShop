import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas, setCategorie, setSortBy } from '../redux/actions/importActions';
import { Categories, SortPopup, PizzaBlock, PizzaLoader } from './../components/importComponents';

const categorieItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortPopupItems = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
];

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
        dispatch(fetchPizzas(activeCategorie, activeSortBy));
    }, [activeCategorie, activeSortBy]);

    const onSelectCategorie = useCallback(index => {
        dispatch(setCategorie(index));    
    }, []);

    const onSelectSortBy = useCallback(sortBy => {
        dispatch(setSortBy(sortBy));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories 
                    categorieItems={categorieItems} 
                    activeCategorie={activeCategorie} 
                    onClickCategorie={onSelectCategorie} 
                />
                <SortPopup
                    sortPopupItems={sortPopupItems}
                    activeSortBy={activeSortBy}
                    onClickSortBy={onSelectSortBy}
                />
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
};

export default Home;
