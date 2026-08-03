import { useState } from "react";
import { uploadImage } from "../../services/uploadService";

interface Category {
  id: string;
  name: string;
}

interface ArticleFormData {
  title: string;
  description: string;
  content: string;
  image: string;
  categoryId: string;
  featured: boolean;
  published: boolean;
}

interface EditingArticle extends ArticleFormData {
  id?: string;
}

interface Props {
  categories: Category[];
  token: string;
  loading: boolean;
  editingArticle: EditingArticle | null;
  onSubmit: (article: ArticleFormData) => void | Promise<void>;
  onClose: () => void;
}

const emptyArticle: ArticleFormData = {
  title: "",
  description: "",
  content: "",
  image: "",
  categoryId: "",
  featured: false,
  published: true,
};

const AdminPanel = ({
  categories,
  token,
  loading,
  onSubmit,
  onClose,
  editingArticle,
}: Props) => {
  
  const getInitialArticle = (): ArticleFormData => {
  if (!editingArticle) {
    return {
      ...emptyArticle,
    };
  }

  return {
    title: editingArticle.title,
    description: editingArticle.description,
    content: editingArticle.content,
    image: editingArticle.image,
    categoryId: editingArticle.categoryId,
    featured: editingArticle.featured,
    published: editingArticle.published,
  };
};

const [article, setArticle] =
  useState<ArticleFormData>(getInitialArticle);

const [uploading, setUploading] =
  useState(false);

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!token) {
      alert("Please log in again.");
      return;
    }

    try {
      setUploading(true);

      const data = await uploadImage(file, token);

      setArticle((previous) => ({
        ...previous,
        image: data.image,
      }));
    } catch (error) {
      console.error(error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!article.title.trim()) {
      alert("Please enter the article title.");
      return;
    }

    if (!article.description.trim()) {
      alert("Please enter the article description.");
      return;
    }

    if (!article.content.trim()) {
      alert("Please enter the article content.");
      return;
    }

    if (!article.categoryId) {
      alert("Please select a category.");
      return;
    }

    if (!article.image) {
      alert("Please upload an article image.");
      return;
    }

    if (uploading) {
      alert("Please wait for the image upload to finish.");
      return;
    }

    await onSubmit({
      ...article,
      title: article.title.trim(),
      description: article.description.trim(),
      content: article.content.trim(),
    });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow mt-12">
      <h2 className="text-2xl font-bold mb-8">
        {editingArticle
          ? "Update Article"
          : "Create Article"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={article.title}
        onChange={(event) =>
          setArticle((previous) => ({
            ...previous,
            title: event.target.value,
          }))
        }
        className="border rounded-xl h-14 px-4 w-full mb-4"
      />

      <textarea
        placeholder="Description"
        value={article.description}
        onChange={(event) =>
          setArticle((previous) => ({
            ...previous,
            description: event.target.value,
          }))
        }
        className="border rounded-xl p-4 w-full mb-4"
      />

      <textarea
        placeholder="Content"
        value={article.content}
        onChange={(event) =>
          setArticle((previous) => ({
            ...previous,
            content: event.target.value,
          }))
        }
        className="border rounded-xl p-4 w-full mb-4 h-44"
      />

      <select
        value={article.categoryId}
        onChange={(event) =>
          setArticle((previous) => ({
            ...previous,
            categoryId: event.target.value,
          }))
        }
        className="border rounded-xl h-14 px-4 w-full mb-4"
      >
        <option value="">
          Select Category
        </option>

        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>

      <div className="mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading || loading}
        />

        {uploading && (
          <p className="mt-2 text-sm text-primary">
            Uploading image...
          </p>
        )}
      </div>

      {article.image && (
        <img
          src={article.image}
          alt="Article preview"
          className="w-48 h-32 object-cover rounded-xl mb-6"
        />
      )}

      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          disabled={loading || uploading}
          onClick={handleSubmit}
          className="bg-primary text-white px-8 py-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading
            ? "Saving..."
            : editingArticle
              ? "Update Article"
              : "Publish Article"}
        </button>

        <button
          type="button"
          disabled={loading || uploading}
          onClick={onClose}
          className="border rounded-xl px-6 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;