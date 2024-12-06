

const AddReview = () => {
    return (
        <div className="flex flex-col justify-center items-center border border-black mt-20 w-1/3 mx-auto py-20">
            <div>
                <h1 className="text-3xl font-semibold mb-10">Add Your Review</h1>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <input
                    type="rext"
                    placeholder="Game Cover Image"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="Game Title"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="Review Description"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="number"
                    placeholder="Rating"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="Publishing year"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    placeholder="User Name"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="email"
                    placeholder="User Email"
                    className="input input-bordered input-md w-full max-w-xs" />
            </div>

            <div className="mt-10">
                <button className="btn">Add Review</button>
            </div>

        </div>
    );
};

export default AddReview;