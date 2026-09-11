import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">

        {/* Left Side */}
        <div className="w-1/2">
          <p className="text-purple-600 font-medium mb-3">
            Build Your Developer Journey
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Build Your Own
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Dev Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-7 max-w-xl">
            Explore modern technologies, choose the tools you need,
            and build a powerful technology stack for your next project.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium">
              Explore Technologies
            </button>

            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-purple-500 hover:text-purple-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex justify-end">
          <img
            src={bannerStack}
            alt="Dev Stack"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;