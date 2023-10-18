import DashboardLayout from "@/components/Layouts/DashboardLayout";

const LaunchManagement = () => {
  return (
    <div>
      <h1>Add Launch</h1>
    </div>
  );
};

export default LaunchManagement;

LaunchManagement.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
