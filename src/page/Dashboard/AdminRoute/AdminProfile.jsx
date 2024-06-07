import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { MdBedroomParent, MdOutlineBedroomChild } from "react-icons/md";
import {  FaUserCheck, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { RiContractFill } from "react-icons/ri";
import LoadingSpinner from "../../../components/LoadingSpinner";

const AdminProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stat');
            // console.log(res.data);
            return res.data
        }
    })

    // console.log(stats);
    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <Helmet>Admin | Profile</Helmet>
            
            <section className="w-11/12 mt-6 mx-auto ">
                <div className=" grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3 font-serif font-medium">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white ">
                        <div className="flex justify-center p-2 space-y-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <MdBedroomParent />
                        </div>
                        <div className="flex flex-col justify-center space-y-2 align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.totalApartment}</p>
                            <p className="capitalize text-2xl">Total Rooms</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white ">
                        <div className="flex justify-center p-2 space-y-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <MdOutlineBedroomChild />
                        </div>
                        <div className="flex flex-col justify-center space-y-2 align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.toFixedPercentageAvailableRooms}%</p>
                            <p className="capitalize text-2xl">Available Rooms</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white ">
                        <div className="flex justify-center p-2 space-y-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <RiContractFill />
                        </div>
                        <div className="flex flex-col justify-center space-y-2 align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.toFixedPercentageAgreementRooms}%</p>
                            <p className="capitalize text-2xl">Agreement Rooms</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white ">
                        <div className="flex justify-center p-2 space-y-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <FaUsers />
                        </div>
                        <div className="flex flex-col justify-center space-y-2 align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.totalUser}</p>
                            <p className="capitalize text-2xl">Total Users</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white ">
                        <div className="flex justify-center p-2 space-y-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <FaUserCheck />
                        </div>
                        <div className="flex flex-col justify-center space-y-2 align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.totalMember}</p>
                            <p className="capitalize text-2xl">Total Member</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="  mt-14 w-11/12 md:w-1/2 mx-auto p-6 bg-[#EBF8FE] shadow-md rounded-xl ">
                <img src={user?.photoURL} alt="user image" referrerPolicy="no-referrer" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square border-4 mb-4 text-blue-950 border-white shadow-xl" />
                <div className="space-y-4 text-center divide-y ">
                    <div className="my-2 space-y-1">
                        <h2 className="text-4xl font-bold font-sev ">{user?.displayName}</h2>
                        <p className="px-5 text-lg font-jura ">{user?.email}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminProfile;