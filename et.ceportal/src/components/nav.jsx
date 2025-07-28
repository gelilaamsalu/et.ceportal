import React from "react";
import portalIcon from "../images/logo.jpg";
function Nav() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full bg-[#37393A] p-6">
      {/* Logo or Branding */}
      <div className="w-32">
        <a
          href="#"
          className="block h-10 w-full bg-cover bg-center bg-no-repeat"
        >
          <div className="flex w-screen justify-first ">
            <a>
              <img
                className="h-20 w-20"
                src={portalIcon}
                alt="City Portal Icon"
              />
            </a>
          </div>
          {/* Optionally put a logo image inside */}
          {/* <img src="/logo.png" alt="Logo" className="h-10" /> */}
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center">
        <ul className="flex items-center gap-6">
          <li className="text-white hover:text-blue-400 cursor-pointer">
            News
          </li>
          <li className="text-white hover:text-blue-400 cursor-pointer">
            Public Transportation
          </li>
          <li className="text-white hover:text-blue-400 cursor-pointer">
            Public Safety & Emergency
          </li>
          <li className="text-white hover:text-blue-400 cursor-pointer">
            Community & Engagement
          </li>
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button className="py-1 px-4 text-white hover:text-blue-400">
          Sign In
        </button>
        <button className="bg-[#0d4d99] rounded-lg text-white py-1 px-4 hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Nav;
