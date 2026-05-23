"use client";

import React, { useMemo, useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  CalendarDays,
  Plus,
} from "lucide-react";

/* ARTICLE IMAGES */
import AutomationImg from "/resource1.jpg";
import GrowthImg from "/resource2.jpg";
import OperationsImg from "/resource3.jpg";
import WorkspaceImg from "/resource4.jpg";
import TechImg from "/resource5.png";
import BrandingImg from "/resource3.jpg";

import Cta from "./cta"

type Article = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
};

const categories = [
  "All Posts",
  "Automation",
  "Business Growth",
  "Operations",
  "Workspace",
  "Tech",
  "Branding",
];

const initialArticles: Article[] = [
  {
    id: 1,
    title: "5 Tasks You Can Automate Today to Save Hours Every Week",
    description:
      "Manual data entry and repetitive emails are slowing your productivity. Here’s how to automate them.",
    category: "Automation",
    image: AutomationImg,
    date: "May 12, 2026",
  },
  {
    id: 2,
    title: "How Data-Driven Decisions Increase Profitability",
    description:
      "Learn how analytics and reporting systems help businesses grow faster with clarity.",
    category: "Business Growth",
    image: GrowthImg,
    date: "May 5, 2026",
  },
  {
    id: 3,
    title: "Building SOPs That Work Even Without You",
    description:
      "Create scalable systems and workflows that keep operations running smoothly.",
    category: "Operations",
    image: OperationsImg,
    date: "April 28, 2026",
  },
  {
    id: 4,
    title: "How Smart Workspaces Improve Team Productivity",
    description:
      "Discover how collaborative environments improve efficiency and innovation.",
    category: "Workspace",
    image: WorkspaceImg,
    date: "April 20, 2026",
  },
  {
    id: 5,
    title: "Emerging Tech Trends SMEs Should Watch",
    description:
      "AI, automation, and cloud systems are changing how modern businesses scale.",
    category: "Tech",
    image: TechImg,
    date: "April 15, 2026",
  },
  {
    id: 6,
    title: "Branding Strategies That Make Customers Trust You",
    description:
      "Strong visual identity and consistency can dramatically improve conversions.",
    category: "Branding",
    image: BrandingImg,
    date: "April 8, 2026",
  },
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

const BusinessInsights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [search, setSearch] = useState("");

  /* ADMIN STATE */
  const [showAdmin, setShowAdmin] = useState(false);

  const [articles, setArticles] =
    useState<Article[]>(initialArticles);

  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
    category: "Automation",
    image: "",
    date: "",
  });

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
  const handleAddArticle = () => {
    if (
      !newArticle.title ||
      !newArticle.description ||
      !newArticle.image
    ) {
      return;
    }

    const article: Article = {
      id: Date.now(),
      title: newArticle.title,
      description: newArticle.description,
      category: newArticle.category,
      image: newArticle.image,
      date:
        newArticle.date ||
        new Date().toLocaleDateString(),
    };

    setArticles([article, ...articles]);

    setNewArticle({
      title: "",
      description: "",
      category: "Automation",
      image: "",
      date: "",
    });

    setShowAdmin(false);
  };

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
            onClick={() =>
              setShowAdmin(!showAdmin)
            }
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
            {filteredArticles.map(
              (article, index) => (
                <motion.div
                  key={article.id}
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
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>

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
    </section>
    <Cta />
    </>
  );
};

export default BusinessInsights;