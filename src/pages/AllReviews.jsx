import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllReviews = () => {

    const allReviews = useLoaderData()


    return (
        <div className='mt-10'>
            <div>
                <h2 className='text-3xl font-semibold text-center my-10'>All Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto'>
                {allReviews.map((review) => <div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={review.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{review.title}</h2>
                            <p>{review.description}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Published: {review.year}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/review/${review._id}`}><button className="btn">Explore Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AllReviews;