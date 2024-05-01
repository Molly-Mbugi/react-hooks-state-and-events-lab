import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State variable to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for updating the selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Dropdown to select category */}
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          {/* Map over unique categories and create an option for each */}
          {Array.from(new Set(items.map(item => item.category))).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <ul className="Items">
        {/* Display filtered items */}
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
