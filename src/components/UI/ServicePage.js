import Link from "next/link";

const ServicePage = () => {
  return (
    <section className="p-6 mt-6 bg-teal-800 text-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Choose Your Favorite Services
      </h1>
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3 mt-6">
        <Link
          href=""
          className="flex p-4 md:p-8 justify-center space-x-4 rounded-lg md:space-x-6 bg-yellow-800 text-white"
        >
          <h2 className="text-3xl md:text-4xl">DEC</h2>
        </Link>
        <Link
          href=""
          className="flex p-4 md:p-8 justify-center space-x-4 rounded-lg md:space-x-6 bg-red-800 text-white"
        >
          <h2 className="text-3xl md:text-4xl">SINGLE CABIN</h2>
        </Link>
        <Link
          href=""
          className="flex p-4 md:p-8 justify-center space-x-4 rounded-lg md:space-x-6 bg-purple-800 text-white"
        >
          <h2 className="text-3xl md:text-4xl">VIP CABIN</h2>
        </Link>
      </div>
    </section>
  );
};

export default ServicePage;
