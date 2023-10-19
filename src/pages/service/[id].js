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
      <div className="lg:w-6/12 mx-auto p-8 bg-red-700 rounded-lg shadow-lg">
        <h2 className="text-5xl text-white font-semibold mb-4">
          {launch?.name}
        </h2>
        <p
          className={`text-2xl ${
            launch?.isAvailable ? "text-green-300" : "text-black"
          }`}
        >
          {launch?.isAvailable ? "Available" : "Not Available"}
        </p>
        <div className="mt-8 text-white">
          <div className=" flex justify-between">
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
          <div className="flex justify-between mt-8">
            <p className="">
              <span className="font-semibold">Chair Coach Available:</span>{" "}
              {launch?.chairCoachSeat}
            </p>
            <p className="">
              <span className="font-semibold">Chair Coach Fare:</span>{" "}
              {launch?.chairCoachFare} Tk
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="">
              <span className="font-semibold">Single Cabin Available:</span>{" "}
              {launch?.singleCabinSeat}
            </p>
            <p className="">
              <span className="font-semibold">Single Cabin Fare:</span>{" "}
              {launch?.singleCabinFare} Tk
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="">
              <span className="font-semibold">VIP Cabin Avaolable:</span>{" "}
              {launch?.vipCabinSeat}
            </p>
            <p className="">
              <span className="font-semibold">VIP Cabin Fare:</span>{" "}
              {launch?.vipCabinFare} Tk
            </p>
          </div>
          <div className="flex items-center justify-center">
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
