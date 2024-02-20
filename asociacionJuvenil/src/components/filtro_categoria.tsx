import { useState } from 'react';

const CategoryFilter = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState("");
    // categories props.categories
    // onchange props.onchange
  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      <option value="Todas">Todas</option>
      {props.categories.map((category: any) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
