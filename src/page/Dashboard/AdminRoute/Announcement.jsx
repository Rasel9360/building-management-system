import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";

const Announcement = () => {
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const announcementInfo = {
            title: data.title,
            description: data.description
        }

        axiosSecure.post('/announcement', announcementInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Announcement added successful');
                    reset();
                }
            })
    }

    return (
        <div className=" w-11/12 lg:w-2/3 mx-auto">
            <div className="shadow-xl p-4 bg-[#EBF8FE] lg:p-10 mt-20 rounded-md">
                <h1 className="text-4xl font-bold font-sev text-center mb-6">Announcement</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="space-y-3 font-jura text-lg  font-bold mt-4">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Announcement Title</label>
                            <input id="username"
                                type="text"
                                placeholder="Title"
                                {...register("title", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            {errors.title && <span className="text-red-600 text-sm">Announcement Title is required</span>}
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Announcement Description</label>
                            <textarea
                                placeholder="Announcement Description"
                                id="" rows={5}
                                {...register("description", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none font-medium focus:ring"
                            ></textarea>
                            {errors.description && <span className="text-red-600 text-sm">Announcement description is required</span>}
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            // onClick={handleAddToAgreement}
                            className="btn border-0 w-[20%] mx-auto border-b-4 text-lg btn-outline text-[#001238] uppercase bg-[#EBF8FE]">Save
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Announcement;