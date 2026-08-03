import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex gap-4 mt-12">

      <div className="flex items-center gap-4 bg-white border rounded-xl px-5 h-14 flex-1">

        <Search size={20} />

        <input
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder="Search articles..."
          className="flex-1 outline-none"
        />

      </div>

    </div>
  );
};

export default SearchBar;