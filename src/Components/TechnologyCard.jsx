const TechnologyCard = ({ technology, stack, addToStack }) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  const isAdded = stack.some((item) => item.id === technology.id);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

      <div className="flex justify-between items-center">
        <img src={icon} alt={name} className="w-12 h-12 object-contain"/>

        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"> {badge}</span>
      </div>

      
      <h3 className="text-xl font-bold mt-4">{name} </h3>
      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>
      <div className="flex gap-2 mt-4 flex-wrap">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
          {category}
        </span>

        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs"> {difficulty} </span>

        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs"> ⭐ {rating} </span>
       
      </div>

      
      

      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className={`w-full mt-4 py-2 rounded-lg font-medium ${
          isAdded
            ? "bg-gray-300 text-gray-600"
            : "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;