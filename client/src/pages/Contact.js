import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-image md:pl-20 overflow-auto">
        <img
          className="rounded-full border-gray-500 border-8 shadow-2xl"
          src="https://i.imgur.com/htxgZ9c.png"
          alt="me"
        />
        <h2 className="md:text-2xl md:m-8 text-center">Skills:</h2>
        <h3 className="md:text-xl text-center md:m-2">
          Languages- HTML | CSS | JavaScript | Python
        </h3>
        <h3 className="md:text-xl text-center md:m-2">
          Frameworks- Vue.js | Express.js
        </h3>
        <h3 className="md:text-xl text-center md:m-2">
          Databases- SQL | MongoDB
        </h3>
        <h3 className="md:text-xl text-center md:m-2">
          Libraries- React.js | Mongoose | Sequelize | Flask
        </h3>
      </div>
      <div className="contact-info overflow-auto">
        <h1 className="md:text-5xl sm:text-lg md:mb-20 md:mt-40">About Me</h1>
        <p className="md:text-2xl text-center md:m-10 md:h- overflow-auto">
          My name is Jin Im, and I am a full-stack software engineer with a
          background in client-facing services and business ownership. I have
          experience scaling a business and providing utmost client
          satisfaction. My interest in development and problem-solving evolved
          from creating and running my own photography business, where I had to
          learn how to use various platforms and design my own website. I enjoy
          working collaboratively and individually, and am rumored to have an
          infectious enthusiasm. :)
        </p>
        <h2 className="md:text-4xl sm:text-lg md:m-5 sm:m-5">Contact Me</h2>
        <h3 className="md:mt-5 text-center md:text-2xl sm:text-base">
          email: <a>jinjinim717@gmail.com</a>{' '}
        </h3>
        <h3 className="md:mt-5 text-center md:text-2xl sm:text-base">
          <a href="https://github.com/jinimbrancalhao">GitHub</a>
        </h3>
        <h3 className="md:mt-5 text-center md:text-2xl sm:text-base">
          <a href="https://www.linkedin.com/in/jinimb/">LinkedIn</a>
        </h3>
        <h3 className="md:mt-5 text-center md:text-2xl sm:text-base">
          <a href="https://docs.google.com/document/d/1_ASOagLmIxkFbsHeftVhTc_kGGTRE8djKKo6B7-SGsQ/edit?usp=sharing">
            Resume
          </a>
        </h3>
      </div>
    </section>
  )
}

export default Contact
