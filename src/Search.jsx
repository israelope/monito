import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      {/* Search icon */}
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

      {/* Input field */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
