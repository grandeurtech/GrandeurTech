"use client";

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";

import {
  Search,
  ArrowRight,
  CalendarDays,
  Plus,
} from "lucide-react";

import Cta from "./cta";

type Article = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
};

const API_URL = "https://articlebackend.onrender.com/api";

const categories = [
  "All Posts",
  "Automation",
  "Business Growth",
  "Operations",
  "Workspace",
  "Tech",
  "Branding",
];


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      // use numeric easing to satisfy TypeScript types
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

// loginAdmin is defined inside the component so it has access to state

const BusinessInsights: React.FC = () => {

const [loading, setLoading] =
  useState(true);

const [showLogin, setShowLogin] =
  useState(false);

const [isAuthenticated, setIsAuthenticated] =
  useState(false);

const [email, setEmail] =
  useState("");

const [password, setPassword] =
  useState("");

const [visibleCount, setVisibleCount] =
  useState(6);

const [activeCategory, setActiveCategory] =
  useState("All Posts");

const [search, setSearch] =
  useState("");

const [showAdmin, setShowAdmin] =
  useState(false);

const [articles, setArticles] =
  useState<Article[]>([]);

const [newArticle, setNewArticle] =
  useState({
    title: "",
    description: "",
    category: "Automation",
    image: "",
    date: "",
  });

const fetchArticles = async () => {
  try {
    const response = await fetch(
      `${API_URL}/articles`
    );

    const data = await response.json();

    setArticles(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

const loginAdmin = async () => {
  try {
    const response = await fetch(
      `${API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem(
      "token",
      data.token
    );

    setIsAuthenticated(true);
    setShowLogin(false);

    alert("Login Successful");
  } catch (error) {
    console.log(error);
    alert("Login Failed");
  }
};


  // Load Articles from Backend
useEffect(() => {
  const initialize = async () => {
    await fetchArticles();

    const token =
      localStorage.getItem("token");

    setIsAuthenticated(!!token);
  };

  initialize();
}, []);

  /* FILTER ARTICLES */
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Posts"
          ? true
          : article.category === activeCategory;

      const matchesSearch =
        article.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        article.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, articles]);

  /* ADD ARTICLE */
  const handleAddArticle =
  async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response =
        await fetch(
          `${API_URL}/articles`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(
              newArticle
            ),
          }
        );

      if (!response.ok) {
        throw new Error();
      }

      fetchArticles();

      setShowAdmin(false);

      setNewArticle({
        title: "",
        description: "",
        category:
          "Automation",
        image: "",
        date: "",
      });
    } catch {
      alert(
        "Failed to create article"
      );
    }
  };

   ///.......Delete Article........//// 
  const deleteArticle =
  async (id: string) => {
    try {
      const token =
        localStorage.getItem("token");

      await fetch(
        `${API_URL}/articles/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchArticles();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
  return (
    <div className="py-20 min-h-screen text-center">
      Loading articles...
    </div>
  );
  }

  return (
    <>
    <section className="bg-background py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="max-w-4xl pt-30"
        >
          {/* LABEL */}
          <p className="uppercase tracking-wide text-xs md:text-sm font-bold text-primary">
            Business Resources
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl leading-tight tracking-tight text-primary-foreground font-black mt-2">
            Insights to Power
            <br />
            Your Business
          </h2>

          {/* DESCRIPTION */}
          <p className="text-text text-sm md:text-lg leading-7 mt-6 max-w-3xl">
            Practical advice, industry trends, and deep dives
            into automation, operations, and business
            technology.
          </p>

          {/* SEARCH BAR */}
          <div className="flex flex-row gap-4 mt-12">
            <div className="flex items-center gap-4 bg-white border border-black/10 rounded-xl px-5 h-14 flex-1 shadow-sm">
              <Search
                size={20}
                className="text-text"
              />

              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full bg-transparent outline-none text-sm text-primary-foreground placeholder:text-text"
              />
            </div>

            <button className="bg-primary hover:bg-primary-hover transition-all duration-300 text-white h-14 px-10 rounded-xl font-bold shadow-lg shadow-blue-500/20">
              Search
            </button>
          </div>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="flex flex-wrap items-center gap-4 mt-14"
        >
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveCategory(item)
              }
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === item
                  ? "bg-primary text-white shadow-lg shadow-blue-500/20"
                  : "bg-[#EEF2F8] text-text hover:bg-primary hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

          {/* ADMIN BUTTON */}
          <button
            onClick={() => {
              if (!isAuthenticated) {
                setShowLogin(true);
                return;
                }
              setShowAdmin(!showAdmin);
            }}
            className="ml-auto bg-primary-foreground hover:bg-primary transition-all duration-300 text-white px-5 py-3 rounded-full flex items-center gap-2 text-sm font-bold"
          >
            <Plus size={16} />
            Add Article
          </button>
        </motion.div>

        {/* ADMIN PANEL */}
        <AnimatePresence>
          {showAdmin && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
              className="bg-white border border-black/10 rounded-2xl p-8 mt-10 shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-3xl font-black text-primary-foreground">
                Add New Article
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mt-8">

                {/* TITLE */}
                <input
                  type="text"
                  placeholder="Article Title"
                  value={newArticle.title}
                  onChange={(e) =>
                    setNewArticle({
                      ...newArticle,
                      title: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-black/10 px-5 outline-none"
                />

                {/* CATEGORY */}
                <select
                  value={newArticle.category}
                  onChange={(e) =>
                    setNewArticle({
                      ...newArticle,
                      category: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-black/10 px-5 outline-none"
                >
                  {categories
                    .filter(
                      (item) =>
                        item !== "All Posts"
                    )
                    .map((item, index) => (
                      <option
                        key={index}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                </select>

                {/* IMAGE */}
                <input
                  type="text"
                  placeholder="Image Path (/image.png)"
                  value={newArticle.image}
                  onChange={(e) =>
                    setNewArticle({
                      ...newArticle,
                      image: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-black/10 px-5 outline-none"
                />

                {/* DATE */}
                <input
                  type="text"
                  placeholder="Date"
                  value={newArticle.date}
                  onChange={(e) =>
                    setNewArticle({
                      ...newArticle,
                      date: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-black/10 px-5 outline-none"
                />
              </div>

              {/* DESCRIPTION */}
              <textarea
                placeholder="Article Description"
                value={newArticle.description}
                onChange={(e) =>
                  setNewArticle({
                    ...newArticle,
                    description: e.target.value,
                  })
                }
                className="w-full h-36 rounded-2xl border border-black/10 px-5 py-4 outline-none mt-5 resize-none"
              />

              {/* BUTTON */}
              <button
                onClick={handleAddArticle}
                className="bg-primary hover:bg-primary-hover transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold mt-6"
              >
                Publish Article
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ARTICLES GRID */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20"
        >
          <AnimatePresence mode="wait">
            {filteredArticles
            .slice(0, visibleCount)
            .map(
              (article, index) => (
                <motion.div
                  key={article._id}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={index + 1}
                  whileHover={{
                    y: -10,
                  }}
                  className="group"
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-65 object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="pt-6">

                    {/* CATEGORY */}
                    <p className="uppercase tracking-[0.18em] text-sm font-bold text-primary">
                      {article.category}
                    </p>

                    {/* TITLE */}
                    <h3 className="text-xl leading-tight font-black text-primary-foreground mt-4">
                      {article.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-text leading-7 mt-5">
                      {article.description}
                    </p>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between mt-8 border-t border-black/5 pt-6">

                      {/* DATE */}
                      <div className="flex items-center gap-2 text-text/80 text-sm">
                        <CalendarDays size={16} />
                        {article.date}
                      </div>

                      {/* READ MORE */}
                      <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight size={16} />
                      </button>

                    </div>
                    {isAuthenticated && (
                      <button
                        onClick={() =>
                          deleteArticle(article._id)
                        }
                        className="mt-4 text-red-500 hover:text-red-700 text-sm font-bold"
                      >
                        Delete Article
                      </button>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length >
          visibleCount && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() =>
                setVisibleCount(
                  (prev) => prev + 6
                )
              }
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold"
            >
              Load More Articles
            </button>
          </div>
        )}

        {/* EMPTY STATE */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="text-center py-24"
          >
            <h3 className="text-4xl font-black text-primary-foreground">
              No Articles Found
            </h3>

            <p className="text-text text-lg mt-4">
              Try another search or category.
            </p>
          </motion.div>
        )}
      </div>


      <AnimatePresence>
  {showLogin && (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold">
          Admin Login
        </h3>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="w-full h-14 border mt-6 px-4 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full h-14 border mt-4 px-4 rounded-xl"
        />

        <button
          onClick={loginAdmin}
          className="w-full bg-primary text-white h-14 rounded-xl mt-6"
        >
          Login
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
    <Cta />
    </>
  );
};

export default BusinessInsights;