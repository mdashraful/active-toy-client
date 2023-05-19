const Gallery = () => {
    return (
        <div className="container mx-auto">
            <div className="grid-cols-3 p-5 md:p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                <div className="w-full rounded">
                    <img src="https://images.unsplash.com/photo-1598084991519-c90900bc9df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"

                        alt="image" />
                </div>
                <div className="w-full col-span-2 row-span-2 rounded">
                    <img src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
                <div className="w-full rounded">
                    <img src="https://images.unsplash.com/photo-1558563763-9157dc01afbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
                <div className="w-full rounded">
                    <img src="https://images.unsplash.com/photo-1594787317554-dcc17c53f741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
                <div className="w-full rounded">
                    <img src="https://images.unsplash.com/photo-1584641911870-6196a92c1920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
                <div className="w-full rounded">
                    <img src="https://images.unsplash.com/photo-1574243121728-7bbecdf295e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;