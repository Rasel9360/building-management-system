import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddCoupon = ({ setIsEditModalOpen, isOpen, refetch }) => {

    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const couponInfo = {
            coupon_code: data.code,
            discount_percentage: data.discount,
            coupon_description: data.description,
            validity: data.validity
        }
        console.log(couponInfo);
        
        axiosSecure.post('/coupon', couponInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Coupon added successful');
                    reset();
                    
                }
            })
            refetch();
    }


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsEditModalOpen(false)}
            >
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-xl text-center leading-6 text-gray-900 font-sev mb-5 font-bold'
                                >
                                    Add Coupon
                                </DialogTitle>
                                <div className='mt-2 w-full'>
                                    {/* Update room form */}
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <div className="space-y-3 font-jura text-lg  font-bold mt-4">
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Coupon Code</label>
                                                <input id="username"
                                                    type="text"
                                                    placeholder="enter coupon code"
                                                    {...register("code", { required: true })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                {errors.code && <span className="text-red-600 text-sm">Coupon code is required</span>}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Discount Percentage</label>
                                                <input id="username"
                                                    type="number"
                                                    placeholder="enter discount percentage"
                                                    {...register("discount", { required: true })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                {errors.discount && <span className="text-red-600 text-sm">Discount percentage is required</span>}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Coupon Validity</label>
                                                <input id="username"
                                                    type="date"
                                                    placeholder="coupon validity"
                                                    {...register("validity", { required: true })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                {errors.code && <span className="text-red-600 text-sm">Coupon validity is required</span>}
                                            </div>
                                            <div>
                                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Coupon Description</label>
                                                <textarea
                                                    placeholder="Announcement Description"
                                                    id="" rows={3}
                                                    {...register("description", { required: true })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none font-medium focus:ring"
                                                ></textarea>
                                                {errors.description && <span className="text-red-600 text-sm">Coupon description is required</span>}
                                            </div>
                                        </div>
                                        <div className="flex justify-end mt-6">
                                            <button
                                                className="btn border-0 w-[20%] mx-auto border-b-4 text-lg btn-outline text-[#001238] uppercase bg-[#EBF8FE]">Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <hr className='mt-8 ' />
                                <div className='mt-2 flex justify-end'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                        onClick={() => setIsEditModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default AddCoupon;