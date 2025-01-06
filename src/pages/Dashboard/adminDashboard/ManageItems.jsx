import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const ManageItems = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const handleDelete = _id => {
        axiosSecure.delete(`carts/${_id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Item has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            })
    }
    return (
        <section>
            <SectionTitle heading='manage all items' subHeading='Hurry Up!'></SectionTitle>
            <p className="text-xl font-semibold mb-5 text-gray-800">Total Items: 6</p>
            <div className="overflow-x-auto rounded-lg">
                <table className="table bg-slate-200">
                    <thead className="bg-yellow-600">
                        <tr className="text-gray-800 text-[15px]">
                            <th className="py-5 tracking-wide">ID</th>
                            <th className="py-5 tracking-wide">Item Image</th>
                            <th className="py-5 tracking-wide">Item Name</th>
                            <th className="py-5 tracking-wide">Price</th>
                            <th className="py-5 tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((singleCart, idx) => <tr key={singleCart._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded-lg border border-gray-300 h-14 w-14">
                                                <img src={singleCart.image} className="w-full" alt="Item Image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleCart.name}</td>
                                <td>${singleCart.price}</td>
                                <th className="space-x-5">
                                    <button onClick={() => handleDelete(singleCart._id)} className="bg-yellow-600 text-white p-2 rounded"><FiEdit className="text-xl" /></button>
                                    <button onClick={() => handleDelete(singleCart._id)} className="bg-error text-white p-2 rounded"><RiDeleteBin6Line className="text-xl" /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ManageItems;