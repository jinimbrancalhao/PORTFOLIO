import React from 'react'

const nav = () => {
  return (
    <div id="nav">
      <ul className="flex justify-evenly bg-none w-screen h-32 items-center">
        <li>
          <a className="sm:text-2xl md:text-3xl text-white" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="sm:text-2xl md:text-3xl text-white" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="sm:text-2xl md:text-3xl text-white" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default nav
