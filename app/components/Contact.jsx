import React from "react";

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-10 px-20 sm:text-left pb-16 bg-gray-100 pt-10">
        <div>
        <h1 href="/" className="text-green-500 font-bold text-lg">
              <span className="bg-green-500 text-white p-1 rounded">F</span>OODI
            </h1>
          <p className="pr-16 mt-2 text-md  text-gray-500">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Useful links</h1>
          <ul className="mt-4 leading-loose tracking-wide text-gray-500">
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-lg">main Menu</h1>
          <ul className="mt-4 leading-loose tracking-wide text-gray-500">
            <li>Home</li>
            <li>Offers</li>
            <li>Menu</li>
            <li>Reservation</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Contact Us</h1>
          <ul className="mt-4 leading-loose tracking-wide text-gray-500">
            <li>example@gmail.com</li>
            <li>+92 123 456 789</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100 pb-6">
        <h1 className="text-gray-600">Copyright &#xa9; 2024 Aj Blogs | All rights reserved</h1>
      </div>
    </>
  );
}
