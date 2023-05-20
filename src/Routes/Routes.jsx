import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/AllToys/ToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>,
                loader: () => fetch(`http://localhost:5000/toys`)

            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/add-toy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            }
        ]
    },
]);

export default router;