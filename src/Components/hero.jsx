import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="w-full md:w-1/2">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Build Your Own<br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-7 max-w-xl">
            Explore modern technologies, choose the tools you need,and build a
            powerful technology stack for your next project.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">

            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium">
              Explore Technologies
            </button>

            <button className="border text-gray-700 px-6 py-3 rounded-lg font-medium">
              Learn More
            </button>

          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Dev Stack"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;