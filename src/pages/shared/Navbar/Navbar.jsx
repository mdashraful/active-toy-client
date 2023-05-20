import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const { logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
    }

    return (
        <div className="navbar mb-5 w-full md:w-11/12 mx-auto py-4 bg-warning">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/all-toys"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/add-toy"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Add A Toy
                            </NavLink>
                        </li>
                        {
                            user && <li>
                                <NavLink
                                    to="/my-toys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    My Toys
                                </NavLink>
                            </li>
                        }
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        {/* <li className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </li> */}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-3xl font-bold hidden lg:flex">Active Toy</Link>
            </div>
            <div className="navbar-center flex lg:hidden">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/all-toys"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            All Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-toy"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Add A Toy
                        </NavLink>
                    </li>
                    {
                        user && <li>
                            <NavLink
                                to="/my-toys"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                My Toys
                            </NavLink>
                        </li>
                    }
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {/* <div className="form-control hidden md:block">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div> */}
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="" title={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><button onClick={handleSignOut}>Logout</button></li>
                        </ul>
                    </div> : <Link to='/login' className="btn btn-warning">Login</Link>
                }
            </div>
        </div >
    );
};

export default Navbar;