import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AgreementReq = () => {
    const axiosSecure = useAxiosSecure();

    const { data: agreement = [] } = useQuery({
        queryKey: ['agreement'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/agreement')
            return data;
        }
    })

    const handleAccept = (user) => {
        console.log(user);
        axiosSecure.patch(`/user/${user.clientEmail}`, { role: 'member' })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    axiosSecure.patch(`/apartment/${user.apartmentId}`, {status: 'checked'})
                        .then(res => {
                            console.log(res.data)
                        })
                }
            })
    }

    return (
        <div>
            <h1 className="text-4xl font-bold font-sev text-center mt-10">Agreement Request</h1>
            <div className=" mx-auto bg-base-100 p-10 rounded-lg mb-10">

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
                                <th>Date</th>
                                <th>Accept</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                agreement.map((user, i) =>
                                    <tr key={user._id} className="text-lg font-jura text-black text-center">
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
                                            <p>{new Date(user.date).toLocaleDateString()}</p>
                                        </th>
                                        <th >
                                            <button
                                                onClick={() => handleAccept(user)}
                                                className="btn-circle  bg-green-600 bg-opacity-20 flex btn-success justify-center items-center text-3xl text-green-700">
                                                <FaCheckCircle />
                                            </button>
                                        </th>
                                        <th>
                                            <button className="btn-circle  bg-red-600 bg-opacity-20 flex  justify-center items-center text-3xl text-red-700">
                                                <MdDeleteForever />
                                            </button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AgreementReq;