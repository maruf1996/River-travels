import {
  useDeleteLaunchsMutation,
  useGetleunchsQuery,
} from "@/Redux/features/launchs/launchApi";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Loading from "@/components/UI/Loading";
import Swal from "sweetalert2";

const LaunchManagement = () => {
  const { data: launches, isLoading } = useGetleunchsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 2000,
  });
  const launchs = launches?.data;
  const [deleteLaunch] = useDeleteLaunchsMutation();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleLaunchDelete = async (id) => {
    try {
      await deleteLaunch(id);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Launch Delete is Successfully",
      });
    } catch (error) {
      console.error("Error deleting Admin:", error);
    }
  };

  return (
    <div className="lg:w-6/12 mx-auto my-6 p-4">
      <div className="container mx-auto ">
        <h2 className="mb-4 text-2xl font-semibold leadi">Launch List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Index</th>
                <th className="p-3">Name</th>
                <th className="p-3 text-right">Details</th>
                <th className="p-3 text-right">Removed</th>
              </tr>
            </thead>
            <tbody>
              {launchs?.map((launch, idx) => (
                <tr
                  key={launch?.id || idx}
                  className="border-b border-opacity-20"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{launch?.name}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button className="btn btn-xs">Details</button>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button
                        onClick={() => handleLaunchDelete(launch?.id)}
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

export default LaunchManagement;

LaunchManagement.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
