"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "@/types/menu";
import { usePathname } from "next/navigation";

const menuData: Menu[] = [
  { id: 1, title: "Home", path: "/", newTab: false },
  { id: 2, title: "About Us", path: "/about", newTab: false },
  { id: 3, title: "Projects", path: "/projectPage", newTab: false },
  { id: 4, title: "Services", path: "/services", newTab: false },
  { id: 5, title: "Contact Us", path: "/contact", newTab: false },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const handleStickyNavbar = () => setSticky(window.scrollY >= 50);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <>
      {/* Import Google Fonts with Stylish Cursive */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Lato:wght@300;400;700&family=Montserrat:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          sticky
            ? "bg-black text-white shadow-2xl"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center group ml-0 lg:ml-[-4rem]"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mt-2">
                <img
                  src="/logo2_transparent.png"
                  alt="TAS Designs Logo"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {menuData.map((item, index) => {
                const pathname = usePathname();
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.id}
                    href={item.path || "/"}
                    className={`relative font-light text-sm transition-all duration-300 hover:scale-105 group ${
                      isActive
                        ? "text-amber-300"
                        : sticky
                        ? "text-white hover:text-white/90"
                        : "text-white/95 hover:text-white"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      fontFamily: "DM Serif Text, sans-serif",
                    }}
                  >
                    {item.title}
                    {/* Only show underline if not active */}
                    {!isActive && (
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                          sticky
                            ? "bg-gradient-to-r from-black to-gray-600"
                            : "bg-gradient-to-r from-white to-gray-300"
                        }`}
                      ></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={navbarToggleHandler}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  sticky
                    ? "text-white hover:bg-gray-100/50"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {navbarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            navbarOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="backdrop-blur-xl border-t shadow-2xl"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="px-6 py-6 space-y-4">
              {menuData.map((item, index) => {
                const pathname = usePathname();
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.id}
                    href={item.path || "/"}
                    onClick={() => setNavbarOpen(false)}
                    className={`block font-semibold transition-all duration-300 py-2 pl-4 ${
                      isActive
                        ? "text-amber-300"
                        : "text-white hover:text-gray-700 border-l-2 border-transparent hover:border-black"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
