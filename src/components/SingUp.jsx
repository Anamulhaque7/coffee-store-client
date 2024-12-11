import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { NavLink } from "react-router-dom";

const SingUp = () => {
    const { creatUser } = useContext(AuthContext)

    const handelSingUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        creatUser(email, password)

            .then(result => {
                console.log('user created at fb', result.user)
                const createdAt = result?.user?.metadata?.creationTime;


                const newUser = { name, email ,createdAt}

                // seve new user info to the database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user creat to db', data)
                        if(data.insertedId){
                            console.log('user created in db')
                        }
                    })
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <h2 className="text-4xl font-bold">Sing Up Now!</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sing Up</button>
                        </div>
                    </form>
                    <div className="text-center mb-5 font-bold">Ples<span className="text-blue-600 italic underline"><NavLink to="/singin"> Sing In</NavLink></span> </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;