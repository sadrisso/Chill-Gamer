

const AddReview = () => {
    return (
        <div className="flex flex-col justify-center items-center md:border border-black mt-20 md:w-1/3 mx-auto py-20 px-3">
            <div>
                <h1 className="text-3xl font-semibold mb-10">Add Your Review</h1>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <input
                    type="rext"
                    name="image"
                    placeholder="Game Cover Image"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    name="title"
                    placeholder="Game Title"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    name="description"
                    placeholder="Review Description"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    name="year"
                    placeholder="Publishing year"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className="input input-bordered input-md w-full max-w-xs" />
                <input
                    type="email"
                    name="email"
                    placeholder="User Email"
                    className="input input-bordered input-md w-full max-w-xs" />
            </div>

            <div className="mt-10">
                <button className="btn btn-info w-full">Add Review</button>
            </div>

        </div>
    );
};

export default AddReview;