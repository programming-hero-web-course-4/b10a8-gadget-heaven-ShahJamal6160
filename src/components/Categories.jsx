import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import GadgetCard from './GadgetCard';


const Categories = ({ categories }) => {


    // console.log(categories);
    return (
        <div className=''>
            <div className='grid grid-cols-1 gap-8 mt-10 border border-10 '>
                {
                    categories.map(category => (
                        <NavLink key={category.category_id} to={`/category/${category.category}`} className='btn' >
                            {category.category}
                        </NavLink>
                    ))
                }
                    
                    
                
            </div>
{/* 
            <div className='border border-10 w-2/3 mt-10'>
               
            </div> */}

        </div>
    );
};

export default Categories;