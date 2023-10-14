import { useRouter } from "next/router";

const NotfoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    // router.push("/");
  }, 5000);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className=" p-8 text-center">
        <h1 className="text-8xl font-semibold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-red-700 mb-4  font-bold">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mb-8 font-bold">
          The page youre looking for doesnt exist or has been moved.
        </p>
      </div>
    </div>
  );
};

export default NotfoundPage;
