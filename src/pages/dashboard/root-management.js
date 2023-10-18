import DashboardLayout from "@/components/Layouts/DashboardLayout";

const RootManagement = () => {
  return (
    <div>
      <h1>Add Root</h1>
    </div>
  );
};

export default RootManagement;

RootManagement.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
