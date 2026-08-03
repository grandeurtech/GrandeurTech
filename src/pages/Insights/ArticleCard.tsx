import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  category: {
    id: string;
    name: string;
  };
}

interface ArticleCardProps {
  article: Article;
  isAuthenticated: boolean;

  onDelete: (id: string) => void;

  onEdit: (article: Article) => void;

  onToggleFeatured: (id: string) => void;

  onTogglePublished: (id: string) => void;
}

const ArticleCard = ({
  article,
  isAuthenticated,
  onDelete,
  onEdit,
  onToggleFeatured,
  onTogglePublished,
}: ArticleCardProps) => {
  return (
    <div className="group">

      {/* IMAGE */}

      <div className="overflow-hidden rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      {/* CONTENT */}

      <div className="pt-6">

        <p className="uppercase tracking-[0.18em] text-sm font-bold text-primary">
          {article.category.name}
        </p>

        <h3 className="mt-4 text-2xl font-black text-primary-foreground">
          {article.title}
        </h3>

        <p className="mt-5 text-text leading-7">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-8 border-t pt-6">

          <div className="flex items-center gap-2 text-sm text-text">

            <CalendarDays size={16} />

            {new Date(article.createdAt).toLocaleDateString()}

          </div>

          <Link
            to={`/insights/${article.slug}`}
            className="flex items-center gap-2 font-bold text-primary"
          >
            Read More

            <ArrowRight size={16} />
          </Link>

        </div>

        {isAuthenticated && (

          <div className="flex flex-wrap gap-3 mt-6">

            <button
              onClick={() => onEdit(article)}
              className="text-blue-600 font-bold"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(article.id)}
              className="text-red-600 font-bold"
            >
              Delete
            </button>

            <button
              onClick={() => onToggleFeatured(article.id)}
              className="text-yellow-600 font-bold"
            >
              {article.featured ? "Unfeature" : "Feature"}
            </button>

            <button
              onClick={() => onTogglePublished(article.id)}
              className="text-green-600 font-bold"
            >
              {article.published ? "Unpublish" : "Publish"}
            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default ArticleCard;