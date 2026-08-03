"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Plus } from "lucide-react";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ArticleGrid from "./AritcleGrid";
import LoginModal from "./LoginModal";
import AdminPanel from "./AdminPanel";
import Cta from "./cta";

import {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  toggleFeatured,
  togglePublished,
} from "../../services/aticleService";

import { getCategories } from "../../services/catergoryService";
import { login } from "../../services/authService";

import type {
  Article,
  Category,
} from "../../types/articles";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const BusinessInsights = () => {
  const [loading, setLoading] =
    useState(true);

  const [articles, setArticles] =
    useState<Article[]>([]);

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [search, setSearch] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState("All Posts");

  const [visibleCount, setVisibleCount] =
    useState(6);

  const [showAdmin, setShowAdmin] =
    useState(false);

  const [showLogin, setShowLogin] =
    useState(false);

  const [editingArticle, setEditingArticle] =
    useState<Article | null>(null);

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const [email, setEmail] = 
    useState("");

  const [password, setPassword] =
    useState("");
  
  const [saving, setSaving] = useState(false);

  const token =
    localStorage.getItem("token") || "";

  const fetchArticles = async () => {
    try {
      const data = await getArticles();

      setArticles(data.articles);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      setCategories(data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
  const initialize = async () => {
    await fetchArticles();
    await fetchCategories();

    setIsAuthenticated(
      !!localStorage.getItem("token")
    );
  };

  initialize();
}, []);

  const loginAdmin = async () => {
    try {
      const data = await login(
        email,
        password
      );

      if (!data.success) {
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
    } catch (err) {
      console.log(err);
    }
  };

const handleSaveArticle = async (
  article: Partial<Article>
) => {
  try {
    setSaving(true);

    if (editingArticle) {
      await updateArticle(
        editingArticle.id,
        article,
        token
      );
    } else {
      await createArticle(
        article,
        token
      );
    }

    await fetchArticles();

    setEditingArticle(null);
    setShowAdmin(false);

    alert(
      editingArticle
        ? "Article updated successfully"
        : "Article published successfully"
    );
  } catch (error) {
    console.error(error);
    alert("Unable to save article");
  } finally {
    setSaving(false);
  }
};

  const handleDeleteArticle = async (
    id: string
  ) => {
    if (
      !window.confirm(
        "Delete this article?"
      )
    )
      return;

    await deleteArticle(id, token);

    fetchArticles();
  };

  const handleToggleFeatured =
    async (id: string) => {
      await toggleFeatured(
        id,
        token
      );

      fetchArticles();
    };

  const handleTogglePublished =
    async (id: string) => {
      await togglePublished(
        id,
        token
      );

      fetchArticles();
    };

  const filteredArticles =
    useMemo(() => {
      return articles.filter(
        (article) => {
          const categoryMatch =
            activeCategory ===
            "All Posts"
              ? true
              : article.category.name ===
                activeCategory;

          const searchMatch =
            article.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            article.description
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          return (
            categoryMatch &&
            searchMatch
          );
        }
      );
    }, [
      articles,
      search,
      activeCategory,
    ]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <section className="bg-background py-28 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* HERO */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            custom={1}
            className="max-w-4xl pt-24"
          >

            <p className="uppercase tracking-wide text-sm font-bold text-primary">
              Business Resources
            </p>

            <h2 className="text-3xl md:text-6xl font-black mt-3 leading-tight text-primary-foreground">
              Insights to Power
              <br />
              Your Business
            </h2>

            <p className="mt-6 text-text text-lg max-w-3xl leading-8">
              Practical advice,
              industry trends,
              automation,
              operations and
              digital growth
              strategies.
            </p>

            <SearchBar
              value={search}
              onChange={setSearch}
            />
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />

          </motion.div>

          {/* TOP ACTIONS */}

          <div className="flex justify-end mt-10">

            <button
              onClick={() => {
                if (!isAuthenticated) {
                  setShowLogin(true);
                  return;
                }

                setEditingArticle(null);
                setShowAdmin(true);
              }}
              className="bg-primary hover:bg-primary-hover text-white rounded-xl px-6 py-4 flex items-center gap-2 transition-all"
            >
              <Plus size={18} />

              Add Article

            </button>

          </div>

          {/* ADMIN PANEL */}

          {showAdmin && (

            <div className="mt-10">

              <AdminPanel
                key={editingArticle?.id ?? "new-article"}
                categories={categories}
                token={token}
                loading={saving}
                editingArticle={editingArticle}
                onSubmit={handleSaveArticle}
                onClose={() => {
                  setShowAdmin(false);
                  setEditingArticle(null);
                }}
              />

            </div>

          )}

          {/* ARTICLES */}

          <div className="mt-20">

            <ArticleGrid
              articles={filteredArticles.slice(
                0,
                visibleCount
              )}
              isAuthenticated={isAuthenticated}
              onDelete={handleDeleteArticle}
              onEdit={(article) => {
                // article from ArticleGrid may be a narrower type; assert as full Article
                setEditingArticle(article as Article);

                setShowAdmin(true);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              onToggleFeatured={
                handleToggleFeatured
              }
              onTogglePublished={
                handleTogglePublished
              }
            />

          </div>

          {/* LOAD MORE */}

          {filteredArticles.length >
            visibleCount && (

            <div className="flex justify-center mt-16">

              <button
                onClick={() =>
                  setVisibleCount(
                    (prev) => prev + 6
                  )
                }
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all"
              >
                Load More Articles
              </button>

            </div>

          )}

          {/* EMPTY STATE */}

        </div>

      </section>
            {/* LOGIN MODAL */}

      <LoginModal
        open={showLogin}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onLogin={loginAdmin}
        onClose={() => setShowLogin(false)}
      />

      {/* CTA */}

      <Cta />

    </>
  );
};

export default BusinessInsights;