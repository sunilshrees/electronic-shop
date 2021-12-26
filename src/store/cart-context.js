import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmounts: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    sort: 'price-lowest',
    updateSort: () => {},
});

export default CartContext;
