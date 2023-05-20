/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toy-categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleAddAToy = (data, event) => {
        event.preventDefault()
        console.log(data);

        fetch(`http://localhost:5000/toys`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    event.target.reset();
                    alert('Booking completed successfully')
                }
            })
    };

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-bold text-4xl text-center my-12 md:my-16 underline">Add A Toy</h2>
            <form onSubmit={handleSubmit(handleAddAToy)} className="w-full border p-4 md:p-16 rounded-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-seller-name">
                            Seller Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-seller-name" {...register("seller_name")} type="text" placeholder="John Doe" required defaultValue={user?.displayName} readOnly />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-seller-email">
                            Seller Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-seller-email" type="email" {...register("seller_email")} placeholder="example@email.com" required defaultValue={user?.email} readOnly />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-subcategory">
                            Category
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-toy-subcategory" {...register("toy_subcategory", { required: true })}>
                                <option value="" disabled selected>Select Toy Car Subcategory</option>
                                {
                                    categories.map(category => <option key={category._id} value={category.subcategory}>{category.subcategory
                                    }</option>)
                                }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-name">
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-toy-name" {...register("toy_name")} type="text" placeholder="Ferrari Red Toy" required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-photo-url">
                            Photo URL
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-toy-photo-url" type="text" {...register("toy_photo_url")} placeholder="https://example.com/test.jpg" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-price">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register("toy_price")} id="grid-toy-price" type="number" placeholder="100" required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-quantity">
                            Available quantity
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register("toy_quantity")} id="grid-toy-quantity" type="number" placeholder="1000" required />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-rating">
                            Rating
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-toy-rating" name="toy_rating" {...register("toy_rating", { min: 1, max: 5 })} type="number" placeholder="5" min={1} max={5} required />
                        <p className="text-gray-600 text-xs italic">Rating Out of 5</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-8">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-photo-url">
                            Description
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-toy-photo-url" type="number" {...register("toy_description")} placeholder="https://example.com/test.jpg" rows="4" cols="50" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <input type="submit" className="btn btn-warning w-full" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;