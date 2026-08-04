import { useState } from "react";
import { uploadImage } from "../../services/uploadService";
import RichTextEditor from "./RichTextEditor";

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
  onSubmit: (
    article: ArticleFormData
  ) => void | Promise<void>;
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
  editingArticle,
  onSubmit,
  onClose,
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

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!token) {
      alert(
        "Your session has expired. Please log in again."
      );
      return;
    }

    try {
      setUploading(true);

      const imageUrl = await uploadImage(
        file,
        token
      );

      setArticle((previous) => ({
        ...previous,
        image: imageUrl,
      }));
    } catch (error) {
      console.error(
        "Image upload failed:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Image upload failed"
      );
    } finally {
      setUploading(false);
    }
  };

  const getPlainText = (html: string) => {
    const temporaryElement =
      document.createElement("div");

    temporaryElement.innerHTML = html;

    return (
      temporaryElement.textContent ??
      temporaryElement.innerText ??
      ""
    ).trim();
  };

  const handleSubmit = async () => {
    if (!article.title.trim()) {
      alert("Please enter the article title.");
      return;
    }

    if (!article.description.trim()) {
      alert(
        "Please enter the article description."
      );
      return;
    }

    if (!getPlainText(article.content)) {
      alert("Please enter the article content.");
      return;
    }

    if (!article.categoryId) {
      alert("Please select a category.");
      return;
    }

    if (uploading) {
      alert(
        "Please wait for the image upload to finish."
      );
      return;
    }

    if (!article.image) {
      alert(
        "Please upload an article image."
      );
      return;
    }

    await onSubmit({
      ...article,
      title: article.title.trim(),
      description: article.description.trim(),
    });
  };

  return (
    <div className="mt-12 rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-8 text-2xl font-bold text-primary-foreground">
        {editingArticle
          ? "Update Article"
          : "Create Article"}
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          placeholder="Article title"
          value={article.title}
          onChange={(event) =>
            setArticle((previous) => ({
              ...previous,
              title: event.target.value,
            }))
          }
          className="h-14 w-full rounded-xl border border-black/10 px-4 outline-none"
        />

        <select
          value={article.categoryId}
          onChange={(event) =>
            setArticle((previous) => ({
              ...previous,
              categoryId: event.target.value,
            }))
          }
          className="h-14 w-full rounded-xl border border-black/10 px-4 outline-none"
        >
          <option value="">
            Select category
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
      </div>

      <textarea
        placeholder="Article description"
        value={article.description}
        onChange={(event) =>
          setArticle((previous) => ({
            ...previous,
            description: event.target.value,
          }))
        }
        className="mt-5 h-32 w-full resize-none rounded-xl border border-black/10 p-4 outline-none"
      />

      {/* RICH-TEXT CONTENT EDITOR */}

      <div className="mt-5">
        <label className="mb-2 block font-semibold text-primary-foreground">
          Article Content
        </label>

        <RichTextEditor
          value={article.content}
          onChange={(content) =>
            setArticle((previous) => ({
              ...previous,
              content,
            }))
          }
        />
      </div>

      {/* IMAGE UPLOAD */}

      <div className="mt-5 rounded-xl border border-black/10 p-5">
        <label className="block font-semibold text-primary-foreground">
          Article Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={uploading || loading}
          className="mt-3 block w-full"
        />

        {uploading && (
          <p className="mt-3 text-sm text-primary">
            Uploading image...
          </p>
        )}

        {!uploading && article.image && (
          <p className="mt-3 text-sm text-green-600">
            Image uploaded successfully.
          </p>
        )}

        {article.image && (
          <img
            src={article.image}
            alt="Article preview"
            className="mt-4 h-40 w-full max-w-sm rounded-xl object-cover"
          />
        )}
      </div>

      {/* ARTICLE SETTINGS */}

      <div className="mt-6 flex flex-wrap gap-5">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={article.featured}
            onChange={(event) =>
              setArticle((previous) => ({
                ...previous,
                featured: event.target.checked,
              }))
            }
          />

          Featured article
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={article.published}
            onChange={(event) =>
              setArticle((previous) => ({
                ...previous,
                published: event.target.checked,
              }))
            }
          />

          Publish immediately
        </label>
      </div>

      {/* ACTIONS */}

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          disabled={loading || uploading}
          onClick={handleSubmit}
          className="rounded-xl bg-primary px-8 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
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
          className="rounded-xl border px-6 py-4 font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;