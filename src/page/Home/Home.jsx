import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Coupons from "../../components/Coupons/Coupons";
import Location from "../../components/Location/Location";

const Home = () => {
    return (
        <div>
            <Helmet><title>BEVERLY RESIDENCE</title></Helmet>
            <Banner></Banner>
            <About></About>
            <Coupons></Coupons>
            <Location></Location>
        </div>
    );
};

export default Home;