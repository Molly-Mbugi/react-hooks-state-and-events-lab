import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable for toggling between dark and light modes
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Determine the class name based on the current mode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle dark mode */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

