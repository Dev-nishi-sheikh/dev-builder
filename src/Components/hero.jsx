import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
      <div >
          

          <h1 className="text-5xl font-bold leading-tight text-gray-900">Build Your Own<br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-7 max-w-xl">Explore modern technologies, choose the tools you need,and build a powerful technology stack for your next project.</p>

          <div className="mt-4 flex items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium">Explore Technologies </button>

            <button className="border  text-gray-700 px-6 py-3 rounded-lg font-medium">Learn More</button>
          </div>
        </div>


        <div className="w-1/2 flex justify-end">
          <img src={banner} alt="Dev Stack" className="w-full max-w-lg" ></img>
        </div>

      </div>
    </section>
  );
}

export default Hero;