import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddNewHouse = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const name = data.name;
        const address = data.address;
        const city = data.city;
        const bedrooms = data.bedrooms;
        const bathrooms = data.bathrooms;
        const size = data.size;
        const picture = data.picture;
        const date = data.date;
        const rent = parseFloat(data.rent);
        const number = data.number;
        const description = data.description;

        const allStoreData = { name, address, city, bedrooms, bathrooms, size, picture, date, rent, number, description };
        // post data in mongodb
        fetch('https://house-hunter-server-production-454d.up.railway.app/postHouseData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allStoreData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('You successfully add new House')
                    reset();
                }

            })
        console.log(allStoreData);

    }
    return (
        <div className="max-w-7xl mx-auto text-[#3B3A3A]">
            <h2 className="text-4xl font-bold mt-5 text-center lg:text-start">Add A New House</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:mx-0 border py-8 px-3 lg:px-10 lg:py-12 rounded-md mt-10">
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-3">
                    {/* house name */}
                    <div>
                        <span className="my-4 font-semibold">Owner Name*</span> <br />
                        <input type="text" name='name' {...register("name", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Owner Name" required />
                    </div>
                    {/* address */}
                    <div>
                        <span className="my-4 font-semibold">Address*</span> <br />
                        <input type="text" name='address' {...register("address", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Address" required />
                    </div>

                    {/* city */}
                    <div>
                        <span className="my-4 font-semibold">City*</span> <br />
                        <input type="text" name='city' {...register("city", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="City" required />
                    </div>

                    {/* bedrooms */}
                    <div>
                        <span className="my-4 font-semibold">Bedrooms*</span> <br />
                        <input type="number" name='bedrooms' {...register("bedrooms", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Bedrooms" required />
                    </div>

                    {/* bathrooms */}
                    <div>
                        <span className="my-4 font-semibold">Bathrooms*</span> <br />
                        <input type="number" name='bathrooms' {...register("bathrooms", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Bathrooms" required />
                    </div>

                    {/* room size */}
                    <div>
                        <span className="my-4 font-semibold">Room Size Meter*</span> <br />
                        <input type="number" name='size' {...register("size", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Room Size" required />
                    </div>

                    {/* Picture */}
                    <div>
                        <span className="my-4 font-semibold">Picture URL*</span> <br />
                        <input type="text" name='picture' {...register("picture", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Picture URL" required />
                    </div>

                    {/* availability date */}
                    <div>
                        <span className="my-4 font-semibold">Availability Date*</span> <br />
                        <input type="date" name='date' {...register("date", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Availability Date" required />
                    </div>

                    {/* Rent per Month */}
                    <div>
                        <span className="my-4 font-semibold">Rent per Month $*</span> <br />
                        <input type="number" name='rent' {...register("rent", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Rent per Month" required />
                    </div>

                    {/* phone number*/}
                    <div>
                        <span className="my-4 font-semibold">Phone Number*</span> <br />
                        <input type="text" name='number' {...register("number", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Phone Number" required />
                    </div>
                </div>
                {/*description*/}
                <div>
                    <span className="my-4 font-semibold">Description*</span> <br />
                    <textarea type="text" name='description' {...register("description", { required: true })} className="w-full  py-8 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Description" required />
                </div>

                {/* btn */}
                <div className="flex justify-center">
                    <input type="submit" value='SUBMIT' className="w-full  py-5  font-bold border-2 bg-[#07332F] text-white rounded-lg  mt-2 cursor-pointer" />

                </div>
            </form>
        </div>
    );
};

export default AddNewHouse;