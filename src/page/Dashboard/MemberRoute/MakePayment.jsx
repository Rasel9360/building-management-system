import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAuth from "../../../hook/useAuth";
import { Link } from "react-router-dom";

const MakePayment = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();


    const { data: agreement = [] } = useQuery({
        queryKey: ['agreement', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/agreement/${user?.email}`)
            return data
        }
    })

    console.log(agreement);

    return (
        <div>
            <section className="w-11/12 mt-10 md:mt-14 md:max-w-4xl p-6  mx-auto bg-[#EBF8FE] rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-2xl mb-5 font-bold capitalize font-sev text-center">Make Payment</h2>
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 font-jura text-lg font-bold sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Name</label>
                            <input
                                disabled
                                defaultValue={agreement[0]?.clientName}
                                id="username"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input
                                disabled
                                defaultValue={agreement[0]?.clientEmail}
                                id="emailAddress"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="floor">Floor No</label>
                            <input
                                disabled
                                defaultValue={agreement[0]?.floor_no}
                                id="floor"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="block">Block Name</label>
                            <input
                                disabled
                                defaultValue={agreement[0]?.block_name}
                                id="block"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="apartment">Apartment No</label>
                            <input
                                disabled
                                defaultValue={agreement[0]?.apartment_no}
                                id="apartment"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="rent">Rent</label>
                            <input
                                disabled
                                defaultValue={agreement[0]?.rent}
                                id="rent"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="date">Date</label>
                            <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <Link to='/dashboard/payment'>
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-lg font-jura font-bold">Pay</button>
                        </Link>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default MakePayment;