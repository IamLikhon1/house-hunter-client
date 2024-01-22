import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const OwnerOwnList = () => {
    const { isLoading, data, refetch } = useQuery({
        queryKey: ['ownersData'],
        queryFn: () =>
            fetch('http://localhost:5000/getAllOwnerData').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <div className="text-2xl text-center">Loading ...</div>
    // console.log(data);
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
                fetch(`http://localhost:5000/deleteData/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'House data has been deleted.',
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
            <h2 className="text-4xl font-bold mt-5">ALL Owners Lists</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table text-center text-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Owner Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Number</th>
                            <th>Rent</th>
                            <th>Bathrooms/Bedrooms</th>
                            <th>Delete Action</th>
                            <th>Update Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((item, index) => (

                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.city}</td>
                                    <td>{item.number}</td>
                                    <th>${item.rent}</th>
                                    <th>{item.bathrooms}/{item.bedrooms}</th>
                                    <td onClick={() => handleDelete(item._id)} className="bg-red-500 text-white rounded-md font-semibold cursor-pointer">Delete</td>
                                    <Link to={`/updateHouse/${item._id}`}> <td className="bg-blue-400 text-white rounded-md font-semibold cursor-pointer ">Update</td> </Link>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OwnerOwnList;