import Marquee from "react-fast-marquee";

const MarqueeSection = ({ toys }) => {

    return (
        <div className="container mx-auto p-8 md:px-20">
            <p className='font-bold text-4xl text-center my-12 md:my-16 underline'><u>Available Car Toys Display</u></p>
            <div className='my-3 bg-base-100 shadow-xl'>
                <Marquee className="card">
                    {
                        toys.map(toy =>
                            <div key={toy._id} className="w-[200px]">
                                <img src={toy.toy_photo_url} alt="" />
                            </div>
                        )
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeSection;