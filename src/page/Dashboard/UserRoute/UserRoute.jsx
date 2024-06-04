import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import MenuItem from "../MenuItem/MenuItem";

const UserRoute = () => {
    return (
        <div>
            <ul className="">
                <li>
                    <MenuItem label='User Profile' address='user-profile' icon={CgProfile}></MenuItem>
                </li>
                <li>
                    <MenuItem label='Announcements' address='user-announcement' icon={TfiAnnouncement}></MenuItem>
                </li>
            </ul>
        </div>
    );
};

export default UserRoute;