const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Robert Horvath Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
