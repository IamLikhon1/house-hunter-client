import { useQuery } from "@tanstack/react-query";
import { MdPerson } from "react-icons/md";
import { FaPersonShelter, FaRegFileLines } from "react-icons/fa6";
import { useEffect, useState } from "react";
const Overview = () => {
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        fetch('https://house-hunter-server-production-454d.up.railway.app/getAllRenterData')
            .then(res => res.json())
            .then(data => setBookData(data))
    }, [])
    const { isLoading, data } = useQuery({
        queryKey: ['usersData'],
        queryFn: () =>
            fetch('https://house-hunter-server-production-454d.up.railway.app/users').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <div className="text-2xl text-center">Loading ...</div>

    const ownerHouse = data.filter(item => item.Roll == 'House Owner');
    const renterHouse = data.filter(item => item.Roll == 'House Renter');
    return (
        <div className="max-w-7xl mx-auto text-[#3B3A3A]">
            <h2 className="text-4xl font-bold mt-5">Dashboard Overview</h2>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-0 mt-16">
                {/* owner */}
                <div className="border rounded-lg pt-10 pb-5 pl-5 mx-5 cursor-pointer hover:shadow-md duration-300">
                    <div className="flex items-center gap-10">
                        <div className="px-4 py-4 bg-yellow-100 rounded-md">
                            <h4 className="text-5xl text-[#FFBC34]"><MdPerson /></h4>
                        </div>
                        <div className="text-6xl text-[#6C6B6B] ">{ownerHouse.length}</div>
                    </div>
                    <hr className="border-2 border-[#FFBc34] mt-5 mr-4" />
                    <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">House Owners</p>
                </div>
                {/* renter */}
                <div className="border rounded-lg pt-10 pb-5 pl-5  mx-5 cursor-pointer hover:shadow-md duration-300">
                    <div className="flex items-center gap-10">
                        <div className="px-4 py-4 bg-red-100 rounded-md">
                            <h4 className="text-5xl text-[#FF0034]"><FaPersonShelter /></h4>
                        </div>
                        <div className="text-6xl text-[#6C6B6B] ">{renterHouse.length}</div>
                    </div>
                    <hr className="border-2 border-[#FF0034] mt-5 mr-4" />
                    <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">House Renters</p>
                </div>
                {/* appointment */}
                <div className="border rounded-lg pt-10 pb-5 pl-5  mx-5 cursor-pointer hover:shadow-md duration-300">
                    <div className="flex items-center gap-10">
                        <div className="px-4 py-4 bg-green-100 rounded-md">
                            <h4 className="text-5xl text-[#7BB13C]"><FaRegFileLines /></h4>
                        </div>
                        <div className="text-6xl text-[#6C6B6B] ">{bookData.length}</div>
                    </div>
                    <hr className="border-2 border-[#7BB13C] mt-5 mr-4" />
                    <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">Bookings</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;