import React from 'react';
import '../styles/button.css';

function Button(props) {
    return (
        <>
            <button className='addToCart-btn' disabled={props.disable}>
                Add To Cart
            </button>
        </>
    );
}

export default Button;
