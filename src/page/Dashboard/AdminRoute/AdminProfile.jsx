import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { MdBedroomParent, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaTruck, FaUserCheck, FaUsers } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";

const AdminProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stat');
            // console.log(res.data);
            return res.data
        }
    })

    console.log(stats);

    return (
        <div>
            <section className="p-6 my-6  ">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 font-sev font-bold">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white ">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                        <MdBedroomParent />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.totalApartment}</p>
                            <p className="capitalize text-2xl">Total Rooms</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white ">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <FaUsers />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.totalUser}</p>
                            <p className="capitalize text-2xl">Total Users</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white ">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                        <FaUserCheck />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.totalMember}</p>
                            <p className="capitalize text-2xl">Total Member</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white ">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <FaTruck />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.orders}</p>
                            <p className="capitalize text-2xl">Orders</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="  mt-20 md:w-1/2 mx-auto p-6 bg-[#EBF8FE] shadow-md rounded-xl ">
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