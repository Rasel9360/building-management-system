import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const ManageMember = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users')
            return data
        }
    })

    // console.log(users);

    const handleReject = (user) => {
        // console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be remove member!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/${user.email}`, { role: 'User' })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            console.log(res.data);
                            Swal.fire({
                                title: "Rejected!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className="text-4xl font-bold font-sev text-center mt-10">Manage Member</h1>
            <div className="lg:w-10/12 mx-auto bg-base-100 p-10 rounded-lg mb-10">

                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#001238] ">
                            <tr className="uppercase font-bold text-[16px] font-jura text-white">
                                <th></th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, i) =>
                                    user.role === 'Member' &&
                                    <tr key={user._id} className="text-lg font-jura text-black">
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>
                                            <p>{user.name}</p>
                                        </td>
                                        <td>
                                            <p>{user.email}</p>
                                        </td>
                                        <th>
                                            <button
                                                onClick={() => handleReject(user)}
                                                className="btn-circle  bg-red-600 bg-opacity-20 flex  justify-center items-center text-3xl text-red-700">
                                                <MdDeleteForever />
                                            </button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageMember;