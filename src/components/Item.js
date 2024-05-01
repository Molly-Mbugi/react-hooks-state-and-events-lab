import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Function to handle adding/removing item from the cart
  const handleCartToggle = () => {
    setInCart(!inCart);
  };

  // Determine the class name based on whether the item is in the cart
  const itemClass = inCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      {/* Item name */}
      <span>{name}</span>
      {/* Item category */}
      <span className="category">{category}</span>
      {/* Button to add/remove item from cart */}
      <button className="add" onClick={handleCartToggle}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

