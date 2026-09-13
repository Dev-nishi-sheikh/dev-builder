import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import TechnologyGrid from "./Components/TechnologyGrid";
import StackSidebar from "./Components/StackSidebar";
import Footer from "./Components/footer";

function App() {
  const [stack, setStack] = useState([]);

  const addToStack = (technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack.");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  const removeFromStack = (id) => {
    const technology = stack.find((item) => item.id === id);

    const newStack = stack.filter(
      (item) => item.id !== id
    );

    setStack(newStack);

    if (technology) {
      toast.info(`${technology.name} removed from your stack`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">

          <div className="lg:col-span-3">
            <TechnologyGrid
              stack={stack}
              addToStack={addToStack}
            />
          </div>

          <div className="lg:col-span-1">
            <StackSidebar
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>

        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;