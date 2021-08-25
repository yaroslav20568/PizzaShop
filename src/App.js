import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/importComponents';
import { Home, Cart, EmptyCart, PageNotFound } from './pages/importPages';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/" component={ Home } exact />
                    <Route path="/cart" component={ Cart } exact />
                    <Route path="/emptycart" component={ EmptyCart } exact />
                    <Route path="/pagenotfound" component={ PageNotFound } exact />
                </Switch>
            </div>
        </div>
    );
}

export default App;
