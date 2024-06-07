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
import UserProfile from "../page/Dashboard/UserRoute/UserProfile";
import UserAnnouncement from "../page/Dashboard/UserRoute/UserAnnouncement";
import MemberProfile from "../page/Dashboard/MemberRoute/MemberProfile";
import MemberAnnouncement from "../page/Dashboard/MemberRoute/MemberAnnouncement";
import PaymentHistory from "../page/Dashboard/MemberRoute/PaymentHistory";
import MakePayment from "../page/Dashboard/MemberRoute/MakePayment";
import Payment from "../page/Dashboard/MemberRoute/Payment";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../page/ErrorPage/ErrorPage";
const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'admin-profile',
                element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
            },
            {
                path: 'manage-member',
                element: <PrivateRoute>
                    <ManageMember></ManageMember>
                </PrivateRoute>
            },
            {
                path: 'make-announcement',
                element: <PrivateRoute><Announcement></Announcement></PrivateRoute>
            },
            {
                path: 'agreement',
                element: <PrivateRoute><AgreementReq></AgreementReq></PrivateRoute>
            },
            {
                path: 'manage-coupons',
                element: <PrivateRoute><ManageCoupons></ManageCoupons></PrivateRoute>
            },
            // user route
            {
                path: 'user-profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: 'user-announcement',
                element: <PrivateRoute><UserAnnouncement></UserAnnouncement></PrivateRoute>
            },
            // member route
            {
                path: 'member-profile',
                element: <PrivateRoute><MemberProfile></MemberProfile></PrivateRoute>
            },
            {
                path: 'member-announcement',
                element: <PrivateRoute><MemberAnnouncement></MemberAnnouncement></PrivateRoute>
            },
            {
                path: 'payment-history',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
            {
                path: 'make-payment',
                element: <PrivateRoute><MakePayment></MakePayment></PrivateRoute>
            },
            {
                path: 'payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            }
        ]
    }
]);

export default Route;