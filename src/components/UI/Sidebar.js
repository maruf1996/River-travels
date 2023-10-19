import Link from "next/link";

const links = [
  { id: "1", link: "/dashboard/my-profile", title: "My Profile" },
  { id: "2", link: "/dashboard/my-booking", title: "My Bookings" },
  { id: "3", link: "/dashboard/root-management", title: "Root Management" },
  {
    id: "4",
    link: "/dashboard/shedule-management",
    title: "Shedule Management",
  },
  { id: "9", link: "/dashboard/add-launch", title: "Add a Launch" },
  { id: "5", link: "/dashboard/launch-management", title: "Launch Management" },
  { id: "6", link: "/dashboard/add-stuff", title: "Add a Stuff" },
  { id: "7", link: "/dashboard/add-admin", title: "Add a Admin" },
  { id: "8", link: "/dashboard/user-management", title: "User Management" },
];

const Sidebar = ({ dashboarOpen, dashboarSetOpen }) => {
  return (
    <aside className="">
      <ul
        onClick={() => dashboarSetOpen(!dashboarOpen)}
        className={`items-stretch mt-1 ${
          dashboarOpen
            ? "flex flex-col fixed left-0 top-0 w-[80%] md:w-[40%] lg:w-[20%] ease-in-out duration-500 bg-slate-300 h-full z-10 !important"
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
      </ul>
    </aside>
  );
};

export default Sidebar;
