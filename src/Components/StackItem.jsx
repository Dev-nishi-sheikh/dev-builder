const StackItem = ({ technology, removeFromStack }) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-3">
      
      <div className="flex items-center gap-3">
        <img src={technology.icon}alt={technology.name} className="w-9 h-9 object-contain" />

        <div>
          <h3 className="font-semibold">{technology.name}</h3>

          <p className="text-xs text-gray-500">{technology.category} </p>
        </div>
      </div>

      <button onClick={() => removeFromStack(technology.id)} > ✕ </button>

    </div>
  );
};

export default StackItem;
