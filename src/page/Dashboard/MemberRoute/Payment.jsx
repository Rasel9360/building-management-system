import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    return (
        <div className='md:w-1/3 mx-auto h-48 mt-20 md:p-6 rounded-lg bg-[#EBF8FE] shadow-xl'>
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;