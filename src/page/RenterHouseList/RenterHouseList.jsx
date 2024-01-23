import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const RenterHouseList = () => {
    const { isLoading, data, refetch } = useQuery({
        queryKey: ['ownersData'],
        queryFn: () =>
            fetch('https://house-hunter-server-production-454d.up.railway.app/getAllRenterData').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <div className="text-2xl text-center">Loading ...</div>
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://house-hunter-server-production-454d.up.railway.app/deleteDataRenter/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Renters House data has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })

            }
        })

    }
    return (
        <div className="max-w-7xl mx-auto text-[#3B3A3A]">
            <h2 className="text-4xl font-bold mt-5">Renters Book Houses</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table text-center text-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Renter Name</th>
                            <th>Renter Email</th>
                            <th>Renter Number</th>
                            <th>Delete Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index) => (

                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.number}</td>
                                    <td onClick={() => handleDelete(item._id)} className="bg-red-500 text-white rounded-md font-semibold cursor-pointer">Delete</td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RenterHouseList;