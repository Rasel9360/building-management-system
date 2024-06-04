import useAuth from "../../../hook/useAuth";

const UserProfile = () => {
    const {user} = useAuth();
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-56px)]">
            <div className="  md:w-1/2 mx-auto p-16 bg-[#EBF8FE] shadow-md rounded-xl sm:px-12 ">
                <img src={user?.photoURL} alt="user image" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square border-4 mb-2 text-blue-950 border-white shadow-xl" />
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

export default UserProfile;