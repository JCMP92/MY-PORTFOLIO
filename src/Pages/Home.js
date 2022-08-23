import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Hello World!</h2>
      <h1>I´m Juan Montes-Pesquera</h1>
      <h1>A Front End Developer</h1>
      <h1>
        <Link to="/about">Get to know me!</Link>
      </h1>
    </div>
  );
}

export default Home;
