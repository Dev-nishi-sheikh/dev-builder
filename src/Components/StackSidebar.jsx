import StackItem from "./StackItem";

const StackSidebar = ({ stack, removeFromStack, removeAll }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl mt-25 p-5">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">Your Stack</h2>

        <span className="text-sm text-gray-500">
          {stack.length} Selected
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400"> Your stack is empty.</p>

          <p className="text-sm text-gray-400 mt-2">
            Add some technologies to get started.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                removeFromStack={removeFromStack}
              />
            ))}
          </div>

          <button
            onClick={removeAll}
            className="w-full mt-5 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50" >Remove All</button>
        </>
      )}

    </div>
  );
};

export default StackSidebar;