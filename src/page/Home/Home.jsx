import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Coupons from "../../components/Coupons/Coupons";

const Home = () => {
    return (
        <div>
            <Helmet><title>BEVERLY RESIDENCE</title></Helmet>
            <Banner></Banner>
            <About></About>
            <Coupons></Coupons>
        </div>
    );
};

export default Home;