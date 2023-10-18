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
  { id: "3", link: "/", title: "Booking Procedure" },
  { id: "4", link: "/", title: "Privacy Policy" },
  { id: "5", link: "/", title: "Contact us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dashboarOpen, dashboarSetOpen] = useState(false);
  const session = useSession();
  console.log(session);

  return (
    <header className="">
      <HotLine></HotLine>
      <div className=" text-red-800 bg-base-100">
        <div className="p-2 container flex flex-row-reverse lg:flex-row justify-between items-center h-12 lg:h-16 mx-auto">
          <div className="hidden lg:block">
            <Title></Title>
          </div>
          <div className="hidden lg:block">
            <ul className="items-stretch lg:flex space-x-3 ">
              {navLinks.map((link) => (
                <li key={link.key} className="">
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
            {!session?.status === "authenticated" ? (
              <Link href="/signIn" className="font-semibold text-green-800">
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
        <Mobile navLinks={navLinks} open={open}></Mobile>
        <Sidebar dashboarOpen={dashboarOpen}></Sidebar>
      </div>
    </header>
  );
};

export default Navbar;
