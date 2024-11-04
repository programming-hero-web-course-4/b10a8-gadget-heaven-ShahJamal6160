import React from 'react';

const Gadget = ({ gadget }) => {
    const { price, category, product_title, product_image } = gadget;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>
            <p>{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;