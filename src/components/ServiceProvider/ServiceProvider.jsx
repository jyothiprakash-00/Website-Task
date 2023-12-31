import React from "react";
import "./ServiceProvider.css";

function ServiceProvider() {
  return (
    <div className="xl:h-screen h-fit xl:px-24 xl:mt-0 mt-[275px]  flex justify-center items-center">
      <div className="Img rounded-[2rem]  flex justify-center items-center">
        <div className="xl:w-3/4 xl:py-40 py-8 xl:px-0 px-8">
        <div className="flex flex-row mb-6">
            <div style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
              className="m-2 "
            ></div>
            <h1 className="font-medium">The Best AI Service Provider</h1>
          </div>

          <h1 className="text-5xl ">
            <span className="font-medium">Crafting Tomorrow's World with </span>
            <span className="text-blue-600">AI Excellence</span>
          </h1>

          <p className="mt-10 xl:mr-20 font-medium text-gray-600">
            The majority of customers lack data-driven insights and automation.
            Using AI, Ombrulla assist clients in extracting data from diverse
            sources such as photos, videos, and data lakes, which can assist
            businesses in making data-driven insights and improving their bottom
            line.
          </p>
          <div className="mt-6">
            <button className="border bg-blue-600 py-4 px-6 rounded-full text-white hover:bg-white hover:text-black">
              <i className="fa-solid fa-play"></i>
            </button>
            <a href="" className="ms-4 font-medium hover:text-blue-600">
              Watch Corporate Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProvider;