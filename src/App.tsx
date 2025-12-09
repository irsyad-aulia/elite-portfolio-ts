import { useTheme } from "./context/ThemeContext";

import Card from "./components/Card";
import SkillList from "./components/SkillList";

function App() { 
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div style={{ 
      padding: "20",
      minHeight: "100vh",
      backgroundColor: isDarkMode ? "#222" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>

      <div style={{ display: "flex", justifyContent: "flec-end", marginBottom: "20px"}}>
        <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
          fontWeight: "bold",
          backgroundColor: isDarkMode ? "#fff" : "#333",
          color: isDarkMode ? "#333" : "#fff",
          border: "none",

        }}
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1>Dashboard Elite</h1>
      

      <Card 
      title="Learn React" 
      views={100} 
      isNew={true} 
      category="Tech"
      />

      <SkillList />
        </div>
    </div>
  )
}

export default App;