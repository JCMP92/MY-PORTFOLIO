import Project from '../Components/Project-Card';
import Skol from '../Img/gif/Skol.gif';
import KFFTO from '../Img/gif/KFFTO.gif';
import Quizzical from '../Img/gif/Quizzical.gif';
import Weather from '../Img/gif/Weather.gif';
import TicTac from '../Img/gif/TTT.gif';
import RPSGame from '../Img/gif/rpsgame.gif';

function Projects() {
  return (
    <div className="h-full p-4 flex flex-col items-center">
      <div className="my-1.5">
        <h1 className="text-orange-600 text-3xl sm:text-lg md:text-xl  font-bold ">
          Web Development Projects
        </h1>
      </div>
      <div className="projects-container mt-4 w-3/5 sm:w-full md:w-full">
        <Project
          name="Skol: Beer Catalogue"
          url={Skol}
          built="React, React-Router, Context, CSS, PUNK API"
          description="A beer catalgogue that show detailed info about each of the items (beers). 
          It uses PUNK API to fetch the beers on it´s data base and displays it as cards for each individual item, and provides more info when you click on the name of each card."
          live="https://skol.netlify.app/"
          repo="https://github.com/JCMP92/BEER-Catalogue-REACT"
        />
        <Project
          name="KFFTO"
          url={KFFTO}
          built="React, React-Router, CSS, Google Maps"
          description="A project for a local coffee shop in Puebla, México. Provides contact info about the shop, and links to it´s e-commerce store."
          live="https://kffto-react.netlify.app/"
          repo="https://github.com/JCMP92/KFFTO-REACT"
        />
        <Project
          name="Quizzical"
          url={Quizzical}
          built="React, CSS, Open Trivia API"
          description="The goal of this project is to create a web application that shows the user a series of random questions with multiple answers, 
          allowing them to chose between 4 different answers, and showing them if the options they choose were correct or not."
          live="https://quizzical-juandev.netlify.app/"
          repo="https://github.com/JCMP92/Quizzical-App"
        />
        <Project
          name="Weather App"
          url={Weather}
          built="JavaScript, SASS, HTML, Webpack"
          description="With this weather App you could search the current weather and time of a city.
          Fetching data from Weather API and display it, with the option to show the temperature of a city in celsius or fahrenheit units."
          live="https://weather-app-jcmp.netlify.app/"
          repo="https://github.com/JCMP92/Weather-App"
        />
        <Project
          name="Tic-Tac-Toe"
          url={TicTac}
          built="JavaScript, SASS, HTML"
          description="A player vs player Tic-Tac-Toe game."
          live="https://jcmp92.github.io/Tic-Tac-Toe/"
          repo="https://github.com/JCMP92/Tic-Tac-Toe"
        />
        <Project
          name="Magic-Duel rock-paper-scissors"
          url={RPSGame}
          built="JavaScript, CSS, HTML"
          description="A fantasy version of the calssical game rock paper scissors. In this game you take the place of a wizard,
           choose wich kind of spell you want to use agains your enemy"
          live="https://jcmp92.github.io/Magic-Duel-rock-paper-scissors-/"
          repo="https://github.com/JCMP92/Magic-Duel-rock-paper-scissors-"
        />
      </div>
    </div>
  );
}

export default Projects;
