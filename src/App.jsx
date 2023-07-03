import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Bussiness from "./components/Bussiness";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonial from "./components/Testimonial";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-[#00040f] overflow-hidden flex justify-center items-center">
      <div className="sm:px-16 px-6 justify-center items-center py-0 w-full lg:px-14 ">
        <div className=" xl:max-w-[1280px] w-full">
          <NavBar />
        </div>
        <div className="justify-center items-center">
          <div className=" max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>
        <div className="bg-[#00040f] sm:px-16 px-6 justify-center items-start">
          <div className=" xl:max-w-[1280] w-full">
            <Stats />
            <Bussiness />
            <Billing />
            <CardDeal />
            <Testimonial />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
