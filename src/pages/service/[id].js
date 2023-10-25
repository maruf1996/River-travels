import { useSingleLaunchQuery } from "@/Redux/features/launchs/launchApi";
import Loading from "@/components/UI/Loading";
import Link from "next/link";
import { useRouter } from "next/router";

const LaunchDetailsPage = () => {
  const router = useRouter();
  const { data, isLoading } = useSingleLaunchQuery(router.query.id);
  const launch = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="w-11/12 lg:w-6/12 mx-auto p-8 bg-rose-800 rounded-lg shadow-lg">
        <h2 className="text-3xl lg:text-5xl text-white font-semibold mb-4">
          {launch?.name}
        </h2>
        <p
          className={`text-2xl ${
            launch?.isAvailable ? "text-green-500" : "text-black"
          }`}
        >
          {launch?.isAvailable ? "Available" : "Not Available"}
        </p>
        <div className="mt-8 text-white">
          <div className=" flex justify-between flex-col lg:flex-row">
            <p className="">
              <span className="font-semibold">Root:</span> {launch?.root?.name}
            </p>
            <p className="">
              <span className="font-semibold">Shedule:</span>{" "}
              {launch?.shedule.name}
            </p>
            <p className="">
              <span className="font-semibold">Master:</span>{" "}
              {launch?.stuff.name}
            </p>
          </div>
          <div className="flex justify-between flex-col mt-8 lg:flex-row">
            <p className="">
              <span className="font-semibold">Chair Coach Seat Available:</span>{" "}
              {launch?.chairCoachSeat} ps
            </p>
            <p className="">
              <span className="font-semibold">Chair Coach Fare:</span>{" "}
              {launch?.chairCoachFare} Tk
            </p>
          </div>
          <div className="flex justify-between flex-col mt-8 lg:flex-row">
            <p className="">
              <span className="font-semibold">Single Cabin Available:</span>{" "}
              {launch?.singleCabinSeat} ps
            </p>
            <p className="">
              <span className="font-semibold">Single Cabin Fare:</span>{" "}
              {launch?.singleCabinFare} Tk
            </p>
          </div>
          <div className="flex justify-between flex-col mt-8 lg:flex-row">
            <p className="">
              <span className="font-semibold">VIP Cabin Avaolable:</span>{" "}
              {launch?.vipCabinSeat} ps
            </p>
            <p className="">
              <span className="font-semibold">VIP Cabin Fare:</span>{" "}
              {launch?.vipCabinFare} Tk
            </p>
          </div>
          <div className="flex items-center lg:justify-center mt-8">
            <Link href={`/service/Booking/${launch?.id}`} className="btn">
              Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetailsPage;
