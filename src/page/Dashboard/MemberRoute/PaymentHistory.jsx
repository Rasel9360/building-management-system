import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');
    const { user, loading } = useAuth();


    const { data: payments = [], refetch, isLoading } = useQuery({
        queryKey: ['payment', user?.email, search],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payment/${user?.email}`, { params: { month: search } })
            return data
        }
    })

    // console.log(payments);
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.search.value)
        refetch();
    }
    // console.log(search);

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="w-11/12 mx-auto">
            <Helmet><title>Member | Payment History</title></Helmet>
            <h2 className=" font-sev font-bold text-center my-10 text-4xl">Payment History</h2>
            <div>
                <form onSubmit={handleSearch}>
                    <div className='flex justify-between p-1 overflow-hidden border bg-opacity-75 rounded-lg md:w-[40%] lg:w-[30%]  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 bg-[#EBF8FE]'>
                        <input
                            className='px-6 py-2 text-black placeholder-black bg-opacity-30 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Enter payment month'
                            aria-label='Enter Job Title'
                        />

                        <button type="submit" className="btn text-white bg-[#001238] hover:bg-[#001238]">Search</button>
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto border rounded-t-xl mt-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#001238] ">
                        <tr className="uppercase font-bold text-[16px] font-jura text-white">
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Rent</th>
                            <th>Transaction Id</th>
                            <th>Apartment No</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, i) =>
                                <tr key={payment._id} className="text-lg font-jura text-black">
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <p>{payment.name}</p>
                                    </td>
                                    <td>
                                        <p>{payment.email}</p>
                                    </td>
                                    <td>
                                        <p>${payment.rent}</p>
                                    </td>
                                    <td>
                                        <p>{payment.transactionId}</p>
                                    </td>
                                    <th>
                                        <p>{payment.apartment_no}</p>
                                    </th>
                                    <th>
                                        <p>{payment.date}</p>
                                    </th>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;