import React from "react";
import burger from "/public/burger.jpeg";
import omellete from "/public/omelette.jpeg";import Image from "next/image";
import salad from "/public/salad.jpeg";

export default function Banner() {
  return (
    <>
      <h1
        id="offers"
        className="text-red-500 font-medium uppercase px-10 pt-10"
      >
        Special Dishes
      </h1>
      <h1 className="mb-8 font-bold  text-4xl md:text-5xl capitalize px-10">
        Standout Dishes from our menu
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 pt-8 px-10 mb-10">
        <div className="shadow shadow-slate-400 rounded-xl relative py-8 px-4">
          <div className="flex justify-center p-4 ">
            <Image
              src={salad}
              className="rounded-full border-black border-4"
              width={250}
              height={250}
              alt="salad"
            />
          </div>
          <div className="absolute bg-green-500 px-2 py-1 rounded-lg text-white text-xl top-2">
            <p>&#x2764;</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold mt-4">Spanish salad</h1>
            <h1 className="text-md mt-1">Description of the item</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">
              <span className="text-red-500 text-sm">$</span>24.00
            </h1>
            <h1 className="text-xl text-yellow-300">
              &#x272E; <span className="text-lg text-black">4.9</span>
            </h1>
          </div>
        </div>
        <div className="shadow shadow-slate-400 rounded-xl relative py-8 px-4">
          <div className="flex justify-center p-4 ">
            <Image
              src={burger}
              className="rounded-full border-black border-4"
              width={250}
              height={250}
              alt="burger"
            />
          </div>
          <div className="absolute bg-green-500 px-2 py-1 rounded-lg text-white text-xl top-2">
            <p>&#x2764;</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold mt-4">Spanish Burger</h1>
            <h1 className="text-md mt-1">Description of the item</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">
              <span className="text-red-500 text-sm">$</span>24.00
            </h1>
            <h1 className="text-xl text-yellow-300">
              &#x272E; <span className="text-lg text-black">4.9</span>
            </h1>
          </div>
        </div>
        <div className="shadow shadow-slate-400 rounded-xl relative py-8 px-4">
          <div className="flex justify-center p-4 ">
            <Image
              src={omellete}
              className="rounded-full border-black border-4"
              width={250}
              height={250}
              alt="omellete"
            />
          </div>
          <div className="absolute bg-green-500 px-2 py-1 rounded-lg text-white text-xl top-2">
            <p>&#x2764;</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold mt-4">Spanish Omellete</h1>
            <h1 className="text-md mt-1">Description of the item</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">
              <span className="text-red-500 text-sm">$</span>24.00
            </h1>
            <h1 className="text-xl text-yellow-300">
              &#x272E; <span className="text-lg text-black">4.9</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 px-10 mb-12">
        <div className="shadow shadow-slate-400 rounded-xl relative py-8 px-4">
          <div className="flex justify-center p-4 ">
            <Image
              src={burger}
              className="rounded-full border-black border-4"
              width={250}
              height={250}
              alt="burger"
            />
          </div>
          <div className="absolute bg-green-500 px-2 py-1 rounded-lg text-white text-xl top-2">
            <p>&#x2764;</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold mt-4">Spanish Burger</h1>
            <h1 className="text-md mt-1">Description of the item</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">
              <span className="text-red-500 text-sm">$</span>24.00
            </h1>
            <h1 className="text-xl text-yellow-300">
              &#x272E; <span className="text-lg text-black">4.9</span>
            </h1>
          </div>
        </div>
        <div className="shadow shadow-slate-400 rounded-xl relative py-8 px-4">
          <div className="flex justify-center p-4 ">
            <Image
              src={omellete}
              className="rounded-full border-black border-4"
              width={250}
              height={250}
              alt="omellete"
            />
          </div>
          <div className="absolute bg-green-500 px-2 py-1 rounded-lg text-white text-xl top-2">
            <p>&#x2764;</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold mt-4">Spanish Omellete</h1>
            <h1 className="text-md mt-1">Description of the item</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">
              <span className="text-red-500 text-sm">$</span>24.00
            </h1>
            <h1 className="text-xl text-yellow-300">
              &#x272E; <span className="text-lg text-black">4.9</span>
            </h1>
          </div>
        </div>
        <div className="shadow shadow-slate-400 rounded-xl relative py-8 px-4">
          <div className="flex justify-center p-4 ">
            <Image
              src={salad}
              className="rounded-full border-black border-4"
              width={250}
              height={250}
              alt="salad"
            />
          </div>
          <div className="absolute bg-green-500 px-2 py-1 rounded-lg text-white text-xl top-2">
            <p>&#x2764;</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold mt-4">Spanish salad</h1>
            <h1 className="text-md mt-1">Description of the item</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">
              <span className="text-red-500 text-sm">$</span>24.00
            </h1>
            <h1 className="text-xl text-yellow-300">
              &#x272E; <span className="text-lg text-black">4.9</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
