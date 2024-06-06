import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import CouponCart from "./CouponCart";
import LoadingSpinner from "../LoadingSpinner";

const Coupons = () => {
    const axiosSecure = useAxiosSecure();

    const { data: coupon = [] , isLoading} = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/coupons')
            return res.data;
        }
    })

    // console.log(coupon);

    return (
        <div className="my-20">
            <div className="mb-10 space-y-2">
                <h2 className="text-2xl md:text-4xl font-jura text-center  capitalize font-bold">Coupons</h2>
                <p className="text-lg font-jura text-center md:w-1/3 mx-auto">Enjoy exclusive discounts and special offers on our range of BEVERLY RESIDENCE.</p>
            </div>
            {isLoading && <LoadingSpinner></LoadingSpinner>}
            <div className="w-10/12 mx-auto gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    coupon.map(coupon => <CouponCart
                        key={coupon._id}
                        coupon={coupon}
                    ></CouponCart>)
                }
            </div>
        </div>
    );
};

export default Coupons;