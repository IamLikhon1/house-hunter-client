import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { MdAddHomeWork } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
const Dashboard = () => {
    // const { isLoading, data } = useQuery({
    //     queryKey: ['userData'],
    //     queryFn: () =>
    //         fetch('http://localhost:5000/users').then((res) =>
    //             res.json()
    //         ),
    // })
    // if (isLoading) return <div>Loading...</div>
    // const ownerHouse=data.filter(item=>item.Roll=='House Owner');
    // const houseRenter=data.filter(item=>item.Roll=='House Renter');
    // // console.log(ownerHouse);
    // console.log(houseRenter);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-16 ml-1 lg:ml-8">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className=" relative left-16 bottom-5 px-14 py-4 rounded-md border-2 font-semibold   bg-[#F7A582] text-white duration-500 drawer-button lg:hidden">Open Sidebar</label>
                <Outlet />
                <Toaster />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-base-200 ">
                    {/* Sidebar content here */}
                    <li><Link className=" mt-8 px-3 py-2 rounded-md text-lg font-semibold" to='/dashboard/overview'><GrOverview /> Dashboard Overview</Link></li>



                    <li><Link className=" mt-8 px-3 py-2 rounded-md text-lg font-semibold" to='/dashboard/addHouse'> <MdAddHomeWork /> Add New House</Link></li>

                    <li><Link className=" mt-8 px-3 py-2 rounded-md text-lg font-semibold" to='/dashboard/ownerOwnList'> <FaHouseChimney /> Owners Houses</Link></li>

                    <div className="divider"></div>

                    <li><Link className=" mt-5 px-3 py-2 rounded-md text-lg font-semibold" to='/home'><FaHome></FaHome> Home</Link></li>

                </ul>


            </div>
        </div>
    );
};

export default Dashboard;