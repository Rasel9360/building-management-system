import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    return (
        <div className='w-11/12 md:w-1/3 mx-auto h-64 mt-20 p-2 md:p-6 rounded-lg bg-[#EBF8FE] shadow-xl'>
             <div>
                <form 
                // onSubmit={handleSearch}
                >
                    <div className='flex justify-between p-1 overflow-hidden border bg-opacity-75 rounded-lg mb-10  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 bg-base-100'>
                        <input
                            className='px-6 py-2 text-black placeholder-black bg-opacity-30 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Enter a valid coupon code'
                            aria-label='Enter Job Title'
                        />

                        <button type="submit" className="btn text-white bg-[#001238] hover:bg-[#001238]">Apply</button>
                    </div>
                </form>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;