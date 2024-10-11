"use client";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid"; // Use Heroicons for dropdown
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome v6
import {
  faSearch,
  faShoppingCart,
  faPhoneAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-green-500 font-bold text-lg">
              <span className="bg-green-500 text-white p-1 rounded">F</span>OODI
            </a>
          </div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-green-500 hover:text-green-600">
              Home
            </a>
            {/* Dropdowns */}
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex justify-center text-gray-700 ">
                Menu <ChevronDownIcon className="w-5 h-5 ml-2" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Item 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Item 2
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex justify-center text-gray-700">
                Services <ChevronDownIcon className="w-5 h-5 ml-2" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Service 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Service 2
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            <a href="/offers" className="text-gray-700 hover:text-green-500">
              Offers
            </a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button>
              <FontAwesomeIcon icon={faSearch} className="text-gray-700 hover:text-green-500" />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-700 hover:text-green-500"
              />
            </button>
            <a
              href="/contact"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Contact
              <FontAwesomeIcon icon={faPhoneAlt} className="ml-2" />{" "}
              {/* Moved to the right and added margin-left */}
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <button
              className="text-gray-700"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${navbarOpen ? "block" : "hidden"}`}>
          <div className="space-y-1 py-2">
            <a
              href="/"
              className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
            >
              Home
            </a>
            <a
              href="/menu"
              className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
            >
              Menu
            </a>
            <a
              href="/services"
              className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
            >
              Services
            </a>
            <a
              href="/offers"
              className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
            >
              Offers
            </a>
            <a
              href="/contact"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Contact
              <FontAwesomeIcon icon={faPhoneAlt} className="ml-2" />{" "}
              {/* Moved to the right and added margin-left */}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
