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
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand + Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">Ar Teeksha Gupta</h2>
          </div>
          <p className="text-sm text-gray-300 mb-6">
            Creating spaces that inspire. We blend innovative design with functionality to create architectural masterpieces.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full">
              <Linkedin size={18} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Architectural Design</li>
            <li>Interior Design</li>
            <li>Urban Planning</li>
            <li>Landscape Design</li>
            <li>Renovation</li>
            <li>Construction Management</li>
            <li>Evaluation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <div className="flex items-start gap-2 mb-3 text-sm text-gray-300">
            <MapPin size={16} className="mt-1" />
            <span>
              SCO 207 CABIN 22<br />
              SECOND FLOOR SECTOR 14,<br />
              Panchkula, India, 134109
            </span>
          </div>
          <div className="mb-4  ml-6">
                    <a
                      href="https://www.google.co.in/maps/place/Architect+Teeksha+Gupta/@30.6836404,76.8435553,17z/data=!3m1!4b1!4m6!3m5!1s0x390f94a39b70cf8b:0xc4d4eeec8e4d7785!8m2!3d30.6836358!4d76.8461302!16s%2Fg%2F11cmvtg6f8?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-lg bg-teal-600 hover:bg-teal-700 transition"
                    >
                      <Navigation className="w-5 h-5" />
                      View on Map
                    </a>
                  </div>
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
            <Mail size={16} />
            <a href="mailto:info@anshularchitects.com">tasdesign7@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone size={16} />
            <a href="tel:+918930000984">+91 90234 22269</a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 py-4 px-4 md:px-0 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center container mx-auto">
        <p>© 2025 Ar Teeksha Gupta. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
