import React from 'react';
import '../styles/row.css';

function Row(props) {
    return (
        <div className='row'>
            <div className='row__details'>
                <div className='row__details-img'>
                    <img
                        className='row__details-img'
                        src={`https://electronic-ecommerce.herokuapp.com/${props.image}`}
                        alt={props.name}
                    />
                </div>

                <div className='row__details-title'>{props.name}</div>
            </div>
            <div className='row__price'>{`Rs. ${props.price}`}</div>
            <div className='row__amount'>
                <button className='actions' onClick={props.onRemove}>
                    −
                </button>
                <span className='amount'>x {props.amount}</span>
                <button className='actions' onClick={props.onAdd}>
                    +
                </button>
            </div>
        </div>
    );
}

export default Row;
