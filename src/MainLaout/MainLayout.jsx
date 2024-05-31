import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="h-[68px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;