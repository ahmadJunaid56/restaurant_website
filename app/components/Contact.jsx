import React from "react";

export default function Contact() {
  return (
    <>
      <div id="contact" className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-10 px-4 sm:text-left pb-16  pt-10 bg-slate-100">
        <div>
        <h1 href="/" className="text-green-500 font-bold text-lg">
              <span className="bg-green-500 text-white p-1 rounded">F</span>OODI
            </h1>
          <p className="pr-8 mt-4 text-md  text-gray-500">
            Savor the artistry where every dish is a culinary masterpiece
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
          <h1 className="font-semibold text-lg">Main Menu</h1>
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
      <div className="flex justify-center bg-slate-100 pt-2 border-t-2 pb-4">
        <h1 className="text-gray-600 text-xs md:text-md">Copyright &#xa9; 2024 Aj Blogs | All rights reserved</h1>
      </div>
    </>
  );
}
