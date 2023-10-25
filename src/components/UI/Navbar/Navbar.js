/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import Sidebar from "../Sidebar";
import HotLine from "./HotLine";
import Mobile from "./Mobile";
import Title from "./Title";

const navLinks = [
  { id: "1", link: "/", title: "Home" },
  { id: "2", link: "/about-us", title: "About Us" },
  { id: "3", link: "/booking-procedure", title: "Booking Procedure" },
  { id: "4", link: "/cancel-refund-policy", title: "Cancel Refund Policy" },
  { id: "5", link: "/privacy-policy", title: "Privacy Policy" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dashboarOpen, dashboarSetOpen] = useState(false);
  const session = useSession();
  // console.log(session?.data?.role);

  return (
    <header className="">
      <HotLine></HotLine>
      <div className=" text-red-800 bg-base-100">
        <div className="p-2 container flex flex-row-reverse lg:flex-row justify-between items-center h-12 lg:h-16 mx-auto">
          <div className="hidden lg:block">
            <Title></Title>
          </div>
          <div className="hidden lg:flex">
            <ul className="items-stretch lg:flex space-x-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="flex items-center uppercase px-4 hover:text-red-600 text-sm tracking-wide"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            {session?.data === null ? (
              <Link
                href="/signIn"
                className="font-semibold btn btn-sm text-red-800"
              >
                signIn
              </Link>
            ) : (
              <div onClick={() => dashboarSetOpen(!dashboarOpen)} className="">
                {dashboarOpen ? (
                  <AiOutlineClose size={25} />
                ) : (
                  <CgMenuGridR className="" size={25} />
                )}
              </div>
            )}
          </div>
          <div className="lg:hidden mb-1">
            <Title></Title>
          </div>
          <div className="lg:hidden">
            <div onClick={() => setOpen(!open)} className="block lg:hidden">
              {open ? (
                <AiOutlineClose size={22} />
              ) : (
                <AiOutlineMenu size={22} />
              )}
            </div>
          </div>
        </div>
        {/* mobile ul  */}
        <Mobile navLinks={navLinks} open={open} setOpen={setOpen}></Mobile>
        <Sidebar
          dashboarOpen={dashboarOpen}
          dashboarSetOpen={dashboarSetOpen}
        ></Sidebar>
      </div>
    </header>
  );
};

export default Navbar;
