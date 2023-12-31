import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Customers() {
  const customerImages = [
    "https://www.ombrulla.com/azelit.webp",
    "https://www.ombrulla.com/best-western.webp",
    "https://www.ombrulla.com/burger-king.webp",
    "https://www.ombrulla.com/damac.webp",
    "https://www.ombrulla.com/dubai-festival-city.webp",
    "https://www.ombrulla.com/emirates.webp",
    "https://www.ombrulla.com/planet-fitness.webp",
    "https://www.ombrulla.com/suja.webp",
    "https://www.ombrulla.com/wild-leaf.webp",
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <div className="h-fit mx-24 mb-[200px] mb-[50px] mt-10">
      <div className="flex justify-center items-center">
        <div className="flex">
          <div
            style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
            className="m-2 shadow"
          ></div>
          <h1 className="font-medium">OUR CUSTOMERS</h1>
          <div
            style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
            className="m-2 shadow"
          ></div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-medium text-[45px] mt-9 font-sans tracking-tight mb-[1.125rem]">They Trust Us</h1>
      </div>
      <Slider {...settings}>
        {customerImages.map((imageUrl, index) => (
          <div key={index} className="p-4 mt-9">
            <img
              src={imageUrl}
              alt={`Customer ${index + 1}`}
              style={{ width: "150px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Customers;