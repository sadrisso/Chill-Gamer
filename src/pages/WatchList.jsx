import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const WatchList = () => {

    const data = useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-28'>
            {
                data.map((d) =>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={d.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{d.title}</h2>
                            <p>{d.description}</p>
                            <p>Rating: {d.rating}</p>
                            <p>Published: {d.year}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/review/${d._id}`}><button className="btn">Explore Details</button></Link>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default WatchList;