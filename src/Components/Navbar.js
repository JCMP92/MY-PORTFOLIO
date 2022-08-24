import { Link } from 'react-router-dom';
import logo from '../Img/Juan Montes-Pesquera-B.png';
function Navbar() {
  return (
    <div>
      <div>
        <h2>
          <Link to="/">
            <img src={logo} alt="logo-juan" height="100px" />
          </Link>
        </h2>
      </div>
      <div>
        <h2>
          <Link to="/about">About</Link>
        </h2>
        <h2>
          <Link to="/projects">Projects</Link>
        </h2>
        <h2>
          <Link to="/contact">Contact</Link>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
