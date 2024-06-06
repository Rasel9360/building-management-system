import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};

export default PrivateRoute;