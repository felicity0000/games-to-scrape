import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="relative-container border-b-2 border-b-red-500 py-6 left-0 top-0 right-0 sticky z-10 bg-transparent bg-opacity-60 backdrop-blur-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-red-500 border rounded-lg p-2 bg-white"
        >
          Games-To-Scrape
        </Link>
        <div className="md:hidden">
          <MobileNav/>
        </div>
        <div className="hidden md:block">
          <MainNav/>
        </div>
      </div>
    </div>
  );
};

export default Header;
