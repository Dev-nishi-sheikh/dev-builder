function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        <p className="text-purple-600 font-medium mb-4">
          Build Your Developer Stack
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Choose the Right
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            {" "}Technology
          </span>
          <br />
          for Your Next Project
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
          Explore popular technologies, compare their features,
          and build your own developer stack for your next project.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
            Explore Technologies
          </button>

          <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-purple-500 hover:text-purple-600">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;