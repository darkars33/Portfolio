import { useState } from "react";
import Design from "./Components/Design";
import Navbar from "./Components/Navbar";
import Hero from "./pages/Hero";
import Experience from "./pages/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Design />
        <Hero />
        <Experience />
      </div>
    </>
  );
}

export default App;
