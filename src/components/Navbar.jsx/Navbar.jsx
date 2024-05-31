
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hook/useAuth";
// import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
    const { user, logOutUser } = useAuth();
    // const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('Log out successfully')
            })
            .catch(err => {
                toast.error(err.message)
            })

    }

    const navLinks = <>
        <li><NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-bold' : ''}
            to='/'>Home
        </NavLink></li>
        <li><NavLink
            className={({ isActive }) => isActive ? 'border-b-2 border-orange-500 pb-1 font-bold' : ''}
            to='/apartment'>Apartments
        </NavLink></li>


        {/* {
            user ? <><button onClick={handleLogOut}>LOGOUT</button></> :
                <li><NavLink to='/login'>LOGIN</NavLink></li>
        } */}

    </>

    return (
        <div className="navbar fixed z-10  bg-[#001238] text-white md:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 font-jura text-xl">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'>
                
                <p className="text-2xl lg:text-3xl font-bold font-jura flex items-center gap-2"><span className="text-orange-500"><FaHome /></span><span className="text-orange-500">NR</span> Home</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-8 px-1 font-jura text-xl font-bold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end font-jura text-xl font-bold">
                {
                    user ? <>
                        <div title={user?.displayName} className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full hover:border-2 hover:border-orange-600 ">
                                    <img alt="user image" src={user?.photoURL}/>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black font-jura text-lg rounded-box w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><a>Settings</a></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                    </> :
                        <ul><li><NavLink to='/login'>Login / Register</NavLink></li></ul>
                }

            </div>
        </div>
    );
};

export default Navbar;