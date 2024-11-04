import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import GadgetCard from "../GadgetCard";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />, 
                loader: () => fetch('../Categories.json'),               
                children: [
                    {
                        path: '/category/:category',
                        element: <GadgetCard/>,
                        loader: () => fetch('../AllProduct.json'),
                    },

                ],
            },
        ],
    },
])

export default router;