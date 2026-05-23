import React from "react";
import MainLogo from "/mainlogo.png";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX, BsTelephone } from "react-icons/bs";
import { MdOutlineFacebook } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import { LuClock } from "react-icons/lu";

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-blue text-white">
      {/* MAIN FOOTER */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-14 items-start">
            
            {/* LOGO SECTION */}
            <div className="flex flex-col items-start">
              <img
                src={MainLogo}
                alt="Grandeur Tech"
                className="w-50 h-50 object-contain mb-4"
              />
              <p className="text-gray-400 text-sm leading-7 mt-4 max-w-sm">
                We help businesses automate operations, optimize
                processes, and leverage technology for sustainable
                growth. Empowering the next generation of African
                businesses.
              </p>

              {/* SOCIALS */}
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://www.instagram.com/springpethomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                >
                  <IoLogoInstagram size={16} />
                </a>

                <a
                  href="https://x.com/springpethomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                >
                  <BsTwitterX size={16} />
                </a>

                <a
                  href="https://www.facebook.com/SpringpetHomes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                >
                  <MdOutlineFacebook size={16} />
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="lg:pl-6">
              <h3 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h3>

              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white transition cursor-pointer">
                  Home
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  About Us
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Our Services
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Business Insights
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Co-Working Space
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="lg:pl-2">
              <h3 className="text-white font-semibold text-lg mb-6">
                Our Services
              </h3>

              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white transition cursor-pointer">
                  SME Automation Sprint
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Business Consultation
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Tech Training
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  IT Infrastructure
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Shared Workspaces
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Premium Printing Services
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="lg:pl-4">
              <h3 className="text-white font-semibold text-lg mb-6">
                Contact Us
              </h3>

              <ul className="space-y-5 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <BsTelephone className="text-blue-500 shrink-0" />

                  <a
                    href="tel:+2348131234567"
                    className="hover:text-white transition"
                  >
                    +234 813 123 4567
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <IoMailOutline className="text-blue-500 shrink-0" />

                  <a
                    href="mailto:hello@granduertech.com.ng"
                    className="hover:text-white transition"
                  >
                    hello@granduertech.com.ng
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <RiMapPinLine className="text-blue-500 shrink-0" />

                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Lagos, Nigeria
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <LuClock className="text-blue-500 shrink-0" />

                  <span>
                    Mon - Fri: 9:00 AM - 5:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Grandeur Tech & IT Services.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-8">
              <span className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </span>

              <span className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;