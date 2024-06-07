import { Helmet } from "react-helmet-async";
import AnnouncementCart from "../../../components/AnnouncementCart/AnnouncementCart";

const MemberAnnouncement = () => {
    return (
        <div>
            <Helmet><title>Member | Announcement</title></Helmet>
            <AnnouncementCart />
        </div>
    );
};

export default MemberAnnouncement;