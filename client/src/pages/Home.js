import React from 'react'

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <div className="h-full flex flex-col justify-center items-center ">
        <h1 className="md:text-8xl sm:text-xl home-text">Jin Im Brancalhao</h1>
        <h1 className="md:text-6xl sm:text-xl m-5 animate-pulse space-x-4 home-text">
          Full-Stack Developer
        </h1>
        <button className="m-9 border-4 p-3 rounded-md md:w-1/6 sm:w-min border-red-400 animate-bounce">
          <a className="text-red-400 md:text-3xl sm:text-xl" href="#contact">
            Contact Me
          </a>
        </button>
      </div>
    </section>
  )
}

export default Home
