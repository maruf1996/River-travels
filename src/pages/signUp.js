import Link from "next/link";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/auth/signup`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const user = await res.json();
      // console.log(user);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  return (
    <div className="min-h-screen m-8 flex justify-center items-center bg-white">
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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered"
                {...register("contactNo", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Gender"
                className="input input-bordered"
                {...register("gender", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Role"
                className="input input-bordered"
                {...register("role", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Age"
                className="input input-bordered"
                {...register("age", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
                {...register("address", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password", { required: true })}
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
