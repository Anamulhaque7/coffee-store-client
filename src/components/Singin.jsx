import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Singin = () => {

    const { singInUser } = useContext(AuthContext)

    const handelSingIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        singInUser(email, password)
            .then(result => {
                console.log(result.user)
                // update last login time
                const lastLoginTime = result?.user?.metadata
                    ?.lastSignInTime;

                const loginInfo = { email, lastLoginTime };

                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('sing in info update in bd', data)
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <h2 className="text-4xl font-bold">Sing In Now!</h2>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelSingIn} className="card-body">

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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sing in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singin;