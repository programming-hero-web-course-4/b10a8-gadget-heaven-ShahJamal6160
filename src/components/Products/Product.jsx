import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { productId, product_title, product_image, price, category } = product;
    return (
        <div className="card bg-gray-300 w-80 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    className="rounded-xl border-2 w-full" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{product_title}</h2>
                <p>{price} $</p>
                <div className="card-actions">
                    <Link to={`/products/${productId}`}><button className="btn btn-primary rounded-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;