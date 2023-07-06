import React, { useEffect } from "react";
import { clients } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section
      className="flex justify-center items-center my-4"
      data-aos="slide-left"
      data-aos-duration="5000"
      data-aos-delay="120"
    >
      <div className="flex justify-center items-center my-4 flex-wrap w-full p-4 mt-0 gap-10 xl:max-w-[1300px]">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5"
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
