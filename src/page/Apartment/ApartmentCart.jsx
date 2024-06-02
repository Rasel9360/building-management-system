import { MdApartment } from "react-icons/md";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hook/useAxiosSecure";

const ApartmentCart = ({ apartment }) => {
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleAddToAgreement = () => {

        const agreementInfo = {
            clientName: user?.displayName,
            clientEmail: user?.email,
            floor_no: apartment.floor_no,
            block_name: apartment.block_name,
            apartment_no: apartment.apartment_no,
            rent: apartment.rent,
            apartmentId: apartment._id,
            status: 'pending'
        }

        if (user || user?.email) {
            axiosSecure.post('/agreement', agreementInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        // axiosSecure.patch(`/apartment/${apartment._id}`, { status: 'Rented' })
                        // .then(res => {
                        //     console.log(res.data);
                        // })
                        toast.success('Booking successful')
                    }
                })
                .catch(err => {
                    // console.log(err);
                    toast.error(err.response.data.message)
                })
            // console.log(agreementInfo);
        }
        else {
            navigate('/login');
            toast.warning("Before Agreement please login ")
        }
    }

    return (
        <div className=" rounded-md shadow-md relative  group font-jura ">
            <div className="overflow-hidden">
                <img src={apartment?.apartment_image} alt="" className="object-cover object-center group-hover:scale-110  w-full rounded-t-md h-72 transition" />
            </div>
            <p className="absolute top-4 bg-black bg-opacity-55 font-bold text-white py-2 px-4 rounded-md right-4">{apartment?.status}</p>
            <div className="flex flex-col justify-between bg-base-100 p-6 space-y-4">
                <h2 className="text-2xl font-bold tracking-wide flex items-center"><MdApartment /> Apartment No : {apartment?.apartment_no}</h2>
                <div className="flex justify-between text-lg font-bold">
                    <p>Floor No : {apartment?.floor_no}</p>
                    <p>Block Name : {apartment?.block_name}</p>
                </div>
                <h3 className="text-[#03A9F4] text-3xl font-bold">$ {apartment?.rent} / <span className="text-xl text-[#999999]">Month</span></h3>
                <button
                    onClick={handleAddToAgreement}
                    className="btn border-0 w-1/2 mx-auto border-b-4 text-lg btn-outline text-[#001238] uppercase bg-[#EBF8FE]">Agreement</button>
            </div>
        </div>
    );
};

export default ApartmentCart;