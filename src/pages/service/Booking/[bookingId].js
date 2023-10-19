import { useSingleLaunchQuery } from "@/Redux/features/launchs/launchApi";
import Loading from "@/components/UI/Loading";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Booking = () => {
  const router = useRouter();
  const { data, isLoading } = useSingleLaunchQuery(router.query.bookingId);
  const { register, handleSubmit } = useForm();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const launch = data?.data;
  //   console.log(launch);

  const onSubmit = async (data) => {
    let price;
    if (data.seat === "chairCoachSeat") {
      price = launch?.chairCoachFare;
    }
    if (data.seat === "singleCabinSeat") {
      price = launch?.singleCabinFare;
    }
    if (data.seat === "vipCabinSeat") {
      price = launch?.vipCabinFare;
    }

    const bookingData = {
      name: data.name,
      contactNo: data.contactNo,
      gender: data.gender,
      age: data.age,
      address: data.address,
      email: data.email,
      launch: launch?.name,
      root: launch?.root?.name,
      seat: data.seat,
      fare: price,
    };
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/booking/create-booking`,
        {
          method: "POST",
          body: JSON.stringify(bookingData),
          headers: { "Content-Type": "application/json" },
        }
      );
      const booking = await res.json();
      // console.log(user);
      if (booking.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Booking Created Successfully",
        });
        router.push("/dashboard/my-booking");
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
    // console.log(bookingData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="lg:w-4/12 w-11/12">
        <div className="text-center mb-2">
          <h2 className="font-bold text-2xl">Booking of {launch?.name}</h2>
          <h4 className="text-xs">fill the all requirement</h4>
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
              <label className="input input-bordered flex items-center justify-between">
                Gender:
                <select
                  className="w-10/12 bg-base-100 outline-none text-end"
                  name="male"
                  {...register("gender", { required: true })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
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
              <div className="form-control w-full">
                <label className="input input-bordered flex items-center justify-between">
                  Category:
                  <select
                    className="w-10/12 bg-base-100 outline-none text-end"
                    name="chairCoachSeat"
                    {...register("seat", { required: true })}
                  >
                    <option value="chairCoachSeat">Chair Coach</option>
                    <option value="singleCabinSeat">Single Cabin</option>
                    <option value="vipCabinSeat">VIP Cabin</option>
                  </select>
                </label>
              </div>
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

export default Booking;
