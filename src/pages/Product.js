import React, { useEffect, useState, useContext } from 'react';
import '../styles/product.css';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';

function Product() {
    useEffect(() => {
        fetchItems();
    }, []);

    const baseUrl = 'https://electronic-ecommerce.herokuapp.com/';
    const [products, setProducts] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`${baseUrl}api/v1/product`);
        const items = await data.json();
        setProducts(items.data.product);
    };

    const sort = useContext(CartContext);
    return (
        <div className='hero'>
            <div className='filter'>
                <div className='filter_text'>Filters</div>
                <hr />
                <p className='filter_pno'>{products.length} products found</p>
                <form>
                    <label htmlFor='sort' className='filter_sort-label'>
                        Sort by :{'  '}
                    </label>
                    <select
                        name='sort'
                        id='sort'
                        className='filter_sort-input'
                        value={sort.sort}
                        onChange={sort.updateSort}>
                        <option
                            value='price-lowest'
                            className='filter_sort-input-option'>
                            Price (Lowest)
                        </option>
                        <option
                            value='price-highest'
                            className='filter_sort-input-option'>
                            Price (Highest)
                        </option>
                        <option
                            value='name-lowest'
                            className='filter_sort-input-option'>
                            Name (a-z)
                        </option>
                        <option
                            value='name-highest'
                            className='filter_sort-input-option'>
                            Name (z-a)
                        </option>
                    </select>
                </form>
            </div>
            <div className='product__container'>
                {products.map((product) => {
                    return (
                        <div className='product' key={product.id}>
                            <Link
                                to={{
                                    pathname: `/product/${product.id}`,
                                    myObj: product,
                                }}
                                className='product-img'>
                                <img
                                    src={`${baseUrl}${product.image}`}
                                    alt={product.name}
                                />
                            </Link>

                            <div className='product-name'>
                                <h3>{product.name}</h3>
                                <h4>{`Rs. ${new Intl.NumberFormat('en-IN', {
                                    maximumSignificantDigits: 3,
                                }).format(
                                    Number(
                                        product.price.slice(
                                            1,
                                            product.price.length
                                        )
                                    ) * 122
                                )}`}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Product;
