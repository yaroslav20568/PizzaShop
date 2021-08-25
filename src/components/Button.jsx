import React from 'react';
import classnames from 'classnames';

function Button({ children, cart, outline, add, back, pay, circle, minus, plus }) {
    const btnClasses = classnames({
        'button--cart': cart,
        'button--outline': outline,
        'button--add': add,
        'go-back-btn': back,
        'pay-btn': pay,
        'button--circle': circle,
        'cart__item-count-minus': minus,
        'cart__item-count-plus': plus
    });

    return (
        <button className={`button ${btnClasses}`}>
            { children }
        </button>
    )
}

export default Button;
