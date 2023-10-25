import { useGetRootsQuery } from "@/Redux/features/roots/rootApi";
import { useGetshedulesQuery } from "@/Redux/features/shedule/sheduleApi";
import { useGetStuffQuery } from "@/Redux/features/users/userApi";
import Loading from "@/components/UI/Loading";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddLaunch = () => {
  const { register, handleSubmit } = useForm();
  const { data: stuffs } = useGetStuffQuery(undefined);
  const { data: roots, isLoading } = useGetRootsQuery(undefined);
  const { data: shedules } = useGetshedulesQuery(undefined);
  const router = useRouter();

  const stuff = stuffs?.data;
  const root = roots?.data;
  const shedule = shedules?.data;
  //   console.log(stuff);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await fetch(
        `https://river-travels-backend.vercel.app/api/v1/launchs/create-launch`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );
      const launch = await res.json();
      if (launch.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Launch Created Successfully",
        });
        router.push("/dashboard/launch-management");
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="lg:w-4/12 w-11/12">
        <div className="text-center mb-2">
          <h2 className="font-bold text-2xl">Add a New Launch</h2>
          <h4 className="text-xs">fill the Launch document</h4>
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
                type="number"
                placeholder="Chair Seat"
                className="input input-bordered"
                {...register("chairCoachSeat", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Chair Coach Fare"
                className="input input-bordered"
                {...register("chairCoachFare", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Single Cabin"
                className="input input-bordered"
                {...register("singleCabinSeat", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Single Cabin Fare"
                className="input input-bordered"
                {...register("singleCabinFare", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Vip Cabin Seat"
                className="input input-bordered"
                {...register("vipCabinSeat", { required: true })}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Vip Cabin Fare"
                className="input input-bordered"
                {...register("vipCabinFare", { required: true })}
              />
            </div>

            <div className="form-control">
              <label className="input input-bordered flex items-center justify-between">
                Stuff:
                <select
                  className="w-10/12 bg-base-100 outline-none text-end"
                  {...register("stuffId", { required: true })}
                >
                  {stuff?.map((user) => (
                    <option key={user?.id} value={user?.id}>
                      {user?.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center justify-between">
                Root:
                <select
                  className="w-10/12 bg-base-100 outline-none text-end"
                  {...register("rootId", { required: true })}
                >
                  {root?.map((rt) => (
                    <option key={rt?.id} value={rt?.id}>
                      {rt?.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center justify-between">
                Shedule:
                <select
                  className="w-10/12 bg-base-100 outline-none text-end"
                  {...register("sheduleId", { required: true })}
                >
                  {shedule?.map((sd) => (
                    <option key={sd?.id} value={sd?.id}>
                      {sd?.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="btn btn-sm text-xs bg-red-700 hover:bg-red-600 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLaunch;
