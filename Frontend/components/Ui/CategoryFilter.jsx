import React from "react";

const CategoryCheckbox = ({label, value, selected, toggle}) => {
  return (
    <label className="flex gap-1 items-center">
      <input
        type="checkbox"
        className="checkbox checkbox-nuetral checkbox-sm bg-white"
        value={selected}
        onChange={() => toggle(value)}
      />
      <span className="text-md">{label}</span>
      <span>|</span>
    </label>
  );
};

export default function CategoryFilter({selectedCategories, toggleCategory}) {
  const categories = [
    {label: "Men", value: "men's clothing"},
    {label: "Women", value: "women's clothing"},
    {label: "Jewelery", value: "jewelery"},
    {label: "Electronics", value: "electronics"},
  ];

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {categories.map((cat) => (
        <CategoryCheckbox
          key={cat.value}
          label={cat.label}
          value={cat.value}
          selected={selectedCategories.includes(cat.value)}
          toggle={toggleCategory}
        />
      ))}
    </div>
  );
}
