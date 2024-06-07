import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assignment-twelve-server-five-lac.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;