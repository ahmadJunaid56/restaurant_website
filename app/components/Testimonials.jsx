import React from "react";
import Image from "next/image";
import chef from "/public/chef.png";
import woman1 from "/public/testimonial (1).jpeg";
import woman2 from "/public/testimonial (2).jpeg";

export default function Testimonials() {
  return (
    <>
      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-shrink-0">
              <Image
                className="h-96 w-96 rounded-full object-cover"
                src={chef}
                alt="Best Chef 😊"
              />
            </div>
            <div className="lg:text-left">
              <h2 className="text-base font-semibold text-red-500">
                TESTIMONIALS
              </h2>
              <h3 className="mt-1 text-5xl font-extrabold text-gray-900">
                What Our Customers Say About Us
              </h3>
              <p className="mt-4 pr-20 text-gray-600">
                "I had the pleasure of dining at Foodi last night, and I'm still
                raving about the experience! The attention to detail in
                presentation and service was impeccable."
              </p>
              <div className="mt-6 flex">
                <div className="flex flex-shrink-0">
                  <Image
                    className="h-10 w-10 rounded-full object-cover"
                    src={woman1}
                    alt="Customer 1"
                  />
                  <Image
                    className="h-10 w-10 rounded-full object-cover"
                    src={woman2}
                    alt="Customer 1"
                  />
                </div>
                <div className="ml-4 text-sm text-gray-500">
                  4.9 stars (18.6k reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
