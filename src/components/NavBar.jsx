import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
      { id: 1, link: "home" },
      { id: 2, link: "about" },
      { id: 3, link: "exprience" },
      { id: 4, link: "skill" },
      { id: 5, link: "contact" },
    ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-6">
      <div>
        <h1 className="text-4xl font-signature">Kinga</h1>
      </div>
      <ul className="hidden md:flex">
        {links?.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer hover:scale-110 pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-50 text-gray-500">
          {links?.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link onClick={() => setNav(false)} to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
