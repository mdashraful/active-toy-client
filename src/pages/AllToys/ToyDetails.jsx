import { useLoaderData, useNavigate } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="w-11/12 mx-auto ">
            <h2 className="font-bold text-4xl text-center my-12 md:my-16 underline">Toy Details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl p-4 md:p-16">
                <figure className="w-full md:w-1/3"><img src={toy.toy_photo_url} alt="Album" /></figure>
                <div className="card-body w-full md:w-2/3">
                    <h2 className="card-title">Toy Name: {toy.toy_name}</h2>

                    <p>Seller Name: {toy.seller_name}</p>
                    <p>Seller Email: {toy.seller_email}</p>
                    <p>Price: ${toy.toy_price}</p>
                    <p>Price: {toy.toy_rating}</p>
                    <p>Available Quantity: {toy.toy_quantity}</p>
                    <p>Seller Name: {toy.toy_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;