import photo from '../Img/proxy-photo.jpg';

function About() {
  return (
    <div className="flex flex-col items-center h-5/6 ">
      <div className="personal-photo flex items-center justify-center h-2/6 ">
        <img src={photo} alt="me" className="h-5/6 shadow-lg" />
      </div>

      <div className="learning-guide w-4/5 border-2 rounded-lg p-1 m-2 sm:text-sm md:text-sm text-base">
        <h2 className="font-bold">
          <span className="text-orange-600">How</span> an Architect can{' '}
          <span className="text-orange-600">became</span> a{' '}
          <span className="text-orange-600">Front End Developer?</span>
        </h2>
        <h3 className="text-left">
          <span className="font-bold text-orange-600">Step 1: </span>
          Have a first contact with a programing language, like HTML5.
        </h3>
        <h3 className="text-left">
          <span className="font-bold text-orange-600">Step 2: </span>If you like
          it, continue learning some other languages. CSS3, Java Script, etc.
        </h3>
        <h3 className="text-left">
          <span className="font-bold text-orange-600">Step 3: </span>Now try
          some other technologies, packages and frameworks. It could be Git,
          Sass, Webpack, React, etc.
        </h3>
        <h3 className="text-left">
          <span className="font-bold text-orange-600">Step 4: </span> Alright,
          let´s build some projects.
        </h3>
        <h3 className="text-left">
          <span className="font-bold text-orange-600">Step 5: </span>
          Congratulations, start looking for a job as a Jr. Front End Developer.
        </h3>
      </div>
      <div className="my-description w-full h-full bg-zinc-400 sm:bg-zinc-800 flex justify-center items-center sm:text-sm md:text-sm lg:text-sm text-base">
        <div className="w-4/5 p-1 m-2 text-slate-200 font-bold">
          <h2>
            Hi, my name is Juan, I´m a self taught Front End Developer based in
            Mexico, and rigth now I´m on the Setp 5 of my self made guide of How
            to become a Front End Developer. I enjoy taking ideas and turning
            them into something real. In my journey as a Developer I have found
            a love to continuously leraning new skills, and technologies, as
            well as seeing my projects come to life in desktop and mobile
            devices.
          </h2>
          <h2>
            In addition to development, my interests lie in gardening, culture,
            playing videogames, and into fantasy stories that came from books,
            or movies.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
