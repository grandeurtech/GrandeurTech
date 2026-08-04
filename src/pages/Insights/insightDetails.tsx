import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

import {
  getArticle,
  getRelatedArticles,
} from "../../services/aticleService";

import type { Article } from "../../types/articles";

const InsightDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const [article, setArticle] =
    useState<Article | null>(null);

  const [relatedArticles, setRelatedArticles] =
    useState<Article[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) {
        setError("Invalid article URL.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const articleData =
          await getArticle(slug);

        setArticle(articleData.article);

        const relatedData =
          await getRelatedArticles(slug);

        setRelatedArticles(
          relatedData.articles ?? []
        );
      } catch (error) {
        console.error(
          "Unable to load article:",
          error
        );

        setError(
          "The article could not be loaded."
        );
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">
          Loading article...
        </p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-black text-primary-foreground">
          Article Not Found
        </h1>

        <p className="mt-4 text-text">
          {error ||
            "This article is unavailable."}
        </p>

        <Link
          to="/insights"
          className="mt-8 rounded-xl bg-primary px-6 py-3 font-bold text-white"
        >
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-background">
      <section className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-bold text-primary"
          >
            <ArrowLeft size={18} />
            Back to Insights
          </Link>

          <div className="mt-12">
            <p className="uppercase tracking-[0.18em] text-sm font-bold text-primary">
              {article.category.name}
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-primary-foreground">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-text">
              {article.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-text">
              <CalendarDays size={17} />

              {new Date(
                article.createdAt
              ).toLocaleDateString()}
            </div>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="mt-12 h-[320px] md:h-[520px] w-full rounded-3xl object-cover"
          />

          <article className="mt-12 whitespace-pre-line text-lg leading-9 text-primary-foreground">
            {article.content}
          </article>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="pb-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-black text-primary-foreground">
              Related Articles
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map(
                (relatedArticle) => (
                  <div
                    key={relatedArticle.id}
                    className="rounded-2xl bg-white p-5 shadow"
                  >
                    <img
                      src={relatedArticle.image}
                      alt={
                        relatedArticle.title
                      }
                      className="h-48 w-full rounded-xl object-cover"
                    />

                    <p className="mt-5 text-sm font-bold uppercase tracking-wide text-primary">
                      {
                        relatedArticle.category
                          .name
                      }
                    </p>

                    <h3 className="mt-3 text-xl font-black text-primary-foreground">
                      {
                        relatedArticle.title
                      }
                    </h3>

                    <p className="mt-3 line-clamp-3 text-text">
                      {
                        relatedArticle.description
                      }
                    </p>

                    <Link
                      to={`/insights/${relatedArticle.slug}`}
                      className="mt-5 inline-block font-bold text-primary"
                    >
                      Read Article
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default InsightDetails;