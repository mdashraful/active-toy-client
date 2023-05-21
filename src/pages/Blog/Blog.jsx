import useSetTitle from "../../hooks/useSetTitle";

const Blog = () => {
    useSetTitle('Blog');

    return (
        <div className="w-11/12 mx-auto border rounded-md mt-16 p-4 md:p-8">
            <h2 className="font-bold text-5xl text-center mb-8 pt-8">Blogs</h2>
            <div className="w-full mx-auto p-3 pb-5">
                <h4 className="text-lg font-semibold text-rose-600">
                    1. What is an access token and refresh token? How do they work and
                    where should we store them on the client-side?
                </h4>
                <p className="pl-4 mt-3">
                    The access token contains all the information the server needs to know
                    if user requesting or not. Usually they are expired tokens with a
                    short validity period. The refresh token is used to generate a new
                    access token. If the access token expires, the user would have to
                    authenticate again to get an access token with refresh token.
                    <br />
                    We have to store the access token and refresh token securely. Because
                    they are so sensitive data for any users. We would store them to the
                    httpOnly cookie or local storage. HttpOnly cookie is more secure than
                    local storage.
                </p>
            </div>
            <div className="w-full mx-auto p-3 pb-5">
                <h4 className="text-lg font-semibold text-rose-600 mb-4">
                    2. Compare SQL and NoSQL databases?
                </h4>
                <div className="overflow-x-auto px-4">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>SQL databases are table-based.</td>
                                <td>
                                    NoSQL databases are document, key-value, graph or wide-column
                                    stores.
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>SQL databases are vertically scalable.</td>
                                <td>NoSQL databases are horizontally scalable.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>SQL databases are better than multi-row transacions.</td>
                                <td>
                                    NoSQL databases are better for unstructured data like
                                    documents or JSON.
                                </td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>SQL databases are relational.</td>
                                <td>SQL databases are non-relational.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full mx-auto p-3 pb-5">
                <h4 className="text-lg font-semibold text-rose-600">
                    3. What is express js? What is Nest JS?
                </h4>
                <p className="pl-4 mt-3">
                    Express js is a popular web application framework of Node js. It provides ad wide range of functionality for constructing web and mobile applications. You can use express with Node to create single-page, mlti-page or hybrid web application.
                    <br />
                    Nest js is a Node.js framework for building server-side applications. It is based on TypeScript adn JavaScript. This framework is inspired by Angular.
                </p>
            </div>
            <div className="w-full mx-auto p-3 pb-5">
                <h4 className="text-lg font-semibold text-rose-600">
                    4. What is MongoDB aggregate and how does it work?
                </h4>
                <p className="pl-4 mt-3">
                    In MongoDB, Aggregation is a pipeline which processing a large number of documents in a collection by means of passing then through different stages. Aggregation is to calculate aggregate values for groups of documents.
                    <br />
                    The pipeline can filter, sort, group, reshape adn modify documents that pass through the pipeline.
                </p>
            </div>
        </div>
    );
};

export default Blog;