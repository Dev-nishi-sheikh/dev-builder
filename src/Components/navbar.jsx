import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo-text.png"
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <div className="text-2xl font-bold">
        <img src={logo} alt="logo"></img>
          
        </div>

        
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a>Home</a>
          <a>Technologies</a>
          <a>Projects</a>
          <a>About</a>
          <a>Contact</a>
        </div>
          <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700">Sign In</button>

          <button className="bg-gradient-to-r text-amber-50 from-orange-500  to-purple-600  px-5 py-2 rounded-full"> Sign Up</button>
        </div>

        <button className="md:hidden text-2xl"><FiMenu /></button>

      </div>
    </nav>
  );
}

export default Navbar;