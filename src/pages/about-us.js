import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-4">ABOUT US</h1>
        <p>Trade Lisence: TRAD/DSCC/027694/2020</p>
        <p className="mt-4">
          Welcome to River Travels. River Travels is the name of a comprehensive
          online ticketing platform. We offer tickets for various bus services,
          inland water transportations, all in one place.
        </p>
        <p className="mt-4">
          Online ticketing is part of daily life in many developed countries and
          it offers a comprehensive service with both comfort and ease. We also
          believe in this ethos and are strongly determined to bring change with
          enhanced online ticketing service to all our customers.
        </p>
        <p className="mt-4">
          River Travels offers both web-based and App-based (Android and iOS)
          ticketing. It is quick to download, easy to register, and hassle-free
          to use. We also have a professional support team to provide the best
          service to our customers in the event of any issues or technical
          difficulties.
        </p>
        <p className="mt-4">
          We are always committed to serving the best to our customers. We
          believe in digital service solutions and feel proud to consider
          ourselves a part of a new revolution in the travel sector.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
