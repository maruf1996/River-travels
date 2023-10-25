import {
  useDeleteAdminMutation,
  useDeleteStuffMutation,
  useDeleteTravellerMutation,
  useGetAdminQuery,
  useGetStuffQuery,
  useGetTravellerQuery,
} from "@/Redux/features/users/userApi";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Loading from "@/components/UI/Loading";
import Swal from "sweetalert2";

const UserManagement = () => {
  const [deleteTraveller] = useDeleteTravellerMutation();
  const [deleteStuff] = useDeleteStuffMutation();
  const [deleteAdmin] = useDeleteAdminMutation();
  const { data: travellers, isLoading } = useGetTravellerQuery(undefined);
  const { data: stuffs } = useGetStuffQuery(undefined);
  const { data: admins } = useGetAdminQuery(undefined);

  const admin = admins?.data;
  const stuff = stuffs?.data;
  const traveller = travellers?.data;

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleTravellerDelete = async (id) => {
    try {
      await deleteTraveller(id);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Traveller Delete is Successfully",
      });
    } catch (error) {
      console.error("Error deleting Traveller:", error);
    }
  };
  const handleStuffDelete = async (id) => {
    try {
      await deleteStuff(id);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Stuff Delete is Successfully",
      });
    } catch (error) {
      console.error("Error deleting Stuff:", error);
    }
  };
  const handleAdminDelete = async (id) => {
    try {
      await deleteAdmin(id);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Admin Delete is Successfully",
      });
    } catch (error) {
      console.error("Error deleting Admin:", error);
    }
  };

  return (
    <div className="lg:w-6/12 mx-auto my-6 p-4">
      <div className="container mx-auto ">
        <h2 className="mb-4 text-2xl font-semibold leadi">Admin List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Index</th>
                <th className="p-3">Name</th>
                <th className="p-3 text-right">Updated</th>
                <th className="p-3 text-right">Removed</th>
              </tr>
            </thead>
            <tbody>
              {admin?.map((user, idx) => (
                <tr
                  key={user?.id || idx}
                  className="border-b border-opacity-20"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.name}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button className="btn btn-xs">Update</button>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button
                        onClick={() => handleAdminDelete(user?.id)}
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
      <div className="container mx-auto  mt-16">
        <h2 className="mb-4 text-2xl font-semibold leadi">Launch Stuff List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Index</th>
                <th className="p-3">Name</th>
                <th className="p-3 text-right">Updated</th>
                <th className="p-3 text-right">Removed</th>
              </tr>
            </thead>
            <tbody>
              {stuff?.map((user, idx) => (
                <tr
                  key={user?.id || idx}
                  className="border-b border-opacity-20"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.name}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button className="btn btn-xs">Update</button>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button
                        onClick={() => handleStuffDelete(user?.id)}
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
      <div className="container mx-auto  mt-16">
        <h2 className="mb-4 text-2xl font-semibold leadi">Traveller List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Index</th>
                <th className="p-3">Name</th>
                <th className="p-3 text-right">Updated</th>
                <th className="p-3 text-right">Removed</th>
              </tr>
            </thead>
            <tbody>
              {traveller?.map((user, idx) => (
                <tr
                  key={user?.id || idx}
                  className="border-b border-opacity-20"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.name}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button className="btn btn-xs">Update</button>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold">
                      <button
                        onClick={() => handleTravellerDelete(user?.id)}
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

export default UserManagement;

UserManagement.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
