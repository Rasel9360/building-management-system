import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { toast } from "react-toastify";

const Register = () => {
    const { createUser, updateUser, logOutUser } = useAuth()
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleRegister = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                updateUser(data.name, data.photo)
                    .then(() => {
                        console.log('user crate');
                    })
                    .catch((error) => console.log(error));
                toast.success('user create successful')
                logOutUser()
                    .then(() => {
                        navigate('/login')
                     })
                    .catch((error) => console.log(error))
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
        reset()

    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-68px)] font-serif'>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div className='flex w-full border max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>

                    <p className='mt-3 text-2xl font-bold text-center  '>
                        Get Your Free Account Now.
                    </p>
                    <form
                        onSubmit={handleSubmit(handleRegister)}
                    >
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-lg font-medium  '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                {...register("name", { required: true })}
                                placeholder="Enter your name"
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-lg font-medium  '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                {...register("photo", { required: true })}
                                placeholder="Enter your photo URL"
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                        </div>
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
                                placeholder="Enter your email address"
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
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 10,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                }
                                )}
                                placeholder='Enter your password'
                                className='block w-full px-4 py-2   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                            {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-600">Password must be 6 character</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be lese then 20 character</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-600">Password must have one uppercase one lowercase, one number and one spacial character</span>}
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs uppercase text-blue-700 hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?t=st=1715267397~exp=1715270997~hmac=56415ca70aa110117fded7327e4ccdb8f4e69a75481686d97ad5a4223eb9dcf5&w=740')`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Register;