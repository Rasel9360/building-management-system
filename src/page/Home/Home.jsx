import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";

const Home = () => {
    return (
        <div>
            <Helmet><title>BEVERLY RESIDENCE</title></Helmet>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;