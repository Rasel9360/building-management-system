import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLaout/MainLayout";
import Home from "../page/Home/Home";
import Apartment from "../page/Apartment/Apartment";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Dashboard from "../MainLaout/Dashboard";
import AdminProfile from "../page/Dashboard/AdminRoute/AdminProfile";
import ManageMember from "../page/Dashboard/AdminRoute/ManageMember";
import Announcement from "../page/Dashboard/AdminRoute/Announcement";
import AgreementReq from "../page/Dashboard/AdminRoute/AgreementReq";
import ManageCoupons from "../page/Dashboard/AdminRoute/ManageCoupons";
const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/apartment",
                element: <Apartment></Apartment>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard> ,
        children: [
            {
                path: 'home',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'manage-member',
                element: <ManageMember></ManageMember>
            },
            {
                path: 'announcement',
                element: <Announcement></Announcement>
            },
            {
                path: 'agreement',
                element: <AgreementReq></AgreementReq>
            },
            {
                path: 'manage-coupons',
                element: <ManageCoupons></ManageCoupons>
            }
        ]
    }
]);

export default Route;