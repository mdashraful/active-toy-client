/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from)
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from)
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row my-24 space-x-5">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <p>Go to see yoy here! Please, Login and enjoy freedom</p>
                        <div className="text-center mt-5">
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-warning">
                                Login With Google
                            </button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-warning' type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Cars Doctor <Link to={'/signup'} className='text-orange-500 font-bold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;