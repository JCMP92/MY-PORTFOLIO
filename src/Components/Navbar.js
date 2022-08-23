import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <div>
        <h2>
          <Link to="/">Home</Link>
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
          <Link to="/cV">CV</Link>
        </h2>
        <h2>
          <Link to="/contact">Contact</Link>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
