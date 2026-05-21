import { motion, AnimatePresence } from "framer-motion";
import Logo from "/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

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
    if (item === "Insights") return location.pathname === "/strategy";
    if (item === "Co-Working Space")
      return location.pathname === "/partnerships";
    if (item === "Contact") return location.pathname === "/contact";

    return false;
  };

  return (
    <nav className="w-full bg-white px-[4%] shadow-lg fixed top-0 left-0 z-50">

      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-8xl font-bold tracking-wide">
          <img
            height={130}
            width={130}
            src={Logo}
            alt="logo"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-end gap-10 text-sm font-medium">

          {menuItems.map((item, index) => (

            <li
              key={index}
              className={`cursor-pointer relative transition ${
                isActiveItem(item)
                  ? "text-primary"
                  : "text-deep-blue hover:text-black"
              }`}
            >

              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>

              {/* ACTIVE UNDERLINE */}
              {isActiveItem(item) && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                />
              )}

            </li>

          ))}

        </ul>

        {/* BUTTON */}
        <div className="hidden md:block">

          <NavLink to="/partnerships">

            <button className="bg-primary-foreground text-white px-5 py-2 rounded-lg text-sm hover:bg-primary transition-all duration-300">

              Get Started

            </button>

          </NavLink>

        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >

          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>

        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-md px-6 py-6"
          >

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
                  className={`cursor-pointer w-full ${
                    isActiveItem(item)
                      ? "text-primary"
                      : "text-deep-blue"
                  }`}
                >

                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>

                </motion.li>

              ))}

              {/* MOBILE BUTTON */}
              <NavLink
                to="/partnerships"
                onClick={() => setIsOpen(false)}
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
                  className="bg-primary-foreground text-white px-5 py-2 rounded-lg text-sm"
                >

                  Get Started

                </motion.button>

              </NavLink>

            </motion.ul>

          </motion.div>

        )}

      </AnimatePresence>
    </nav>
  );
}