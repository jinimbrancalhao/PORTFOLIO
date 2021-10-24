import React from 'react'

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-title">
        <h2 className="md:text-6xl sm:text-3xl font-extrabold ">Projects</h2>
      </div>
      <div className="project-pages">
        <div className="p1">
          <img
            className="rounded-full md:h-96 md:w-96 sm:h-36 sm:w-36 border-8 border-gray-500 shadow-xl object-cover"
            src="https://i.imgur.com/wE1GoXf.png"
            alt="project1"
          />
          <h2 className="md:m-12 md:text-3xl sm:m-5 sm:text-sm">GameStart</h2>
          <h3 className="md:text-2xl md:mb-10 sm:text-lg sm:mb-10 text-center">
            Stack: PostgreSQL | Express.js | React.js | Node.js
          </h3>
          <p className="md:text-xl sm:text-sm text-center overflow-auto">
            GameStart is an e-commerce, fully functional, intuitive, engaging
            full-stack application in which users can browse games, learn about
            their new games, sell/trade their game inventory, and add various
            games to their cart.
          </p>
          <button className="m-9 border-4 p-3 rounded-md md:w-1/5 sm:w-min border-white animate-pulse">
            <a
              id="myLink"
              href="https://peaceful-everglades-79165.herokuapp.com/"
              target="_blank"
            >
              View
            </a>
          </button>
        </div>

        <div className="p2">
          <img
            className="rounded-full md:h-96 md:w-96 sm:h-36 sm:w-36 border-8 border-gray-500 shadow-xl object-cover"
            src="https://i.imgur.com/QrLXMyU.png"
            alt="project2"
          />
          <h2 className="md:m-12 md:text-3xl sm:m-5 sm:text-sm">Whac-A-Mole</h2>
          <h3 className="md:text-2xl md:mb-10 sm:text-lg sm:mb-10 text-center">
            Stack: Vanilla JavaScript
          </h3>
          <p className="md:text-xl sm:text-sm text-center overflow-auto">
            This game will feature a 3x2 grid in which users will have one
            minute to click as many of the randomly-generating moles as
            possible. The game will keep track of how many moles were clicked on
            and present the amount at the end of the minute.
          </p>
          <button className="m-9 border-4 p-3 rounded-md md:w-1/5 sm:w-min border-white animate-pulse">
            <a
              id="myLink"
              href="https://whacamolegame.surge.sh/index.html"
              target="_blank"
            >
              View
            </a>
          </button>
        </div>

        <div className="p3">
          <img
            className="rounded-full md:h-96 md:w-96 sm:h-36 sm:w-36 border-8 border-gray-500 shadow-xl object-cover"
            src="https://i.imgur.com/fIkLoww.jpg"
            alt="project3"
          />
          <h2 className="md:m-12 md:text-3xl sm:m-5 sm:text-sm">Balance</h2>
          <h3 className="md:text-2xl md:mb-10 sm:text-lg sm:mb-10 text-center">
            Stack: MongoDB | Express.js | React.js | Node.js
          </h3>
          <p className="md:text-xl sm:text-sm text-center overflow-auto">
            This app is a place in which people can write reflections and goals,
            as well as view reflections and goals other people have written. The
            motivation behind this app is it can serve not only as a way for
            people to share things about themselves, but to learn and be insired
            by others as well.
          </p>
          <button className="m-9 border-4 p-3 rounded-md md:w-1/5 sm:w-min border-white animate-pulse">
            <a
              id="myLink"
              href="https://radiant-depths-30152.herokuapp.com/"
              target="_blank"
            >
              View
            </a>
          </button>
        </div>

        <div className="p4">
          <img
            className="rounded-full md:h-96 md:w-96 sm:h-36 sm:w-36 border-8 border-gray-500 shadow-xl object-cover"
            src="https://i.imgur.com/auJMbTi.jpg"
            alt="project4"
          />
          <h2 className="md:m-12 md:text-3xl sm:m-5 sm:text-sm">Tic-Tac-Toe</h2>
          <h3 className="md:text-2xl md:mb-10 sm:text-lg sm:mb-10 text-center">
            Stack: Vanilla.js
          </h3>
          <p className="md:text-xl sm:text-sm text-center overflow-auto">
            This app is a 3x3 grid in which users alternate turns in an attempt
            to complete a row, column, or diagonal using either 3 X's or three
            O's.
          </p>
          <button className="m-9 border-4 p-3 rounded-md md:w-1/5 sm:w-min border-white animate-pulse">
            <a id="myLink" href="https://short-knife.surge.sh/" target="_blank">
              View
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
