import React, { useEffect, useState } from 'react';
import '../styles/product.css';
import { Link } from 'react-router-dom';

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
    return (
        <div className='hero'>
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
