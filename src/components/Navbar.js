import React, { useState, useContext } from 'react';
import '../styles/navbar.css';
import CartContext from '../store/cart-context';

import { Link } from 'react-router-dom';

function Navbar() {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    const [click, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!click);
    };
    const closeMobileMenu = () => {
        setClick(false);
    };

    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <div onClick={closeMobileMenu}>
                    <Link className='logo' to='/'>
                        <span>e</span>SHOP
                    </Link>
                </div>
                <ul className={click ? 'lists active' : 'lists'}>
                    {/* <li onClick={closeMobileMenu}>
                        <Link className='nav__link' to='/'>
                            Home
                        </Link>
                    </li> */}
                    <li onClick={closeMobileMenu}>
                        <Link className='nav__link' to='/product'>
                            Products
                        </Link>
                    </li>
                    <li onClick={closeMobileMenu} className='noti'>
                        <Link className='nav__link cart-btn' to='/cart'>
                            <i className='fas fa-shopping-cart'></i>
                            <span
                                className={numberOfCartItems ? 'top' : 'none'}>
                                {numberOfCartItems}
                            </span>
                        </Link>
                    </li>
                </ul>
                <div
                    className={
                        click ? 'navbar__toggle is__active' : 'navbar__toggle'
                    }
                    onClick={clickHandler}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
