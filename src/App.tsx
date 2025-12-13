import Card from "./components/Card";
import { useTheme } from "./context/ThemeContext";
import { useUsers } from "./hooks/useUsers";
import React from "react";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { data, isLoading, isError } = useUsers();
  
  const containerStyle: React.CSSProperties = {
    padding: "20px",
    minHeight: "100vh",
    backgroundColor: isDarkMode ? "#222" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
          <button 
            onClick={toggleTheme}
            style={{ padding: "10px", cursor: "pointer", borderRadius: "8px" }}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <h1>User List (From API)</h1>

        {isLoading && <h2>⏳ Loading data...</h2>}
        {isError && <h2 style={{ color: "red" }}>❌ Failed to retrieve data!</h2>}

        {data?.map((user) => (
          <Card 
            key={user.id}
            title={user.name}
            views={user.id * 105}
            isNew={user.id <= 2}
            category="Tech"
          />
        ))}

      </div>
    </div>
  );
}

export default App;