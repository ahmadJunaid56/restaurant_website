import Image from "next/image";
import React from "react";
import noodle from "/public/woman.png";
import salad from "/public/salad.jpeg";
import noodle1 from "/public/noodle.jpeg";
export default function Hero() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mb-10 mx-auto">
          {/* Left Section: Title, Description, Buttons */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-6xl leading-tight">
              Dive into Delights
              Of Delectable <span className="text-green-500">Food</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
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
                src={noodle}  // Replace with your image
                alt="Food"
                className="rounded-full w-80 h-80"
              />
              {/* Floating Label */}
              <div className="absolute -top-0 -left-6 transform bg-red-500 text-white py-1 px-3 text-sm rounded-full md:hidden:">
                Hot spicy Food 🌶️
              </div>
              <div className="flex justify-center gap-6 mt-12">
                <div className="bg-green-500 shadow-lg rounded-lg p-4 flex flex-col items-center">
                  <Image
                    src={noodle1} // Replace with your image
                    alt="Spicy Noodles"
                    className="w-16 h-16 border-2 object-cover rounded-full shadow-2xl"
                  />
                  <h3 className="text-md mt-2 text-white">Spicy noodles</h3>
                  <p className=" text-white">$18.00</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                  <Image
                    src={salad} // Replace with your image
                    alt="Vegetarian Salad"
                    className="w-16 h-16 border-2 border-black object-cover shadow-2xl rounded-full"
                  />
                  <h3 className="text-md mt-2 text-green-500">Vegetarian salad</h3>
                  <p className="text-green-500 ">$23.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Food Cards */}
      </div>
    </>
  );
}
