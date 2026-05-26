import { motion, AnimatePresence } from "framer-motion";
import Logo from "/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Insights",
    "Co-Working Space",
  ];

  const isActiveItem = (item: string) => {
    if (item === "Home") return location.pathname === "/";
    if (item === "About") return location.pathname === "/about";
    if (item === "Services") return location.pathname === "/services";
    if (item === "Insights") return location.pathname === "/insights";
    if (item === "Co-Working Space")
      return location.pathname === "/co-working-space";
    if (item === "Contact") return location.pathname === "/contact";

    return false;
  };

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <img
              height={120}
              width={120}
              src={Logo}
              alt="logo"
              className="object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-14">
            <ul className="flex items-center gap-10 text-sm font-medium">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer relative transition-all duration-300 ${
                    isActiveItem(item)
                      ? "text-primary"
                      : "text-deep-blue hover:text-black"
                  }`}
                >
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                  >
                    {item}
                  </NavLink>

                  {/* ACTIVE UNDERLINE */}
                  {isActiveItem(item) && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary rounded-full"
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* CONTACT BUTTON */}
            <NavLink to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group bg-primary-foreground hover:bg-primary transition-all duration-300 text-white px-6 h-12 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                Contact Us

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <IoMdArrowForward className="text-sm" />
                </motion.span>
              </motion.button>
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-black rounded-full"></span>
            <span className="w-6 h-0.5 bg-black rounded-full"></span>
            <span className="w-6 h-0.5 bg-black rounded-full"></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-black/5 shadow-lg"
          >
            <div className="px-6 py-8">
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-col items-start gap-6 text-sm font-medium"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          stiffness: 300,
                          damping: 18,
                        },
                      },
                    }}
                    className={`cursor-pointer w-full transition-all duration-300 ${
                      isActiveItem(item)
                        ? "text-primary"
                        : "text-deep-blue"
                    }`}
                  >
                    <NavLink
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase()}`
                      }
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between w-full"
                    >
                      {item}

                      <IoMdArrowForward className="text-sm opacity-60" />
                    </NavLink>
                  </motion.li>
                ))}

                {/* MOBILE BUTTON */}
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <motion.button
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          stiffness: 300,
                          damping: 18,
                        },
                      },
                    }}
                    className="mt-2 bg-primary-foreground text-white w-full h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    Contact Us

                    <IoMdArrowForward className="text-sm" />
                  </motion.button>
                </NavLink>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}