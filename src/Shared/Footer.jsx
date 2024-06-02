import { FaFacebookF, FaFax, FaHome, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosCall, IoMdMail } from 'react-icons/io';
const Footer = () => {
    return (
        <div>
            <footer className="bg-[#001238] text-white font-jura text-center md:text-start">
                <div className="container p-6 lg:py-10 lg:px-24 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="w-full ">
                            <div className="px-6 ">
                                <p className="text-xl lg:text-3xl font-bold font-jura flex items-center gap-2"><span className="text-orange-500"><FaHome /></span><span className="text-orange-500">BEVERLY</span> RESIDENCE</p>
                                <p className="max-w-sm mt-2  font-sev text-xl">Nestled in the vibrant center of Gulshan is the exquisite gem known as Beverly Residence. The regal double-height entrance pulls you into a world of elegance.</p>
                                <div className="flex mt-6 -mx-2">

                                </div>
                            </div>
                        </div>
                        <div className='space-y-2 '>
                            <h3 className="text-2xl font-bold">Get In Touch</h3>
                            <p className='flex gap-2 items-center'><FaLocationDot /> Plot # 17/A, Road # 126, Gulshan, Dhaka - 1212</p>
                            <p className='flex gap-2 items-center'><IoMdMail />info@gmail.com</p>
                            <p className='flex gap-2 items-center'><IoIosCall />+91 123 456 7890</p>
                            <p className='flex gap-2 items-center'><FaFax /> +91 123 456 7890</p>
                        </div>
                        <div className="mt-6 lg:mt-0 ">
                            <div className="">

                                <div className='space-y-3'>
                                    <h3 className="text-2xl font-bold">Follow Us</h3>
                                    <span className="block mt-2   ">Follow & Subscribe your email to get new business tips.</span>
                                    <div className='flex gap-4 text-2xl'>
                                        <a href="#"><FaFacebookF className='w-10 h-10 rounded-full p-2  bg-[#ffffff] bg-opacity-15' /></a>
                                        <a href="#"> <FaTwitter className='w-10 h-10 rounded-full p-2  bg-[#ffffff] bg-opacity-15' /></a>
                                        <a href="#"><FaLinkedinIn className='w-10 h-10 rounded-full p-2  bg-[#ffffff] bg-opacity-15' /></a>
                                    </div>
                                    <div>
                                        <form>
                                            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg  bg-[#001238] dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                                <input className="px-6 py-2 text-white  bg-[#001238] outline-none  focus:placeholder-transparent dark:focus:placeholder-transparent" type="email" name="email" placeholder="Enter your email" required aria-label="Enter your email" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
                    <div>
                        <p className="text-center ">© BEVERLY RESIDENCE 2024 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;