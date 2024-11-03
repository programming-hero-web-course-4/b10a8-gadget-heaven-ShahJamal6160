import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Categories from "../Categories";


const Home = () => {

    const categories =useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner/>

            {/* Heading */}


            {/* Category tab section */}
            <Categories categories={categories}/>



            {/* Dynamic Nasted component */}
                <Outlet/>
        </div>
    );
};

export default Home;