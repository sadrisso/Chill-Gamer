import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const registerInfo = { name, photo, email, password }

        createUser(email, password)
            .then((res) => {
                toast.success("Successfully Registered")
                console.log("Registered", res.user)
                form.reset()

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => { console.log("Profile Updated") })
                    .catch((err) => { console.log("ERR:", err) })
            })
            .catch((err) => {
                console.log("ERR: ", err)
            })
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center md:border border-black mt-20 w-full md:w-1/3 mx-auto py-20 px-3">
                <div>
                    <h1 className="text-3xl font-semibold mb-10">User Registration</h1>
                </div>
                <div>
                    <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered input-md w-full max-w-xs" />
                        <input
                            type="text"
                            name="photoUrl"
                            placeholder="Photo"
                            className="input input-bordered input-md w-full max-w-xs" />
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

                        <div className="mt-10">
                            <button className="btn btn-info w-full">Register</button>
                        </div>
                    </form>

                </div>


                <p className='mt-10 text-blue-500'>Already have an account? <Link to="/login">login</Link></p>

            </div>
        </div>
    );
};

export default Register;