
const CouponCart = ({coupon}) => {
    return (
        <div>
            <div className="bg-line relative p-10 rounded-md bg-gradient-to-r from-[#01236b] to-[#965EF0] text-center font-jura text-white text-lg space-y-3 hover:scale-105">
                <h4>{coupon?.coupon_description}</h4>
                <p>Coupon code: <span className="font-bold text-xl">{coupon?.coupon_code}</span></p>
                <p>Valid till: {coupon?.validity}</p>
                <div className="w-8 h-8 absolute -right-4 bottom-[40%] rounded-full bg-base-100 z-10"></div>
                <div className="w-8 h-8 absolute -left-4 bottom-[40%] rounded-full bg-base-100 z-10"></div>
            </div>
        </div>
    );
};

export default CouponCart;