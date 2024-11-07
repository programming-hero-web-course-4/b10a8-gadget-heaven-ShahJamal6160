import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const {category} = useParams();
    
    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./AllProduct.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                const btnCategories = [...new Set(data.map(product => product.category))];
                setCategories(btnCategories.map((category, index) => ({ category_id: index, category: category })))
            })
    }, [])

   
    return (
        <div className='container flex gap-20 mt-10'>

            <div className='w-1/12 flex flex-col gap-2'>
                {
                    categories.map(category => (

                        <NavLink key={category.category} to={`/category/${category.category}`}>
                                {category.category}
                        </NavLink>

                    ))
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
               

                {
                    products.map(product => <Product key={product.productId} product={product} />)
                }
            </div>

        </div>
    );
};

export default Products;