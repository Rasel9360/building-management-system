import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import { useState } from "react";

const Dashboard = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
    return (
        <div>
            <div className="flex">
                {/* Sidebar */}
                <div className={`w-72 ${toggleOpen ? 'hidden' : 'block'} min-h-screen bg-[#001238]`}>
                    <div></div>
                </div>
                {/* Outlet */}
                <div className="flex-1 w-full">
                    <DashboardNav
                        toggleOpen={toggleOpen}
                        setToggleOpen={setToggleOpen}
                    ></DashboardNav>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;