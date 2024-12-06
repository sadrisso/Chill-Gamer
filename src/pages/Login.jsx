import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate()
    const { signInUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginInfo = { email, password }

        signInUser(email, password)
            .then((res) => {
                toast.success("Successfully Logged In")
                console.log("Signed In", res.user)
                form.reset()
                navigate("/")
            })
            .catch((err) => {
                console.log("ERR: ", err)
            })
    }


    return (
        <div>
            <div className="flex flex-col justify-center items-center md:border border-black mt-20 md:w-1/3 mx-auto py-20 px-3">
                <div>
                    <h1 className="text-3xl font-semibold mb-10">User Login</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered input-md w-full max-w-xs" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered input-md w-full max-w-xs" />
                    </div>

                    <div className="mt-10">
                        <button className="btn btn-info w-full">Login</button>
                    </div>
                </form>
                <p className='mt-10 text-blue-500'>Don't have an account? <Link to="/register">Register</Link></p>

            </div>
        </div>
    );
};

export default Login;