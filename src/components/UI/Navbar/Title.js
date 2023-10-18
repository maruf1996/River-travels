import Link from "next/link";

const Title = () => {
  return (
    <Link
      href="/"
      className=" font-bold text-xl text-red-600 flex items-center"
    >
      <span className=" text-red-700 text-2xl mr-1 font-yeseva">River </span>{" "}
      Travels
    </Link>
  );
};

export default Title;
