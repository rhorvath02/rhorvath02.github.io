const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-dark text-light px-4 sm:px-6 md:px-12 py-8 md:py-0"
    >
      {/* Left side: text */}
      <div className="flex-1 text-center md:text-left max-w-2xl mt-6 md:mt-0">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Hi, I'm Robert
        </h2>
        <p className="text-sm sm:text-base md:text-xl mb-6">
          Mechanical engineering Master's student passionate about dynamics, systems modeling, and
          design – with experience at Tesla, Ansys, and Longhorn Racing Electric.
          <br/><br/>
          I also made this website in ~8 hours using React, Vite, TS, and MathJax.
        </p>
        <a
          href="#projects"
          className="inline-block px-5 py-3 bg-brand text-light rounded-xl shadow hover:bg-brand-dark transition text-sm sm:text-base"
        >
          View My Work
        </a>
      </div>

      {/* Right side: image */}
      <div className="flex justify-center md:ml-12">
        <img
          src="./images/hero.png"
          alt="Robert H"
          className="w-40 sm:w-56 md:w-80 lg:w-96 h-auto rounded-2xl shadow-lg object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
