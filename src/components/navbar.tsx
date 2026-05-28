import { motion, AnimatePresence } from "framer-motion";
import Logo from "/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ABOUT DROPDOWN STATES
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const aboutRef = useRef<HTMLLIElement | null>(null);

  const location = useLocation();

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Insights",
    "Co-Working Space",
  ];

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isAboutRoute =
    location.pathname === "/about" ||
    location.pathname === "/team";

  const isActiveItem = (item: string) => {
    if (item === "Home") return location.pathname === "/";
    if (item === "About") return isAboutRoute;
    if (item === "Services") return location.pathname === "/services";
    if (item === "Insights") return location.pathname === "/insights";

    if (item === "Co-Working Space") {
      return location.pathname === "/co-working-space";
    }

    if (item === "Contact") {
      return location.pathname === "/contact";
    }

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
                  ref={item === "About" ? aboutRef : null}
                  className={`cursor-pointer relative transition-all duration-300 ${
                    isActiveItem(item)
                      ? "text-primary"
                      : "text-deep-blue hover:text-black"
                  }`}
                >
                  {item === "About" ? (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAboutOpen((prev) => !prev);
                        }}
                        className="flex items-center gap-1"
                      >
                        About
                        <span className="text-[10px]">▼</span>
                      </button>

                      <AnimatePresence>
                        {aboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[180%] left-1/2 -translate-x-1/2 w-44 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-5 z-50"
                          >
                            <div className="flex flex-col gap-4 text-deep-blue text-sm">
                              <NavLink
                                to="/about"
                                onClick={() => setAboutOpen(false)}
                                className="hover:text-primary transition"
                              >
                                About Us
                              </NavLink>

                              <NavLink
                                to="/team"
                                onClick={() => setAboutOpen(false)}
                                className="hover:text-primary transition"
                              >
                                Our Team
                              </NavLink>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`
                      }
                    >
                      {item}
                    </NavLink>
                  )}

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
                    {item === "About" ? (
                      <div className="w-full">
                        <button
                          type="button"
                          onClick={() =>
                            setMobileAboutOpen((prev) => !prev)
                          }
                          className="flex items-center justify-between w-full"
                        >
                          <span>About</span>

                          <span className="text-[10px]">▼</span>
                        </button>

                        <AnimatePresence>
                          {mobileAboutOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pl-4 pt-4 flex flex-col gap-4"
                            >
                              <NavLink
                                to="/about"
                                onClick={() => {
                                  setMobileAboutOpen(false);
                                  setIsOpen(false);
                                }}
                                className="hover:text-primary transition"
                              >
                                About Us
                              </NavLink>

                              <NavLink
                                to="/team"
                                onClick={() => {
                                  setMobileAboutOpen(false);
                                  setIsOpen(false);
                                }}
                                className="hover:text-primary transition"
                              >
                                Our Team
                              </NavLink>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={
                          item === "Home"
                            ? "/"
                            : `/${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`
                        }
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between w-full"
                      >
                        {item}

                        <IoMdArrowForward className="text-sm opacity-60" />
                      </NavLink>
                    )}
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