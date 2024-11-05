import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navbar/Navber";


const Root = () => {
    return (
        <div>
            <Navber/>

            <div className="min-h-[calc(100vh-232px)] 
            py-12 container mx-auto px-12">
                     <Outlet/>
            </div>
           

            <Footer/>
        </div>
    );
};

export default Root;