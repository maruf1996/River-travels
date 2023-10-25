import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Sidebar = ({ dashboarOpen, dashboarSetOpen }) => {
  const session = useSession();
  const links = [];
  // console.log(links);

  if (
    session?.data?.role === "admin" ||
    session?.data?.role === "super_admin"
  ) {
    links.push(
      { id: "1", link: "/dashboard/my-profile", title: "My Profile" },
      { id: "2", link: "/dashboard/history", title: "History" },
      { id: "3", link: "/dashboard/root-management", title: "Root Management" },
      {
        id: "4",
        link: "/dashboard/shedule-management",
        title: "Shedule Management",
      },
      { id: "9", link: "/dashboard/add-launch", title: "Add a Launch" },
      {
        id: "5",
        link: "/dashboard/launch-management",
        title: "Launch Management",
      },
      { id: "6", link: "/dashboard/add-stuff", title: "Add a Stuff" },
      { id: "7", link: "/dashboard/add-admin", title: "Add a Admin" },
      { id: "8", link: "/dashboard/user-management", title: "User Management" }
    );
  }
  if (session?.data?.role === "admin") {
    links.push(
      { id: "1", link: "/dashboard/my-profile", title: "My Profile" },
      { id: "2", link: "/dashboard/history", title: "History" },
      { id: "3", link: "/dashboard/root-management", title: "Root Management" },
      {
        id: "4",
        link: "/dashboard/shedule-management",
        title: "Shedule Management",
      },
      { id: "9", link: "/dashboard/add-launch", title: "Add a Launch" },
      {
        id: "5",
        link: "/dashboard/launch-management",
        title: "Launch Management",
      },
      { id: "6", link: "/dashboard/add-stuff", title: "Add a Stuff" }
    );
  }

  if (session?.data?.role === "launch_stuff") {
    links.push(
      { id: "1", link: "/dashboard/my-profile", title: "My Profile" },
      { id: "2", link: "/dashboard/history", title: "History" },
      { id: "9", link: "/dashboard/add-launch", title: "Add a Launch" }
    );
  }

  if (session?.data?.role === "traveller") {
    links.push(
      { id: "1", link: "/dashboard/my-profile", title: "My Profile" },
      { id: "2", link: "/dashboard/history", title: "History" }
    );
  }

  return (
    <aside className="">
      <ul
        onClick={() => dashboarSetOpen(!dashboarOpen)}
        className={`items-stretch ${
          dashboarOpen
            ? "flex flex-col fixed left-0 top-0 w-[90%] md:w-[80%] lg:w-[20%] ease-in-out duration-500 bg-slate-300 h-full z-10 !important"
            : "fixed left-[-100%]"
        }`}
      >
        {links.map((link) => (
          <li key={link.id} className="py-2 border-y-2">
            <Link
              className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              href={link.link}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <button
          onClick={() => signOut()}
          className="px-4 border-y-2 text-start btn"
        >
          Log out
        </button>
      </ul>
    </aside>
  );
};

export default Sidebar;
