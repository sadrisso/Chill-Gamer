import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import { toast } from 'react-toastify';

const ReviewDetails = () => {

    const review = useLoaderData()
    const { image, title, description, year, rating } = review;
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const name = user?.displayName;

    const handleAddToWatchList = () => {

        const reviewData = { image, title, description, year, rating, email, name }

        fetch(`http://localhost:9000/watch-list`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Added to WatchList")
            })
    }

    return (
        <div className='flex justify-center items-center h-[800px]'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Rating: {rating}</p>
                    <p>Published: {year}</p>
                    <div className="mt-5">
                        <Link><button onClick={handleAddToWatchList} className="btn btn-accent w-full">Add To WatchList</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;