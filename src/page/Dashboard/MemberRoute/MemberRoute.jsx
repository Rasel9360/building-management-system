import { CgProfile } from "react-icons/cg";
import MenuItem from "../MenuItem/MenuItem";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidBadgeDollar } from "react-icons/bi";

const MemberRoute = () => {
    return (
        <div>
            <ul className="">
                <li>
                    <MenuItem label='My Profile' address='member-profile' icon={CgProfile}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Make Payment' address='make-payment' icon={BiSolidBadgeDollar}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Payment History' address='payment-history' icon={MdOutlinePayment}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Announcements' address='member-announcement' icon={TfiAnnouncement}></MenuItem>
                </li>
            </ul>
        </div>
    );
};

export default MemberRoute;