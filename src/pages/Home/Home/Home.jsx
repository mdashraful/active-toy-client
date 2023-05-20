import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    const toys = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab toys={toys}></CategoryTab>
        </div>
    );
};

export default Home;