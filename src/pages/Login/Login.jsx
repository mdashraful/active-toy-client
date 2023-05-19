import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = () => {

    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row my-24 space-x-5">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <p>Go to see yoy here! Please, Login and enjoy freedom</p>
                        <div className="text-center mt-5">
                            <button className="btn btn-outline btn-warning">
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