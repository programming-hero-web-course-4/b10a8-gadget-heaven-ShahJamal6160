import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList } from '../Utility/AddToListDb';
import Product from '../Products/Product';


const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedWishList = getStoredWishList();
        const storedCartListInt = storedCartList.map(id => parseInt(id))
        const storedWishListInt = storedWishList.map(id => parseInt(id))

        const addCartList = allProducts.filter(product => storedCartListInt.includes(product.productId));
        setCartList(addCartList);

         const addWishList = allProducts.filter(product => storedWishListInt.includes(product.productId));
         setWishList(addWishList);

    }, [allProducts])


    return (
        <div>
            <Tabs>
                <TabList >
                    <Tab>Card List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                       cartList.map(product => <Product key={product.productId} product={product}/>)
                    }
                    </div>
                   
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                       wishList.map(product => <Product key={product.productId} product={product}/>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div> 
    );
};

export default Dashboard;