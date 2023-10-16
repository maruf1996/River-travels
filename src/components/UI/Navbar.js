/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pOpen, pSetOpen] = useState(false);
  const session = useSession();
  console.log(session);

  return (
    <header className="">
      <div className="bg-red-800 p-2 w-full text-center text-gray-100">
        <h1 className="text-xs md:text-sm">
          Hotline: +8801778907918, +8801978907918 (06:00AM-12:00AM)
        </h1>
      </div>
      <div className=" text-gray-800 bg-white">
        <div className="p-2 container flex justify-between items-center h-12 md:h-16 mx-auto">
          <div className="">
            <Link
              href="/"
              className="text-2xl md:text-4xl font-bold font-roboto"
            >
              River Travels
            </Link>
          </div>
          <div className="">
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <Link
                  href="/"
                  className="flex items-center uppercase px-4 hover:text-red-600 text-sm tracking-wide"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  href=""
                  className="flex items-center uppercase px-4 hover:text-red-600 text-sm tracking-wide"
                >
                  About Us
                </Link>
              </li>
              <li className="flex">
                <Link
                  href=""
                  className="flex uppercase items-center px-4 hover:text-red-600 text-sm tracking-wide"
                >
                  Booking Procedure
                </Link>
              </li>
              <li className="flex">
                <Link
                  href=""
                  className="flex uppercase items-center px-4 hover:text-red-600 text-sm tracking-wide"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="flex">
                <Link
                  href=""
                  className="flex items-center uppercase px-4 hover:text-red-600 text-sm tracking-wide"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            {!session?.status === "authenticated" ? (
              <Link href="/signIn" className="font-semibold text-green-800">
                signIn
              </Link>
            ) : (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  onClick={() => pSetOpen(!pOpen)}
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                {pOpen && (
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28"
                  >
                    <li>
                      <Link href="/" className="justify-between">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="justify-between">
                        Dashboard
                      </Link>
                    </li>
                    <li className="">
                      <button>Logout</button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
          <button onClick={() => setOpen(!open)} className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* mobile ul  */}
        <div className="">
          <ul
            className={`items-stretch mt-3 lg:hidden  ${
              open ? "flex flex-col" : "hidden"
            }`}
          >
            <li className="py-2 border-y-2 ">
              <Link
                href="/"
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                Home
              </Link>
            </li>
            <li className="py-2 border-b-2">
              <Link
                href=""
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                About Us
              </Link>
            </li>
            <li className="py-2 border-b-2">
              <Link
                href=""
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                Booking Procedure
              </Link>
            </li>
            <li className="py-2 border-b-2">
              <Link
                href=""
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-2 border-b-2">
              <Link
                href=""
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                Contact us
              </Link>
            </li>
            <li className="py-2 border-b-2">
              <Link
                href=""
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                Profile
              </Link>
            </li>
            <li className="py-2 border-b-2">
              <Link
                href=""
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                Dashboard
              </Link>
            </li>
            <li className="py-2 border-b-2">
              <Link
                href=""
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
