"use client";
import SearchBar from "@/components/ui/Searchbar";
import CategoryFilter from "@/components/ui/CategoryFilter";

export default function ProductsHeader({
  search,
  setSearch,
  category,
  toggleCategory,
}) {
  return (
    <div className="flex flex-start justify-items-start items-start gap-2">
      <div className="md:flex-row flex flex-col items-center justify-start gap-5">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          selectedCategories={category}
          toggleCategory={toggleCategory}
        />
      </div>
    </div>
  );
}
