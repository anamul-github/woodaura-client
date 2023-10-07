import Categories from "../Components/Home/Categories/Categories";
import Hero from "../Components/Home/Hero";
import Services from "../Components/Home/Services/Services";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Testimonials />
            <Services />
        </>
    );
};

export default Home;