import RootLayout from "@/components/Layouts/RootLayout";

const BookingProcedurePage = () => {
  return (
    <div className="bg-gray-100  p-8">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-8">BOOKING PROCEDURE</h1>
        <p>
          You can buy tickets for launch, To do so, please follow the steps
          below:
        </p>
        <ol className="list-decimal mt-4 ml-4">
          <li className="mt-4">Select your journey date/time and operator.</li>
          <li className="mt-4">
            You can view all available and booked seats/rooms. From the
            available ones select your seat/rooms.
          </li>
          <li className="mt-4">
            Fill up the required information and complete the payment through a
            secure payment gateway SSLCOMMERZ.
          </li>
          <li className="mt-4">
            After completing the payment, you will get a confirmation message
            and e-mail along with a PDF copy of your ticket.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BookingProcedurePage;

BookingProcedurePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
