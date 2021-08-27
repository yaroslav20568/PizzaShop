import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchPizzas } from './redux/actions/importActions';
import { Header } from './components/importComponents';
import { Home, Cart, PageNotFound } from './pages/importPages';

function App() {
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

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/" exact>
                        <Home
                            pizzas={pizzas}
                            isLoaded={isLoaded}
                            activeCategorie={activeCategorie} 
                            activeSortBy={activeSortBy} 
                        />
                    </Route>
                    <Route path="/cart" component={ Cart } exact />
                    <Route component={ PageNotFound } exact />
                </Switch>
            </div>
        </div>
    );
}

export default App;
