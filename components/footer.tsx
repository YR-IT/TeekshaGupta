import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Navigation,
  Youtube,
} from "lucide-react";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden" style={{ fontFamily: "Lato, sans-serif" }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand + Social */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-amber-100 mb-3 tracking-wide">
                Architect Teeksha Gupta
              </h2>
              {/* <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full mb-4"></div> */}
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm tracking-wider">
              Creating spaces that inspire. We blend innovative design with
              functionality to create architectural masterpieces that stand the
              test of time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/teeksha-gupta-ba8b34110/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700/50 hover:bg-teal-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25"
              >
                <Linkedin
                  size={20}
                  className="text-slate-300 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://www.instagram.com/interior_by_teeksha/?igsh=YnlwaTdsMTdrbWE4"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700/50 hover:bg-pink-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram
                  size={20}
                  className="text-slate-300 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://www.facebook.com/interiorbyteeksha"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700/50 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Facebook
                  size={20}
                  className="text-slate-300 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://www.youtube.com/@TEEKSHAGUPTAVLOGS"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700/50 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-600/25"
              >
                <Youtube
  size={20}
  className="text-slate-300 group-hover:text-white transition-colors"
/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-amber-100 mb-6 text-lg tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 tracking-wide">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projectPage" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-amber-100 transition-all duration-200 text-sm group flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-100 mr-0 group-hover:mr-3 transition-all duration-200"></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-amber-100 mb-6 text-lg tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3 tracking-wide">
              {[
                "Architectural Design",
                "Interior Design",
                "Urban Planning",
                "Landscape Design",
                "Renovation",
                "Construction Management",
                "Evaluation",
              ].map((service) => (
                <li
                  key={service}
                  className="text-slate-300 text-sm flex items-center"
                >
                  <div className="w-1.5 h-1.5 bg-amber-100 rounded-full mr-3 opacity-60"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
         <div>
  <h4 className="font-bold text-amber-100 mb-6 text-lg tracking-wide">Contact Us</h4>

  <div className="bg-black rounded-2xl p-6 border-4 border-white/10">
    <div className="flex items-start gap-3 mb-6">
      <div className="bg-white/10 p-2 rounded-lg">
        <MapPin size={18} className="text-white" />
      </div>
      <div className="text-white text-sm leading-relaxed tracking-wide">
        <div className="font-medium text-white mb-1">Our Office</div>
        SCO 207 CABIN 28
        <br />
        SECOND FLOOR SECTOR 14,
        <br />
        Panchkula, India, 134109
      </div>
    </div>

    <div className="mb-6">
  <a
    href="https://www.google.co.in/maps/place/Architect+Teeksha+Gupta/@30.6836404,76.8435553,17z/data=!3m1!4b1!4m6!3m5!1s0x390f94a39b70cf8b:0xc4d4eeec8e4d7785!8m2!3d30.6836358!4d76.8461302!16s%2Fg%2F11cmvtg6f8?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 text-white text-sm font-semibold rounded-xl bg-black transition-all duration-300 transform hover:scale-[1.02] hover:bg-white hover:text-black border border-white"
  >
    <Navigation className="w-4 h-4" />
    View on Map
  </a>
</div>


    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-lg">
          <Mail size={16} className="text-white" />
        </div>
        <a
          href="mailto:tasdesign7@gmail.com"
          className="text-white hover:text-amber-100 transition-colors text-sm tracking-wide"
        >
          tasdesign7@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-lg">
          <Phone size={16} className="text-white" />
        </div>
        <a
          href="tel:+919023422269"
          className="text-white hover:text-amber-100 transition-colors tracking-wide text-sm font-medium"
        >
          +91 90234 22269
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm tracking-wide">
  <div className="container mx-auto px-6 py-6">
    <div className="flex justify-center items-center gap-4">
      <p className="text-slate-400 text-sm text-center">
        © 2025{" "}
        <span className="text-amber-300 font-medium">
          Teeksha Gupta
        </span>
        . All rights reserved.
      </p>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
