
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
    // const { user, logOutUser } = useContext(AuthContext);
    // const [isAdmin] = useAdmin();

    // const handleLogOur = () => {
    //     logOutUser()
    //         .then(() => {
    //             toast.success('Log out successfully')
    //         })
    //         .catch(err => {
    //             toast.error(err.message)
    //         })

    // }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Apartments</NavLink></li>


        {/* {
            user ? <><button onClick={handleLogOur}>LOGOUT</button></> :
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-jura text-xl font-bold">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl lg:text-3xl font-bold font-jura flex items-center gap-2"><span  className="text-orange-500"><FaHome /></span><span className="text-orange-500">NR</span> Home</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-jura text-xl font-bold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end font-jura text-xl font-bold">

                <ul><li><NavLink to='/login'>Login / Register</NavLink></li></ul>

            </div>
        </div>
    );
};

export default Navbar;