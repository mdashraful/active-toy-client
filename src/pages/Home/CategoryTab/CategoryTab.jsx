import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

const CategoryTab = ({ toys }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const regularCars = toys.filter((toy) => toy.toy_subcategory === 'Regular Toy Cars');
    const sportsCars = toys.filter((toy) => toy.toy_subcategory === 'Sports Toy Cars');
    const policeCars = toys.filter((toy) => toy.toy_subcategory === 'Police Toy Cars');

    return (
        <div className="container mx-auto p-8 md:px-20">
            <h2 className="font-bold text-4xl text-center my-12 md:my-16 underline">Categories</h2>
            <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
                <TabList>
                    <Tab>Regular Car</Tab>
                    <Tab>Sports Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                <TabPanel className="mt-8">
                    <div className='flex flex-wrap gap-8'>
                        {regularCars.map((toy) => (
                            <div key={toy._id} className="card rounded-none w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={toy.toy_photo_url} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{toy.toy_name}</h2>
                                    <p>Price: {toy.toy_price}</p>
                                    <p>Rating: {toy.toy_rating}</p>
                                    <div className="card-actions">
                                        <Link to={`/toys/${toy._id}`} className="btn btn-warning">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-wrap gap-8'>
                        {sportsCars.map((toy) => (
                            <div key={toy._id} className="card rounded-none w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={toy.toy_photo_url} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{toy.toy_name}</h2>
                                    <p>Price: {toy.toy_price}</p>
                                    <p>Rating: {toy.toy_rating}</p>
                                    <div className="card-actions">
                                        <Link to={`/toys/${toy._id}`} className="btn btn-warning">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-wrap gap-8'>
                        {policeCars.map((toy) => (
                            <div key={toy._id} className="card rounded-none w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={toy.toy_photo_url} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{toy.toy_name}</h2>
                                    <p>Price: {toy.toy_price}</p>
                                    <p>Rating: {toy.toy_rating}</p>
                                    <div className="card-actions">
                                        <Link to={`/toys/${toy._id}`} className="btn btn-warning">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;


