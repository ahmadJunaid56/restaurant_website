import burger from "/public/burger.jpeg";
import omellete from "/public/omelette.jpeg";
import Image from "next/image";
import salad from "/public/salad.jpeg";
import noodle1 from "/public/noodle.jpeg";
import React from "react";

export default function Cards() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <h1 className="uppercase text-red-500">Customer favourites</h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className=" text-2xl md:text-4xl px-2 font-bold">
          Popular Categories
        </h1>
      </div>
      <div className="container px-10 mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className="py-8 hover:bg-green-300 shadow-2xl hover:text-white rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src={noodle1}
                className="rounded-full"
                width={150}
                height={150}
                alt="salad"
              />
            </div>
            <div>
              <h1 className="flex justify-center items-center  text-2xl font-bold mt-2">
                Noodles
              </h1>
              <h1 className="flex justify-center items-center  text-md mt-1 text-gray-600">
                (Noodles available)
              </h1>
            </div>
          </div>
          <div className="py-8 hover:bg-green-300 shadow-xl hover:shadow-2xl hover:text-white rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src={burger}
                alt="salad"
                className="rounded-full"
                width={150}
                height={150}
              />
            </div>
            <div>
              <h1 className="flex justify-center items-center  text-2xl font-bold mt-2">
                Burger
              </h1>
              <h1 className="flex justify-center items-center  text-md mt-1 text-gray-600">
                (burger available)
              </h1>
            </div>
          </div>
          <div className="py-8 hover:bg-green-300 shadow-xl hover:shadow-2xl hover:text-white rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src={omellete}
                className="rounded-full"
                width={150}
                height={150}
                alt="salad"
              />
            </div>
            <div>
              <h1 className="flex justify-center items-center  text-2xl font-bold mt-2">
                Omellete
              </h1>
              <h1 className="flex justify-center items-center  text-md mt-1 text-gray-600">
                (omellete available)
              </h1>
            </div>
          </div>
          <div className="py-8 hover:bg-green-300 shadow-xl hover:shadow-2xl hover:text-white rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src={salad}
                className="rounded-full"
                width={150}
                height={150}
                alt="salad"
              />
            </div>
            <div>
              <h1 className="flex justify-center items-center  text-2xl font-bold mt-2">
                Vegetable Salad
              </h1>
              <h1 className="flex justify-center items-center  text-md mt-1 text-gray-600">
                (Salad available)
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
