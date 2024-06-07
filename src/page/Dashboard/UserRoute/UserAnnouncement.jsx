import { Helmet } from "react-helmet-async";
import AnnouncementCart from "../../../components/AnnouncementCart/AnnouncementCart";

const UserAnnouncement = () => {
    return (
        <div>
            <Helmet><title>User | Announcement</title></Helmet>
            <AnnouncementCart/>
        </div>
    );
};

export default UserAnnouncement;