/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Herobanner = () => {
  return (
    <div className="bg-cover bg-center h-[80vh] relative ">
      <img
        src="/assets/lonch.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl text-white font-semibold uppercase">
          Launch TICKETS
        </h1>
        <p className="text-1xl md:text-2xl italic text-white  mt-5">
          We are here for your complete booking solution
        </p>
        <Link
          href="/service"
          className="btn bg-red-700 hover:bg-red-600 text-white mt-6 text-sm px-6 ms:px-8"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Herobanner;
