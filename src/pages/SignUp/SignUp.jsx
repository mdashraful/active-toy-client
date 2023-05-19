import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSignUp = () => {

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                            <p className="py-6 text-center">Have not any account on our website? Please make a account for full access. It will give you freedom.</p>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account? <Link to={'/login'} className='text-orange-500 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;