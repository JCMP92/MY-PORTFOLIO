import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center h-5/6 px-2 py-1 text-6xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl">
      <div className="sm:w-4/5 space-y-10 font-bold ">
        <h1 className="text-left sm:text-center">Hello World!</h1>
        <h1 className="text-left ml-6 sm:ml-0 sm:text-center">
          I´m{' '}
          <span className="text-orange-600">Juan Carlos Montes Pesquera</span>
        </h1>
        <h1 className="text-left sm:text-center">
          A <span className="text-orange-600">Front End</span> Developer &{' '}
          <span className="text-orange-600">UX</span> Designer
        </h1>
        <h1 className="animate-bounce text-orange-600 ">
          <Link to="/about">Get to know me!</Link>
        </h1>
      </div>
    </div>
  );
}

export default Home;
