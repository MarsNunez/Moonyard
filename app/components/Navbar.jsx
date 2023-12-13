"use client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="mx-auto px-10 max-w-4xl">
      <nav className="w-full navbar text-white rounded-br-3xl rounded-bl-3xl py-3 px-5 flex items-center justify-between">
        <h2 className="uppercase font-bold tracking-widest lg:text-xl">
          Moonyard
        </h2>
        <div className="md:hidden">
          <i className="lni lni-menu border-2 p-1 rounded-full md:hidden"></i>
        </div>
        <ul className="hidden md:flex gap-9">
          <li
            className={`tracking-wider ${
              path == "/" && "text-indigo-600 font-semibold"
            }`}
          >
            Home
          </li>
          <li
            className={`tracking-wider ${
              path == "/moons" && "text-indigo-600 font-semibold"
            }`}
          >
            Moons
          </li>
          <li
            className={`tracking-wider ${
              path == "/about" && "text-indigo-600 font-semibold"
            }`}
          >
            About
          </li>
          <li
            className={`tracking-wider ${
              path == "/blog" && "text-indigo-600 font-semibold"
            }`}
          >
            Blog
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
