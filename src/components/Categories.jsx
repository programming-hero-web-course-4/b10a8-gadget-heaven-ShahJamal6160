import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {

    // console.log(Categories);
    return (
        <div>
            <div className='grid grid-cols-1 gap-8 mt-10  border border-10 '>
                {
                    categories.map(category => (
                        <NavLink key={category.category_id} to={`/category/${category.category}`} className='btn' >
                            {category.category}
                            </NavLink>
                    ))
                }

            </div>
            
        </div>
    );
};

export default Categories;