import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import ApartmentCart from "./ApartmentCart";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SkeletonCard from "../../components/SkeletonCard";

const Apartment = () => {
    const axiosPublic = useAxiosPublic();
    const [itemPerPage, setItemPerPage] = useState(6);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const { data: apartment = [], isLoading, refetch } = useQuery({
        queryKey: ['apartments', currentPage, itemPerPage],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/apartment?page=${currentPage}&size=${itemPerPage}`);
            return data;
        }
    })

    const { data } = useQuery({
        queryKey: ['apartment-count'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/apartment-count');
            setCount(data.count)
            return data.count
        }
    })

    // console.log(data);

    // console.log(count);
    const numberOfPages = Math.ceil(count / itemPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

    // handle pagination button 
    const handlePagination = (value) => {
        // console.log(value);
        setCurrentPage(value);
    }

    return (
        <>
            <Helmet><title>Beverly | Apartment</title></Helmet>
            <div className="bg-[#EBF8FE] ">
                <h2 className="text-2xl lg:text-5xl text-center font-sev pt-10">Book Your Favorite Apartment</h2>
                <div className="w-10/12 mx-auto pb-20 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading && <SkeletonCard card={6}></SkeletonCard>}
                    {
                        apartment.map((apartment) => <ApartmentCart
                            key={apartment._id}
                            apartment={apartment}
                            refetch={refetch}
                        ></ApartmentCart>)
                    }
                </div>
                <div className="flex justify-center space-x-1 pb-10 ">
                    {/* Previous Button  */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePagination(currentPage - 1)}
                        title="previous" type="button"
                        className="inline-flex items-center disabled:cursor-not-allowed justify-center w-10 h-10 bg-base-100 py-0 border rounded-md shadow-md ">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    {
                        pages.map(btnNum => <button
                            onClick={() => handlePagination(btnNum)}
                            key={btnNum}
                            type="button" className={`inline-flex ${currentPage === btnNum ? 'bg-blue-900 text-white' : ''} items-center justify-center w-10 h-10 bg-base-100  font-semibold border rounded shadow-md`}>{btnNum}</button>)
                    }
                    {/* next button */}
                    <button
                        disabled={currentPage === numberOfPages}
                        onClick={() => handlePagination(currentPage + 1)}
                        title="next" type="button"
                        className="inline-flex items-center justify-center w-10 h-10 bg-base-100 py-0 border rounded-md shadow-md disabled:cursor-not-allowed">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Apartment;