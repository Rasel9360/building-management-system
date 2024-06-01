import image from '../../assets/main.png';

const About = () => {
    return (
        <div className='bg-[#EBF8FE]'>
            <div className='w-10/12 mx-auto'>
                <h2 className="text-2xl md:text-4xl font-jura text-center py-20 capitalize font-bold">about the building</h2>
                <div className='md:flex items-center gap-20 pb-20'>
                    <div className="md:w-1/2 overflow-hidden">
                        <img
                            className='h-[36rem] w-full rounded hover:scale-110 transition-transform'
                            src={image}
                            alt="building photo" />
                    </div>
                    <div className="md:w-1/2">
                        <p className='font-sev text-2xl lg:text-3xl text-justify mt-10 md:mt-0'>
                            Nestled in the vibrant center of Gulshan is the exquisite gem known as Beverly Residence. The regal double-height entrance pulls you into a world of elegance. The furnished "Meet and Greet" allows you to enjoy complete seclusion and privacy. The patterned rooftop adds visual interest. These 3000+ sft, 3 bedroom apartments are surrounded by top-notch restaurants, luxurious hotels, reputable hospitals, and prestigious schools, epitomizing lavish living for individuals with refined tastes. Discover your eternal abode at Beverly Residence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;