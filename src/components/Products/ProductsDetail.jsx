import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductsDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);

    const product = data.find(product => product.product_id === id);

    const {product_id: currenProductId, product_image, product_title, price, availability, description, specification, rating } = product;

    // console.log(product)
    return (
        <div className="hero bg-base-200 min-h-screen">
            
            <div className="hero-content flex-col lg:flex-row">
            {/* <h1>Details: {product_id}</h1> */}
                <img
                    src={product_image}
                    className="w-[400px] h-[500px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{product_title}</h1>
                    <p className="py-6">
                        {price} $
                    </p>

                    <h2>{description}</h2>
                    <div>
                        <h3>Specification:</h3>
                       
                        {
                            specification.map((spec, index) => <li key={index}>{spec}</li>)
                        }
                       
                    </div>

                    <div>
                        <p>Rating:{rating}</p>
                    </div>

                    <div>
                        <button>Add to card</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductsDetail;