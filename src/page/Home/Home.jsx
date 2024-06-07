import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Coupons from "../../components/Coupons/Coupons";
import Location from "../../components/Location/Location";
import Faq from "../../components/Faq/Faq";

const Home = () => {
    return (
        <div>
            <Helmet><title>Beverly Residence</title></Helmet>
            <Banner></Banner>
            <About></About>
            <Coupons></Coupons>
            <Faq></Faq>
            <Location></Location>
        </div>
    );
};

export default Home;