import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import ThemeToggle from "../common/ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-lg
      bg-black/20
      border-b
      border-white/10
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          Piyush Gupta
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                hover:text-blue-400
                transition-all
                duration-300
              "
            >
              {item}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile */}

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX size={28} />
            ) : (
              <HiMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div
          className="
            md:hidden
            bg-black/90
            backdrop-blur-lg
          "
        >
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() =>
                  setIsOpen(false)
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;