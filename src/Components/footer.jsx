import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className=" mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid  md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Dev Stack" className="w-32" />

            <p className=" text-sm  ">Build your own developer stack with modern
              technologies and tools for your next project.</p>

            <div className="flex gap-4 mt-5 text-sm text-gray-500">
              <a >GitHub </a>
              <a>Linkedin </a>
              <a  >Twitter  </a>
            </div>
          </div>


          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Product
            </h3>

            <div className="space-y-3 text-sm">
            <a className="block ">Technologies</a>
            <a className="block ">Projects</a>
            <a className="block ">Features</a>
            </div>
          </div>


          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Company
            </h3>

            <div className="space-y-3 text-sm">
              
            <a href="#" className="block">About</a>
            <a href="#" className="block">Contact </a>
            <a href="#" className="block">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>

            <div className="space-y-3 text-sm">
              <a href="#" className="block">Privacy Policy</a>

              <a href="#" className="block">Terms & Conditions</a>
            </div>
          </div>

        </div>

        <div className=" mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-purple-600"> Privacy</a>

            <a href="#" className="hover:text-purple-600">Terms</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;