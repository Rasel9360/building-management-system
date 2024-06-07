import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://assignment-twelve-server-five-lac.vercel.app'
})
const useAxiosSecure = () => {
    const { logOutUser } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log(token);
        config.headers.Authorization = `Bearer ${token}`
        return config
    }), function (error) {
        return Promise.reject(error);
    }

    axiosSecure.interceptors.response.use(function (response) {
        console.log();
        return response
    }, async (error) => {
        const status = error.response.request.status
        if (status === 401 || status === 403) {
            await logOutUser();
            navigate('/login')
        }
        console.log("error status in the interceptors", status);
        return Promise.reject(error)
    });


    return axiosSecure;
};

export default useAxiosSecure;