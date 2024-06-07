import Lottie from "lottie-react";
import FaqAnimation from "../../../public/Animation-2.json";
import { Slide } from "react-awesome-reveal";

const Faq = () => {
    return (
        <section className="  w-10/12 mx-auto">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <Slide direction="up" >
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center font-jura mt-10">Frequently Asked Questions</h2>
                    <p className='md:w-[60%] text-center mx-auto font-bold mt-5 font-jura text-lg'>Here you'll find answers to common questions about our Building Management System, including how to manage your account, check room availability, make payments, and request maintenance.</p>
                </Slide>
                <div className="md:flex justify-center items-center gap-10">
                    <Slide direction="left" duration={1500} className="md:w-1/2">
                        <Lottie animationData={FaqAnimation} />
                    </Slide>
                    <Slide direction="right" duration={1500} className=" md:w-[60%]">
                        <div className="space-y-4 font-jura">
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-bold font-jura text-lg">How can I check the availability of rooms or apartments?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 "> You can check the availability of rooms or apartments by navigating to the 'Available Rooms' section on the website or app. Here, you can see real-time availability and other relevant details. </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-bold font-jura text-lg">What are the terms for renting an apartment</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">The terms for renting an apartment vary. Please refer to the 'Rental Agreement' section for detailed information on the terms and conditions.</p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-bold font-jura text-lg">How can I make payments?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">You can make payments securely through our online portal using a credit card, debit card, or bank transfer. Go to the 'Payments' section in your account to proceed. </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-bold font-jura text-lg">Where can I view my payment history?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 "> Log in to your account, go to the 'Payments' section, and select 'Payment History' to view all your past transactions.</p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-bold font-jura text-lg"> How is my personal information protected?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">We use advanced security measures, including encryption and secure servers, to protect your personal information. Please refer to our 'Privacy Policy' for more details.</p>
                            </details>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default Faq;