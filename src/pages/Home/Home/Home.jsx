import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import Gallery from "../Gallery/Gallery";
import MarqueeSection from "../Marquee/MarqueeSection";
import useSetTitle from "../../../hooks/useSetTitle";

const Home = () => {
    const toys = useLoaderData();

    useSetTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab toys={toys}></CategoryTab>
            <MarqueeSection toys={toys}></MarqueeSection>
        </div>
    );
};

export default Home;