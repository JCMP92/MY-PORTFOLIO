import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center h-5/6 px-2 py-1 text-base">
      <div className="w-3/5 space-y-10">
        <h1 className="text-left">Hello World!</h1>
        <h1 className="text-left ml-6">I´m Juan Montes-Pesquera</h1>
        <h1 className="text-left">A Front End Developer</h1>
        <h1 className="animate-bounce text-orange-600 ">
          <Link to="/about">Get to know me!</Link>
        </h1>
      </div>
    </div>
  );
}

export default Home;
