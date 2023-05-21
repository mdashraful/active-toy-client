/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from 'react';

const AllToys = () => {
    const data = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        filterData();
    }, [searchQuery, sortOrder]);

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

        if (sortOrder === 'ascending') {
            filtered.sort((a, b) => a.toy_price - b.toy_price);
        } else if (sortOrder === 'descending') {
            filtered.sort((a, b) => b.toy_price - a.toy_price);
        }

        setFilteredData(filtered);
    };

    const handleSortClick = () => {
        if (sortOrder === 'ascending') {
            setSortOrder('descending');
        } else {
            setSortOrder('ascending');
        }
    };

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-4xl text-center mt-12 md:mt-16 underline">All Toys</h2>
            <div className="text-center my-6 md:my-8">
                <div className="form-control">
                    <div className="input-group flex justify-center">
                        <input value={searchQuery}
                            onChange={handleSearchQueryChange}
                            placeholder="Search by name" className="input input-bordered w-full md:w-1/2" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button onClick={handleSortClick} className="btn btn-accent mt-4 md:mt-8">Sort {sortOrder === 'ascending' ? 'Descending' : 'Ascending'}</button>
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