import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, qunatity, supplier, taste, photo } = coffee;

    const handelDelete = _id => {
        console.log('Delete', _id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div className="card bg-base-100 card-side py-4 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full pr-4 pt-2">
                <div>
                    <h2 className="card-title font-bold">Name : {name}</h2>
                    <p>{qunatity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn join-item">View</button>
                        <Link to={`updateCoffee/${_id}`} className='btn btn-neutral join-item'> Edit</Link>
                        <button onClick={() => handelDelete(_id)} className="btn bg-red-600 join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;