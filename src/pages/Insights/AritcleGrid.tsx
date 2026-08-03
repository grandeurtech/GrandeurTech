import ArticleCard, { type Article as CardArticle } from "./ArticleCard";
import type { Article } from "../../types/articles";

interface Props {
  articles: Article[];
  isAuthenticated: boolean;
  onDelete: (id: string) => void;
  onEdit: (article: CardArticle) => void;
  onToggleFeatured: (id: string) => void;
  onTogglePublished: (id: string) => void;
}

const ArticleGrid = ({
  articles,
  isAuthenticated,
  onDelete,
  onEdit,
  onToggleFeatured,
  onTogglePublished,
}: Props) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold">
          No Articles Found
        </h2>

        <p className="mt-4 text-gray-500">
          Try another category or search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

      {articles.map((article) => (

        <ArticleCard
          key={article.id}
          article={article}
          isAuthenticated={isAuthenticated}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleFeatured={onToggleFeatured}
          onTogglePublished={onTogglePublished}
        />

      ))}

    </div>
  );
};

export default ArticleGrid;