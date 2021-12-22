import React, { useContext } from 'react';
import Row from '../components/Row';
import '../styles/cart.css';
import CartContext from '../store/cart-context';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;
    const items = cartCtx.items;
    const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };
    console.log(hasItems);

    return (
        <div className='hero'>
            <div className='cart'>
                <div className='cart__details'>
                    <div className='cart__details-item'>
                        {hasItems ? (
                            items.map((item) => (
                                <Row
                                    key={item.id}
                                    name={item.name}
                                    amount={item.amount}
                                    price={item.price}
                                    image={item.image}
                                    onRemove={cartItemRemoveHandler.bind(
                                        null,
                                        item.id
                                    )}
                                    onAdd={cartItemAddHandler.bind(null, item)}
                                />
                            ))
                        ) : (
                            <div className='no-items'>
                                No items added to the cart.{' '}
                            </div>
                        )}
                        {/* {items.map((item) => (
                        <Row
                            key={item.id}
                            name={item.name}
                            amount={item.amount}
                            price={item.price}
                            image={item.image}
                            onRemove={cartItemRemoveHandler.bind(null, item.id)}
                            onAdd={cartItemAddHandler.bind(null, item)}
                        />
                    ))} */}
                    </div>
                    <div className='cart__details-checkout'>
                        <h1>Order Summary</h1>
                        <div className='coupon'>
                            <input
                                type='text'
                                className='search-control'
                                placeholder='Enter Coupon Code '
                                id='search-input'
                            />
                            <button
                                type='submit'
                                className='search-btn'
                                id='search-btn'>
                                Apply
                            </button>
                        </div>
                        <div className='total'>
                            <h3>Total</h3>
                            <h3>{totalAmount}</h3>
                        </div>
                        <Link to='/checkout'>
                            <button className='btn-ptc' disabled={!hasItems}>
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
