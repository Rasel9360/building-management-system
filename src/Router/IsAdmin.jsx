import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import useRole from "../hook/useRole";

const IsAdmin = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [role, isLoading] = useRole();

    const isAdmin = role === 'Admin'

    if (loading || isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user || isAdmin) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};

export default IsAdmin;