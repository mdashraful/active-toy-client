/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
    const allToys = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-4xl text-center my-12 md:my-16 underline">All Toys</h2>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>S/N</th>
                            <th>SellerName</th>
                            <th>Toy Name</th>
                            <th>Toy Category</th>
                            <th>Toy Price</th>
                            <th>Toy Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map((toy, index) =>
                                <tr key={toy._id} className="text-center">
                                    <th>{index + 1}</th>
                                    <th>{toy.seller_name}</th>
                                    <td>{toy.toy_name}</td>
                                    <td>{toy.toy_subcategory}</td>
                                    <td>$ {toy.toy_price}</td>
                                    <td>{toy.toy_quantity}</td>
                                    <td><Link to={`/toys/${toy._id}`} className="btn btn-warning">View Details</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllToys;