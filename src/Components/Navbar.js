import { Link } from 'react-router-dom';
import logo from '../Img/juan-logo.png';

function Navbar() {
  return (
    <div className="flex sm:flex-col justify-between sm:justify-evenly items-center bg-zinc-800 h-1/6  sm:px-2 md:px-10 p-10">
      <div className="flex items-center justify-center hover:scale-105">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo-juan"
              className="h-24 xl:h-20 lg:h-18 md:h-16 sm:h-14 "
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-end sm:justify-evenly items-center w-4/5 text-base md:space-x-5 lg:space-x-8 space-x-10">
        <h2 className="text-slate-200 hover:scale-110">
          <Link to="/about">About</Link>
        </h2>
        <h2 className="text-slate-200 hover:scale-110">
          <Link to="/projects">Projects</Link>
        </h2>
        <h2 className="text-slate-200 hover:scale-110">
          <Link to="/contact">Contact</Link>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
