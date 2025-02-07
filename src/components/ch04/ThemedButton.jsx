import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(`ThemedButton was rendered`);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "dark" ? "#333333" : "#f7f4f4",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};
export default ThemedButton;
