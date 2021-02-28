import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const addCart = cart;
    const money = addCart.reduce((sum, friend) => sum + friend.wealth, 0);

    return (
        <div>
            <h3>Friends Added: {addCart.length}</h3>
            <h4>Money Add: ${money}</h4>
        </div>
    );
};

export default Cart;
