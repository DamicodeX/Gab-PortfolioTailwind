import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href=""
          aria-label="Home"
          className="font-bold text-3xl cursor-pointer mx-2 hover:text-white"
        >
          DamiCodeX
        </a>
      </div>
      <div className="m-8 flex items-center justidy-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/gabriel-adeniran/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DamicodeX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub/>
        </a>
      </div>
    </nav>
  );
}

export default Navbar