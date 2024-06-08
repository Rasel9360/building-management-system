import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import { useState } from "react";
import useRole from "../hook/useRole";
import AdminRoute from "../page/Dashboard/AdminRoute/AdminRoute";
import UserRoute from "../page/Dashboard/UserRoute/UserRoute";
import MemberRoute from "../page/Dashboard/MemberRoute/MemberRoute";
import MenuItem from "../page/Dashboard/MenuItem/MenuItem";
import { FaHome } from "react-icons/fa";
import { PiBuildingApartmentBold } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import useAuth from "../hook/useAuth";



const Dashboard = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
    const [role] = useRole();
    // console.log(role);
    const { logOutUser } = useAuth();

    const handleLogout = async () => {
        await logOutUser();
    }

    return (
        <div>
            <div className="flex">
                {/* Sidebar */}
                <div className={`w-72 ${toggleOpen ? 'lg:hidden block' : 'lg:block hidden'} py-4 text-white min-h-screen bg-[#001238]`}>
                    <h1 className="text-3xl text-center font-sev pb-1">{role} Dashboard</h1>

                    <hr />
                    <div className="mt-10">
                        {role === 'Admin' && <AdminRoute></AdminRoute>}
                        {role === 'User' && <UserRoute></UserRoute>}
                        {role === 'Member' && <MemberRoute></MemberRoute>}
                    </div>

                    <div className="px-4 my-10"><hr /></div>

                    <div>
                        <ul >
                            <li><MenuItem address='/' label='Home' icon={FaHome}></MenuItem></li>
                            <li><MenuItem address='/apartment' label='Apartment' icon={PiBuildingApartmentBold}></MenuItem></li>
                            <li><a onClick={handleLogout}><MenuItem address='/' label='Logout' icon={TbLogout2}></MenuItem></a></li>
                        </ul>
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