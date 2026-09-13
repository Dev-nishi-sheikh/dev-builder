import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import technologiesData from "../data/technologies.json";

const TechnologyGrid = ({ stack, addToStack }) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(technologiesData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading technologies...
      </div>
    );
  }

  return (
    <section> 
    <h2 className="text-3xl font-bold"> Explore <span className="text-pink-400">Technologies</span> </h2>

      <p className="text-gray-500 mt-2 mb-6"> Pick one technology per category to build your ideal stack. </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            stack={stack}
            addToStack={addToStack}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologyGrid;