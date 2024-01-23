import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const OpenModal = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = (data) => {
        const name = data.name
        const number = data.number
        const email = data.email;
        const allInfo = { name, number, email }

        fetch('http://localhost:5000/postRenterData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your Book set successfully')
                }
            })
        reset()
    };
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
                        <h2 className="text-2xl text-[#07332F] my-3 font-bold text-center">Rent Your Dream Home</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* name */}

                            <input {...register("name", { required: true })} type="text" name="name" className="mt-5 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Full Name"
                            />

                            <br />

                            {/* Number */}

                            <input {...register("number", { required: true })} type="text" name="number" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Phone Number"
                            />

                            <br />

                            {/* Email */}

                            <input {...register("email", { required: true })} type="email" name="email" className=" mt-2 lg:ml-1 w-full  px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Email" />

                            {/* button */}
                            <div>
                                <input type="submit" value='Book' className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-[#07332F] text-white cursor-pointer font-medium" />
                            </div>
                        </form>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default OpenModal;