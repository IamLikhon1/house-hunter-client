import OpenModal from "./OpenModal";

const SingleCard = ({ item }) => {
    const { name, address, bathrooms, bedrooms, rent, city, number,picture } = item;
    return (
        <div>
            <div className="border-2 pt-2 pb-5 px-5 rounded-md cursor-pointer">
                <div className="bg-[#F7A582] w-[55%] py-2 font-bold text-2xl relative bottom-2 right-5  text-center">${rent}</div>
                <img className="w-[95%] h-[80%] mx-auto my-1 rounded-md" src={picture} alt="" />

                <div>
                    <h2 className="text-xl font-bold h-14 mt-4">Owner Name : {name}</h2>
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