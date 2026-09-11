import { FiMenu } from "react-icons/fi";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-orange-500">Dev</span>
          <span className="text-purple-600"> Stack</span>
        </div>

        
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">Technologies</a>
          <a href="#" className="hover:text-purple-600">Projects</a>
          <a href="#" className="hover:text-purple-600">About</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700">Sign In</button>

          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>

        <button className="md:hidden text-2xl"><FiMenu /></button>

      </div>
    </nav>
  );
}

export default Navbar;