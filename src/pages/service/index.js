import { useForm } from "react-hook-form";

const Service = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
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
    <div className="w-11/12 md:w-6/12 mx-auto my-8">
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="input input-bordered flex items-center justify-between">
              From:
              <select
                className="border-none outline-none bg-base-100"
                name="From"
                {...register("from", { required: true })}
              >
                <option value="dhaka">Dhaka</option>
                <option value="barishal">Barishal</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center justify-between">
              To:
              <select
                className="border-none outline-none bg-base-100"
                name="To"
                {...register("to", { required: true })}
              >
                <option value="barishal">Barishal</option>
                <option value="dhaka">Dhaka</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <input
              type="date"
              placeholder="Date"
              className="input input-bordered"
              {...register("date", { required: true })}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="btn btn-md bg-red-700 hover:bg-red-600 text-white uppercase px-8">
              Search
            </button>
          </div>
        </form>

        {/* table  */}
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-semibold text-center uppercase">
            Searcheble lauche
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gray-700">
                <tr className="text-left">
                  <th className="p-3">Lauche</th>
                  <th className="p-3">Root</th>
                  <th className="p-3">Started time</th>
                  <th className="p-3">Fare</th>
                  <th className="p-3 ">Cabin</th>
                  <th className="p-3">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900 text-white">
                  <td className="p-3 ">
                    <p>Sundarban-6</p>
                  </td>
                  <td className="p-3">
                    <p>Dhaka-Barishal</p>
                  </td>
                  <td className="p-3">
                    <p>9:00 PM</p>
                  </td>
                  <td className="p-3">
                    <p>700</p>
                  </td>
                  <td className="p-3">
                    <p>24</p>
                  </td>
                  <td className="">
                    <button className="btn btn-xs">Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
