import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import AddCoupon from "./AddCoupon";
import { useState } from "react";

const ManageCoupons = () => {
    const [isOpen, setIsEditModalOpen] = useState(false);
    const axiosSecure = useAxiosSecure();

    const { data: coupons = [], refetch } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/coupons')
            return res.data;
        }
    })

    // console.log(coupons);

    const handleDeleteCoupon = (coupon) => {
        // console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be remove coupon!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/coupon/${coupon._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            console.log(res.data);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    // BMSVIP	Exclusive 20% discount for VIP members. 20 %  11/30/2024

    return (
        <div>
            <h1 className="text-4xl font-bold font-sev text-center mt-10">Manage Coupons</h1>
            <div>

            </div>
            <div className="lg:w-11/12 mx-auto bg-base-100 p-10 rounded-lg mb-10">
                <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="btn border-0 w-[15%] mx-auto border-b-4 text-lg btn-outline text-[#001238] uppercase bg-[#EBF8FE]"
                >Add Coupon
                    <AddCoupon
                        setIsEditModalOpen={setIsEditModalOpen}
                        isOpen={isOpen}
                        refetch={refetch}
                    ></AddCoupon>
                </button>
                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#001238] ">
                            <tr className="uppercase font-bold text-[16px] font-jura text-white">
                                <th></th>
                                <th>Coupon Code</th>
                                <th>Coupon Description</th>
                                <th>Discount</th>
                                <th>Validity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                coupons.map((coupon, i) =>
                                    <tr key={coupon._id} className="text-lg font-jura text-black">
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>
                                            <p>{coupon.coupon_code}</p>
                                        </td>
                                        <td>
                                            <p>{coupon.coupon_description}</p>
                                        </td>
                                        <th>
                                            <p>{coupon.discount_percentage} %</p>
                                        </th>
                                        <th>
                                            <p>{new Date(coupon.validity).toLocaleDateString()}</p>
                                        </th>
                                        <th>
                                            <button
                                                onClick={() => handleDeleteCoupon(coupon)}
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

export default ManageCoupons;