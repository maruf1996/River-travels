/* eslint-disable @next/next/no-img-element */
const Upcoming = () => {
  return (
    <div className="container my-8 w-11/12 lg:w-10/12 mx-auto ">
      <h2 className="text-4xl font-bold text-center">Upcoming Services</h2>
      <div className="grid grid-cols-1 gap-6  xl:grid-cols-3 mt-8">
        <div className="card border border-red-300 rounded-md">
          <img
            src="/assets/upcoming/tourse-1.jpg"
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
          />
          <div className="p-2">
            <h2 className="text-xl font-semibold">Travels and Tourse Sevice</h2>
            <p>
              we most prperly tried add our upcoming services Travels and tourse
              service. this services under add of tourse suppose sundarban and
              kuakata tourse
            </p>
          </div>
        </div>
        <div className="card border border-red-300 rounded-md">
          <img
            src="/assets/upcoming/tourse-2.jpg"
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
          />
          <div className="p-2">
            <h2 className="text-xl font-semibold">New Times added a launch</h2>
            <p>
              our new service is a new times added a launch. example 10:30 pm is
              start this launche service. and we hopefully this service is
              choicefully our customer
            </p>
          </div>
        </div>
        <div className="card border border-red-300 rounded-md">
          <img
            src="/assets/upcoming/tourse-3.jpg"
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
          />
          <div className="p-2">
            <h2 className="text-xl font-semibold">New Biggest Launch</h2>
            <p>
              our upcoming best launch services is added by sundarban-16 launch.
              this is highly biggest and supperev launch of bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
