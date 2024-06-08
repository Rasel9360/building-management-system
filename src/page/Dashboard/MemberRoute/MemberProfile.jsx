import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const MemberProfile = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: agreement = [], isLoading } = useQuery({
        queryKey: ['agreement', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/agreement/${user?.email}`)
            return data
        }
    })

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    // console.log(agreement);

    return (
        <>
        <Helmet><title>Member Profile</title></Helmet>
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="  mt-20 md:w-1/2 mx-auto p-6 bg-[#EBF8FE] shadow-md rounded-xl ">
                    <img src={user?.photoURL} alt="user image" referrerPolicy="no-referrer" className="w-32 object-cover object-center h-32 mx-auto rounded-full bg-gray-500 aspect-square border-4 mb-4 text-blue-950 border-white shadow-xl" />
                    <div className="space-y-4 text-center divide-y ">
                        <div className="my-2 space-y-1">
                            <h2 className="text-4xl font-bold font-sev ">{user?.displayName}</h2>
                            <p className="px-5 text-lg font-jura ">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#001238] ">
                            <tr className="uppercase font-bold text-[16px] font-jura text-white">
                                <th></th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Floor No</th>
                                <th>Block Name</th>
                                <th>Room No</th>
                                <th>Rent</th>
                                <th>Accept Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                agreement.map((user, i) =>
                                    <tr key={user._id} className="text-lg font-jura text-black">
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>
                                            <p>{user.clientName}</p>
                                        </td>
                                        <td>
                                            <p>{user.clientEmail}</p>
                                        </td>
                                        <td>
                                            <p>{user.floor_no}</p>
                                        </td>
                                        <th>
                                            <p>{user.block_name}</p>
                                        </th>
                                        <th>
                                            <p>{user.apartment_no}</p>
                                        </th>
                                        <th>
                                            <p> ${user.rent}</p>
                                        </th>
                                        <th>
                                            <p>{new Date(user.acceptDate).toLocaleDateString()}</p>
                                        </th>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MemberProfile;