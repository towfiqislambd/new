import { FaUsers,FaTruck } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";

const AdminHome = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold">Hi, Welcome Back!</h2>
            <div className="grid grid-cols-4 gap-5 items-center my-7">
                <div className="rounded flex justify-center bg-purple-500 py-10 text-white gap-3 items-center">
                    <BiSolidBank className="text-5xl" />
                    <div className="">
                        <p className="text-3xl font-extrabold tracking-wider">1000</p>
                        <p className="text-lg">Revenue</p>
                    </div>
                </div>
                <div className="rounded flex justify-center bg-indigo-400 py-10 text-white gap-3 items-center">
                    <FaUsers className="text-5xl" />
                    <div className="">
                        <p className="text-3xl font-extrabold tracking-wider">1500</p>
                        <p className="text-lg">Customers</p>
                    </div>
                </div>
                <div className="rounded flex justify-center bg-rose-400 py-10 text-white gap-3 items-center">
                    <AiFillProduct className="text-5xl" />
                    <div className="">
                        <p className="text-3xl font-extrabold tracking-wider">103</p>
                        <p className="text-lg">Products</p>
                    </div>
                </div>
                <div className="rounded flex justify-center bg-gray-700 py-10 text-white gap-3 items-center">
                    <FaTruck className="text-5xl" />
                    <div className="">
                        <p className="text-3xl font-extrabold tracking-wider">500</p>
                        <p className="text-lg">Orders</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminHome;