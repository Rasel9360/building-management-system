import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { toast } from "react-toastify";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Login = () => {
    const { loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleLogin = (data) => {
        // console.log(data);
        loginUser(data.email, data.password)
            .then(res => {
                // console.log(res.user);
                toast.success('Sign In Successful')
                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                toast.error("Please enter valid info")
            })
        reset();
    }


    return (
        <div className='flex bg-[#F1FAFE] justify-center items-center min-h-[calc(100vh-68px)] font-serif'>
            <Helmet>
                <title>Beverly | Login</title>
            </Helmet>
            <div className='flex w-full border max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?t=st=1715267397~exp=1715270997~hmac=56415ca70aa110117fded7327e4ccdb8f4e69a75481686d97ad5a4223eb9dcf5&w=740')`,
                    }}
                ></div>

                <div className='w-full bg-base-100 px-6 py-8 md:px-8 lg:w-1/2'>

                    <p className='mt-3 text-2xl text-center font-bold  '>
                        Please Login !
                    </p>


                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-lg font-medium  '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                {...register("email", { required: true })}
                                placeholder="Enter email address"
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-lg font-medium  '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                {...register("password", { required: true })}
                                placeholder="Enter password"
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or login with Google
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>

                    <div>
                        <GoogleLogin></GoogleLogin>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/register'
                            className='text-xs text-blue-700 uppercase  hover:underline'
                        >
                            or sign up
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;