import { Helmet } from "react-helmet-async";
import useAuth from "../../../hook/useAuth";

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div className="w-10/12 md:w-3/4 pt-20 mx-auto min-h-[calc(100vh-56px)]">
            <Helmet><title>User Home</title></Helmet>
            <div >
                <div className="  md:w-1/2 mx-auto p-6 bg-[#EBF8FE] shadow-md rounded-xl ">
                    <img src={user?.photoURL} alt="user image" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square border-4 object-cover object-center mb-2 text-blue-950 border-white shadow-xl" />
                    <div className="space-y-4 text-center divide-y ">
                        <div className="my-2 space-y-1">
                            <h2 className="text-4xl font-bold font-sev ">{user?.displayName}</h2>
                            <p className="px-5 text-lg font-jura ">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl mt-10 font-sev text-center font-bold">Agreement Status</h2>
                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#001238] ">
                            <tr className="uppercase font-bold text-[16px] font-jura text-white">
                                <th></th>
                                <th>Floor No</th>
                                <th>Block Name</th>
                                <th>Room No</th>
                                <th>Rent</th>
                                <th>Agreement Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            <tr className="text-lg font-jura text-black">
                                <td>1</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;