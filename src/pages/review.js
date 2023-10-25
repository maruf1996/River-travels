import RootLayout from "@/components/Layouts/RootLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const session = useSession();
  //   console.log(session);
  const router = useRouter();

  const onSubmit = async (data) => {
    const review = {
      description: data?.description,
      name: session?.data?.fullName,
    };
    try {
      const res = await fetch(
        `https://river-travels-backend.vercel.app/api/v1/reviews/create-review`,
        {
          method: "POST",
          body: JSON.stringify(review),
          headers: { "Content-Type": "application/json" },
        }
      );
      const reviews = await res.json();
      // console.log(user);
      if (reviews.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Review Created Successfully",
        });
        router.push("/dashboard/my-history");
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong!",
          text: "Review Created not Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  return (
    <div className=" flex items-center justify-center m-4 md:my-16">
      <div className=" lg:w-8/12 mx-auto p-8 md:border-4 rounded-md">
        <h2 className="text-1xl lg:text-4xl font-bold mb-8 font-yeseva text-center">
          Please Write a Review of Your Exprience
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className=" flex items-center">
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Review"
                className="input input-bordered"
                {...register("description", { required: true })}
              />
            </div>
            <div className="ms-2">
              <button className="btn  bg-red-700 hover:bg-red-600 text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4 md:mt-8 flex justify-center">
          <Link href="/dashboard/my-history" className="btn ">
            Skip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;

Review.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
