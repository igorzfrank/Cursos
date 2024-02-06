import React from "react";

const Header = () => {
  return (
    <header className="p-6 bg-midnight text-tahiti">
      <nav className="w-full m-auto">
        <ul className="flex justify-center gap-32">
          <li>
            <a href="" className="font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="" className="font-bold">
              Sobre
            </a>
          </li>
          <li>
            <a href="" className="font-bold">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
