import { FaRegLightbulb } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            className="bg-no-repeat bg-cover bg-[url('./Assets/Home/banner.png')] w-screen h-screen"
        >
            <div className="lg:ml-12 lg:pt-32">
                <h1 className="text-green-100 text-3xl md:text-4xl lg:text-8xl font-bold">
                    FAMILY LOGGING <br className="hidden lg:block" />& FORESTRY COMPANY
                </h1>
                <div className="hidden lg:block w-40 h-0.5 bg-orange-400 md:my-8"></div>
                <p className="text-2xl text-green-100/70 lg:w-2/5">
                    Woodson Lumber Company, with roots dating back to the 1950s, is one of the oldest continuously operating integrated wood products companies.
                </p>
                <div className="flex gap-x-4">
                    <button className='flex items-center text-white text-2xl font-semibold bg-green-400 py-4 px-5 md:my-8'>
                        <FaRegLightbulb className='mx-1' />
                        Our Vision
                    </button>

                    <button className='flex items-center text-white text-2xl font-semibold bg-orange-400 py-4 px-5 md:my-8'>
                        <FaRegLightbulb className='mx-1' />
                        Latest News
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;