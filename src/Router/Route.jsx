import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLaout/MainLayout";
import Home from "../page/Home/Home";
import Apartment from "../page/Apartment/Apartment";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
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
]);

export default Route;