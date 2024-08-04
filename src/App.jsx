import { useState } from "react";
import Design from "./Components/Design";
import Navbar from "./Components/Navbar";
import Hero from "./pages/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Design />
        <Hero />
      </div>
    </>
  );
}

export default App;
