import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTab = () => {
    return (
        <div className='container mx-auto p-8 md:px-20'>
            <h2 className="font-bold text-4xl text-center my-12 md:my-16 underline">Categories</h2>
            <Tabs>
                <TabList>
                    <Tab>Regular Car</Tab>
                    <Tab>Sports Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;

