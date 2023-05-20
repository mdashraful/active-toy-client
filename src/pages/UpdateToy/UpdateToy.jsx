/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const UpdateToy = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const toyUpdate = useLoaderData();
    const [toy, setToy] = useState(toyUpdate)
    const navigate = useNavigate();

    const handleUpdateToy = (data, event) => {
        event.preventDefault()
        console.log(data);

        fetch(`http://localhost:5000/toys/${toy._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Updated Successfully");
                    setToy(data);
                    navigate(-1);
                }
            })
    }

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-4xl text-center my-12 md:my-16 underline">Update: {toy.toy_name}</h2>
            <form onSubmit={handleSubmit(handleUpdateToy)} className="w-full border p-4 md:p-16 rounded-lg">
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-price">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register("toy_price")} id="grid-toy-price" defaultValue={toy.toy_price} type="number" placeholder="100" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-quantity">
                            Available quantity
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register("toy_quantity")} id="grid-toy-quantity" type="number" defaultValue={toy.toy_quantity} placeholder="1000" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-8">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-photo-url">
                            Description
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-toy-photo-url" type="number" {...register("toy_description")} defaultValue={toy.toy_description} placeholder="https://example.com/test.jpg" rows="4" cols="50" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <input type="submit" className="btn btn-warning w-full" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;