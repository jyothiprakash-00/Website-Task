import React from "react";

function Petran() {
  return (
    <div className="h-screen xl:flex justify-center items-center">
      <div className="w-full py-16 xl:px-24 px-8 xl:mt-0 mt-[300px] bg-blue-600 xl:flex">
        <div className="xl:w-1/2">
          <div className="xl:flex flex-row">
            <img
              src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp"
              alt=""
              srcset=""
              width={"100px"}
            />
          </div>
          <div>
            <h1 className="text-white mb-5">
              PErformance - TRacking - ANalytics
            </h1>
            <div>
              <h1 className="font-medium text-white leading-[3rem] text-[3rem]">
                AI & IoT Enabled
              </h1>
              <h1 className="font-medium text-white leading-[3rem] text-[2rem]">
                Asset Performance Management
              </h1>
            </div>
            <p className="text-white my-6">
              Petran offers an Asset Performance Management (APM) system that
              harnesses the power of artificial intelligence and the Internet of
              Things (IoT) to empower data-driven decision-making and enable
              proactive maintenance strategies.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-white md:bg-transparent leading-5 text-5xl md:leading-5 md:text-sm text-blue-700 md:text-white
              font-albert-sans font-medium hover:text-black border border-white
              rounded-full p-16 md:py-4 md:px-6 md:font-semibold">
              Schedule Call
            </button>
            <button className="border bg-blue-600 m-4  py-4 px-6 rounded-full text-white hover:bg-white hover:text-black">
              <i className="fa-solid fa-play"></i>
            </button>
            <a href="#" className="ml-8 font-medium md:font-semibold md:ml-4 text-white text-5xl xl:text-base font-albert-sans mt-14 md:mt-3 cursor-pointer hover:text-blue-600">
              Watch Video
            </a>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex justify-center items-center">
          {/* Hidden on screens smaller than md (medium) */}
          <img
            src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp"
            alt=""
            srcSet=""
            className="w-[80vh] h-[65vh] rounded-[1rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Petran;