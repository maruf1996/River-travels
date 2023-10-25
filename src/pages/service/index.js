import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Service = () => {
  const { register, handleSubmit } = useForm();
  const [lounchs, setLounchs] = useState([]);
  const lounches = lounchs?.data;

  const onSubmit = async (data) => {
    const root = data.from + "-" + data.to;

    try {
      const res = await fetch(
        `https://river-travels-backend.vercel.app/api/v1/launchs?searchTerm=${root}`
      );
      const lounchsData = await res.json();
      setLounchs(lounchsData);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="w-11/12 lg:w-6/12 mx-auto my-8">
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className=" flex items-center justify-between">
              From:
              <select
                className="ml-3 bg-base-100 w-9/12 md:w-11/12 input input-bordered"
                name="From"
                {...register("from", { required: true })}
              >
                <option value="dhaka">Dhaka</option>
                <option value="bhola">Bhola</option>
                <option value="borguna">Borguna</option>
                <option value="kuakata">Kuakata</option>
                <option value="jhalokathi">Jhalokathi</option>
                <option value="patuakhali">Patuakhali</option>
                <option value="barishal">Barishal</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className=" flex items-center justify-between">
              To:
              <select
                className="ml-3 w-9/12  md:w-11/12 bg-base-100 input input-bordered"
                name="To"
                {...register("to", { required: true })}
              >
                <option value="barishal">Barishal</option>
                <option value="jhalokathi">Jhalokathi</option>
                <option value="kuakata">Kuakata</option>
                <option value="dhaka">Dhaka</option>
                <option value="bhola">Bhola</option>
                <option value="borguna">Borguna</option>
                <option value="patuakhali">Patuakhali</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="flex items-center justify-between">
              Date:
              <input
                type="date"
                placeholder="Date"
                className="input ml-3 w-9/12  md:w-11/12 input-bordered  "
                {...register("date", { required: true })}
              />
            </label>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="btn btn-sm md:btn-md bg-red-700 hover:bg-red-600 text-white uppercase px-8">
              Search
            </button>
          </div>
        </form>

        {lounchs.status === "success" && !lounches.length > 0 ? (
          <div className="">
            <p className="text-center text-red-700 mb-8">Launch Not Found</p>
          </div>
        ) : (
          <div className="">
            {lounchs.status === "success" && lounches.length > 0 && (
              <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold text-center uppercase">
                  Searchable launch
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <thead>
                      <tr className="text-left">
                        <th className="p-3">Launch</th>
                        <th className="p-3">Started Time</th>
                        <th className="p-3">Root</th>
                        <th className="p-3">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lounches?.map((lounch) => (
                        <tr
                          key={lounch.id}
                          className="border-b border-opacity-20 border-gray-700 bg-gray-900 text-white"
                        >
                          <td className="p-3">
                            <p>{lounch?.name}</p>
                          </td>
                          <td className="p-3">
                            <p>{lounch?.shedule?.name}</p>
                          </td>
                          <td className="p-3">
                            <p>{lounch?.root?.name}</p>{" "}
                          </td>
                          <td className="">
                            <Link
                              href={`/service/${lounch?.id}`}
                              className="btn btn-xs"
                            >
                              Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;

Service.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
