import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Gadget from './Gadget';

const CategoriesAndGadgets = () => {
    const data = useLoaderData();
    const { category } = useParams();
   
    const [gadGets, setGadgets] = useState([]);

   

   
    useEffect(() => {
        const filteredCategory = [...data].filter(gadget => gadget.category === category);
        setGadgets(filteredCategory);
    }, [category, data]);

    return (
        
            

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {gadGets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} />)}
            </div>
        
    );
};

export default CategoriesAndGadgets;
