import { FaHome } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="bg-[#001238] text-white font-jura">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6 ">
                                <p className="text-xl lg:text-3xl font-bold font-jura flex items-center gap-2"><span className="text-orange-500"><FaHome /></span><span className="text-orange-500">BEVERLY</span> RESIDENCE</p>
                                <p className="max-w-sm mt-2  font-sev text-xl">Nestled in the vibrant center of Gulshan is the exquisite gem known as Beverly Residence. The regal double-height entrance pulls you into a world of elegance.</p>
                                <div className="flex mt-6 -mx-2">

                                </div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="">Products</h3>
                                    <a href="#" className="block mt-2   hover:underline">Mega cloud</a>
                                    <a href="#" className="block mt-2   hover:underline">Aperion UI</a>
                                    <a href="#" className="block mt-2   hover:underline">Meraki UI</a>
                                </div>
                                <div>
                                    <h3 className="">Contact</h3>
                                    <span className="block mt-2   hover:underline">+1 526 654 8965</span>
                                    <span className="block mt-2   hover:underline">example@email.com</span>
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