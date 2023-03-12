import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor pointer hover:text-blue1 transition ease-linear duration-200">Muhammad Ali</p>
        </Link>


        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map((link) => (

            <li
              key={link.id}
              className="underline1 hover:text-blue1 transition ease-linear duration-200 text-[18px] font-medium cursor-pointer"
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>

          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] cursor-pointer" onClick={() => { setToggle(!toggle) }} />

          <div className={`fixed top-0 right-0 w-[260px] h-full bg-primary z-10 ${toggle ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-center">
              <img src={close} alt="close" className="absolute top-6 right-5 w-[28px] h-[28px] cursor-pointer" onClick={() => { setToggle(!toggle) }} />
              
              <ul className="flex flex-col items-center gap-10 mt-28">
                {navLinks.map((link) => (

                  <li
                    key={link.id}
                    className="underline1 hover:text-blue1 transition ease-linear duration-200 text-[18px] font-medium cursor-pointer"
                    onClick={() => setActive(link.title)}
                  >

                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>

                ))}
              </ul>

            </div>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;