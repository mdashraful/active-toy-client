/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from 'react';
import useSetTitle from "../../hooks/useSetTitle";

const AllToys = () => {
    const data = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useSetTitle('All Toys')

    useEffect(() => {
        filterData();
    }, [searchQuery]);

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
        console.log(event.target.value);
    };

    const filterData = () => {
        let filtered = [...data];

        if (searchQuery) {
            filtered = filtered.filter((item) =>
                item.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredData(filtered);
    };

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-4xl text-center mt-12 md:mt-16 underline">All Toys</h2>
            <div className="text-center my-6 md:my-8">
                <div className="form-control">
                    <div className="input flex justify-center">
                        <input value={searchQuery}
                            onChange={handleSearchQueryChange}
                            placeholder="Search by name" className="input input-bordered w-full md:w-1/2" />
                    </div>
                </div>
                {/* <button onClick={handleSortClick} className="btn btn-accent mt-4 md:mt-8">Sort {sortOrder === 'ascending' ? 'Descending' : 'Ascending'}</button> */}
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="">
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
                            filteredData.map((toy, index) =>
                                <tr key={toy._id} className="">
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
        </div>
    );
};

export default AllToys;