import Link from "next/link";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="md:w-3/12 w-11/12">
        <div className="text-center mb-2">
          <h2 className="font-bold text-2xl">Welcome To River Travrls!</h2>
          <h4 className="text-xs">Please login with your email .</h4>
        </div>
        <div className="w-full rounded-t-lg bg-red-700 p-1">
          <h1 className=" text-center text-white font-semibold border-t-rounded">
            Sign In
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
            </div>
            <div className="mt-6 flex justify-center">
              <button className="btn btn-sm text-xs bg-red-700 hover:bg-red-600 text-white">
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center mb-8">
            <h4 className="font-semibold">
              Click here to login Alreay have an{" "}
              <Link className="text-blue-800" href="/signUp">
                New User ?
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
