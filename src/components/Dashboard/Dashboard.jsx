import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../Utility/AddToListDb';
import Product from '../Products/Product';


const Dashboard = () => {
    const [cartList, setCartList] = useState([]);

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id))

        const addCartList = allProducts.filter(product => storedCartListInt.includes(product.productId));
        setCartList(addCartList)
    }, [])


    return (
        <div>
            <Tabs>
                <TabList >
                    <Tab>Card List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1:{cartList.length}</h2>
                    {
                       cartList.map(product => <Product key={product.productId} product={product}/>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div> 
    );
};

export default Dashboard;