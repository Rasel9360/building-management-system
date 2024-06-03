import { FaBars, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardNav = ({ toggleOpen, setToggleOpen }) => {
    return (
        <div className="bg-[#001238] p-3 text-white flex gap-3 items-center">
            <FaBars
                onClick={() => setToggleOpen(!toggleOpen)}
                className="text-xl cursor-pointer" />
            <Link to='/'>
                <p className="text-xl lg:text-2xl font-bold font-jura flex items-center gap-2"><span className="text-orange-500"><FaHome /></span><span className="text-orange-500">BEVERLY</span> RESIDENCE</p>
            </Link>
        </div>
    );
};

export default DashboardNav;