import Link from "next/link";

const Mobile = ({ navLinks, open, setOpen }) => {
  return (
    <div>
      <div className="lg:hidden">
        <ul
          onClick={() => setOpen(!open)}
          className={`items-stretch ${
            open
              ? "flex flex-col fixed right-0 top-0 w-[90%] md:w-[80%] ease-in-out duration-500 bg-slate-300 h-full z-10 !important"
              : "fixed right-[-100%]"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="py-2 border-y-2 ">
              <Link
                href={link.link}
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
