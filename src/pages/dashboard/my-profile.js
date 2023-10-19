/* eslint-disable @next/next/no-img-element */
import { useGetProfileQuery } from "@/Redux/features/users/userApi";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Loading from "@/components/UI/Loading";
import { useSession } from "next-auth/react";

const MyProfile = () => {
  const session = useSession();
  const { data, isLoading } = useGetProfileQuery(session?.data?.email);
  console.log(data);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error fetching profile data.
      </div>
    );
  }

  const profile = data?.data; // Assuming `data` is the profile object returned by useGetProfileQuery

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4 lg:w-3/12 border-red-500 border-2">
        <div className="text-center">
          <img
            src={profile?.profileImg}
            alt="Profile Image"
            className="w-32 h-32 mx-auto rounded-full border-4 border-red-500"
          />
          <h1 className="text-2xl font-semibold mt-2">{profile?.name}</h1>
          <p className="text-gray-500">{profile?.role}</p>
        </div>
        <div className="mt-4 ">
          <ul className="text-sm">
            <li className="mb-2">
              <strong>Name:</strong> {profile?.name}
            </li>
            <li className="mb-2">
              <strong>Contact No:</strong> {profile?.contactNo}
            </li>
            <li className="mb-2">
              <strong>Gender:</strong> {profile?.gender}
            </li>
            <li className="mb-2">
              <strong>Age:</strong> {profile?.age}
            </li>
            <li className="mb-2">
              <strong>Address:</strong> {profile?.address}
            </li>
            <li className="mb-2">
              <strong>Email:</strong> {profile?.email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

MyProfile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
