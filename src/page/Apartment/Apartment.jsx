import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import ApartmentCart from "./ApartmentCart";
import { useState } from "react";

const Apartment = () => {
    const axiosPublic = useAxiosPublic();
    const [itemPerPage, setItemPerPage] = useState(6);
    const [count, setCount] = useState(0)

    const { data: apartment = [] } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/apartment');
            setCount(data.length);
            return data;
        }
    })

    // console.log(count);
    const numberOfPages = Math.ceil(count / itemPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)


    return (
        <div className="bg-[#EBF8FE] ">
            <h2 className="text-2xl lg:text-5xl text-center font-sev pt-10">Book Your Favorite Apartment</h2>
            <div className="w-10/12 mx-auto pb-20 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    apartment.map((apartment) => <ApartmentCart
                        key={apartment._id}
                        apartment={apartment}
                    ></ApartmentCart>)
                }
            </div>
            <div className="flex justify-center space-x-1 pb-10 ">
                {/* Previous Button  */}
                <button title="previous" type="button" className="inline-flex items-center justify-center w-10 h-10 bg-base-100 py-0 border rounded-md shadow-md ">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                {
                    pages.map(btnNum => <button
                        key={btnNum}
                        type="button" title="Page 1" className="inline-flex items-center justify-center w-10 h-10 bg-base-100  font-semibold border rounded shadow-md ">{btnNum}</button>)
                }
                {/* next button */}
                <button title="next" type="button" className="inline-flex items-center justify-center w-10 h-10 bg-base-100 py-0 border rounded-md shadow-md">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Apartment;