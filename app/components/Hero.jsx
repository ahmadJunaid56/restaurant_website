"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import chef from "/public/chef1.png";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div
            id="home"
            className="bg-white min-h-screen flex items-center justify-center p-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mb-10 mx-auto">
              {/* Left Section: Title, Description, Buttons */}
              <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-loose">
                  Dive into Delights Of Delectable{" "}
                  <span className="text-green-500">Food</span>
                </h1>
                <p className="text-gray-600 mt-4">
                  Where Each Plate Weaves a Story of Culinary Mastery and
                  Passionate Craftsmanship
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                  <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
                    Order Now
                  </button>
                  <button className="border border-gray-300 py-2 px-6 rounded-full hover:bg-gray-100 transition">
                    Watch Video
                  </button>
                </div>
              </div>

              {/* Right Section: Image */}
              <div className="relative md:w-1/2 flex justify-center items-center">
                <div className="relative">
                  {/* Image */}
                  <Image
                    src={chef} // Replace with your image
                    alt="Food"
                    className="w-96 h-96"
                  />
                  {/* Floating Label */}
                </div>
              </div>
            </div>

            {/* Food Cards */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="home"
            className="bg-white min-h-screen flex items-center justify-center p-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mb-10 mx-auto">
              {/* Left Section: Title, Description, Buttons */}
              <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Dive into Delights Of Delectable{" "}
                  <span className="text-green-500">Food</span>
                </h1>
                <p className="text-gray-600 mt-4">
                  Where Each Plate Weaves a Story of Culinary Mastery and
                  Passionate Craftsmanship
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                  <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
                    Order Now
                  </button>
                  <button className="border border-gray-300 py-2 px-6 rounded-full hover:bg-gray-100 transition">
                    Watch Video
                  </button>
                </div>
              </div>

              {/* Right Section: Image */}
              <div className="relative md:w-1/2 flex justify-center items-center">
                <div className="relative">
                  {/* Image */}
                  <Image
                    src={chef} // Replace with your image
                    alt="Food"
                    className="w-96 h-96"
                  />
                  {/* Floating Label */}
                </div>
              </div>
            </div>

            {/* Food Cards */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="home"
            className="bg-white min-h-screen flex items-center justify-center p-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mb-10 mx-auto">
              {/* Left Section: Title, Description, Buttons */}
              <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Dive into Delights Of Delectable{" "}
                  <span className="text-green-500">Food</span>
                </h1>
                <p className="text-gray-600 mt-4">
                  Where Each Plate Weaves a Story of Culinary Mastery and
                  Passionate Craftsmanship
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                  <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
                    Order Now
                  </button>
                  <button className="border border-gray-300 py-2 px-6 rounded-full hover:bg-gray-100 transition">
                    Watch Video
                  </button>
                </div>
              </div>

              {/* Right Section: Image */}
              <div className="relative md:w-1/2 flex justify-center items-center">
                <div className="relative">
                  {/* Image */}
                  <Image
                    src={chef} // Replace with your image
                    alt="Food"
                    className="w-96 h-96"
                  />
                  {/* Floating Label */}
                </div>
              </div>
            </div>

            {/* Food Cards */}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
