import img1 from '../../../assets/images/banner/banner-1.jpg'
import img2 from '../../../assets/images/banner/banner-2.jpg'
import img3 from '../../../assets/images/banner/banner-3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="carousel">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;