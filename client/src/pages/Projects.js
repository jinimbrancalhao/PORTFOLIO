import React from 'react'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed bg-opacity-90 flex justify-center"
    >
      <div className="flex justify-center container ">
        <div className="flex flex-col items-center p-10 rounded-xl shadow-2xl md:m-10 sm:m-1 md:h-120  max-w-lg card">
          <img
            className="md:h-64 md:w-64 sm:h-20 sm:w-20 rounded-full object-cover"
            src="https://i.imgur.com/wE1GoXf.png"
          />
          <h2 className="font-bold m-2 project">GameStart</h2>
          <p className="text-center md:h-36 text-lg">
            GameStart is an e-commerce, fully functional, intuitive, engaging
            full-stack application in which users can browse games, learn about
            their new games, sell/trade their game inventory, and add various
            games to their cart.
          </p>
          <a
            className="mt-5 mb-0 border-solid px-10 rounded-sm link"
            id="myLink"
            href="https://peaceful-everglades-79165.herokuapp.com/"
            target="_blank"
          >
            View
          </a>
        </div>
        <div className="flex flex-col items-center p-10 rounded-xl shadow-2xl md:m-10 sm:m-1 h-120 max-w-lg card">
          <img
            className="md:h-64 md:w-64 sm:h-20 sm:w-20  rounded-full object-cover"
            src="https://i.imgur.com/QrLXMyU.png"
          />
          <h2 className="font-bold m-2 project">Whac-A-Mole</h2>
          <p className="text-center md:h-36 text-lg">
            This game will feature a 3x2 grid in which the player will have one
            minute to click as many of the randomly-generating moles as
            possible. The game will keep track of how many moles were clicked on
            and present the amount at the end of the minute.
          </p>
          <a
            className="mt-5 mb-0 border-solid px-10 rounded-sm link"
            id="myLink"
            href="https://whacamolegame.surge.sh/index.html"
            target="_blank"
          >
            View
          </a>
        </div>
        <div className="flex flex-col items-center p-10 rounded-xl shadow-2xl md:m-10 sm:m-1 h-120 max-w-lg card">
          <img
            className="md:h-64 md:w-64 sm:h-20 sm:w-20  rounded-full object-cover"
            src="https://i.imgur.com/fIkLoww.jpg"
          />
          <h2 className="font-bold m-2 project">Balance</h2>
          <p className="text-center md:h-36 text-lg">
            This app is a place in which people can write reflections and goals,
            as well as view reflections and goals other people have written. The
            motivation behind this app is it can serve not only as a way for
            people to share things about themselves, but to learn and be insired
            by others as well.
          </p>
          <a
            className="mt-5 mb-0 border-solid px-10 rounded-sm link"
            id="myLink"
            href="https://radiant-depths-30152.herokuapp.com/"
            target="_blank"
          >
            View
          </a>
        </div>
        <div className="flex flex-col items-center p-10 rounded-xl shadow-2xl md:m-10 sm:m-1 h-120 max-w-lg card">
          <img
            className="md:h-64 md:w-64 sm:h-20 sm:w-20  rounded-full object-cover"
            src="https://i.imgur.com/wE1GoXf.png"
          />
          <h2 className="font-bold m-2 project">GameStart</h2>
          <p className="text-center md:h-36 text-lg">
            GameStart is an e-commerce, fully functional, intuitive, engaging
          </p>
          <a
            className="mt-5 mb-0 border-solid px-10 rounded-sm link"
            id="myLink"
            href="https://whacamolegame.surge.sh/index.html"
            target="_blank"
          >
            View
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
