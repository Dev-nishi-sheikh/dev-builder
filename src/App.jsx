import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./Components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main>
        <TechnologyGrid />
        <StackSidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;