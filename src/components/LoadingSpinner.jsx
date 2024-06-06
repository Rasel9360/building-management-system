import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-56px)]">
            <FadeLoader size={100} color="blue" />
        </div>
    );
};

export default LoadingSpinner;