import { useState } from "react";
import { uploadImage } from "../../services/uploadService";

interface Category {
  id: string;
  name: string;
}

interface Article {
  title: string;
  description: string;
  content: string;
  image: string;
  categoryId: string;
}

interface Props {
  categories: Category[];
  token: string;
  loading: boolean;
  editingArticle: Article | null;
  onSubmit: (article: Article) => void;
  onClose: () => void;
}

const AdminPanel = ({
  categories,
  token,
  loading,
  onSubmit,
  onClose,
  editingArticle,
}: Props) => {
  const [article, setArticle] = useState({
    title: editingArticle?.title || "",
    description: editingArticle?.description || "",
    content: editingArticle?.content || "",
    image: editingArticle?.image || "",
    categoryId: editingArticle?.categoryId || "",
  });

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;

    const data = await uploadImage(
      e.target.files[0],
      token
    );

    setArticle((prev) => ({
      ...prev,
      image: data.image,
    }));
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow mt-12">

      <h2 className="text-2xl font-bold mb-8">

        {editingArticle
          ? "Update Article"
          : "Create Article"}

      </h2>

      <input
        placeholder="Title"
        value={article.title}
        onChange={(e) =>
          setArticle({
            ...article,
            title: e.target.value,
          })
        }
        className="border rounded-xl h-14 px-4 w-full mb-4"
      />

      <textarea
        placeholder="Description"
        value={article.description}
        onChange={(e) =>
          setArticle({
            ...article,
            description: e.target.value,
          })
        }
        className="border rounded-xl p-4 w-full mb-4"
      />

      <textarea
        placeholder="Content"
        value={article.content}
        onChange={(e) =>
          setArticle({
            ...article,
            content: e.target.value,
          })
        }
        className="border rounded-xl p-4 w-full mb-4 h-44"
      />

      <select
        value={article.categoryId}
        onChange={(e) =>
          setArticle({
            ...article,
            categoryId: e.target.value,
          })
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

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-6"
      />

      {article.image && (

        <img
          src={article.image}
          className="w-48 rounded-xl mb-6"
        />

      )}

      <button
        disabled={loading}
        onClick={() =>
          onSubmit(article)
        }
        className="bg-primary text-white px-8 py-4 rounded-xl"
      >

        {loading
          ? "Saving..."
          : editingArticle
          ? "Update"
          : "Publish"}

      </button>

      <button
  type="button"
  onClick={onClose}
  className="border rounded-xl px-6 py-3"
>
  Cancel
</button>

    </div>
  );
};

export default AdminPanel;