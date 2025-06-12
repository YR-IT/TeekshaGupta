"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  { id: 1, title: "Home", path: "/", newTab: false },
  { id: 2, title: "Projects", path: "/projects", newTab: false },
  { id: 3, title: "Services", path: "/services", newTab: false },
  { id: 4, title: "About", path: "/about", newTab: false },
  { id: 5, title: "Contact", path: "/contact", newTab: false },
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
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700;900&family=Great+Vibes&family=Pacifico&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          sticky
            ? "backdrop-blur-xl shadow-2xl border-b border-gray-200/30"
            : "backdrop-blur-md border-b border-white/10"
        }`}
        style={{
          backgroundColor: sticky ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Stylish Cursive with Bold Black & White Design */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                {/* Main Logo Icon */}
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:scale-110 border-4 border-white">
                  <span
                    className="text-white font-black text-2xl"
                    style={{ fontFamily: "Dancing Script, cursive", fontWeight: 900 }}
                  >
                    A
                  </span>
                </div>
                {/* Decorative Ring */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
              <div>
                <h1
                  className={`text-3xl font-black transition-all duration-300 ${
                    sticky ? "text-black" : "text-white"
                  }`}
                  style={{
                    fontFamily: "Dancing Script, cursive",
                    fontWeight: 900,
                    textShadow: sticky ? "none" : "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  AR-TEEKSHA Interiors
                </h1>
                <p
                  className={`text-sm font-medium transition-all duration-300 ${
                    sticky ? "text-blue-700" : "text-blue-200"
                  }`}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuData.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.path || "/"}
                  className={`relative font-semibold transition-all duration-300 hover:scale-105 group ${
                    sticky ? "text-black hover:text-gray-700" : "text-white/95 hover:text-white"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item.title}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      sticky
                        ? "bg-gradient-to-r from-black to-gray-600"
                        : "bg-gradient-to-r from-white to-gray-300"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button - White Background with Black Text */}
              <Link href="/contact">
                <button
                  className="hidden sm:block relative px-8 py-3 font-bold rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden group shadow-lg hover:shadow-xl bg-white text-black border-2 border-black hover:bg-black hover:text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  <span className="relative">Get In Touch</span>
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={navbarToggleHandler}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  sticky ? "text-black hover:bg-gray-100/50" : "text-white hover:bg-white/10"
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {navbarOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="px-6 py-6 space-y-4">
              {menuData.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.path || "/"}
                  className="block text-black hover:text-gray-700 font-semibold transition-all duration-300 py-2 border-l-2 border-transparent hover:border-black pl-4"
                  onClick={() => setNavbarOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item.title}
                </Link>
              ))}
              <Link href="/contact">
                <button
                  className="w-full mt-6 px-8 py-3 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-2 border-black hover:bg-black hover:text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                  onClick={() => setNavbarOpen(false)}
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
