import DashboardLayout from "@/components/Layouts/DashboardLayout";

const MyProfile = () => {
  return (
    <div className="">
      <h1>My Profile</h1>
    </div>
  );
};

export default MyProfile;

MyProfile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
