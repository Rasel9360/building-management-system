import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { TfiAnnouncement } from "react-icons/tfi";


const AnnouncementCart = () => {
    const axiosSecure = useAxiosSecure();

    const { data: announcements = [] } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/announcement')
            return data
        }
    })

    console.log(announcements);

    return (
        <div>
            <h2 className="text-4xl font-sev font-bold text-center my-10">All AnnouncementCart</h2>
            <div className="w-11/12 md:w-3/5 mx-auto space-y-8">
                {
                    announcements.map(announcement =>
                        <div key={announcement._id}>
                            <div className="font-jura bg-[#EBF8FE] shadow-lg p-8 text-lg rounded-md space-y-2">
                                <h2 className="text-2xl italic font-bold flex items-center gap-2 text-blue-950"><TfiAnnouncement></TfiAnnouncement>{announcement?.title}</h2>
                                <p>{announcement?.description}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AnnouncementCart;