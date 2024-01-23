import OpenModal from "./OpenModal";

const SingleCard = ({ item }) => {
    const { name, address, bathrooms, bedrooms, rent, city, number } = item;
    return (
        <div>
            <div className="border-2 pt-2 pb-5 px-5 rounded-md cursor-pointer">
                <span className="bg-[#F7A582] px-28 py-2 text-white font-bold text-2xl relative right-5 rounded-l-md">${rent}</span>
                <img className="w-[85%] h-fit mx-auto my-2" src="https://img.freepik.com/free-photo/view-3d-house-model_23-2150761166.jpg?t=st=1705943343~exp=1705946943~hmac=407ae3a8ab3bb2bbb02690be249ca52f4232bf32c61468dcd2382482d93157f6&w=740" alt="" />

                <div>
                    <h2 className="text-xl font-bold h-14 my-2">Owner Name : {name}</h2>
                    <hr className="border border-gray-400 w-[300px] mt-6" />
                    <h4 className="text-lg font-semibold my-2">Address: {address}</h4>
                    <h4 className="text-lg font-semibold my-2">City: {city}</h4>

                    <div className="flex justify-between">
                        <h4 className="text-lg font-semibold my-2">Bedrooms: {bedrooms}</h4>
                        <h4 className="text-lg font-semibold my-2">Bathrooms: {bathrooms}</h4>
                    </div>

                    <h4 className="text-lg font-semibold my-2">Phone Number: {number}</h4>
                </div>
                {/* btn */}
                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="w-full lg:w-[100%] py-4 px-3 font-semibold border-2 bg-[#07332F] text-white rounded-lg  mt-3 cursor-pointer">Book Appointment</button>
                {/* modal */}
                <OpenModal/>
            </div>
        </div>
    );
};

export default SingleCard;