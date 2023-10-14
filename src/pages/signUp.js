import Link from "next/link";

const SignUp = () => {
  return (
    <div className="min-h-screen m-8 flex justify-center items-center">
      <div className="md:w-4/12 w-11/12">
        <div className="text-center mb-2">
          <h2 className="font-bold text-2xl">Welcome To River Travrls!</h2>
          <h4 className="text-xs">Please sign up with your email .</h4>
        </div>
        <div className="w-full bg-red-700 p-1 rounded-t-lg">
          <h1 className=" text-center text-white font-semibold border-t-rounded">
            Sign Up
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Gender"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Age"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Dropping Point"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="mt-6 flex justify-center">
              <button className="btn btn-sm text-xs bg-red-700 hover:bg-red-600 text-white">
                Sign up
              </button>
            </div>
          </form>
          <div className="text-center mb-8">
            <h4 className="font-semibold">
              Click here to login{" "}
              <Link className="text-blue-800" href="/signIn">
                Alreay have an account ?
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
