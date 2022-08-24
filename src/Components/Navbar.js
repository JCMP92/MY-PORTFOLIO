import { Link } from 'react-router-dom';
import logo from '../Img/juan-logo.png';

function Navbar() {
  return (
    <div className="flex justify-between bg-zinc-800 h-1/6 px-5">
      <div className="flex items-center hover:scale-105">
        <div>
          <Link to="/">
            <img src={logo} alt="logo-juan" className="h-28" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center space-x-5 text-xl">
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
