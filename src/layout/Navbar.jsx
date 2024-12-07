import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const links = <div className="flex gap-5 ">
        <Link to="/">Home</Link>
        <Link to="/add-review">Add Review</Link>
        <Link to={`/watch-list/${user?.email}`}>WatchList</Link>
        <Link to="/my-review">My Review</Link>
        <Link to="/all-reviews">All Reviews</Link>
    </div>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log("Signed Out Successful")
                toast.success("Successfully Logged Out")
                navigate("/login")
            })
            .catch((err) => {
                console.log("ERR", err)
            })
    }


    return (
        <div className="">
            <div className="navbar bg-orange-800 text-white py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gaming</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && user?.email ?
                        <div className="flex gap-1 md:gap-3 items-center">
                            <img src={user?.photoURL} alt="" className="w-[40px] h-[40px] rounded-full" />
                            <button className="btn " onClick={handleLogOut}>Logout</button>
                        </div> :
                        <div>
                            <Link to="/login"><a className="btn btn-warning">Login</a></Link>
                        </div>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;