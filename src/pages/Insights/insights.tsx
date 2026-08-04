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
  const [loading, setLoading] = useState(true);

  const [articles, setArticles] = useState<Article[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All Posts");

  const [visibleCount, setVisibleCount] = useState(6);

  const [showAdmin, setShowAdmin] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const [editingArticle, setEditingArticle] =
    useState<Article | null>(null);

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [saving, setSaving] = useState(false);

  const token = localStorage.getItem("token") || "";

  const fetchArticles = async () => {
    try {
      const data = await getArticles();

      setArticles(data.articles ?? []);
    } catch (error) {
      console.error("Unable to fetch articles:", error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      setCategories(data.categories ?? []);
    } catch (error) {
      console.error("Unable to fetch categories:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await Promise.all([
        fetchArticles(),
        fetchCategories(),
      ]);

      setIsAuthenticated(
        Boolean(localStorage.getItem("token"))
      );
    };

    initialize();
  }, []);

  const loginAdmin = async () => {
    try {
      const data = await login(email, password);

      if (!data.success) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);

      setIsAuthenticated(true);
      setShowLogin(false);

      // Open the article form automatically after login.
      setEditingArticle(null);
      setShowAdmin(true);

      alert("Login Successful");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSaveArticle = async (
    article: Partial<Article>
  ) => {
    try {
      setSaving(true);

      if (!token) {
        setShowLogin(true);
        return;
      }

      const isEditing = Boolean(editingArticle);

      if (editingArticle) {
        await updateArticle(
          editingArticle.id,
          article,
          token
        );
      } else {
        await createArticle(article, token);
      }

      await fetchArticles();

      setEditingArticle(null);
      setShowAdmin(false);

      alert(
        isEditing
          ? "Article updated successfully"
          : "Article published successfully"
      );
    } catch (error) {
      console.error("Unable to save article:", error);
      alert("Unable to save article");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    const shouldDelete = window.confirm(
      "Delete this article?"
    );

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteArticle(id, token);
      await fetchArticles();
    } catch (error) {
      console.error("Unable to delete article:", error);
      alert("Unable to delete article");
    }
  };

  const handleToggleFeatured = async (id: string) => {
    try {
      await toggleFeatured(id, token);
      await fetchArticles();
    } catch (error) {
      console.error(
        "Unable to update featured status:",
        error
      );
    }
  };

  const handleTogglePublished = async (id: string) => {
    try {
      await togglePublished(id, token);
      await fetchArticles();
    } catch (error) {
      console.error(
        "Unable to update publication status:",
        error
      );
    }
  };

  const filteredArticles = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return articles.filter((article) => {
      const categoryMatch =
        activeCategory === "All Posts" ||
        article.category.name === activeCategory;

      const searchMatch =
        article.title
          .toLowerCase()
          .includes(normalizedSearch) ||
        article.description
          .toLowerCase()
          .includes(normalizedSearch);

      return categoryMatch && searchMatch;
    });
  }, [articles, search, activeCategory]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <section className="overflow-hidden bg-background py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

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
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              Business Resources
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-primary-foreground md:text-6xl">
              Insights to Power
              <br />
              Your Business
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-text">
              Practical advice, industry trends, automation,
              operations and digital growth strategies.
            </p>

            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </motion.div>

          {/* CATEGORY FILTER + ADD ARTICLE */}

          <div className="mt-22 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            <button
              type="button"
              onClick={() => {
                if (!isAuthenticated) {
                  setShowLogin(true);
                  return;
                }

                setEditingArticle(null);
                setShowAdmin(true);
              }}
              className="flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-primary px-6 py-4 font-bold text-white transition-all hover:bg-primary-hover"
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
                setEditingArticle(article as Article);
                setShowAdmin(true);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              onToggleFeatured={handleToggleFeatured}
              onTogglePublished={handleTogglePublished}
            />
          </div>

          {/* LOAD MORE */}

          {filteredArticles.length > visibleCount && (
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount(
                    (previous) => previous + 6
                  )
                }
                className="rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary-hover"
              >
                Load More Articles
              </button>
            </div>
          )}
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