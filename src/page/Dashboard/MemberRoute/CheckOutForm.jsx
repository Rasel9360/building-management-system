import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckOutForm.css'
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState("")
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();


    const { data: agreement = [] } = useQuery({
        queryKey: ['agreement', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/agreement/${user?.email}`)
            return data
        }
    })

    // console.log(agreement);

    const price = agreement[0]?.rent;
    console.log(price);

    useEffect(() => {
        axiosSecure.post(`/create-payment-intent`, { price: price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', card
        })

        if (error) {
            console.log("Payment error", error);
            setError(error.message)
        } else {
            console.log("Payment method", paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonyms',
                    email: user?.email || 'anonyms'
                }
            }
        })

        if (confirmError) {
            console.log(confirmError.message);
            setError(confirmError.message)
        }
        else {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
            }
        }

        // save payment server site
        const payment = {
            name: user?.displayName,
            email: user?.email,
            transactionId: paymentIntent.id,
            rent: price,
            apartment_no: agreement[0]?.apartment_no,
            date: agreement[0]?.paymentDate
        }

        const { data } = await axiosSecure.post('/payment', payment)
        console.log(data);
        if (data.insertedId) {
            toast.success('Payment Successful')
            navigate('/dashboard/payment-history')
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className="text-red-600">{error}</p>
                <button
                    className="btn bg-blue-800 mt-5 btn-sm text-white hover:bg-blue-900"
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;