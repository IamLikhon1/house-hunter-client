import { useEffect, useRef, useState } from "react";
import SingleCard from "./SingleCard";
import {  FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const searchRef = useRef(null);
    const navigate=useNavigate()
    const [search, setSearch] = useState("");
    const [acs, setAcs] = useState(true);
    const [allDoc, setAllDoc] = useState([]);
    const handleSearch = () => {
        setSearch(searchRef.current.value);

    };
    useEffect(() => {
        fetch(
            `https://house-hunter-server-production-454d.up.railway.app/getAllSearchData?search=${search}&sort=${acs ? "asc" : "desc"
            }`
        )
            .then((res) => res.json())
            .then((data) => setAllDoc(data));
    }, [acs, search]);

    const goToBack=()=>{
        navigate('/dashboard/overview')
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-10 lg:mt-16">
            <span onClick={goToBack} className="flex gap-3 text-2xl items-center mt-3 cursor-pointer"><span className="text-xl font-semibold ml-1">Go To Dashboard</span><FaArrowRightLong /></span>
                <div className="lg:flex items-center justify-between">
                    {/* search */}
                    <div className="lg:flex mt-5">
                        <input type="text" ref={searchRef} className="mt-5 ml-2 lg:ml-0 w-fit px-14 lg:px-44 py-4 rounded-lg border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Search by House Name" />
                        <button onClick={handleSearch} className='px-8 lg:px-14  rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-4 lg:mt-5 ml-14 hover:bg-[#F7A582] hover:text-white duration-500 py-3'>Search</button>
                    </div>
                    {/* sort */}
                    <div>
                        <button className="relative left-10 lg:left-0 px-10 py-4 rounded-md border-2 border-[#07332F] text-[#07332F] font-semibold mt-7 ml-3 hover:bg-[#07332F] hover:text-white duration-500" onClick={() => setAcs(!acs)}>
                            {acs ? "Filter Rent: Low to High" : "Filter Rent: High to Low"}
                        </button>
                    </div>
                </div>
                {/* show data */}
                <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 mx-2 lg:mx-0 my-10 lg:my-16">
                    {
                        allDoc?.map(item => (
                            <SingleCard key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;