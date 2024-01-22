import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const name = data.name;
        const roll = data.roll;
        const number = data.number;
        const email = data.email;
        const password = data.password;

        const allData = {
            name, Roll: roll, number, email, password
        };
        reset();
        console.log(allData);

    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:ml-96 text-center lg:text-start mt-10">
                <div className="text-[#3B3A3A]">
                    <h2 className="text-4xl font-semibold">Register</h2>
                    <p className="text-xl mt-3">Join Our Community</p>
                </div>
            </div>
            <div className="flex justify-center mt-5 mb-10">
                {/* form */}

                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[45%] w-full mx-2 border-2 py-8 px-5 rounded-md shadow-md">
                    {/* name */}
                    <span className="my-4 font-semibold">Full Name*</span> <br />
                    <input type="text" name='name' {...register("name", { required: true })} className="w-full lg:w-[95%] py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Full Name" required /> <br />

                    {/* roll */}
                    <span className="my-4 font-semibold">Roll*</span> <br />
                    <select className="w-full lg:w-[95%] py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" {...register("roll")}>
                        <option value="House Renter">House Renter</option>
                        <option value="House Owner">House Owner</option>
                    </select> <br />

                    {/* phone number */}
                    <span className="my-4 font-semibold">Phone Number*</span> <br />
                    <input type="number" name='number' {...register("number", { required: true })} className="w-full lg:w-[95%] py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Enter phone number" required /> <br />

                    {/* email */}
                    <span className="my-4 font-semibold">Enter Email*</span> <br />
                    <input type="email" name='email' {...register("email", { required: true })} className="w-full lg:w-[95%] py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Enter phone number" required /> <br />

                    {/* password */}
                    <span className="my-4 font-semibold">Enter Password*</span> <br />
                    <input type="password" name='password' {...register("password", { required: true })} className="w-full lg:w-[95%] py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Enter phone number" required /> <br />

                    {/* btn */}
                    <div className="flex justify-center">
                        <input type="submit" value='SUBMIT' className="w-full lg:w-[100%] py-4 px-3 font-semibold border-2 bg-[#07332F] text-white rounded-lg  mt-3 cursor-pointer" />

                    </div>
                    <p className=" text-[#3B3A3A] mt-5 text-center font-semibold text-lg">Already registered? <Link to='/login'><span className="font-bold cursor-pointer"> Go to LOGIN</span></Link></p>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;