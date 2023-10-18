/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const LatestLounch = () => {
  return (
    <section className="py-6 my-8">
      <div className="">
        <h2 className="text-4xl font-bold ms-4">
          Latest <span className="text-red-700">Launch</span>
        </h2>
      </div>
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 sm:grid-cols-3">
          <img
            className="object-cover w-full dark:bg-gray-500 aspect-square"
            src="/assets/Launch/Launch-1.jpg"
          />
          <img
            className="object-cover w-full dark:bg-gray-500 aspect-square"
            src="/assets/Launch/Launch-2.jpg"
          />
          <img
            className="object-cover w-full dark:bg-gray-500 aspect-square"
            src="/assets/Launch/Launch-3.jpg"
          />
          <img
            className="object-cover w-full dark:bg-gray-500 aspect-square"
            src="/assets/Launch/Launch-4.jpg"
          />
          <img
            className="object-cover w-full dark:bg-gray-500 aspect-square"
            src="/assets/Launch/Launch-5.jpg"
          />
          <img
            className="object-cover w-full dark:bg-gray-500 aspect-square"
            src="/assets/Launch/Launch-6.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestLounch;
