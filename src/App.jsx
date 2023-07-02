import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-[#00040f] overflow-hidden flex justify-center items-center">
      <div className="sm:px-16 px-6 justify-center items-center py-0 w-full lg:px-14">
        <div className=" xl:max-w-[1280px] w-full">
          <NavBar />
        </div>
        <div className="justify-center items-center">
          <div className=" max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
