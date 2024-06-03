import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import { useState } from "react";
import useRole from "../hook/useRole";
import AdminRoute from "../page/Dashboard/AdminRoute/AdminRoute";

const Dashboard = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
    const [role] = useRole();
    console.log(role);
    return (
        <div>
            <div className="flex">
                {/* Sidebar */}
                <div className={`w-72 ${toggleOpen ? 'hidden' : 'block'} py-4 text-white min-h-screen bg-[#001238]`}>
                    <h1 className="text-3xl text-center font-sev">Dashboard</h1>
                    <hr />

                    <div className="">
                        {role === 'Admin' && <AdminRoute></AdminRoute>}
                    </div>

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