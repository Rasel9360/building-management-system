import { FaUsers } from "react-icons/fa";
import MenuItem from "../MenuItem/MenuItem";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";
const AdminRoute = () => {
    return (
        <div>
            <ul className="">
                <li>
                    <MenuItem label='Admin Profile' address='admin-profile' icon={CgProfile}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Manage Member' address='manage-member' icon={FaUsers}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Announcement' address='make-announcement' icon={TfiAnnouncement}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Agreement Requests' address='agreement' icon={BiSolidBadgeDollar}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Manage Coupons' address='manage-coupons' icon={RiCoupon2Line}></MenuItem>
                </li>
            </ul>
        </div>
    );
};

export default AdminRoute;