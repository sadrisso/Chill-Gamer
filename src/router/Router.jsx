import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../components/Home';
import AddReview from "../pages/AddReview";
import Login from '../pages/Login';
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-review",
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path: "/all-reviews",
                element: <AllReviews />,
                loader: () => fetch("http://localhost:9000/reviews")
            },
            {
                path: "/review/:id",
                element: <ReviewDetails />,
                loader: ({ params }) => fetch(`http://localhost:9000/review/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])