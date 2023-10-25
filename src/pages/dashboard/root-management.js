import {
  useDeleteRootMutation,
  useGetRootsQuery,
  usePostRootMutation,
} from "@/Redux/features/roots/rootApi";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Loading from "@/components/UI/Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const RootManagement = () => {
  const { register, handleSubmit } = useForm();
  const { data, isLoading } = useGetRootsQuery(undefined);
  const [createRoot, { isSuccess }] = usePostRootMutation();
  const [deleteRoot] = useDeleteRootMutation();

  const roots = data?.data;
  // console.log(createRoot);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    const options = {
      data: { name: data?.name },
    };
    createRoot(options)
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Root Created Successfully",
        });
      })
      .catch((error) => {
        console.error("Error updating Root:", error);
      });
  };

  const handleRootDelete = async (id) => {
    try {
      await deleteRoot(id);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Root Delete is Successfully",
      });
    } catch (error) {
      console.error("Error deleting Root:", error);
    }
  };

  return (
    <div className="lg:w-6/12 mx-auto my-16 p-4">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 font-yeseva">
        Add a Root
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className=" flex items-center">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Add Root"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
          </div>
          <div className="ms-2">
            <button className="btn  bg-red-700 hover:bg-red-600 text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="container mx-auto  mt-16">
        <h2 className="mb-4 text-2xl font-semibold leadi">Root List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Index</th>
                <th className="p-3">Root</th>
                <th className="p-3 text-right">Remove</th>
              </tr>
            </thead>
            <tbody>
              {roots?.map((root, idx) => (
                <tr
                  key={root?.id || idx}
                  className="border-b border-opacity-20"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{root?.name}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button
                        onClick={() => handleRootDelete(root?.id)}
                        className="btn btn-xs"
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RootManagement;

RootManagement.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
