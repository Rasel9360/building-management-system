import useAuth from "../../../hook/useAuth";

const MemberProfile = () => {
    const {user} = useAuth();
    return (
        <div>
            <div className="  md:w-1/2 mx-auto p-6 bg-[#EBF8FE] shadow-md rounded-xl ">
                    <img src={user?.photoURL} alt="user image" referrerPolicy="no-referrer" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square border-4 mb-2 text-blue-950 border-white shadow-xl" />
                    <div className="space-y-4 text-center divide-y ">
                        <div className="my-2 space-y-1">
                            <h2 className="text-4xl font-bold font-sev ">{user?.displayName}</h2>
                            <p className="px-5 text-lg font-jura ">{user?.email}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MemberProfile;