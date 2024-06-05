import { CgProfile } from "react-icons/cg";
import MenuItem from "../MenuItem/MenuItem";
import { TfiAnnouncement } from "react-icons/tfi";

const MemberRoute = () => {
    return (
        <div>
            <ul className="">
                <li>
                    <MenuItem label='My Profile' address='member-profile' icon={CgProfile}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Announcements' address='user-announcement' icon={TfiAnnouncement}></MenuItem>
                </li>
            </ul>
        </div>
    );
};

export default MemberRoute;