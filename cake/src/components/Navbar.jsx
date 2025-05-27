import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCakesDropdownOpen, setIsCakesDropdownOpen] = useState(false);

  const cakeCategories = [
    "Birthday Cakes",
    "Wedding Cakes",
    "Cupcakes",
    "Custom Cakes",
    "Eggless Cakes",
  ];

  return (
    <nav className="bg-[#111827] border-b border-[#6b46c1] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-[#f8fafc] text-xl font-bold tracking-tight">
              Frost<span className="text-[#c4b5fd]">Bloom</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-[#1F2937] text-white"
                      : "text-[#d8b4fe] hover:bg-[#1F2937] hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Cakes Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCakesDropdownOpen(!isCakesDropdownOpen)}
                  className="text-[#d8b4fe] hover:bg-[#1F2937] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
                >
                  Cakes
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isCakesDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {isCakesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#1F2937] rounded-md shadow-lg py-1 z-50 border border-[#6b46c1]">
                    {cakeCategories.map((category) => (
                      <NavLink
                        key={category}
                        to={`/gallery/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm hover:bg-[#374151] ${
                            isActive ? "text-white" : "text-[#d8b4fe]"
                          }`
                        }
                        onClick={() => setIsCakesDropdownOpen(false)}
                      >
                        {category}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/discount"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-[#1F2937] text-white"
                      : "text-[#d8b4fe] hover:bg-[#1F2937] hover:text-white"
                  }`
                }
              >
                Discounts
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-[#1F2937] text-white"
                      : "text-[#d8b4fe] hover:bg-[#1F2937] hover:text-white"
                  }`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/order"
                className="ml-4 bg-[#6b46c1] text-[#f8fafc] hover:bg-[#7c3aed] px-4 py-2 rounded-md text-sm font-medium transition duration-300 border border-[#8b5cf6]"
              >
                Order Now
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#d8b4fe] hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1F2937]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-[#374151] text-white"
                    : "text-[#d8b4fe] hover:bg-[#374151]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            {/* Mobile Cakes Dropdown */}
            <div>
              <button
                onClick={() => setIsCakesDropdownOpen(!isCakesDropdownOpen)}
                className="w-full text-left text-[#d8b4fe] hover:bg-[#374151] px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
              >
                Cakes
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isCakesDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isCakesDropdownOpen && (
                <div className="pl-4">
                  {cakeCategories.map((category) => (
                    <NavLink
                      key={category}
                      to={`/cakes/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-base hover:bg-[#374151] rounded-md ${
                          isActive ? "text-white" : "text-[#d8b4fe]"
                        }`
                      }
                      onClick={() => {
                        setIsCakesDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {category}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/discount"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-[#374151] text-white"
                    : "text-[#d8b4fe] hover:bg-[#374151]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Discounts
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-[#374151] text-white"
                    : "text-[#d8b4fe] hover:bg-[#374151]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <button className="w-full mt-2 bg-[#6b46c1] text-[#f8fafc] hover:bg-[#7c3aed] px-4 py-2 rounded-md text-base font-medium">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
