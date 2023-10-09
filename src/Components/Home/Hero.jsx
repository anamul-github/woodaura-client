import { FaRegLightbulb } from 'react-icons/fa';

const Hero = () => {
    return (
        <section

            className="bg-no-repeat bg-cover bg-[url('./Assets/Home/banner.png')] w-screen h-screen lg:h-auto xl:h-screen lg:pb-8"
        >
            <div className="pt-48 ml-4 lg:ml-12 lg:pt-32">
                <h1 className="text-green-100 text-4xl md:text-5xl lg:text-8xl font-bold">
                    FAMILY LOGGING <br className="hidden lg:block" />& FORESTRY COMPANY
                </h1>
                <div className="w-40 h-0.5 bg-orange-400 my-6 md:my-8"></div>
                <p className="text-md md:text-xl lg:text-2xl text-green-100/70 lg:w-2/5">
                    Woodaura Company, with roots dating back to the 2020s, is one of the oldest continuously operating integrated wood products companies.
                </p>
                <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4  mt-6 md:mt-0">
                    <button className='flex items-center w-44 md:w-auto text-white text-xl md:text-2xl font-semibold bg-green-400 py-2 md:py-4 px-3 md:px-5 md:my-8'>
                        <span className='flex items-center'>
                            <FaRegLightbulb className='mx-1' />
                            Our Vision
                        </span>
                    </button>

                    <button className='flex items-center w-44 md:w-auto text-white text-xl md:text-2xl font-semibold bg-orange-400 py-2 md:py-4 px-3 md:px-5 md:my-8'>
                        <span className='flex items-center'>
                            <FaRegLightbulb className='mx-1' />
                            Latest News
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;