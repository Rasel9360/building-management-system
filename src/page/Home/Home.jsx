import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <h2 className="text-5xl font-jura font-bold">This is home page </h2>
            <button className="btn">Click me</button>
        </div>
    );
};

export default Home;