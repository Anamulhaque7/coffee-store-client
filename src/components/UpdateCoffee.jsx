import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, qunatity, supplier, taste, category, deatils, photo } = coffee;
    const uddateCoffee = event => {
        event.preventDefault();

        // form 
        const form = event.target;
        const name = form.name.value;
        const qunatity = form.qunatity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const deatils = form.deatils.value;
        const photo = form.photo.value;
        const updateCoffee = { name, qunatity, supplier, taste, category, deatils, photo };
        console.log(updateCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee update Sucessfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })





    }


    return (

        <div className="bg-[#F4F3F0] p-20">
            <h2 className="text-3xl  font-extrabold">Update {name} </h2>
            <form onSubmit={uddateCoffee}>
                {/* form quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 md:mr-4">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="name" defaultValue={name}
                                placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Availbale Qunatity</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="qunatity"
                                defaultValue={qunatity}
                                placeholder="Availbale Qunatity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* supliy test row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 md:mr-4">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="supplier"
                                defaultValue={supplier}
                                placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="taste"
                                defaultValue={taste}
                                placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* category and deatiles */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 md:mr-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="category"
                                defaultValue={category}
                                placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">
                                Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="deatils"
                                defaultValue={deatils}
                                placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo URL */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="photo"
                                defaultValue={photo}
                                placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block btn-primary" />
            </form>
        </div>

    );
};

export default UpdateCoffee;