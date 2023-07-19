import React from "react";

interface NavbarProps {
  navClass?: string;
  ulClass?: string;
  liClass?: string;
  aClass?: string;
  className?: string;
}

export const Navbar = ({ navClass, ulClass, liClass, aClass }: NavbarProps) => {
  return (
    <nav className={navClass}>
      <ul className={ulClass}>
        <li className={liClass}>
          <a href="/" className={aClass}>
            Home
          </a>
        </li>
        <li className={liClass}>
          <a href="/about" className={aClass}>
            About
          </a>
        </li>
        <li className={liClass}>
          <a href="/contact" className={aClass}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
