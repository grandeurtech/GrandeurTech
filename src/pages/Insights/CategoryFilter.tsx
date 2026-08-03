interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-wrap gap-4 mt-14">
      <button
        onClick={() => onChange("All Posts")}
        className={
          activeCategory === "All Posts"
            ? "bg-primary text-white px-6 py-3 rounded-full"
            : "bg-gray-100 px-6 py-3 rounded-full"
        }
      >
        All Posts
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.name)}
          className={
            activeCategory === category.name
              ? "bg-primary text-white px-6 py-3 rounded-full"
              : "bg-gray-100 px-6 py-3 rounded-full"
          }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;