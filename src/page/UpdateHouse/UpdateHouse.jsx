import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateHouse = () => {
    const loader = useLoaderData();
    const navigate=useNavigate();
    const { name, address, city, bedrooms, bathrooms, size, picture, date, rent, number, description,_id } = loader;

    const {
        register,
        handleSubmit
    } = useForm();

    const goToBack=()=>{
        navigate('/dashboard/ownerOwnList')
    }
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

        const allStoreData = { name,address, city, bedrooms, bathrooms, size, picture, date, rent, number, description };
        // post data in mongodb
        fetch(`http://localhost:5000/updateHouses/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allStoreData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Successfully Updated The Information!',
                    text: 'YaY Updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })      

    }
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold mt-10 text-center">Update the below Information</h2>
            <span onClick={goToBack} className="flex gap-3 text-2xl items-center mt-3 cursor-pointer"><FaArrowLeftLong /><span className="text-xl font-semibold">Go To Back</span></span>
            <div className="flex justify-center mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-2 lg:mx-0 border-2 py-8 px-5 lg:px-10 lg:py-10 rounded-md mt-10 shadow-md ">
                    <div className="grid lg:grid-cols-2 gap-5 lg:gap-3">
                        {/* house name */}
                        <div>
                            <span className="my-4 font-semibold">Owner Name*</span> <br />
                            <input type="text" defaultValue={name} name='name' {...register("name", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Owner Name" required />
                        </div>
                        {/* address */}
                        <div>
                            <span className="my-4 font-semibold">Address*</span> <br />
                            <input type="text" defaultValue={address} name='address' {...register("address", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Address" required />
                        </div>

                        {/* city */}
                        <div>
                            <span className="my-4 font-semibold">City*</span> <br />
                            <input type="text" defaultValue={city}  name='city' {...register("city", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="City" required />
                        </div>

                        {/* bedrooms */}
                        <div>
                            <span className="my-4 font-semibold">Bedrooms*</span> <br />
                            <input type="number" defaultValue={bedrooms} name='bedrooms' {...register("bedrooms", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Bedrooms" required />
                        </div>

                        {/* bathrooms */}
                        <div>
                            <span className="my-4 font-semibold">Bathrooms*</span> <br />
                            <input type="number" defaultValue={bathrooms}  name='bathrooms' {...register("bathrooms", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Bathrooms" required />
                        </div>

                        {/* room size */}
                        <div>
                            <span className="my-4 font-semibold">Room Size Meter*</span> <br />
                            <input type="number" defaultValue={size} name='size' {...register("size", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Room Size" required />
                        </div>

                        {/* Picture */}
                        <div>
                            <span className="my-4 font-semibold">Picture URL*</span> <br />
                            <input type="text" defaultValue={picture}  name='picture' {...register("picture", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Picture URL" required />
                        </div>

                        {/* availability date */}
                        <div>
                            <span className="my-4 font-semibold">Availability Date*</span> <br />
                            <input type="date" defaultValue={date} name='date' {...register("date", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Availability Date" required />
                        </div>

                        {/* Rent per Month */}
                        <div>
                            <span className="my-4 font-semibold">Rent per Month*</span> <br />
                            <input type="number"defaultValue={rent}  name='rent' {...register("rent", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Rent per Month" required />
                        </div>

                        {/* phone number*/}
                        <div>
                            <span className="my-4 font-semibold">Phone Number*</span> <br />
                            <input type="text" defaultValue={number} name='number' {...register("number", { required: true })} className="w-full  py-4 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Phone Number" required />
                        </div>
                    </div>
                    {/*description*/}
                    <div>
                        <span className="my-4 font-semibold">Description*</span> <br />
                        <textarea type="text" defaultValue={description} name='description' {...register("description", { required: true })} className="w-full  py-10 px-3 font-semibold border-2 focus:outline-none rounded-lg  my-3" placeholder="Description" required />
                    </div>

                    {/* btn */}
                    <div className="flex justify-center">
                        <input type="submit" value='UPDATE' className="w-full  py-5  font-bold border-2 bg-[#07332F] text-white rounded-lg  mt-2 cursor-pointer" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateHouse;