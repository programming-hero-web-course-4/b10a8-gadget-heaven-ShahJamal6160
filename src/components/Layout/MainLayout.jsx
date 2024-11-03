import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navber from "../Navber";


const MainLayout = () => {
    return (
        <div>
            {/* Navber */}
            <Navber/>

        {/* Dynamic sectio */}
        <div className="min-h-[calc(100vh-292px)] 
            py-12 container mx-auto px-12">
                <Outlet/>
            </div>


        {/* Footer */}
        <Footer/>
        </div>
    );
};

export default MainLayout;