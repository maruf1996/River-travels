import DashboardLayout from "@/components/Layouts/DashboardLayout";

const MyBooking = () => {
  return (
    <div>
      <h1>My Bookings</h1>
    </div>
  );
};

export default MyBooking;

MyBooking.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
