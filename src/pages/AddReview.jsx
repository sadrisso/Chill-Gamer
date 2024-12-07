import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { toast } from "react-toastify";


const AddReview = () => {

    const { user } = useContext(AuthContext)


    const handleSubmit = e => {
        e.preventDefault();

        toast.success("Review Data Submited")

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;

        const reviewInfo = { image, title, description, rating, year }


        //this form data will post to the server soon

        fetch("http://localhost:9000/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })
    }



    return (
        <div className="flex flex-col justify-center items-center md:border border-black mt-20 md:w-1/3 mx-auto py-20 px-3">
            <div>
                <h1 className="text-3xl font-semibold mb-10">Add Your Review</h1>
            </div>

            <form onSubmit={handleSubmit}>
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
                        value={user?.displayName}
                        readOnly
                        name="name"
                        placeholder="User Name"
                        className="input input-bordered input-md w-full max-w-xs" />
                    <input
                        type="email"
                        value={user?.email}
                        readOnly
                        name="email"
                        placeholder="User Email"
                        className="input input-bordered input-md w-full max-w-xs" />
                </div>

                <div className="mt-10">
                    <button className="btn btn-info w-full">Add Review</button>
                </div>
            </form>

        </div>
    );
};

export default AddReview;